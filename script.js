let revealedCount = 0;

function nextScreen(current) {
    document.getElementById(`screen${current}`).classList.remove('active');
    document.getElementById(`screen${current + 1}`).classList.add('active');
}

function revealCard(el, text) {
    if (!el.classList.contains('revealed')) {
        el.innerText = text;
        el.classList.add('revealed');
        el.style.background = '#ffe6e6';
        revealedCount++;
    }
    
    if (revealedCount === 5) {
        document.getElementById('finalBtn').classList.remove('hidden');
    }
}

function toggleLetter() {
    const msg = document.getElementById('message');
    msg.classList.toggle('hidden');
}
