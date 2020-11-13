import Layout from './hoc/Layout/Layout'
import {Redirect, Route, Switch} from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz'
import QuizCreator from './containers/QuizCreator/QuizCreator'
import Auth from './containers/Auth/Auth'
import QuizList from './containers/QuizList/QuizList'
import {connect} from 'react-redux'
import Logout from './components/Logout/Logout'

function App(props) {
    let routes = (
        <Switch>
            <Route path='/auth' component={Auth} />
            <Route path='/quiz/:id' component={Quiz} />
            <Route path='/' component={QuizList} />
            <Redirect to='/' />
        </Switch>
    )
    if (props.isAuthenticated) {
        routes = (
            <Switch>
                <Route path='/quiz-creator' component={QuizCreator} />
                <Route path='/quiz/:id' component={Quiz} />
                <Route path='/' component={QuizList} />
                <Route path='/logout' component={Logout} />
                <Redirect to='/' />
            </Switch>
        )
    }
    return <Layout>{routes}</Layout>
}
function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps)(App)
