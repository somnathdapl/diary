import LoginScreen from '../Containers/LoginScreen'
import Dashboard from '../Containers/Dashboard'
import AuthLoadingScreen from '../Containers/AuthLoading'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import NavReducer from '../Redux/NavigationRedux'

// Manifest of possible screens
const AuthNavStack = createStackNavigator(
    {
        LoginScreen: { screen: LoginScreen }
    },
    {
        headerMode: 'none',
        initialRouteName: 'LoginScreen',
    }
)

const AppNavStack = createStackNavigator(
    {
        Dashboard: { screen : Dashboard }
    },
    {
        headerMode: 'none',
        initialRouteName: 'Dashboard'
    }
)

const switchableNavStack = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: AuthNavStack,
        App: AppNavStack
    },
    {
        initialRouteName: 'AuthLoading'
    }
)

const { navReducer, middleware } = NavReducer(switchableNavStack)

/* reduxify navigator */
const RootApp = reduxifyNavigator(switchableNavStack, 'root')

const mapStateToProps = state => ({
  state: state.nav
})

const AppWithNavigationState = connect(mapStateToProps)(RootApp)

export { AppWithNavigationState, navReducer, middleware }