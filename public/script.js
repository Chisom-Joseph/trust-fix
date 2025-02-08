document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Responsive menu handling
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });
});

var a;

function show_hide() {
    if(a == 1) {
        document.getElementById("15form").style.display="none";
        return a=0;
    }else{
        document.getElementById("15form").style.display="block";
        return a=1;
    }
}


var b;

function hide_show() {
    if(b == 1) {
        document.getElementById("24form").style.display="none";
        return b=0;
    }else{
        document.getElementById("24form").style.display="block";
        return b=1;
    }
}
