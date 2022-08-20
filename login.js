function xyz()
{
    var a =document.getElementById('dash').value;
    var b =document.getElementById("place").value;

    // let btnOpen = document.querySelector('button');
    // let input = document.querySelector('input');

    // btnOpen.addEventListener('click',() =>{
        // window.open("dashboard.html");
    // });

    if(a=="Shubhangi" && b=="1234")
    {
        // window.location.href="dashboard.html";
        // document.getElementById('dash').innerText="Welcome to html";
        // document.getElementById('dash').style.display="block";
        alert("Welcome to dashboard");
        window.open("dashboard.html","_self");
        
    }
    else
    {
        // document.getElementById('place').innerText="Invalid Username and Password";
        // document.getElementById('place').style.display="block";
        alert("Invalid Username and Password");
    }
}
//     function xyz(){
//         input.onchange=input.onkeyup= function() {
//             // link.pathname= "/"+input.value;
//             // link.firstChild.data= link.href;
//         var userInput = document.getElementById('userInput').value;
//         var lnk = document.getElementById('lnk');
//         lnk.href = "dashboard.html" + userInput;
//         lnk.innerHTML = lnk.href;
//         var username = document.forms["myForm"]["username"].value;
//             var password = document.forms["myForm"]["password"].value;
//             // window.location = 'dashboard.js'
//             if((!isEmpty(username, "Shubhangi")) && (!isEmpty(password, "shubhu@123"))){
        
//                 return true;
//             }else{
//                 return false;
//             }
            
//     }
// }
//     var link= document.getElementById('dashboard.html');
// var input= document.getElementById('username');
// input.onchange=input.onkeyup= function() {
//     link.pathname= "/"+input.value;
//     link.firstChild.data= link.href;
// };
    
    









// function validateForm(){

    
// let result = text.link("dashboard.html");
// result = "<a href='dashboard.html'>" + text + "</a>";
// document.getElementById("login.html").innerHTML = result;

//     var username = document.forms["myForm"]["username"].value;
//     var password = document.forms["myForm"]["password"].value;
//     // window.location = 'dashboard.js'
//     if((!isEmpty(username, "Shubhangi")) && (!isEmpty(password, "shubhu@123"))){

//         return true;
//     }else{
//         return false;
//     }
    
// }


// function isEmpty(elemValue, field){
//     if((elemValue == "") || (elemValue == null)){
//         alert("you can not have "+field+" field empty");
//         return true;
//     }else{
//         return false;
//     }
// }