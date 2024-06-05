/*
    Button pe click krke color change krna h body ka
    1. Sare buttons select krne hoge
    2. Body select krni hogi
    3. event listener laga ke click se relate krna hoga
*/
const buttons = document.querySelectorAll('.box');  // NodeList h, for each loop laga skte h
const body = document.querySelector('body');
buttons.forEach(function(butt){   // func to iterate over the nodelist Buttons
    butt.addEventListener('click', function(e){  // e --> click h   so whenever click krenge to ye function hona chaiye
        const color = e.target.style.backgroundColor;
        body.style.backgroundColor = color;
    });
});
