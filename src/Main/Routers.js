import {Suspense} from 'react'
import {Router, Route, Switch} from 'react-router-dom'

// services
import {browserHistory} from 'Services/browserHistory'

// pages
import HomePage from 'Pages/Home'
import NotFoundPage from 'Pages/NotFound'


const Routers = () => (
    <Router history={browserHistory}>
        <Suspense fallback={null}>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Suspense>
    </Router>
)

export {Routers}
