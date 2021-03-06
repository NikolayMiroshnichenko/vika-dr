const modal = document.querySelector('.js-modal-wrapper');
const closeModalBtn = document.querySelector('.main-btn-yes');
const errorModalBtn = document.querySelector('.main-btn-noy');


setTimeout(() => {
    openModal();    
}, 1500);

closeModalBtn.addEventListener('click', closeModal);

errorModalBtn.addEventListener('click', () => {
    alert('Вийди отсюда розбійник!');
});

function openModal() {
    modal.style.display = 'block';
}
function closeModal() {
    modal.style.display = 'none';
}

const mySiema = new Siema({
    selector: '.slider',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: () => {},
    onChange: () => {},
  });

document.querySelector('.preft').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());