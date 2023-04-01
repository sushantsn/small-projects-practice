function openPlayerConfig(event) {
    const selectedPlayerId = event.target.dataset.playerid;
    editedPlayer = +event.target.dataset.playerid;
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display='none';
    backdropElement.style.display='none'; 
    formElement.firstElementChild.classList.remove('error');
    errosOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();

    if(!enteredPlayerName) {
        event.target.firstElementChild.classList.add('error');
        errosOutputElement.textContent  ='Please enter a valid name';
        return;
    }


    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    /* if (editedPlayer === 1) {
        players[0].name = enteredPlayerName;
    }
    else {
        players[1].name = enteredPlayerName;
    } */

    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}