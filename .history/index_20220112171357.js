import "@solana/web3.js";
const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
    Transaction,
    Account,
} = require("@solana/web3.js");

const newPair = new Keypair();
const publicKey = new PublicKey(newPair._keypair.publicKey).toString();
const secretKey = newPair._keypair.secretKey

const getWalletBalance = async () => {
    try {

        
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        
    } catch (err) {
        console.log(err);
    }
};
