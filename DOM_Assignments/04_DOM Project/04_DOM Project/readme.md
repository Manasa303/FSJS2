_Task Solution_


```javascript
// Intially Changing the text name of Second Card from Character 2 to The Archer

let secondName = document.querySelector('.archer div:nth-child(3)')
secondName.innerText = "The Archer"

// First Card Background color

let barbarian = document.querySelector('.clash-card__unit-stats--barbarian') 
barbarian.style.backgroundColor = "#ec9b3b" 
barbarian.style.color = "#fff" 

let barbarian2 = document.querySelector('.clash-card__unit-stats--barbarian div:nth-child(3)')
barbarian2.style.color = "#fff" 


// Second Card Background color

let archer = document.querySelector('.clash-card__unit-stats--archer') 
archer.style.backgroundColor = "#ee5487" 
archer.style.color = "#fff" 

let archer2 = document.querySelector('.clash-card__unit-stats--archer div:nth-child(3)')
archer2.style.color = "#fff" 

// Third Card Background color

let giant = document.querySelector('.clash-card__unit-stats--giant') 
giant.style.backgroundColor = "#f6901a" 
giant.style.color = "#fff" 

let giant2 = document.querySelector('.clash-card__unit-stats--giant div:nth-child(3)')
giant2.style.color = "#fff" 

// Fourth Card Background color

let goblin = document.querySelector('.clash-card__unit-stats--goblin') 
goblin.style.backgroundColor = "#82bb30" 
goblin.style.color = "#fff" 

let goblin2 = document.querySelector('.clash-card__unit-stats--goblin div:nth-child(3)')
goblin2.style.color = "#fff" 

// Fifth Card Background color

let wizard = document.querySelector('.clash-card__unit-stats--wizard') 
wizard.style.backgroundColor = "#4facff" 
wizard.style.color = "#fff" 

let wizard2 = document.querySelector('.clash-card__unit-stats--wizard div:nth-child(3)')
wizard2.style.color = "#fff" 