function getBirthDate() {
    var text = document.getElementById("p_1");
    if(getTheYear()>18){
        text.style.color ="blue";
        text.innerHTML = "Welcome";
        text.onmouseover =  ()=>{
            text.style.color = "green"
        } 
    }
    else{
        text.style.color ="red";
        text.innerHTML = "no entry";
        var img = document.createElement("img");
        img.src =  "https://c.tenor.com/hr9wiTcOYr4AAAAM/lou-lignon.gif";
        document.body.appendChild(img)
    }    
function getTheYear() {
    var age = document.getElementById("my_date").value.substr(0,4);
    console.log(age);
    var year = new Date().getFullYear();
    var reasult = year - age;
    console.log(reasult);
    return reasult;
    }
}

var nameArray = [];
function getFirstName(){
    var firsname = document.getElementById("fname");
        if(nameArray.length<4){
            nameArray.push(firsname.value);
        }
        console.log(nameArray);
    }    
function createList() {
    var lastName = document.getElementById("lname");
    var fullName = document.getElementById("my_list")
    for(var i = 0;i < nameArray.length; i++){
        fullName.innerHTML += "<li>"+ nameArray[i] +" "+ lastName.value + "</li>";
    }
}

function paintFirstLetter(){
    
    for(var i = 0; i < nameArray.length; i++){
        
    }
}
paintFirstLetter();

function someFunc(){
    
}
