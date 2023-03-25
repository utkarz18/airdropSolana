import express, { Express, Request, Response } from 'express';
import * as web3 from "@solana/web3.js"

const app: Express = express();
const port = process.env.PORT;

app.get('/airdrop-sol/:walletAddress', async (req: Request, res: Response) => {
    await airdropSol(req.params.walletAddress);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${3000}`);
});


const airdropSol = async (address: string) => {
    const walletAddress = new web3.PublicKey(address);
    const connection = new web3.Connection("https://api.devnet.solana.com");
    const transactionHash = await connection.requestAirdrop(walletAddress, web3.LAMPORTS_PER_SOL);

    console.log(`transactionHash: ${transactionHash}`);
}