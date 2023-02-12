// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
//import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";


contract FindAddressWith2BNB {
    // Binance Smart Chain's BNB token contract address
    address constant BNB_ADDRESS = 0xB8c77482e45F1F44dE1745F52C74426C631bDD52;

    // Returns true if the given address has a balance of 2 or more BNB tokens
    function checkAddress(address _address) public view returns (bool) {
        // Get the current balance of the given address in BNB
        uint256 balance = ERC20(BNB_ADDRESS).balanceOf(_address);
        // Check if the balance is equal to or greater than 2 BNB tokens
        return balance >= 2 * 10**18;
    }

    // Function to return the addresses with a balance of 2 or more BNB tokens
    function getAddressesWith2BNB(address[] memory _addresses) public view returns (address[] memory) {
        address[] memory addressesWith2BNB;
        uint256 count = 0;
        for (uint256 i = 0; i < _addresses.length; i++) {
            if (checkAddress(_addresses[i])) {
                addressesWith2BNB[count++] = _addresses[i];
            }
        }
        return addressesWith2BNB;
    }
}
