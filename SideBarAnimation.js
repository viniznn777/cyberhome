let header = document.getElementById('header')
let navigationHeader = document.getElementById('navigation_header')
let content = document.getElementById('main')
let showSidebar = false

function ToggleSideBar() {
    showSidebar = !showSidebar
    if (showSidebar) {
        navigationHeader.style.marginLeft = '-10vw'
        navigationHeader.style.animationName = 'showSidebar'
        content.style.filter = 'blur(2px)'
    }
    else {
        navigationHeader.style.marginLeft = '-100vw'
        navigationHeader.style.animationName = ''
        content.style.filter = ''
    }
}

function closeSidebar() {
    if (showSidebar) {
        ToggleSideBar()
    }
}

window.addEventListener('resize', (event) => {
    if (window.innerWidth > 768 && showSidebar) {
        ToggleSideBar()
    }
})