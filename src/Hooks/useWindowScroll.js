import {useLayoutEffect, useRef} from 'react'

const useWindowScroll = (options={}) => {
    const {current: {x=0, y=0, atReload=false}} = useRef(options)

    useLayoutEffect(() => {
        window.scrollTo(x, y)
        if (atReload) {
            const beforeUnloadHandler = () => window.scrollTo(x, y)
            window.addEventListener('beforeunload', beforeUnloadHandler)
            return () => window.removeEventListener('beforeunload', beforeUnloadHandler)
        }
    }, [x, y, atReload])
}

export {useWindowScroll}