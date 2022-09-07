class LogoPlanetRotateAnimController {
    _rotObj

    _r
    _cx
    _cy

    _angle = 0

    _interval

    constructor() {

    }

    animate({duration, draw, timing}) {
        let start = performance.now()

        requestAnimationFrame(function animate(time) {
            let timeFraction = (time - start) / duration
            if (timeFraction > 1) timeFraction = 1

            let progress = timing(timeFraction)

            draw(progress)

            if (timeFraction < 1) {
                requestAnimationFrame(animate)
            }
        })
    }

    animationStart() {
        /*this.animate({
            duration: 1000,
            timing: timeFraction => timeFraction,
            draw: progress => {
                console.log(progress)
            }
        })*/


        this._interval = requestAnimationFrame(async () => {
            this._angle += 1;

            const coords = await this._pointsCoordsOnCircle(
                this._cx,
                this._cy,
                this._r,
                this._angle
            )

            requestAnimationFrame(() => {
                this._rotObj.style.transform = `translate(
            ${coords.x}px,
            ${coords.y}px
            )`
            })


            //console.log(coords)

            if (this._angle >= 360) this._angle = 0;

            setTimeout(() => {
                this.animationStart()
            }, 20)
        })
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