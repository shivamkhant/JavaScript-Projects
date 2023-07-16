const title= document.getElementById('title')
const nameFiled= document.getElementById('nameFiled')
const singinBtn= document.getElementById('singinBtn')
const singupBtn= document.getElementById('singupBtn')

singupBtn.addEventListener('click', ()=>{
    title.innerHTML="Sign Up"
    nameFiled.style.display="block"
})
singinBtn.addEventListener('click', ()=>{
    title.innerHTML="Login"
    nameFiled.style.display="none"
})