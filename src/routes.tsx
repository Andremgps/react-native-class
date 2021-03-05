import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import FiltersScreen from './pages/FiltersScreen';
import ProjectList from './pages/ProjectList';
import ProjectDetails from './pages/ProjectDetails';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="FiltersScreen" component={FiltersScreen} />
        <AppStack.Screen name="ProjectList" component={ProjectList} />
        <AppStack.Screen name="ProjectDetails" component={ProjectDetails} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
