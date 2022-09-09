import anime from "animejs";


class LogoPlanetRotateAnimController {
    _rotObj

    _r
    _cx
    _cy

    _angle = 0

    _interval

    _coordsCache = {}

    constructor() {

    }

    _changeCoords() {
        this._angle += 1;

        if (this._coordsCache[`angle_${this._angle}`] !== undefined) {
            return this._coordsCache[`angle_${this._angle}`]
        }

        const coords = this._pointsCoordsOnCircle(
            this._cx,
            this._cy,
            this._r,
            this._angle
        )

        this._coordsCache[`angle_${this._angle}`] = {...coords}

        return this._coordsCache[`angle_${this._angle}`]
    }


    animationStart() {
       /* const self = this

        anime({
            targets: '.logo-planet__round-circle',
            loop: true,
            delay: 500,
            duration: 3000,
            easing: 'linear',
            translateX: function (el, i) {
                const coords = self._changeCoords(true)
                console.log(coords)
               return -2000
            }
        })*/

        /*
        * translateX: () => this._changeCoords(true).x,
            translateY: () => this._changeCoords(false).y,
        *
        * */

        /*this.animate({
            duration: 1000,
            timing: timeFraction => timeFraction,
            draw: progress => {
                console.log(progress)
            }
        })*/

        this._interval = setTimeout(async () => {

            const coords = await this._changeCoords()

            requestAnimationFrame(() => {
                this._rotObj.style.transform = `translate(
                    ${coords.x}px,
                    ${coords.y}px
                )`
            })


            if (this._angle >= 360) this._angle = 0;

            //this.animationStart()

            setTimeout(() => {
                this.animationStart()
            }, 300)
        }, 20)
    }

    animationStop() {
        clearTimeout(this._interval)
    }

    _toRadian(angle) {
        return (2 * Math.PI * angle) / 360
    }

     _pointsCoordsOnCircle(cx, cy, r, angle) {
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