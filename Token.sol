pragma solidity ^0.4.0;

contract Token {
    

    uint internal _totalSupply=1000;
    uint internal _value=10;
    mapping (address => uint) internal _balanceOf;
    mapping (address => mapping (address => uint)) internal _allowances;
    
    function Token(uint value,uint totalSupply) public {
        _value=value;
        _totalSupply = totalSupply;
    }
    

    function totalSupply() public constant returns (uint) {
        return _totalSupply;
    }
    
    function balanceOf(address _addr) public constant returns (uint);
    function transfer(address _to, uint _value) public returns (bool);
    event Transfer(address indexed _from, address indexed _to, uint _value);
}