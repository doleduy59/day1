/*navbar*/
let btnBar = document.getElementById('btnBar')
let btnCloseBar = document.getElementById('btnCloseBar')
let navMenu = document.getElementById('navMenu')
let openBar = false
let openMenuItem = [true, false, false]
let btnNavLinks1 = document.getElementById('btnNavLinks1')
let chevron1 = document.getElementById('chevron1')
let navLinks1 = document.getElementById('navLinks1')
let btnNavLinks2 = document.getElementById('btnNavLinks2')
let chevron2 = document.getElementById('chevron2')
let navLinks2 = document.getElementById('navLinks2')
let btnNavLinks3 = document.getElementById('btnNavLinks3')
let chevron3 = document.getElementById('chevron3')
let navLinks3 = document.getElementById('navLinks3')

const toggleContent = (element) => {
    element.style.height = 'auto';
    const contentHeight = element.scrollHeight;
    element.style.height = '0%';
    setTimeout(() => {
        element.style.height = `${contentHeight}px`;
    }, 5);
    element.style.opacity = '1';
}
const checkNavLinks1 = () => {
    if (!openMenuItem[0]) {
        navLinks1.style.height = '0%';
        navLinks1.style.opacity = '0';
        chevron1.style.transform = 'rotate(0deg)'
    } else {
        toggleContent(navLinks1)
        chevron1.style.transform = 'rotate(180deg)'
    }
}
const checkNavLinks2 = () => {
    if (!openMenuItem[1]) {
        navLinks2.style.height = '0%';
        navLinks2.style.opacity = '0';
        chevron2.style.transform = 'rotate(0deg)'
    } else {
        toggleContent(navLinks2)
        chevron2.style.transform = 'rotate(180deg)'
    }
}
const checkNavLinks3 = () => {
    if (!openMenuItem[2]) {
        navLinks3.style.height = '0%';
        navLinks3.style.opacity = '0';
        chevron3.style.transform = 'rotate(0deg)'
    } else {
        toggleContent(navLinks3)
        chevron3.style.transform = 'rotate(180deg)'
    }
}
checkNavLinks1()
checkNavLinks2()
checkNavLinks3()

const checkNav = () => {
    if (!openBar) {
        openMenuItem = [true, false, false]
        navMenu.style.pointerEvents = 'none'
        navMenu.style.opacity = '0';
    }
    else {
        checkNavLinks1()
        checkNavLinks2()
        checkNavLinks3()
        navMenu.style.pointerEvents = 'auto'
        navMenu.style.opacity = '1';
    }
}
checkNav()

btnBar.addEventListener('click', () => {
    openBar = true
    checkNav()
})

btnCloseBar.addEventListener('click', () => {
    openBar = false
    checkNav()
})

btnNavLinks1.addEventListener('click', () => {
    if (openMenuItem[0] == true) {
        openMenuItem[0] = false
        checkNavLinks1()
        checkNav()
        console.log(openMenuItem[0])

    } else {
        openMenuItem[0] = true
        checkNavLinks1()
        checkNav()
        console.log(openMenuItem[0])
    }
})
btnNavLinks2.addEventListener('click', () => {
    if (openMenuItem[1] == true) {
        openMenuItem[1] = false
        checkNavLinks2()
        checkNav()
        console.log(openMenuItem[0])
    } else {
        openMenuItem[1] = true
        checkNavLinks2()
        checkNav()
        console.log(openMenuItem[0])
    }
})
btnNavLinks3.addEventListener('click', () => {
    if (openMenuItem[2] == true) {
        openMenuItem[2] = false
        checkNavLinks3()
        checkNav()
        console.log(openMenuItem[0])
    } else {
        openMenuItem[2] = true
        checkNavLinks3()
        checkNav()
        console.log(openMenuItem[0])
    }
})