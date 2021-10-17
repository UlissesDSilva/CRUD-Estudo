import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';

export default () => {

  return(
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/users" component={User} />
        <Redirect from="*" to="#/"/>
      </Switch>
  )
}