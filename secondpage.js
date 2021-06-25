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

const imageElement = document.querySelectorAll(".radio-images")
for(var i=0;i<imageElement.length;i++){
    imageElement[i].addEventListener("click",function(e){
        
        const timeDiff = (Date.now()-performance.timing.domLoading)/1000
        
        if(e.target.classList.contains("radio-images")){
            const itemName = e.target.getAttribute("customName")
            dataLayer.push({
                'event':'itemSelected',
                'itemName':itemName,
                'timeToClick':timeDiff
            })
            
        }
    })
}