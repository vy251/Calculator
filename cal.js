const btns=document.querySelectorAll("#butt");
const second=document.querySelector("#second");
const equal=document.querySelector('#equal');
const clear=document.querySelector('#clear');
const arrow=document.querySelector('#arrow');
btns.forEach((btn)=>{
btn.addEventListener("click",()=>{
    second.value+=btn.innerText;
})
});
equal.addEventListener('click',()=>{
    second.value=eval(second.value);
  })
  clear.addEventListener('click',()=>{
      second.value="";
  })
  arrow.addEventListener('click',()=>{
    second.value = second.value.slice(0, -1);
  })
  second.addEventListener('input', () => {
    second.value = second.value.replace(/[^0-9+\-*/.%]/g, '');
  });