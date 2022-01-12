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
        const myWallet = await Keypair.fromSecretKey(secretKey);

        const walletBalance = await connection.getBalance(
            new PublicKey(myWallet.publicKey)
        );
        console.log(`Wallet balance: ${walletBalance}`);
        console.log(`   Wallet balance: ${parseInt(walletBalance)/LAMPORTS_PER_SOL}SOL`);


    } catch (err) {
        console.log(err);
    }
};
