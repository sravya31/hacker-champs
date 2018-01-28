Acl=require('acl');
var permissions={
	roles:[{name:"guest"},{name:"doctor"},{name:"admin"}],
	resources:[{name:"medical_history"}],
	rules:[{access:"allow",role:"guest",privileges:[null],resources:["medical_history"]},
		{access:"allow", role:"doctor",privileges:["view"],resources:["medical_history"]},
	{access:"allow",role:"admin",privileges:["create","edit","delete"],resources:["medical_history"]}]
};
var acl=new Acl(permissions);