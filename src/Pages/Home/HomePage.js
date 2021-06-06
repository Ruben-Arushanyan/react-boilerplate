import {Helmet} from 'react-helmet-async'

// component
import {Home} from 'Components/Features/Home'

// hooks
import {useWindowScroll} from 'Hooks'

const HomePage = () => {
    useWindowScroll({x: 0, y: 0, atReload: true})

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Home />
        </>
    )
}

export {HomePage}