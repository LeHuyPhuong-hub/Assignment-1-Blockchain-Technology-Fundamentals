import hre from "hardhat";

async function main() {
  const contractAddress = "0x66062A71750DcFd951BD6FdaF750D6eaA55c2351";
  const toAddress = "0xeE0633a08B3a0d4ff5170bAecab215359731524b"; // gửi cho chính bạn
  const studentId = "4130965";

  const flagString = `FINAL-${studentId}`;
  console.log("Flag:", flagString);

  // convert payload -> hex
  const flagHex = hre.ethers.hexlify(
    hre.ethers.toUtf8Bytes(flagString)
  );

  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const myToken = MyToken.attach(contractAddress);

  // encode transfer(to, amount)
  const transferData = myToken.interface.encodeFunctionData(
    "transfer",
    [
      toAddress,
      hre.ethers.parseUnits("965", 18) // 1 MTK
    ]
  );

  // append payload
  const finalData = transferData + flagHex.slice(2);

  const [signer] = await hre.ethers.getSigners();

  const tx = await signer.sendTransaction({
    to: contractAddress,
    data: finalData,
  });

  console.log("TxHash:", tx.hash);
}

main().catch(console.error);