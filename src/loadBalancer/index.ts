import { Request, Response } from 'express';
import axios from 'axios';
import { config, TEnabledChain } from '../config';

/**
 * Load balancer function to forward RPC requests to multiple URLs.
 * @param chainName - The name of the enabled chain to load balance requests.
 * @param req - The Express request object.
 * @param res - The Express response object.
 */
const loadBalancer = async (chainName: TEnabledChain, req: Request, res: Response) => {
    const urlList = config[chainName];

    const responses: { url: string; data: any; status: number }[] = [];

    for (let index = 0; index < urlList.length; index++) {
        const url = urlList[index];
        try {
            const method = req.method.toLowerCase() as 'get' | 'post' | 'put' | 'delete' | 'patch';

            const response = await axios({
                method,
                url: `${url}`,
                data: req.body
            });
            console.log(chainName, url, "response sent");
            // Forward the first successful response
            return res.status(response.status).json(response.data);
        } catch (error) {
            console.log(chainName, url, 'response NOT sent');
        }
    }

    // If all requests fail, return an error response with details
    console.error('All URL requests failed:', responses);
    res.status(500).json({
        error: 'All attempts to reach the service failed.',
        details: responses,
    });
};

export default loadBalancer;
