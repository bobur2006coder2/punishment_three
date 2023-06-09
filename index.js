let h2 = document.querySelector('h2')
let box = document.querySelector('.for-filter')
let num =100;

 setInterval(function () {box.style.filter=`blur(${num--}px)`;
 if(num<=-0){
    num=0;
 }
  h2.innerHTML=num +" %"}, 25);



   

