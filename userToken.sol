pragma solidity ^0.4.19;
import "browser/Token.sol";
import "browser/ERC20.sol";
import "browser/ERC223.sol";
import "browser/ERC223ReceivingContract.sol";
contract userToken is Token(10, 1000), ERC20, ERC223{
    uint8 id;
    address _owner;
    uint8 amount;
    uint8 counter;
     bool isdoctor;
     bytes32 _username;
     bytes32 first_name;
     bytes32 last_name;
     bytes32 password;
     bytes32 email;
     bytes32 dob;
     bytes32 practioner_id;
     string fileHash;
     bytes32 addr;

    
    function userToken(){
        _owner = msg.sender;
    }
    
     
    
    event IDD(bytes32 _username,bytes32 first_name,bytes32 last_name,bytes32 password,bytes32 practioner_id,bytes32 email,bytes32 dob,bytes32 addr);
    event hash(string filehash);
  function file(string filehash){
      fileHash=filehash;
      hash(filehash);
  }
    function setIDD(bytes32 username,bytes32 _first_name,bytes32 _last_name,bytes32 _password,bytes32 practioner_id,bytes32 _email,bytes32 _dob,bytes32 addr_) returns (uint id) { 
        id= counter++; 
        _username=username;
        first_name=_first_name;
        practioner_id=practioner_id;
        last_name=_last_name;
        password=_password;
        email=_email;
        dob=_dob;
        addr=addr_;
        IDD(username,_first_name,_last_name,_password,practioner_id,_email,_dob,addr_);
        return id;
    }
    function totalSupply() public constant returns (uint) {
        return _totalSupply;
    }
    
    function balanceOf(address _addr) public constant returns (uint) {
        return _balanceOf[_addr];
    }


	function setdoctor(bool isdoctor){
        isdoctor=true;
    }

    function transfer(address _to, uint _value) public returns (bool) {
        if (_value > 0 && 
            _value <= _balanceOf[_owner] &&
            !isContract(_to) && msg.sender!=_owner) {
            _balanceOf[_owner] -= _value;
            _balanceOf[_to] += _value;
            Transfer(_owner, _to, _value);
            return true;
        }
        return false;
    }

    function transfer(address _to, uint _value, bytes _data) public returns (bool) {
        if (_value > 0 && 
            _value <= _balanceOf[_owner] &&
            isContract(_to) && msg.sender!=_owner) {
            _balanceOf[_owner] -= _value;
            _balanceOf[_to] += _value;
            ERC223ReceivingContract _contract = ERC223ReceivingContract(_to);
                _contract.tokenFallback(msg.sender, _value, _data);
            Transfer(_owner, _to, _value, _data);
            return true;
        }
        return false;
    }

    function isContract(address _addr) returns (bool) {
        uint codeSize;
        assembly {
            codeSize := extcodesize(_addr)
        }
        return codeSize > 0;
    }

    function transferFrom(address _from, address _to, uint _value) public returns (bool) {
        if (_allowances[_from][msg.sender] > 0 &&
            _value > 0 &&
            _allowances[_from][msg.sender] >= _value &&
            _balanceOf[_from] >= _value) {
            _balanceOf[_from] -= _value;
            _balanceOf[_to] += _value;
            _allowances[_from][msg.sender] -= _value;
            Transfer(_from, _to, _value);
            return true;
        }
        return false;
    }
    
    function approve(address _spender, uint _value) public returns (bool) {
        _allowances[msg.sender][_spender] = _value;
        Approval(msg.sender, _spender, _value);
        return true;
    }
    
    function allowance(address _owner, address _spender) public constant returns (uint) {
        return _allowances[_owner][_spender];
    }
    
    
    
}

