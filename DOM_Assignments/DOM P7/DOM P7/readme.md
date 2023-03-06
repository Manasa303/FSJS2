_Task 1 Solution_

```javascript
let items = document.querySelectorAll('.main__languages a') 
let arr = Array.from(items) 
arr.forEach(item => {
  if(item.innerText.includes('2.0')){
    item.style.display = "none"
  }
})
```



_Task 2 Solution_

```javascript
let textfield = document.querySelector('.main__form-input')
textfield.disabled = false 
let submitbtn = document.querySelector('.main__form-btn')
let items = document.querySelectorAll('.main__languages a') 
let arr = Array.from(items) 

//Condition to enable Submit only if input text field is not empty
if(textfield.value != ""){
   submitbtn.disabled = false
}

//On click on submit button the text entered in the input text box will be added to the list of items on the left side.
submitbtn.addEventListener('click',() => {
    textfield.addEventListener('keyup',() => {
    arr.push(textfield.value)
    })
    let target = document.querySelector('.main__languages') 
    let additem = document.createElement('a') 
    additem.innerText = textfield.value 
    additem.href = "#" 
    target.appendChild(additem)
})


```