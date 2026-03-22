async function main() {
  const MyToken = await ethers.getContractFactory("MyToken");
  //Assign MyToken reference name to the myToken object for further deployment
  //Reads compiled bytecode and ABI generated from the Solidity source file


  console.log("Deploying MyToken...");
  //Audit message to track deployment progress in console

  const myToken = await MyToken.deploy();
  //Creates a new instance of the contract to the Sepolia testnet
  //Sends a transaction that creates the contract and run its constructor 

  await myToken.waitForDeployment();
  //Waits for transaction during deployment to be mined and confirmed on the testnet network
  //Ensures the contact address is available through waiting before proceeding

  console.log("MyToken deployed to:", await myToken.getAddress());
  //Logs the deployed contract’s address 
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//Execute the main function and do error handling. If error occurs then exit the process with a failure code