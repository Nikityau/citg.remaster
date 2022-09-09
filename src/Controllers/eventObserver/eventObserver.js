class EventObserver {
    _cbCollections = []

    constructor() {
        this.addCb = this.addCb.bind(this)
        this.cbInvokes = this.cbInvokes.bind(this)
    }

    addCb(cb) {
        this._cbCollections.push(cb)
    }

    cbInvokes(index) {
        this._cbCollections.forEach(cb => cb?.(index))
    }

}

export default EventObserver;