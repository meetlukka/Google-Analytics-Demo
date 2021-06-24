const imageElement = document.getElementsByClassName("item-image")[0]

const imageValue = window.localStorage.getItem("item");

imageElement.src = "/"+imageValue+".jpeg"