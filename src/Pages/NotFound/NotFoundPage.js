import {Helmet} from 'react-helmet-async'

// component
import {NotFound} from 'Components/Common'

// hooks
import {useWindowScroll} from 'Hooks'


const NotFoundPage = () => {
    useWindowScroll({x: 0, y: 0, atReload: true})

    return (
        <>
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <NotFound />
        </>
    )
}

export {NotFoundPage}