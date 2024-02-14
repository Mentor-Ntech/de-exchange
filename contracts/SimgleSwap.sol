// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.19;
pragma abicoder v2;

import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);

    function transfer(address to, uint256 value) external returns (bool);

    function approve(address spender, uint256 value) external returns (bool);
}

contract SingleSwap {
    address public constant routerAddress =
        0xE592427A0AEce92De3Edee1F18E0157C05861564;

    ISwapRouter public immutable swapRouter = ISwapRouter(routerAddress);

    // This example swaps DLT/USDT for single path swaps and DLT/USDC/USDT for multi path swaps.

    address public constant DLT = 0xBEe6FFc1E8627F51CcDF0b4399a1e1abc5165f15;
    address public constant USDT = 0xdAC17F958D2ee523a2206206994597C13D831ec7;
    address public constant USDC = 0xa1a52E35BF516Edbd166d9A1b0097cbf11483a5D;

    IERC20 public DLTToken = IERC20(DLT);
    // For this example, we will set the pool fee to 0.3%.
    uint24 public constant poolFee = 3000;

    function swapExactInputSingle(
        uint256 amountIn,
        address tokenOut
    ) external returns (uint256 amountOut) {
        require(tokenOut == USDC || tokenOut == USDT, "Invalid tokenOut");
        DLTToken.approve(address(swapRouter), amountIn);

        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter
            .ExactInputSingleParams({
                tokenIn: DLT,
                fee: poolFee,
                tokenOut: tokenOut,
                recipient: address(this),
                deadline: block.timestamp,
                amountIn: amountIn,
                amountOutMinimum: 0,
                sqrtPriceLimitX96: 0
            });

        amountOut = swapRouter.exactInputSingle(params);
    }

    function swapExactOutputSingle(
        uint256 amountOut,
        uint256 amountInMaximum,
        address tokenOut
    ) external returns (uint256 amountIn) {
        require(tokenOut == USDC || tokenOut == USDT, "Invalid tokenOut");

        DLTToken.approve(address(swapRouter), amountInMaximum);

        ISwapRouter.ExactOutputSingleParams memory params = ISwapRouter
            .ExactOutputSingleParams({
                tokenIn: DLT,
                tokenOut: tokenOut,
                fee: poolFee,
                recipient: address(this),
                deadline: block.timestamp,
                amountOut: amountOut,
                amountInMaximum: amountInMaximum,
                sqrtPriceLimitX96: 0
            });

        amountIn = swapRouter.exactOutputSingle(params);

        if (amountIn < amountInMaximum) {
            DLTToken.approve(address(swapRouter), 0);
            DLTToken.transfer(address(this), amountInMaximum - amountIn);
        }
    }
}
