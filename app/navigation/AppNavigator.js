import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListingEditScreen from '../screens/ListingEditScreen';
import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from '../navigation/FeedNavigator';
import AccountNavigator from '../navigation/AccountNavigator'
import NewListingButton from './NewListingButton';
import navigation from './rootNavigation';
import useNotifications from '../hooks/useNotifications';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    useNotifications((notification) => {
        navigation.navigate('Account');
    });

    return (
    <Tab.Navigator>
        <Tab.Screen
         name= "Feed" 
         component={FeedNavigator}
         options = {{
             tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="home" size={size} color={color} />
         }}
        />
        <Tab.Screen 
         name= "ListingEdit" 
         component={ListingEditScreen}
         options= {({ navigation }) => ({
            tabBarButton: () => ( <NewListingButton onPress={() => navigation.navigate("ListingEdit")} /> ),
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="plus-circle" size={size} color={color} /> ),
         })}
        />
        <Tab.Screen
         name= "Account"
         component={AccountNavigator}
         options = {{
            tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="account" size={size} color={color} />
         }}
        />
    </Tab.Navigator>
    );
};

export default AppNavigator;