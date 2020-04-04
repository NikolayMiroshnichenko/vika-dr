const modal = document.querySelector('.js-modal-wrapper');
const closeModalBtn = document.querySelector('.main-btn-yes');


setTimeout(() => {
    openModal();    
}, 3000);

closeModalBtn.addEventListener('click', closeModal);

function openModal() {
    modal.style.display = 'block';
}
function closeModal() {
    modal.style.display = 'none';
}