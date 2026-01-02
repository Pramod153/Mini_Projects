function login(){
    let user= document.getElementById("uname").value;
    let password=document.getElementById("pass").value;

    if(user=='admin' && password=='12345')
    {
        alert('user lofim success')
    }
    else{
        alert('wrong password')
    }

}