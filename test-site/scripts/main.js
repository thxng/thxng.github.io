//var myHeading = document.querySelector('h1'); 
/* goi ham querySelector de lay tham chieu den h1 va luu thanh myHeading*/
//myHeading.textContent = 'Hello world!'; 
/*gán giá trị của thuộc tính textContent của biến myHeading thành "Hello world!" */
//document.querySelector('button').onclick = function() {
//    alert('Ouch! Stop poking me!');
// }
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/windowsxp.jpg') {
      myImage.setAttribute ('src','images/windowsxp.jpg');
    } else {
      myImage.setAttribute ('src','images/windowsxp.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}