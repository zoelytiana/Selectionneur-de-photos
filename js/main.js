

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
'use strict';   // Mode strict du JavaScript


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function onClickPhoto()
{
    // La méthode .remove() va ajouter la classe.
    this.classList.toggle('selected');
   // console.log('ok');
   
    let cpt = document.querySelectorAll('.selected');
    paragraphe.textContent = " "+cpt.length+" ";
}

function onMouseOutPhoto()
{
    // La méthode .remove() va ajouter la classe.
    this.classList.remove('on');
}

function onMouseOverPhoto()
{
    // La méthode .remove() va ajouter la classe.
    this.classList.add('on');
    console.log('ok')
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
// Recherche du bouton et du rectangle dans l'arbre DOM.

const photos = document.querySelectorAll('.photo');
let paragraphe = document.querySelector('#total');
//const photo = document.querySelector('.photo');

let i;
// Installation d'un gestionnaire d'évènement clic sur le bouton.
for(i=0; i<photos.length;i++){
    photos[i].addEventListener('click', onClickPhoto);    
    // Installation de deux gestionnaires d'évènements de survol du rectangle à la souris.
    photos[i].addEventListener('mouseout', onMouseOutPhoto);
    photos[i].addEventListener('mouseover', onMouseOverPhoto);
}




