let colorArr = ["red","blue","orange","green","pink","black","purple","yellow","violet"];
let ColorBox = document.getElementById("colorBox");
let colorLen = colorArr.length;

function changeColor(){
   let changeClr = Math.ceil(Math.random() * colorLen);
   ColorBox.style.backgroundColor = colorArr[changeClr];
}

