// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.19;
pragma abicoder v2;

import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);

    function transfer(address to, uint256 value) external returns (bool);

    function approve(address spender, uint256 value) external returns (bool);
}

contract SwapContract {
    address public constant routerAddress =
        0xE592427A0AEce92De3Edee1F18E0157C05861564;

    ISwapRouter public immutable swapRouter = ISwapRouter(routerAddress);

    address public constant DLT = 0xBEe6FFc1E8627F51CcDF0b4399a1e1abc5165f15;
    address public constant USDT = 0xdAC17F958D2ee523a2206206994597C13D831ec7;
    address public constant USDC = 0xa1a52E35BF516Edbd166d9A1b0097cbf11483a5D;

    IERC20 public DLTToken = IERC20(DLT);

    // For this example, we will set the pool fee to 0.3%.
    uint24 public constant poolFee = 3000;

    function swapExactInputMultihop(
        uint256 amountIn
    ) external returns (uint256 amountOut) {
        DLTToken.transfer(address(this), amountIn);

        DLTToken.approve(address(swapRouter), amountIn);

        ISwapRouter.ExactInputParams memory params = ISwapRouter
            .ExactInputParams({
                path: abi.encodePacked(DLT, poolFee, USDC, poolFee, USDC),
                recipient: msg.sender,
                deadline: block.timestamp,
                amountIn: amountIn,
                amountOutMinimum: 0
            });

        // Executes the swap.
        amountOut = swapRouter.exactInput(params);
    }

    function swapExactOutputMultihop(
        uint256 amountOut,
        uint256 amountInMaximum
    ) external returns (uint256 amountIn) {
        DLTToken.transfer(address(this), amountInMaximum);
        DLTToken.approve(address(swapRouter), amountInMaximum);

        ISwapRouter.ExactOutputParams memory params = ISwapRouter
            .ExactOutputParams({
                path: abi.encodePacked(USDT, poolFee, USDC, poolFee, DLT),
                recipient: msg.sender,
                deadline: block.timestamp,
                amountOut: amountOut,
                amountInMaximum: amountInMaximum
            });

        amountIn = swapRouter.exactOutput(params);

        if (amountIn < amountInMaximum) {
            DLTToken.approve(address(swapRouter), 0);
            DLTToken.transfer(msg.sender, amountInMaximum - amountIn);
        }
    }
}
