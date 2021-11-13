let Name = prompt("Adınızı Giriniz");
let myName= document.querySelector("#myName")
 myName.innerHTML = `${Name.toUpperCase()}!`


function time(){
    var date=new Date().toLocaleString();
    document.querySelector("#myClock").innerHTML=date
}   
setInterval(time,1000);
        
    

