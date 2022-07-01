let loader = document.getElementById("loader")
loader.setAttribute('hidden', true)


let elem = document.getElementById('tapme')

elem.addEventListener('click', event => {
    let target = event.target.closest('div')
    target.hidden = true
    loader.removeAttribute('hidden')
})

