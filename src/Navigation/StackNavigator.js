import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SideDrawer from './Drawer'
import CompleteProfile from '../screens/Auth/CompleteProfile'
import NewCustomer from '../components/NewCustomer'
import Address from '../components/AddAddress'
import AddContactPerson from '../components/AddContactPerson'
import Splash from '../screens/Splash/Splash'
import Choice from '../screens/Splash/Choice'
import Login from '../screens/Auth/Login'
import Signup from '../screens/Auth/Signup'
import AddOrganisation from '../screens/Auth/AddOrganisation'
import SetupOrganization from '../screens/Auth/SetupOrganization'

const Stack = createNativeStackNavigator()

export default StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name='Choice' component={Choice} options={{ headerShown: false }} />
            <Stack.Screen name='AddOrganisation' component={AddOrganisation} options={{ headerShown: false }} />
            <Stack.Screen name='SetupOrganization' component={SetupOrganization} options={{ headerShown: false }} />
            <Stack.Screen name='SideDrawer' component={SideDrawer} options={{ headerShown: false }} />
            <Stack.Screen name='CompleteProfile' component={CompleteProfile} options={{ headerShown: false }} />
            <Stack.Screen name='NewCustomer' component={NewCustomer} options={{ headerShown: false }} />
            <Stack.Screen name='Address' component={Address} options={{ headerShown: false }} />
            <Stack.Screen name='AddContactPerson' component={AddContactPerson} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
