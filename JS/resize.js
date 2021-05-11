document.querySelector('#resize').addEventListener('input', (el) =>{
    var value = el.target.value;
    document.querySelectorAll('.timbre_frame').forEach(element =>{
        element.style.height = value;
    })
})