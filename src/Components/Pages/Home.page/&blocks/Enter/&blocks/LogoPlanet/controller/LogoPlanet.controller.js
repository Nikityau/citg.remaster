class LogoPlanetController {
    _mainC
    _smallC
    _medC
    _rotatingC
    _trailC

    _mainCircleAttr
    _smallCircleAttr
    _mediumCircleAttr
    _rotatingCircleAttr
    _trailAttr

    constructor(mainCAttr, smallCAttr, medCAttr, rotCAttr, trailAttr) {
        this._mainCircleAttr = mainCAttr
        this._smallCircleAttr = smallCAttr
        this._mediumCircleAttr = medCAttr
        this._rotatingCircleAttr = rotCAttr
        this._trailAttr = trailAttr
    }

    init() {
        this._mainC = document.querySelector(`[ data-logo-main-planet=\'${this._mainCircleAttr}\']`)
        this._smallC = document.querySelector(`[ data-logo-planet=\'${this._smallCircleAttr}\']`)
        this._medC = document.querySelector(`[ data-logo-planet=\'${this._mediumCircleAttr}\']`)
        this._rotatingC = document.querySelector(`[ data-logo-planet=\'${this._rotatingCircleAttr}\']`)
        //this._trailC = document.querySelector(`[ data-logo-main-planet=\'${this._trailAttr}\']`)
    }

    setPosition() {
        if(!this._mainC) return

        const mainCrclCoords = this.getMainCircleCoords()

        if(!mainCrclCoords) return;

        this._setMedCPos(mainCrclCoords)
        this._setSmallCPos(mainCrclCoords)
        this._setRotatingCPos(mainCrclCoords)
        this._setTrailPos(mainCrclCoords)
    }

    getMainCircleCoords() {
        if(!this._mainC) return undefined;

        const coords = {}

        coords.x = this._mainC.offsetLeft
        coords.y = this._mainC.offsetTop
        coords.width = this._mainC.clientWidth
        coords.height = this._mainC.clientHeight

        return coords;
    }

    _setSmallCPos(mainCircleCoords) {
        if(!this._smallC) return

        this._smallC.style.transform = `translate(${mainCircleCoords.x - mainCircleCoords.width * 1.15}px,
         ${mainCircleCoords.y + mainCircleCoords.height / 6}px)`
    }
    _setMedCPos(mainCircleCoords) {
        if(!this._medC) return

        this._medC.style.transform = `translate(${mainCircleCoords.x - mainCircleCoords.width * .8}px,
         ${mainCircleCoords.y + mainCircleCoords.height}px)`
    }
    _setRotatingCPos(mainCircleCoords) {
        if(!this._rotatingC) return

        this._rotatingC.style.transform = `translate(${mainCircleCoords.x + mainCircleCoords.width * .22}px,
         ${mainCircleCoords.y - mainCircleCoords.height * .2}px)`
    }
    _setTrailPos(mainCircleCoords) {

    }
}

export default LogoPlanetController;