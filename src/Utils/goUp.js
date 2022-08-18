export const goUp = () => {
    document.documentElement.style.scrollBehavior = 'unset'
    window.scrollTo(0,0)
}