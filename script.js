document.getElementById('playBtn').addEventListener('click', function() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('games-container').style.display = 'block';
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    downloadFiles();
});

document.getElementById('close-modal').addEventListener('click', function() {
    closeModal();
});

Array.from(document.getElementsByClassName('game-link')).forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const gameUrl = event.target.dataset.url;
        openModal(gameUrl);
    });
});

function openModal(url) {
    document.getElementById('game-frame').src = url;
    document.getElementById('game-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('game-frame').src = ''; // Clear the iframe
    document.getElementById('game-modal').classList.add('hidden');
}

function downloadFiles() {
    alert('This function will download the webpage files');
}
