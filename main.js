const no = document.querySelector('.no')
const control = document.querySelector('.controls')
const imgs = Array.from(document.querySelectorAll('.carousel img'))
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const ul = document.createElement('ul')
ul.setAttribute('id', 'dotsContainer')

let current = 1

for(let i = 1; i <= imgs.length; i++) {
    const lis = document.createElement('li')
    lis.setAttribute('data-index', i)
    ul.append(lis)
}
control.append(ul)
const dots = Array.from(document.querySelectorAll('ul li'))

addActive()

for(let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
        current = parseInt(dots[i].getAttribute('data-index'))
        addActive()
    })
}

prev.addEventListener('click', () => {
    current -= 1
    addActive()
})
next.addEventListener('click', () => {
    current += 1
    addActive()
})

function addActive() {
    no.textContent = `Slide #${current} of ${imgs.length}`
    removeActive()
    imgs[current - 1].classList.add('active')
    dots[current - 1].classList.add('active')
    if(current == 1) {
        prev.classList.add('disabled')
    }else if(current == 5) {
        next.classList.add('disabled')
    }else {
        prev.classList.remove('disabled')
        next.classList.remove('disabled')
    }
}

function removeActive() {
    imgs.forEach(img => img.classList.remove('active'))
    dots.forEach(dot => dot.classList.remove('active'))
}