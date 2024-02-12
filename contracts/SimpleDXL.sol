// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SimpleDEX {
    address public tokenAddress;
    address public usdtAddress;
    address public usdcAddress;

    constructor(address _tokenAddress, address _usdtAddress, address _usdcAddress) {
        tokenAddress = _tokenAddress;
        usdtAddress = _usdtAddress;
        usdcAddress = _usdcAddress;
    }

    function tradeUSDT(uint256 usdtAmount) external {
        IERC20(usdtAddress).transferFrom(msg.sender, address(this), usdtAmount);
        IERC20(tokenAddress).transfer(msg.sender, usdtAmount);

        // Perform validation: ensure that the contract has enough tokens to perform the swap
        uint256 tokenAmount = usdtAmount;

        IERC20 token = IERC20(tokenAddress);
        require(
            token.balanceOf(address(this)) >= tokenAmount,
            "Insufficient token balance in the contract"
        );

        IERC20(usdtAddress).transferFrom(msg.sender, address(this), tokenAmount);
        quickNodeTokenInstance.transfer(msg.sender, tokenAmount);
    }

    function tradeUSDC(uint256 amount) external {
        IERC20(usdcAddress).transferFrom(msg.sender, address(this), amount);
        IERC20(tokenAddress).transfer(msg.sender, amount);
    }

    function withdrawTokens(address token, uint256 amount) external {
        require(msg.sender == tokenAddress, "Only the token contract can withdraw tokens");
        IERC20(token).transfer(msg.sender, amount);
    }
}
