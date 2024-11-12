// Script para implantar o contrato
async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
     
    const hello_world = await HelloWorld.deploy("Hello World!");
    await hello_world.waitForDeployment();

    console.log("Contract deployed to address:", hello_world.target);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });