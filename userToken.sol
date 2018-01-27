pragma solidity ^0.4.19;
import "browser/token.sol";
contract userToken  {
     uint id;
    address owner;
    uint amount;
    uint counter;
    
    modifier restricted() {
        if(msg.sender==owner)_;
    }
    function userToken() {
        owner= msg.sender;
    }
    
    struct concept{
        string num;
        string street;
        string city;
        string country;
        string postal_code;
    }
    struct user{
        
         bool isdoctor;
         string username;
         string first_name;
         string last_name;
         string password;
         string email;
         medical_record medical_info;
         string dob;
         string practioner_id;
         concept addr;
    }
    user u;
    struct medical_record{
        string id;//unique  id of the user 128 bit
        string fileHash;//hash last updated file
        uint vers;  //increment every time file is updated
        string pointer;//points towards the place where file is stored outside of the block chain

    }
    mapping (uint => user) users;
    
    function setdoctor(bool isdoctor){
        isdoctor=true;
    }
    function set(uint x){
        counter=x;
    }
    function get() returns (uint){
        return counter;
    }
    
    event ID(string username,string first_name,string last_name,string password,string email,medical_record medical_info,string dob,concept addr);
    event IDD(string username,string first_name,string last_name,string password,string practioner_id,string email,medical_record medical_info,string dob,concept addr);
    function setID(string username,string first_name,string last_name,string password,string email,medical_record medical_info,string dob,concept addr) returns (uint id) { 
        id= counter++; 
        set(id+1);
        u=users[id];
        u.username=username;
        u.first_name=first_name;
        u.last_name=last_name;
        u.password=password;
        u.email=email;
        ID(username,first_name,last_name,password,email,medical_info,dob,addr);
        return id;
    }
    
    function setIDD(string username,string first_name,string last_name,string password,string practioner_id,string email,medical_record medical_info,string dob,concept addr) returns (uint id) { 
        id= counter++; 
        set(id+1);
         u=users[id];
        u.username=username;
        u.first_name=first_name;
        u.practioner_id=practioner_id;
        u.last_name=last_name;
        u.password=password;
        u.email=email;
        IDD(username,first_name,last_name,password,practioner_id,email,medical_info,dob,addr);
        return id;
    }
    function pass()
    {
        token(owner);
    }
    
}