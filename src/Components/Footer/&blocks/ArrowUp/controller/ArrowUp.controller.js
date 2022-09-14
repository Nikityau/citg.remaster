class ArrowUpController {
    arrowUp = undefined
    mainField = undefined
    footer = undefined

    constructor() {
        this.scrollEv = this.scrollEv.bind(this)
    }

    init() {
        this.arrowUp = document.querySelector('.arrow-up')
        this.mainField = document.querySelector('.app-container')
        this.footer = document.querySelector('.footer')

        this.startValue()
    }

    startValue() {
        const coordX = this.mainField.offsetLeft + this.mainField.clientWidth;
        let coordY = window.screen.availHeight - 200;

        this.arrowUp.style.opacity = '0'
        this.arrowUp.style.transform = `translate(${coordX}px, ${coordY}px)`

        setTimeout(() => {
            this.arrowUp.style.transition = '.3s linear'
        }, 200)
    }

    setScrollEv() {
        window.addEventListener('scroll', this.scrollEv)
    }

    scrollEv() {
        const coordX = this.mainField.offsetLeft + this.mainField.clientWidth;

        const winHeight = window.screen.availHeight;
        const footerOffsetTop = this.footer.offsetTop;

        if(window.scrollY < winHeight / 4) {
            this.arrowUp.style.opacity = '0';

            return
        }

        this.arrowUp.style.opacity = '1';

        let coordY = winHeight - 200;

        console.log(winHeight)

        if(window.scrollY + winHeight >= footerOffsetTop + 200) {
            coordY = winHeight - this.footer.offsetHeight - this.arrowUp.offsetHeight / 2 - 80
        }

        this.arrowUp.style.transform = `translate(${coordX + 10}px, ${coordY}px)`
    }

    removeScrollEv() {
        window.removeEventListener('scroll', this.scrollEv)
    }
}

export default ArrowUpController;