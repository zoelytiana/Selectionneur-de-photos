function affiche(){
    //monElement.classList.add('maclasse');
    //alert('ok')
    if (monElement.classList.contains('affiche')==true){
        monElement.classList.remove('affiche');
        monElement.classList.add('cache');   
    }
    else{
        monElement.classList.remove('cache');
        monElement.classList.add('affiche');
    }   
}

function changeFondRouge(){
    //monElement.classList.add('maclasse');
    monElement.classList.add('important');
}

function changeFondVert(){
    //monElement.classList.add('maclasse');
    monElement.classList.remove('important');
    monElement.classList.add('good');
}

function supprimeFond(){
    //monElement.classList.add('maclasse');
    monElement.classList.remove('good');
    monElement.classList.remove('important');
}

//Récuperer les elements
//let monElement = document.getElementById('monid');

let bouton = document.querySelector('#toggle-rectangle');
let monElement = document.querySelector('.rectangle');
bouton.addEventListener('click',affiche);
monElement.addEventListener('mouseover',changeFondRouge);
monElement.addEventListener('dblclick',changeFondVert);
monElement.addEventListener("mouseout", supprimeFond);