class LogoPlanetRotateAnimController {
    _rotObj

    _r
    _cx
    _cy

    _angle = 0

    _interval

    constructor() {

    }

    animationStart() {
        this._interval = setTimeout(async () => {
            this._angle += 1;

            const coords = await this._pointsCoordsOnCircle(
                this._cx,
                this._cy,
                this._r,
                this._angle
            )

            await (() => {
                this._rotObj.style.transform = `translate(
            ${coords.x}px,
            ${coords.y}px
            )`
            })()

            if (this._angle >= 360) this._angle = 0;

            this.animationStart()
        }, 35)
    }

    animationStop() {
        clearTimeout(this._interval)
    }

    _toRadian(angle) {
        return (2 * Math.PI * angle) / 360
    }

    async _pointsCoordsOnCircle(cx, cy, r, angle) {
        const x = -Math.cos(this._toRadian(angle)) * r + cx;
        const y = -Math.sin(this._toRadian(angle)) * r + cy;

        return {
            x,
            y
        }
    }

    setSettings(rotateObj, cx, cy, r) {
        this._rotObj = rotateObj;
        this._cx = cx;
        this._cy = cy;
        this._r = r;
    }
}


export default LogoPlanetRotateAnimController;