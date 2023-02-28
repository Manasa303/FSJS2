_Task 1 Solution_


```javascript
let list = document.createElement("li");
list.innerText = "Hire Me"; 
document.querySelector("nav ul").appendChild(list); 
```

_Task 2 Solution_

```javascript
let inputText = document.querySelector(".search-field input")
inputText.placeholder = "Search My Project"; 
```

_Task 3 Solution_

```javascript
let spantext = document.querySelectorAll(".hero-left-section p span")
spantext[1].innerText = "an Employee"
spantext[2].innerText = "iNeuron Intelligence Private Limited"
```

_Task 4 Solution_

```javascript
let image = document.querySelector('.hero-right-section img') 
image.src = './image.jpg'
```

_Task 5 Solution_

```javascript
let btn = document.createElement('button')
btn.innerText = "Support Me";
let btns = document.querySelector('.hero-right-section-btns').appendChild(btn);
```

