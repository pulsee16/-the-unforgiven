document.addEventListener('DOMContentLoaded', function() {
    const background = document.querySelector('.background');
    for (let i = 0; i < 100; i++) {
        const drop = document.createElement('div');
        drop.classList.add('drop');
        drop.style.left = `${Math.random() * 100}vw`;
        drop.style.animationDuration = `${Math.random() * 2 + 1}s`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        background.appendChild(drop);
    }

    // Actualizare număr vizualizări
    const viewCountElement = document.getElementById('view-count');
    let viewCount = localStorage.getItem('viewCount') || 0;
    viewCount = parseInt(viewCount) + 1;
    localStorage.setItem('viewCount', viewCount);
    viewCountElement.textContent = viewCount;

    // Animație pentru titlul paginii
    const title = "@the unforgiven";
    let index = 0;
    let direction = 1;

    function animateTitle() {
        document.title = title.substring(0, index);
        if (index === title.length) {
            direction = -1; // Inversare direcție
        } else if (index === 0) {
            direction = 1; // Revenire la direcția inițială
        }
        index += direction;
        setTimeout(animateTitle, 300); // Viteză de apariție și dispariție a literelor
    }

    animateTitle();
});
