import {StrictMode} from 'react'
import {render} from 'react-dom'
import {Main} from './Main'

const reactRender = () => {
    render(
        <StrictMode>
            <Main />
        </StrictMode>,
        document.getElementById('root')
    )
}

export {reactRender}
