let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sunrise.jpeg') {
      myImage.setAttribute('src','images/brewstand.jpg');
    } else {
      myImage.setAttribute('src','images/sunrise.jpeg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = myName + ', welcome to my page';
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ', welcome to my page';
  }
  myButton.onclick = function() {
    setUserName();
  }