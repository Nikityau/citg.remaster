export default class NavigationController {
    _home
    _projects
    _team

    _homeAttr
    _projectsAttr
    _teamAttr

    _lastCoords;

    DIRECTION_HOME
    DIRECTION_PROJECTS
    DIRECTION_TEAM

    constructor(homeAttr, projectsAttr, teamAttr) {
        this._homeAttr = homeAttr
        this._projectsAttr = projectsAttr
        this._teamAttr = teamAttr

        this.DIRECTION_HOME = homeAttr
        this.DIRECTION_PROJECTS = projectsAttr
        this.DIRECTION_TEAM = teamAttr

        this.moveDir = this.moveDir.bind(this)
    }

    init() {
        this._home = document.querySelector(`[data-navigation-link=\'${this._homeAttr}\']`)
        this._projects = document.querySelector(`[data-navigation-link=\'${this._projectsAttr}\']`)
        this._team = document.querySelector(`[data-navigation-link=\'${this._teamAttr}\']`)
    }

    moveDir(location) {
        if(!this._team || !this._home || !this._projects) {
            this.init()
        }

        this._lastCoords = this.getCoords(this.getDirection(location) || undefined)

        return this._lastCoords
    }

    getDirection(location) {
        if(location.includes(this._projectsAttr)) {
            return this.DIRECTION_PROJECTS
        }
        if(location.includes(this._teamAttr)) {
            return this.DIRECTION_TEAM
        }
        if(location.includes(this._homeAttr) || location.includes('/')) {
            return this.DIRECTION_HOME
        }

        return undefined
    }

    getCoords(dir) {
        if(!dir) return

        const coords = {}

        if(dir === this.DIRECTION_HOME)
            coords.x = this._home.offsetLeft + this._home.clientWidth / 2;
        if(dir === this.DIRECTION_PROJECTS)
            coords.x = this._projects.offsetLeft + this._home.clientWidth / 2;
        if(dir === this.DIRECTION_TEAM)
            coords.x = this._team.offsetLeft + this._home.clientWidth / 2;

        console.log(coords.x)

        coords.y = this._home.offsetTop + this._home.clientHeight * .7;

        return coords;
    }
}