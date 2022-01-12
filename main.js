/*◘◘◘◘◘◘◘◘◘◘◘◘◘◘ ABRE E FECHA O MENU AO CLICAR ◘◘◘◘◘◘◘◘◘◘◘◘◘◘*/

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    /* Ao clickar, execute a função */
    nav.classList.toggle('show')
    /* Toogle faz alternância da classe show */
  })
}

/*◘◘◘◘◘◘◘◘◘◘◘◘◘◘ ESCONDE MENU QUANDO CLICA EM ITEM DELE ◘◘◘◘◘◘◘◘◘◘◘◘◘◘*/

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*◘◘◘◘◘◘◘◘◘◘◘◘◘◘ [SWIPER] IMAGENS EM SLIDE ◘◘◘◘◘◘◘◘◘◘◘◘◘◘*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/*◘◘◘◘◘◘◘◘◘◘◘◘◘◘ [SCROLL REVEAL] MOSTRAR ELEMENTOS APÓS SCROLL NA PÁGINA ◘◘◘◘◘◘◘◘◘◘◘◘◘◘*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links
`,
  { interval: 100 }
)

/* ARROW BACK TO THE TOP ON CLICK */

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 900) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* HIGHLIGHTED MENU WHEN ON IT. Ex: SOBRE, SERVIÇOS... */

const sections = document.querySelectorAll('section[id]')
/* Dentro do "main" pegar todas as sessões que contenham ID */
function activateMenuAtCurrentSection() {
  const checkpointSection = window.pageYOffset + (window.innerHeight / 8) * 4
  /* window.pageYOffset = pegar deslocamento do eixo Y (vertical) */
  /* Divisão /8 e mult *4 resultado de testes na página */
  for (section of sections) {
    const sectionTop = section.OffsetTop
    const sectionHeight = section.OffsetHeight
    const sectionId = section.getAttribute('id')
    /* sectionTop = Topo  / sectionHeight = Altura final da página */
    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* GROUP OF "WHEN SCROLL" */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll() /* Só exemplo de função agrupada. Não foi utilizada */
  backToTop()
  activateMenuAtCurrentSection()
})
