const parentContainers = document.querySelectorAll('.container-extra-info');

parentContainers.forEach(container => {
    container.addEventListener('click', event => {
        const current = event.target;
        const isReadMoreBtn = current.className.includes('read-more-btn');

        if (!isReadMoreBtn) {
            window.alert("****ERROR: isReadMoreBtn");
            return;
        }

        current.textContent = current.textContent.includes('Ocultar') ? "Saber más" : "Ocultar";

        const currentBox = current.parentElement.childNodes[1];
        if (!currentBox) {
            window.alert("****ERROR: currentBox");
            return;
        }

        if (currentBox.style.display != 'none') { currentBox.style.display = 'none'; }
        else { currentBox.style.display = ''; }

    })
});