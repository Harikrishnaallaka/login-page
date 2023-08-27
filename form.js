  var registeruser = () =>{
    var userdata ={};
    userdata.accountid=document.querySelector("#accountid").value;
    userdata.acntpwd=document.querySelector("#acntpwd").value;
    console.log(userdata);    
  }
 var  changetypeofbox  = () =>{

    var element=document.querySelector("#acntpwd");


    var currenttype = element.getAttribute('type');
    if(currenttype == 'text'){

        element.setAttribute("type", "password");
        document.querySelector("#eyeopen").style.display ="none"
        document.querySelector("#eyeclose").style.display ="inline"

    }
    else{

        element.setAttribute("type" , "text");
        document.querySelector("#eyeopen").style.display ="inline"
        document.querySelector("#eyeclose").style.display ="none"

    }
   
   
 }