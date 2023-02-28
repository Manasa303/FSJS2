

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

accordianHeadings = Array.from(document.querySelectorAll(".accordian > h3"));
accordianHeadings.forEach(h3 => {
    h3.style.backgroundColor = "#dadaf8";
    let para = h3.nextElementSibling;
    if (["Skills"].includes(h3.innerText)) {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
})
```

