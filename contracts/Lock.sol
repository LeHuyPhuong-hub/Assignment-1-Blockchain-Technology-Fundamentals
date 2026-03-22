// SPDX-License-Identifier: MIT
// Licensing annotation, does not affect functionality

pragma solidity ^0.8.20;
//Specifies the Solidity compiler version

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
//Import ERC20 and Ownable from OpenZeppelin to utilize existing libraries, ensuring compatibility

contract MyToken is ERC20, Ownable {
    //Contract inherits properties of the ERC20 Smart Contract and is owned by the current address

    constructor() ERC20("MyToken", "MTK") Ownable(msg.sender) {}
    //initialization Constructor, runs once every deployment
    //Name of token is MyToken, using MTK as a symbol
    //Set msg.sender(the deployer) to be the owner. The deployer will be me with the Rabby Wallet Address


    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
    //New token forging function that only allows the owner to call it. Other users can not call it
    
}