# PROJECTS REALTED TO DOM

## PROJECTS LINK
[Click Here!](https://stackblitz.com/edit/dom-project-chaiaurcode-tpe7tq?file=1-colorChanger%2Fchaiaurcode.js)

# solution code:

# project 1

``` javascript

const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body")

buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id
    }  
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id
    }  
  })
})

```