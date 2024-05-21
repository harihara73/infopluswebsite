
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
   
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navbar-example'
    })
    
  

      
    