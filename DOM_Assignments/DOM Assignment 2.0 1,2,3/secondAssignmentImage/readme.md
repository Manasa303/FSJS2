

_Task 1 Solution_

```javascript
let div = document.querySelectorAll('div') 
let head=document.querySelectorAll('.accordian h3')

let para=document.querySelectorAll('.accordian p')
head.forEach((div) => (div.style.backgroundColor = "#dadaf8"));
para.forEach((div) => (div.style.backgroundColor = "#edf0fd")); 
```



_Task 2 Solution_

```javascript
let parent = document.querySelector('.accordian-wrapper')
let element = document.createElement('div') 
element.classList.add('accordian')
let h3 = document.createElement('h3') 
let p = document.createElement('p') 
h3.innerText = "Skills"
p.innerText = "I possess a very good command over the Full Stack Development Technologies like MERN which can be seen in my work over the Github"
p.style.display = "block"
element.appendChild(h3)
element.appendChild(p)
parent.appendChild(element)

let newList=document.querySelectorAll(".accordian h3")
newList[newList.length-1].addEventListener("click",(event)=>{
    let element = event.target.nextElementSibling;
if(element.style.display === "block"){
   element.style.display = "none"
} else {
   element.style.display = "block"
}
})
let div = document.querySelectorAll('div') 
let head=document.querySelectorAll('.accordian h3')

let para=document.querySelectorAll('.accordian p')
head.forEach((div) => (div.style.backgroundColor = "#dadaf8"));
para.forEach((div) => (div.style.backgroundColor = "#edf0fd")); 
```

