// SPDX-License-Identifier:MIT

pragma solidity ^0.8.17;

// ERC20 Token Standard #20 interface
interface ERC20Interface {

    function totalSupply () external view returns(uint);
    function balanceOf(address account) external view returns(uint balance);
    function allowance(address owner, address spender) external view returns(uint remaining);
    function transfer(address recipient, uint amount) external returns(bool success);
    function approve(address spender, uint amount) external returns(bool success);
    function transferFrom(address sender, address recipient, uint amount) external returns(bool success);

    event Transfer(address indexed from, address indexed to, uint value);
    event Approval(address indexed owner, address indexed spender, uint value);
}

// Actual token contact
  abstract contract QuickNodeToken  is ERC20Interface {
    string public symbol;
    string public name;
    uint8 public decimals;
    uint public _totalSupply;

  mapping(address => uint) balances;
  mapping(address => mapping(address => uint)) allowed;
 }