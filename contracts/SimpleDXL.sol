// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./QuickNodeToken.sol";

contract SimpleDEX {
    address public tokenAddress;
    address public usdtAddress;
    address public usdcAddress;

    QuickNodeToken public quickNodeTokenInstance;

    constructor(
        address _tokenAddress,
        address _usdtAddress,
        address _usdcAddress,
        address _quickNodeTokenAddress
    ) {
        tokenAddress = _tokenAddress;
        usdtAddress = _usdtAddress;
        usdcAddress = _usdcAddress;

        quickNodeTokenInstance = QuickNodeToken(_quickNodeTokenAddress);
    }

    function tradeUSDT(uint256 usdtAmount) external {
        require(usdtAmount > 0, "invalid usdt amount");

        IERC20(usdtAddress).transferFrom(msg.sender, address(this), usdtAmount);
        IERC20(tokenAddress).transfer(msg.sender, usdtAmount);

        // Ensure that the sender has approved this contract to spend their USDT tokens
        IERC20 usdtToken = IERC20(usdtAddress);
        require(
            usdtToken.allowance(msg.sender, address(this)) >= usdtAmount,
            "USDT allowance not set"
        );

        // Transfer the specified amount of USDT tokens from the sender to this contract
        require(
            usdtToken.transferFrom(msg.sender, address(this), usdtAmount),
            "USDT transfer failed"
        );

        // Perform validation: ensure that the contract has enough tokens to perform the swap
        uint256 tokenAmount = usdtAmount;

        IERC20 token = IERC20(tokenAddress);
        require(
            token.balanceOf(address(this)) >= tokenAmount,
            "Insufficient token balance in the contract"
        );

        IERC20(usdtAddress).transferFrom(
            msg.sender,
            address(this),
            tokenAmount
        );
        quickNodeTokenInstance.transfer(msg.sender, tokenAmount);
    }

    function tradeUSDC(uint256 usdcAmount) external {
        require(usdcAmount > 0, "invalid usdc amount");

        IERC20(usdcAddress).transferFrom(msg.sender, address(this), usdcAmount);
        IERC20(tokenAddress).transfer(msg.sender, usdcAmount);

        // Ensure that the sender has approved this contract to spend their USDC tokens
        IERC20 usdcToken = IERC20(usdcAddress);
        require(
            usdcToken.allowance(msg.sender, address(this)) >= usdcAmount,
            "USDC allowance not set"
        );

        // Transfer the specified amount of USDC tokens from the sender to this contract
        require(
            usdcToken.transferFrom(msg.sender, address(this), usdcAmount),
            "USDC transfer failed"
        );

        // Perform validation: ensure that the contract has enough tokens to perform the swap
        uint256 tokenAmount = usdcAmount;

        IERC20 token = IERC20(tokenAddress);
        require(
            token.balanceOf(address(this)) >= tokenAmount,
            "Insufficient token balance in the contract"
        );

        IERC20(usdcAddress).transferFrom(
            msg.sender,
            address(this),
            tokenAmount
        );
        quickNodeTokenInstance.transfer(msg.sender, tokenAmount);
    }

    function withdrawTokens(address token, uint256 amount) external {
        require(
            msg.sender == tokenAddress,
            "Only the token contract can withdraw tokens"
        );
        IERC20(token).transfer(msg.sender, amount);
    }
}
