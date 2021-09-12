const dateOfBirth = document.querySelector("#date");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check");
const output = document.querySelector(".output");
const reset = document.querySelector("#reset");


reset.addEventListener("click" , function resetOutput(){
    output.style.display = "none";
})
checkBtn.addEventListener("click" , function checkData(event){
    event.preventDefault();
    // console.log(dateOfBirth.value);
    // console.log(luckyNumber.value);
    const num = convertDOB(dateOfBirth.value);
    checkBdayLucky(num , luckyNumber.value);
    
})

function convertDOB(dob){
    // console.log(dob);
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let index=0;index<dob.length;index++){
        sum=sum+Number(dob.charAt(index));
    }
    return sum;
    
}
function checkBdayLucky(num , luckyNumber){
    output.style.display = "block";
    if(num%Number(luckyNumber)==0){
        output.innerText = "Your Birthday is lucky";  
    }
    else{
        output.innerText="Your Birthday is not lucky";
    }

}


