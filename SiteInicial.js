//  PADRÃO
    function retornar(element){
        element.style.backgroundColor = '';
        element.style.transform = 'scale(1)';
    }
    function retornarMain(){
        window.location.href = "/SiteFigma.html"
    }




// HEADER
    function animarHeader(element){
        element.style.backgroundColor = '#4e4a5f';
        element.style.transform = 'scale(1.1)';
    }

    function SiteLogin(){
        let element = document.getElementById('');
  
        let elementPosition = element.offsetTop;
  
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
    }





// BODY
    //Carousel esquerda
    let currentIndex = 0;

    function showSlide(index) {
        const carousel = document.getElementById("carousel");
        const slides = document.querySelectorAll(".carousel img");
        const totalSlides = slides.length;

        if (index >= totalSlides) {
        currentIndex = 0;
        } else if (index < 0) {
        currentIndex = totalSlides - 1;
        } else {
        currentIndex = index;
        }

        const translateValue = -currentIndex * 100 + "%";
        carousel.style.transform = "translateX(" + translateValue + ")";
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Autoplay 
    setInterval(() => {
        nextSlide();
    }, 3000);



// SUB-BODY
    // Politica
    function acharPolitica() {
        let element = document.getElementById('politica');
  
        let elementPosition = element.offsetTop;
  
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    function siteFigmaVideo() {
        window.location.href = "/SiteFigmaVídeo.html"
    }

    // Esportes
    function acharEsportes() {
        let element = document.getElementById('esportes');
  
        let elementPosition = element.offsetTop;
  
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }

    // Economia
    function acharEconomia() {
        let element = document.getElementById('economia');
  
        let elementPosition = element.offsetTop;
  
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }

    // Diversos
    function acharDiversos() {
        let element = document.getElementById('diversos');
  
        let elementPosition = element.offsetTop;
  
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
      function logCheck(){
        var isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
        
        if (isLoggedIn) {

            console.log('Você está logado como admin!');
        }
        }
    logCheck();