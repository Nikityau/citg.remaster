class PhotoViewerUiController {

    _lgRef

    constructor(lgRef, cbCollection) {
        this._lgRef = lgRef

        this.onInit = this.onInit.bind(this)
        this.onOpenByIndex = this.onOpenByIndex.bind(this)
    }

    onInit = (lg) => {

        const { instance } = lg
        this._lgRef.current = instance;

    }

    onOpenByIndex = (index) => {
        this._lgRef.current?.openGallery(index)
    }
}

export default PhotoViewerUiController;