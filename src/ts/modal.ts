const modal = document.querySelector('.login-modal-overlay');
const accountIcon = document.querySelector('.profile-icon');
const closeBtn = document.querySelector('.close-btn');

export const closeModal = () => {
    if (modal) {
        modal.classList.add("hidden");
    }
}

if (modal && accountIcon && closeBtn) {
    accountIcon.addEventListener('click', () => modal.classList.remove('hidden'));
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });
}
