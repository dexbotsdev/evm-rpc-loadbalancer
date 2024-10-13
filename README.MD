# RPC Load Balancer

A simple RPC load balancer built with Express and TypeScript that distributes requests across multiple endpoints and retries failed requests.

## Installation
```bash
echo "PORT=8545" > .env
yarn install
```
## Usage

```bash
yarn dev
```

## Example request
```bash
curl -X POST http://localhost:3000/CHAIN_NAME \
     -H "Content-Type: application/json" \
     -d '{"method":"eth_blockNumber","params":[],"id":1,"jsonrpc":"2.0"}'
```