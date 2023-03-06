_Task 1 Solution_

```javascript
//To add cart image
let image = document.querySelector('.add-to-cart img') 
image.src = './images/icon-cart.svg'

//To change font color for title 
let heading = document.querySelector('.caption .title')
heading.style.color = '#dc143c' 
```

_Task 2 Solution_

```javascript
//To add cart image
let image = document.querySelector('.add-to-cart img') 
image.src = './images/icon-cart.svg'

//To chnage background color when mouse enters and leave
let button = document.querySelector('.add-to-cart') 
button.addEventListener('mouseenter',() => button.style.backgroundColor = '#dc143c') 
button.addEventListener('mouseleave',() => button.style.backgroundColor = '#204637') 


```
