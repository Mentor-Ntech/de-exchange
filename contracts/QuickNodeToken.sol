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
    
     constructor() {
      symbol = "DLTC";
      name = "DLTCoin";
      decimals = 18;
      _totalSupply = 1_000_000_000_000_000_000_000_000; 
      balances[0xC50458623520eE0e704Bc63040EF0bb388221D1F] = _totalSupply;
      emit Transfer(address(0), 0xC50458623520eE0e704Bc63040EF0bb388221D1F, _totalSupply);

    }
    
    
   function totalSupply()   public view returns(uint){
    return _totalSupply - balances[address(0)]; 
  }

  function balanceOf(address account) public view returns(uint balance){
    return balances[account];
  }


    function transfer(address recipient, uint amount) public returns(bool success) {
    balances[msg.sender] = balances[msg.sender] - amount;
    balances[recipient] = balances[recipient] + amount;
    emit Transfer(msg.sender, recipient, amount);
    return true;
  }

  function  approve(address spender, uint amount) public returns(bool success) {
    allowed[msg.sender][spender]  = amount;
    emit Approval(msg.sender, spender, amount);
    return true;
  }



 }