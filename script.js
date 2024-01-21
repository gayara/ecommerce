const tog = document.getElementById("bar");
const closeBtn = document.getElementById("close");
const nav = document.getElementById("navbar");

if(tog){
  tog.addEventListener('click', ()=>{
    nav.classList.add('active');
  })
}

if(close){
  closeBtn.addEventListener('click', ()=>{
    nav.classList.remove('active');
  })
}
