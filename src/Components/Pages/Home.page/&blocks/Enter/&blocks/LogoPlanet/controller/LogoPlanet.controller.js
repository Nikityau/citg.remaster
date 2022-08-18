import LogoPlanetRotateAnimController
    from "components/Pages/Home.page/&blocks/Enter/&blocks/LogoPlanet/controller/LogoPlanetRotateAnim.controller";

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

    _mainCircleData = {}

    _rotateController = null;

    constructor(mainCAttr, smallCAttr, medCAttr, rotCAttr, trailAttr) {
        this._mainCircleAttr = mainCAttr
        this._smallCircleAttr = smallCAttr
        this._mediumCircleAttr = medCAttr
        this._rotatingCircleAttr = rotCAttr
        this._trailAttr = trailAttr

        this._resize = this._resize.bind(this)
    }

    init() {
        this._mainC = document.querySelector(`[ data-logo-main-planet=\'${this._mainCircleAttr}\']`)
        this._smallC = document.querySelector(`[ data-logo-planet=\'${this._smallCircleAttr}\']`)
        this._medC = document.querySelector(`[ data-logo-planet=\'${this._mediumCircleAttr}\']`)
        this._rotatingC = document.querySelector(`[ data-logo-planet=\'${this._rotatingCircleAttr}\']`)
        this._trailC = document.querySelector(`[data-planet-trail=\'${this._trailAttr}\']`)

        this._mainC && this._setMainCircleData()

        this._rotateController = new LogoPlanetRotateAnimController(this._rotatingC,
            this._mainCircleData['width'] / 2)

        window.addEventListener('resize', this._resize)
    }

    _resize() {
        this._setMainCircleData()
        void this.setPosition()
    }


    async setPosition() {
        if (!this._mainC) return

        await this._setMedCPos()
        await this._setSmallCPos()
        await this._setRotatingCPos()
        await this._setTrailPos()
    }

    animationStart() {
        this._rotateController?.animationStart();
    }

    animationStop() {
        this._rotateController?.animationStop();
    }


    _setMainCircleData() {
        this._mainCircleData['x'] = this._mainC?.offsetLeft || 0;
        this._mainCircleData['y'] = this._mainC?.offsetTop || 0;

        this._mainCircleData['height'] = this._mainC?.clientHeight || 0;
        this._mainCircleData['width'] = this._mainC?.clientWidth || 0;
    }

    _setSmallCPos() {
        if (!this._smallC) return

        this._smallC.style.left = this._mainCircleData['x'] - this._mainCircleData['width'] * .25 + 'px'
        this._smallC.style.top = this._mainCircleData['y'] + 'px'
    }

    _setMedCPos() {
        if (!this._medC) return

        this._medC.style.left = this._mainCircleData['x'] - this._mainCircleData['width'] * .5 + 'px'
        this._medC.style.top = this._mainCircleData['y'] + this._mainCircleData['height'] * .9 + 'px'
    }

    _setRotatingCPos() {
        if (!this._rotatingC) return

        const cx = this._mainCircleData['x'] + this._mainCircleData['width'] * .4;
        const cy = this._mainCircleData['y'] + this._mainCircleData['height'] * .1;

        this._rotatingC.style.left = cx + 'px'
        this._rotatingC.style.top = cy + 'px'

        this._rotateController?.setSettings(
            this._rotatingC,
            cx,
            cy,
            this._mainCircleData['width']
        )
    }

    _setTrailPos() {
        if (!this._trailC) return

        const cx = this._mainCircleData['x'] + this._mainCircleData['width'] * .4;
        const cy = this._mainCircleData['y'] + this._mainCircleData['height'] * .1;

        this._trailC.style.width = this._mainCircleData['width'] + 'px'
        this._trailC.style.height = this._mainCircleData['width'] + 'px'

        this._trailC.style.left = cx - 130 + 'px'
        this._trailC.style.top = cy - 40 + 'px'
    }


    destroy() {
        this.animationStop()
        window.removeEventListener('resize', this._resize)
    }
}

export default LogoPlanetController;