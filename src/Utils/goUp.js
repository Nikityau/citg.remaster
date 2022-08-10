export const goUp = () => {
    document.documentElement.style.scrollBehavior = 'unset'
    window.scrollTo(0,0)

    const scrollEv = (e) => {
        if(window.scrollY === 0) {
            window.removeEventListener('scroll', scrollEv)
            document.documentElement.style.scrollBehavior = 'smooth'
        }
    }

   window.addEventListener('scroll', scrollEv)
}