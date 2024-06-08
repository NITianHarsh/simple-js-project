let clock = document.getElementsByClassName('clock')[0];
        setInterval(function(){
            let time = new Date().toLocaleTimeString();
            clock.textContent = time;
        }, 1000);