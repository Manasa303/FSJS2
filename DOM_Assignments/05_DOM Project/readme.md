_Task Solution_

```javascript
let target = document.querySelector('.nav-center div:nth-child(3)')
let item = document.createElement('a') 
item.innerText = "Pro Subscription" 
item.className = "btn" 
item.href = "index.html" 
target.appendChild(item) 


// To add item to side links - Recipes

let sidelinks = document.querySelector('.tags-container div')
let list = document.createElement('a')
list.innerText = "Chinese (7)" 
list.href = "#" 
sidelinks.appendChild(list) 

//To Add new recipe card 

let selection = document.querySelector('.recipe-gallery')

// Create a new div and assign class name
let newcard = document.createElement('div') 
newcard.className = "card" 

// Create a new anchor tag and assign class name
let newrecipe = document.createElement('a') 
newrecipe.className = "recipe-text"
newrecipe.href = "#"  

// Create a new image and assign class name, also give path of image
let newimage = document.createElement('img')
newimage.src = './img/recipe-6.jpeg' 
newimage.className = "recipe-img"  

// Create a new h5 tag and assign class name
let newheading = document.createElement('h5')
newheading.innerText = "Pulav" 
newheading.className  = "recipe-name" 

// Create a new paragraph tag and assign class name
let newpara = document.createElement('p') 
newpara.innerText = "Prep : 10min | Cook : 15min" 
newpara.className = "recipe-disp" 

// Appending child nodes to the anchor tag
newrecipe.appendChild(newimage)
newrecipe.appendChild(newheading)
newrecipe.appendChild(newpara) 
newcard.appendChild(newrecipe) 
selection.appendChild(newcard)

// Changing the font color of text
let recipe = document.getElementsByClassName('recipe-name'); 
for (let i = 0; i < recipe.length; i++) {
    recipe[i].style.color = '#581e94';
}

let duration = document.getElementsByClassName('recipe-disp'); 
for (let j = 0; j < duration.length; j++) {
    duration[j].style.color = '#581e94';
} 