import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import { Provider } from 'react-redux';
import store from 'store';
import Users from 'screens/Users';
import { RoutesName } from 'constant';
import Chat from 'screens/Chat';
import { IUser } from 'store/slices/usersSlice';

interface RootStackParamList extends ParamListBase {
  [RoutesName.LOGIN]: undefined
  [RoutesName.USERS]: undefined
  [RoutesName.CHAT]: {
    data: IUser
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(){
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator initialRouteName={RoutesName.LOGIN}>
            <Stack.Screen name={RoutesName.LOGIN} component={Login} options={{headerShown : false}}/>
            <Stack.Screen name={RoutesName.USERS} component={Users} options={{headerShown : false}}/>
            <Stack.Screen name={RoutesName.CHAT} component={Chat} options={{headerShown : false}}/>
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;
export type {
  RootStackParamList
}