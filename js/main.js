
const navMenu = document.getElementById('nav-menu');
const closeMenu = document.getElementById('nav-close');
closeMenu.addEventListener('click' , ()=>{
  navMenu.classList.remove('show');
})

  

  const showMenu = (toggleId , navId) =>{
      const toggleMenu = document.getElementById(toggleId),
            navMenu = document.getElementById(navId);

            if(toggleMenu && navMenu){
                toggleMenu.addEventListener('click', ()=>{
                    navMenu.classList.toggle('show')
                })
                
            }
  }

  showMenu('nav-toggle' , 'nav-menu');
  
  const navLink = document.querySelectorAll('.nav-link');

  function linkAction(){
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
  
    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction));

  // One page Nav 
  $('#nav').onePageNav({
    currentClass: 'done',
    changeHash: false,
    scrollSpeed: 1000,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'
  });
  //typed js
  var typed = new Typed('.type', {
    strings: ['Designer', 'Developer', 'Freelancer'],
    typeSpeed: 60,
    backSpeed: 60,
    loop:true

  });
 
  
  // ScroollReveal animation
  const sr =  ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    reset: true

  })

//home section
sr.reveal('.home__title',{}); 
sr.reveal('.button-section',{delay: 200}); 
sr.reveal('.content-img',{delay: 400}); 
sr.reveal('.social-icon',{ interval: 200});
//about section
sr.reveal('.about-tittle',{}) ;
sr.reveal('.about-img',{distance:"150px", duration:2000 , delay:200});
sr.reveal('.about-text',{distance:"150px", duration:2000 , delay:300 });
//skill-section

sr.reveal('.skill-tittle',{}); 
sr.reveal('.skill-content',{delay:200}); 
sr.reveal('.skill-progress',{delay:200}); 
//feature section
sr.reveal('.feature-tittle',{});
sr.reveal('#feature-part',{distance:'200px',interval:200});
//gallery section
sr.reveal('.gallery-tittle',{});
sr.reveal('.gallery-img',{ delay:200,duration:2000});
//contract section

sr.reveal('.head',{interval:200});
sr.reveal('.text-fild',{interval: 200}); 
sr.reveal('.eamil-field',{interval:200});
sr.reveal('#message',{interval:200});
//fotter section
sr.reveal('.fotter-text',{ interval: 200});


$("body").toTopButton();




