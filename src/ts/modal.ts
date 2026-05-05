const modalOverlay = document.querySelector('.login-modal-overlay');
const accountIcon = document.querySelector('.profile-icon');
const closeBtn = document.querySelector('.close-btn');

export const closeModal = () => {
    if (modalOverlay) {
        modalOverlay.classList.add("hidden");
    }
}

if (modalOverlay && accountIcon && closeBtn) {
    accountIcon.addEventListener('click', () => modalOverlay.classList.remove('hidden'));
    closeBtn.addEventListener('click', () => modalOverlay.classList.add('hidden'));

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) modalOverlay.classList.add('hidden');
    });
}
