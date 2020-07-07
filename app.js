const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')


    burger.addEventListener('click', ()=>
    {
    // toggle Nav        
        nav.classList.toggle('nav-active');
 
    // animate links
        navLinks.forEach((link, index) => 
        {
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`    
            }     
        });
    });   
}

navSlide();

const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function()
{
    let scrollPosition = window.pageYOffset;
        
    parallax.style.backgroundPositionY = scrollPosition * 0.7 + "px";
    console.log('offset: ' + scrollPosition);
})






