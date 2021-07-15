var window_title;
switch (location.pathname)
{
    case "/index.html":
        window_title = "Nube Terminal";
        break;
    
    case "/pages/works.html":
        window_title = "Work Explorer";
        break;
    
    case "/pages/info.html":
        window_title = "Info Explorer";
        break;
    
    default:
        window_title = "Unknown";
        break;
}

function closeWindow() {
    open(location, '_self').close();
}

const window_header = document.getElementById('window-header');
window_header.insertAdjacentHTML(
    "afterbegin",
    `
        <div class="title">${window_title}</div>
        <div class="title-end"></div>
        <a class="button" href="${location.pathname}"><i class="fas fa-sync"></i></a>
        <div class="button none"><i class="fas fa-times"></i></div>
        <div class="button none"><i class="fas fa-window-minimize"></i></div>
        <div class="button none"><i class="fas fa-window-maximize"></i></div>
    `
);
const window_sidebar = document.getElementById('window-sidebar');
window_sidebar.insertAdjacentHTML(
    "afterbegin",
    `
        <div class="button-top">
            <a class="button" href="/index.html">
                <span class="name-mobile">HOME</span>
                <span class="icon"><i class="fas fa-home"></i></span>
                <span class="name">HOME</span>
            </a>
            <a class="button" href="/pages/works.html">
                <span class="name-mobile">WORKS</span>
                <span class="icon"><i class="fas fa-database"></i></span>
                <span class="name">WORKS</span>
            </a>
            <a class="button" href="/pages/info.html">
                <span class="name-mobile">INFO</span>
                <span class="icon"><i class="fas fa-info"></i></span>
                <span class="name">INFO</span>
            </a>
        </div>
        <div class="button-top-end"></div>
        <div class="bar">
            <div class="lamps">
                <div class="lamp"></div>
                <div class="lamp"></div>
                <div class="lamp"></div>
                <div class="lamp"></div>
            </div>
            <div class="cell"></div>
        </div>
        <div class="button-bottom-start"></div>
        <div class="button-bottom">
            <a class="button a4" href="https://blog.0nu.be/" target="_blank" rel="noopener noreferrer">
                <span class="name-mobile">BLOG</span>
                <span class="icon"><i class="fas fa-sticky-note"></i></span>
                <span class="name">BLOG</span>
            </a>
            <a class="button a1" href="https://photogallery.0nu.be/" target="_blank" rel="noopener noreferrer">
                <span class="name-mobile">PHOTO</span>
                <span class="icon"><i class="fas fa-image"></i></span>
                <span class="name">PHOTO</span>
            </a>
            <a class="button a3" href="https://twitter.com/SomethingOnu" target="_blank" rel="noopener noreferrer">
                <span class="name-mobile">TWITTER</span>
                <span class="icon"><i class="fab fa-twitter"></i></span>
                <span class="name">TWITTER</span>
            </a>
            <a class="button a2" href="https://www.youtube.com/channel/UC464uXof2ms92PtIWz6yIAg" target="_blank" rel="noopener noreferrer">
                <span class="name-mobile">YOUTUBE</span>
                <span class="icon"><i class="fab fa-youtube"></i></span>
                <span class="name">YOUTUBE</span>
            </a>
        </div>
    `
);
const window_footer = document.getElementById('window-footer');
window_footer.insertAdjacentHTML(
    "afterbegin",
    `
        <div class="fixer">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="status">(C) Something Onu</div>
        <div class="status-end"></div>
    `
);
