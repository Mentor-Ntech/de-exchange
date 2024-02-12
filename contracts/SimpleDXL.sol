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
        
        require(usdtAmount > 0, "invalid usdt amount");

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
