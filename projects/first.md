# PROJECTS REALTED TO DOM

## PROJECTS LINK
[Click Here!](https://stackblitz.com/edit/dom-project-chaiaurcode-tpe7tq?file=1-colorChanger%2Fchaiaurcode.js)

# solution code:

# project 1[BACKGROUND-COLOR CHANGER]

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
## project 2 [BMI CALCULATOR]


``` javascript

const form= document.querySelector('form');
form.addEventListener('submit',function(e){
  e.preventDefault();
  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const results=document.querySelector('#results');

  if(height === '' || height<0 || isNaN(height)){
    results.innerHTML=`please enter a valid ${height}`
  }else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML=`please enter a valid ${weight}`
  }else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    results.innerHTML=`<span>${bmi}</span>`;
  }
  
});
```
