let h2 = document.querySelector('h2')
let box = document.querySelector('.for-filter')
let num = 100;
let he = 0;

setInterval(function () {
   box.style.filter = `blur(${num--}px)`;
   he++
   if (num <= -0 && he>=101) {
      num = 0;
      he=''
      h2.classList.add("none")
   }
   h2.textContent = (he)+"%"
}, 35);





