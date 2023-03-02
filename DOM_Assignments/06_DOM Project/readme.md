_Task Solution_

```javascript

// Replacing equalizer image with the iNeuron image
let image = document.querySelector('header img') 
image.src = './assets/ineuron-logo.png'

// Adding LinkedIn to the social icons in the footer
let link = document.querySelector('.footer_social') 
let icon = document.createElement('div')
icon.className = 'footer_social_ico' 
let socialicon = document.createElement('i') 
socialicon.className = "fa-brands fa-linkedin" 
icon.appendChild(socialicon) 
link.appendChild(icon) 