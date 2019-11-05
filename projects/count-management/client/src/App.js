import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { UserContext } from './context/UserProvider.js'
import Auth from './components/Auth.js'
import Overview from './components/Overview.js'
import NetIncomeList from './components/NetIncomeList.js'
import ExpenseList from './components/ExpenseList.js'
import TransactionList from './components/TransactionList.js'
import Navbar from './components/Navbar.js'
import ProtectedRoute from './shared/ProtectedRoute.js'

function App() {
  const { token, logout } = useContext(UserContext)
  return (
    <div>
        {token && <Navbar logout={logout}/>}
        <Switch>
          <Route exact path='/' render={rProps => token ? <Redirect to='/overview' /> :  <Auth {...rProps}/>}/>
          <ProtectedRoute 
            path='/overview'
            component={Overview}
            redirectTo='/'
          />
          <ProtectedRoute 
            path='/netincome'
            component={NetIncomeList}
            redirectTo='/'
          />
          <ProtectedRoute 
            path='/expense'
            component={ExpenseList}
            redirectTo='/'
          />
          <ProtectedRoute 
            path='/transaction'
            component={TransactionList}
            redirectTo='/'
          />
        </Switch>
    </div>
  )
}

export default App;
