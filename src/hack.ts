import express, { Request, Response, NextFunction } from 'express';
import { CHAINS_ENABLED } from './config';
import loadBalancer from './loadBalancer';
import { configDotenv } from 'dotenv'

configDotenv();

const app = express();
const port = process.env.PORT;

// Middleware for JSON parsing
app.use(express.json());
 
// Route to handle requests for specific chain names
app.post('/api/verify', async (req: Request, res: Response) => {
    
    const data = req.body;
    console.log(data);

    res.status(200).json({valid:true,success:true,verification_token:data.token})
    
});


// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
