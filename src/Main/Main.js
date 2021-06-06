import {Provider} from 'react-redux'
import {HelmetProvider} from 'react-helmet-async'

import {Routers} from './Routers'

// store
import {store} from 'Store'

const Main = () => {
    return (
        <HelmetProvider>
            <Provider store={store}>
                <Routers />
            </Provider>
        </HelmetProvider>
    )
}

export {Main}
