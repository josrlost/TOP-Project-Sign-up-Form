const btnToggle = document.querySelector('#toggleBtn');
const btnSubmit = document.querySelector('#btnSubmit');

function pressingBtn (evt) {
    evt.target.style.backgroundColor = 'rgb(164, 198, 198)';
}

function releasingBtn (evt) {
    evt.target.style.backgroundColor = 'var(--color-button-001)';
}

btnSubmit.addEventListener('mousedown', pressingBtn);
btnSubmit.addEventListener('mouseup', releasingBtn);

btnToggle.addEventListener('mousedown', pressingBtn);
btnToggle.addEventListener('mouseup', releasingBtn);