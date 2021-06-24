const mobile_list = document.getElementsByClassName("radio-images")


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
