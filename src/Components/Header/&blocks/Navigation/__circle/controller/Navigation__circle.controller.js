class Navigation__circleController {
    _circle
    _circleAttr

    constructor(circleAttr) {
        this._circleAttr = circleAttr
    }

    init() {
        this._circle = document.querySelector(
            `[data-navigation-circle=\'${this._circleAttr}\']`)
    }

    move(location, moveDirCb) {
        const coords = moveDirCb(location)

        if(!coords) return

        this._circle.style.transform = `translate(${coords?.x || 0 - this._circle.clientWidth / 2}px, 
        ${coords?.y || 0 - this._circle.clientHeight / 2}px)`
    }
}

export default Navigation__circleController