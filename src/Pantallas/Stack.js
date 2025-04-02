import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';


const stack = createStackNavigator();

const Pantallas = () => {
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name='home' component={Home}/>
        </stack.Navigator>
    </NavigationContainer>
}

export default Pantallas;