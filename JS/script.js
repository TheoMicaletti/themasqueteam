const elemTimer = document.querySelector('#timer');
let masqueJeter = 0;

new Intl.NumberFormat('fr-FR').format(3141596);

function comptMask() {
    masqueJeter += 39351;
    elemTimer.textContent = Math.floor(masqueJeter);
}

setInterval(comptMask, 1000 );

