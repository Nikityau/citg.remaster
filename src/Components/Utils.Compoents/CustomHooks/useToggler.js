import {useState} from "react";

export const useToggler = (init = false) => {
    const [is, setIs] = useState(init)

    const off = () => setIs(false)
    const on = () => setIs(true)
    const toggle = () => setIs(prev => !prev)

    return [is,  { on, off, toggle }]
}