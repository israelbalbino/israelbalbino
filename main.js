
/*abre e fecha o menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')


/*para cada elemento da constant toggle add ou remova show*/
for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle("show")
    })

}

/* quando clikar em um item do menu,esconder o menu */

const links = document.querySelectorAll('nav ul li a')

for(const link of links ){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}


/* mudar header da pagina quando mover maouse */
function mudarheader(){
    const header = document.querySelector("#header")
    const navHeight = header.offsetHeight
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
     } else{
   header.classList.remove('scroll')
     }
}




/* testimonials slider swipe carrossel */

const swiper = new Swiper('.swiper-container',{
    slidesPerView: 1,
    pagination: {
        el:'.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})


/* scrollreveal: mostra elementos quando der scroll na pagina */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distace: '30px',
    duration: 700,
    reset: true
})


scrollReveal.reveal(
    `#home .text, #home .img,
    #about .img, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
    {interval: 100})


    /*botao voltar pra cima */

    function voltarpracima(){
        const backToTopButton = document.querySelector('.back-to-top')
        if(window.scrollY >= 560) {
            backToTopButton.classList.add('show')
        }else {
            backToTopButton.classList.remove('show')
        }

    }

    
    window.addEventListener('scroll', function(){
       mudarheader(),
       voltarpracima()
    })