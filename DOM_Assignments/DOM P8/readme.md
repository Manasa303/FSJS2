_Task 1 Solution_

```javascript
let box = document.querySelector('.new')
box.style.overflow = "hidden" 
box.style.maxHeight = "460" 
box.style.overflowY = "scroll" 
```

_Task 2 Solution_

```javascript
//Hiding the body background image
document.body.style.backgroundImage = "none";
```

_Task 3 Solution_

```javascript
let menubtn = document.querySelector('.navbar-toggler')
menubtn.addEventListener('click',() => {
  let menu = document.querySelector('#navbarTogglerDemo01')
  if(menu.style.display == "block"){
    menu.style.display = "none"
  } else { 
    menu.style.display = "block"
  }
})
```
