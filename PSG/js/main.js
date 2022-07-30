let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fas-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fas-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }
}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 300);
}

window.onload = fadeOut();

// Smooth Scrolling
$('a[href*="#"]').on('click',function(e){

  e.preventDefault();
  $('html, body').animate({

   scrollTop : $($(this).attr('href')).offset().top,

  },
  400,
  'linear'
  );

});

/*********************************
 *   Digital Clock JS
 *********************************/ 
function digitalClock(){
  let date = new Date();
  let hourse = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let timeFormat = 'AM';

  if(hourse == 12){
    hourse = 12;
  }
  if(hourse > 12){
    hourse = hourse - 12;
    timeFormat = 'PM';
  }
// Checking hourse, minutes, seconds less then 10 or not
  if(hourse < 10){
    hourse = '0' + hourse;
  }
  if(minutes < 10){
    minutes = '0' + minutes;
  }

  if(seconds < 10){
    seconds = '0' + seconds;
  }

  let finalTime = `${hourse}:${minutes}:${seconds}`;

  document.getElementById('time').innerText = finalTime;
  document.getElementById('format').innerText = timeFormat;

  setInterval(digitalClock, 1000);
}

digitalClock();
