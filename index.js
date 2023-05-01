let toogle = false

let boton = document.getElementById('mode')
let body = document.querySelector('body')
let products = document.getElementById('products')
let p = document.getElementById('p')
let h3 = document.querySelector('h3')
let h31 = document.getElementById(`h3`)
let label = document.querySelector('label')



boton.addEventListener('click', function() { toogle = !toogle 
    if(toogle === true ){
        body.style.background = 'white'
            products.style.background = 'gray'
            p.style.color = 'black'
            h3.style.color = 'black'
            h31.style.color = `black`
            label.style.color = 'black'
    }
    if(toogle === false) {
        body.style.background = '#18100c'
            products.style.background = '#000000'
            p.style.color = 'white'
            h3.style.color = 'white'
            h31.style.color = `white`
            label.style.color = 'white'
    }
} )



