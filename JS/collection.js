for(let i = 1 ; i <= 9 ; i++){
    var div = document.createElement('div');
    div.classList.add('timbre_frame');
    var img = document.createElement('img');
    var src = './Assets/timbres/timbre' + i + '.jpg';
    var alt = 'Timbre';
    img.src = src;
    img.alt = alt;
    div.appendChild(img);
    document.querySelector('#collection').appendChild(div);
};

for(let i = 10 ; i <= 12 ; i++){
    var div = document.createElement('div');
    div.classList.add('timbre_frame');
    var img = document.createElement('img');
    var src = './Assets/timbres/timbre' + i + '.jpg';
    var alt = 'Timbre';
    img.src = src;
    img.alt = alt;
    div.appendChild(img);
    document.querySelector('#interest').appendChild(div);
};

document.querySelector('#resize').addEventListener('input', (el) =>{
    var value = el.target.value;
    var list = document.querySelectorAll('.timbre_frame');
    console.log(list);
    list.forEach(element => element.style.height = value + 'px');
})