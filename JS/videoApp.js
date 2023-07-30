ary = [];

let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let c4 = document.getElementById('c4');
let btn = document.getElementById('btn');
let i1 = document.getElementById('i1');
let i2 = document.getElementById('i2');
let i3 = document.getElementById('i3');
let i4 = document.getElementById('i4');
const toggle =(a,b)=>{
    a.classList.toggle('scard');
    b.classList.toggle('icon-style');
   let i = a.classList.contains('scard');
   i ? ary.push('add'):ary.pop()
   ary.length > 0 ? btn.style.visibility= 'visible': btn.style.visibility= 'hidden';
   console.log(ary)
   };