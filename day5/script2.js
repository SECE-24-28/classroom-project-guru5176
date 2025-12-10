// for storing form inputs
const myForm = document.getElementById('myForm');
const uname = document.getElementById('inp1');
const email = document.getElementById('inp2');
const age = document.getElementById('inp3');

//for errors
const nameErr = document.getElementById('nameErr');
const emailErr = document.getElementById('emailErr');
const ageErr = document.getElementById('ageErr');

// Event Listerners

myDiv.innerHTML += `<div> ${uname.value} </div>`

myForm.addEventListener('submit', function(e){
    e.preventDefault(); // prevent the form from submitting
    if(uname.value.length<3){
        nameErr.style.color = "red";
        nameErr.innerText = "Name should be greater than 3 letters."
        return; 
    }
    // if(emailErr.value.length<3){
    //     emailErr.style.color = "red";
    //     emailErr.innerText = "Email should be greater than 3 letters."
    //     return; 
    // }
    if(ageErr.value<8){
        ageErr.style.color = "red";
        ageErr.innerText = "Age should be greater than 3 17."
        return; 
    }
    nameErr.innerText = "";
    emailErr.innerText = "";
    ageErr.innerText = "";
    console.log(`Name: ${uname.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Age: ${age.value}`);
    myForm.reset();

})