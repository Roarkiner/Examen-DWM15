document.querySelector('#range').addEventListener('input', (el) =>{
    var value = el.target.value;
    var src = '';
    if(value < 20){
        src = './Assets/sad.png';
    } else if(value < 40){
        src = './Assets/slightly_sad.png'
    } else if(value < 60){
        src = './Assets/medium.png'
    } else if(value < 80){
        src = './Assets/slightly_happy.png'
    } else {
        src = './Assets/happy.png'
    }
    document.querySelector('#face').src = src;
})