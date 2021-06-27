var userNameDB="arnold@gmail.com";
var passWordDB="corey15";

function login(){
      let un=document.getElementById("userName").value;
    let ps=document.getElementById("password").value;

    if(userNameDB===un && ps===passWordDB){
        document.write('<br> Welcome');
    }else{
        document.write('<br> incorrect login');
    }
    console.log(un,ps);

}
  




