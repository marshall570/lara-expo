import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './pages/login'
import SignUp from './pages/signup'
import AxisMenu from './pages/axismenu'
import Profile from './pages/profile'
import ComponentMenu from './pages/componentmenu'
import ContentMenu from './pages/contentmenu'
import BookMenu from './pages/bookmenu'
import QuestionMenu from './pages/questionmenu'
import ExtraMenu from './pages/extramenu'

import api from './service/api'

const AppStack = createStackNavigator()

export default function Routes() {
    function handleStart() {
        api.get('/').then((response) => {
            if (response.data.server === 'on') {
                console.log('on')
            } else {
                console.log('off')
            }
        })
    }

    return (
        <NavigationContainer onReady={handleStart}>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Sign Up" component={SignUp} />
                <AppStack.Screen name="Axis" component={AxisMenu} />
                <AppStack.Screen name="Component" component={ComponentMenu} />
                <AppStack.Screen name="Content" component={ContentMenu} />
                <AppStack.Screen name="Book" component={BookMenu} />
                <AppStack.Screen name="Question" component={QuestionMenu} />
                <AppStack.Screen name="Extra" component={ExtraMenu} />
                <AppStack.Screen name="Profile" component={Profile} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

