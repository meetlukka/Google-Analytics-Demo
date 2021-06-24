const mobile_list = document.getElementsByClassName("radio-images")
const submitBtn = document.getElementsByClassName("btn-primary")[0]

function clearAllChecked(){
    for(var i=0;i<mobile_list.length;i++){
        mobile_list[i].classList.remove("active")
    }
}
for(var i = 0;i<mobile_list.length;i++){
    
mobile_list[i].addEventListener("click",function(e){
    clearAllChecked();

    console.log(e.target)
    e.target.classList.add('active');

})
}

submitBtn.addEventListener("click",function(){

    var selectedOption = document.getElementsByClassName("active")[0]
    if(selectedOption.src.split("/").reverse()[0].split(".")[0]){
        var res = selectedOption.src.split("/").reverse()[0].split(".")[0]
        window.localStorage.setItem("item",res);
    }

})
