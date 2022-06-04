const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

punto.forEach((cadapunto, i) => {
    punto[i].addEventListener('click', () => {
        let posicion = 1
        let operacion = operacion * -50
        grande.style.transform = 'translateX(${operacion}%)'
        punto.forEach((cadapunto, i)=>{ 
            punto[i].classList.remove('activo') })
            punto[i].classList.add('activo')
    })

});