const form = document.getElementById("user-form")
const errorElement = document.getElementById("error")
const name = document.getElementById("name")
const email = document.getElementById("email")
const emailFormat = /[!#$%^&*()+\-=\[\]{};':"\\|,<>\/?]+/;
const number = document.getElementById("number");
const dob = document.getElementById("dob")

form.addEventListener("submit",(e)=>{
    let messages = [];
    if(name.value.length > 15 ){   //validation - name should be less than 15 characters
        messages.push("Name must be smaller than 15 characters")
    }
    if((/\s/g.test(name.value))) {  //validation - name should not contain whitespaces in between
        messages.push("Name should not contain whitespace in between")
    }
    console.log("wefn")
    if(emailFormat.test(email.value)){    //validation - email id should not contain extra characters
        messages.push("Only '@' & '_' are allowed as special characters for Email Id")
    }

    if (/^\d{10}$/.test(number.value) == false) {    //validation - number should be of 10 digits only
        messages.push("Mobile number should be of 10 digits")
    } 
    if(dob.value.split("-")[0]>2000){            //validation - in dob, bourn year should be before 2001
        messages.push("Your born should be before 2001")
    }

    if(messages.length>0){
    e.preventDefault();
    errorElement.innerText = messages.join(',');
    
    window.setTimeout(function () { 
    document.getElementById("error").focus()
}, 0); 
    }

    if(messages.length==0){
        // console.log("submitted form successully")
        dataLayer.push({
            'event':'formFieldEvent',
            'eventAction':'submit',
            'eventLabel':'form submit success'
        })
    }
})

const formElements = document.querySelectorAll("input[required]")

for(var i = 0;i<formElements.length-1;i++){
    
    formElements[i].addEventListener("focus",function(e){
        var htmlElement = e.target;
        var fieldName = htmlElement.getAttribute('fieldname')
        dataLayer.push({
            'event':'formFieldEvent',
            'eventAction':'form filling',
            'eventLabel':fieldName
        })
    })

}

const genderElement = document.querySelectorAll("input[type=radio]")

for(var i=0;i<genderElement.length;i++){
    genderElement[i].addEventListener("click",function(e){
        console.log(e.target)
        dataLayer.push({
            'event':'formFieldEvent',
            'fieldName':'Gender'    
        })
    })
}