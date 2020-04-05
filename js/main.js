const modal = document.querySelector('.js-modal-wrapper');
const closeModalBtn = document.querySelector('.main-btn-yes');


// setTimeout(() => {
//     openModal();    
// }, 3000);

closeModalBtn.addEventListener('click', closeModal);

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