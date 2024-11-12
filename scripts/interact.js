const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const ethers = require('ethers');

const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

// provider - Alchemy
const alchemyProvider = new ethers.JsonRpcProvider(API_URL);

// signer - você
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Instância do contrato
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message); 

    console.log("Updating the message...");
    const tx = await helloWorldContract.update("this is the new message");
    await tx.wait();

    const newMessage = await helloWorldContract.message();
    console.log("The new message is: " + newMessage); 
}

main();