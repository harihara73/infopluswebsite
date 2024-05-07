

let vid1 = document.getElementById("myVideo1"); 

function playVid1() { 
  vid1.play(); 
} 
let vid2 = document.getElementById("myVideo2"); 

function playVid2() { 
  vid2.play(); 
} 
let vid3 = document.getElementById("myVideo3"); 

function playVid3() { 
  vid3.play(); 
} 
 

const navE1 = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 56) {
        navE1.classList.add('navbar-scrolled');
      } else if (window.scrollY < 56){
        navE1.classList.remove('navbar-scrolled');
      }
      
      
    });

  
    
    const lE3 = document.querySelector('.logo1');

    window.addEventListener('scroll', () => {
      if (window.scrollY < 56) {
        lE3.classList.remove('logo1');
      } else if (window.scrollY > 56){
        lE3.classList.add('logo1');
      } else {
        1E3.classList.remove('logo1')}
      
    });

    const logoE2 = document.querySelector('.logo2');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 56) {
        logoE2.classList.remove('logo2');
      } else if (window.scrollY < 56){
        logoE2.classList.add('logo2');
      }
      
      
    });
    window.addEventListener('scroll', function() {
      var image = document.getElementById('scrollImage');
      var windowScroll = window.scrollY;
  
      // Adjust the threshold as needed
      if (windowScroll > 1) {
          image.style.display = 'none';
      } 
  });

    
    
  
    
    function showSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'flex';
    }function hideSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'none';
    }
   

    
  

    $(document).ready(function(){
      // Add smooth scrolling to all links in navbar + footer link
      $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 900, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
      
      $(window).scroll(function() {
        $(".slideanim").each(function(){
          var pos = $(this).offset().top;
    
          var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
              $(this).addClass("slide");
            }
        });
      });
    })

    
    