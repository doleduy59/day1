const screenWidth = window.innerWidth;

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


const toggleContent = (element, open) => {
    if (open) {
        element.style.height = 'auto';
        const contentHeight = element.scrollHeight;
        element.style.height = '0px';
        setTimeout(() => {
            element.style.height = `${contentHeight}px`;
            element.style.paddingBottom = 'calc(100vw/390*12)'
        }, 5);
        element.style.opacity = '1';
    }
    else {
        setTimeout(() => {
            element.style.height = `0px`;
            element.style.opacity = '0';
            element.style.paddingBottom = '0px'
        }, 5);

    }

}
const flipChevron = (element, open) => {
    if (open)
        element.style.transform = `rotate(-180deg)`
    else
        element.style.transform = `rotate(0deg)`
}
const checkNavLinks1 = () => {
    toggleContent(navLinks1, openMenuItem[0])
    flipChevron(chevron1, openMenuItem[0])
}
const checkNavLinks2 = () => {
    toggleContent(navLinks2, openMenuItem[1])
    flipChevron(chevron2, openMenuItem[1])
}
const checkNavLinks3 = () => {
    toggleContent(navLinks3, openMenuItem[2])
    flipChevron(chevron3, openMenuItem[2])
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
        console.log(openMenuItem[0])
    } else {
        openMenuItem[0] = true
        console.log(openMenuItem[0])
    }
    checkNavLinks1()

})
btnNavLinks2.addEventListener('click', () => {
    if (openMenuItem[1] == true) {
        openMenuItem[1] = false
        console.log(openMenuItem[1])
    } else {
        openMenuItem[1] = true
        console.log(openMenuItem[1])
    }
    checkNavLinks2()

})
btnNavLinks3.addEventListener('click', () => {
    if (openMenuItem[2] == true) {
        openMenuItem[2] = false
        console.log(openMenuItem[2])
    } else {
        openMenuItem[2] = true
        console.log(openMenuItem[2])
    }
    checkNavLinks3()

})
/*navbar*/

/*footer*/
let fChevron1 = document.getElementById('fChevron1')
let footLinks1 = document.getElementById('footLinks1')
let fChevron2 = document.getElementById('fChevron2')
let footLinks2 = document.getElementById('footLinks2')
let fChevron3 = document.getElementById('fChevron3')
let footLinks3 = document.getElementById('footLinks3')
let fChevron4 = document.getElementById('fChevron4')
let footLinks4 = document.getElementById('footLinks4')
let fChevron5 = document.getElementById('fChevron5')
let footLinks5 = document.getElementById('footLinks5')
let btnFootLinks1 = document.getElementById('btnFootLinks1')
let btnFootLinks2 = document.getElementById('btnFootLinks2')
let btnFootLinks3 = document.getElementById('btnFootLinks3')
let btnFootLinks4 = document.getElementById('btnFootLinks4')
let btnFootLinks5 = document.getElementById('btnFootLinks5')
let footCheck = [false, false, false, false, false]

const checkFootLinks1 = () => {
    toggleContent(footLinks1, footCheck[0])
    flipChevron(fChevron1, footCheck[0])

}
const checkFootLinks2 = () => {
    toggleContent(footLinks2, footCheck[1])
    flipChevron(fChevron2, footCheck[1]
    )

}
const checkFootLinks3 = () => {
    toggleContent(footLinks3, footCheck[2])
    flipChevron(fChevron3, footCheck[2])

}
const checkFootLinks4 = () => {
    toggleContent(footLinks4, footCheck[3])
    flipChevron(fChevron4, footCheck[3])

}
const checkFootLinks5 = () => {
    toggleContent(footLinks5, footCheck[4])
    flipChevron(fChevron5, footCheck[4])

}
checkFootLinks1()
checkFootLinks2()
checkFootLinks3()
checkFootLinks4()
checkFootLinks5()
btnFootLinks1.addEventListener('click', () => {
    if (footCheck[0] == true) {
        footCheck[0] = false
        console.log(footCheck[0])
    } else {
        footCheck[0] = true
        console.log(footCheck[0])
    }
    checkFootLinks1()
})
btnFootLinks2.addEventListener('click', () => {
    if (footCheck[1] == true) {
        footCheck[1] = false
        console.log(footCheck[1])
    } else {
        footCheck[1] = true
        console.log(footCheck[1])
    }
    checkFootLinks2()
})
btnFootLinks3.addEventListener('click', () => {
    if (footCheck[2] == true) {
        footCheck[2] = false
        console.log(footCheck[2])
    } else {
        footCheck[2] = true
        console.log(footCheck[2])
    }
    checkFootLinks3()
})
btnFootLinks4.addEventListener('click', () => {
    if (footCheck[3] == true) {
        footCheck[3] = false
        console.log(footCheck[3])
    } else {
        footCheck[3] = true
        console.log(footCheck[3])
    }
    checkFootLinks4()
})
btnFootLinks5.addEventListener('click', () => {
    if (footCheck[4] == true) {
        footCheck[4] = false
        console.log(footCheck[4])
    } else {
        footCheck[4] = true
        console.log(footCheck[4])
    }
    checkFootLinks5()
})