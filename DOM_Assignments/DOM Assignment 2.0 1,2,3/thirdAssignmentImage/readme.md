_Task 1 Solution_
Solution using **On click** on **Submit Button**

```javascript
let submitbtn = document.querySelector('.mainRight button')
submitbtn.addEventListener('click' , () => {
  document.querySelector('.enterName').value = document.querySelector('.userName').value
	document.querySelector('.enterMail').value = document.querySelector('.userEmail').value
  document.querySelector('.enterMessage').value = document.querySelector('.userMessage').value
});
```

_Task 1 Solution_
Solution using **key up Event Listener** on each input field of **User Input Board** shows values on the **User Output Board**

```javascript
let name = document.querySelector('.userName')

name.addEventListener('keyup',() => {
    document.querySelector('.enterName').value = name.value
});


let mail = document.querySelector('.userEmail')

mail.addEventListener('keyup',() => {
    document.querySelector('.enterMail').value = mail.value
});



let message = document.querySelector('.userMessage')

message.addEventListener('keyup',() => {
    document.querySelector('.enterMessage').value = message.value
}); 
```