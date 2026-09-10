import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from './screens/FeedScreen';
import RankingsScreen from './screens/RankingsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { MatchesProvider } from './context/MatchesContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <MatchesProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: '#0B1410', borderTopColor: '#223229' },
            tabBarActiveTintColor: '#F2F0E6',
            tabBarInactiveTintColor: '#5E6E63',
            tabBarLabelStyle: { fontSize: 10, textTransform: 'uppercase', letterSpacing: 0.5 },
          }}
        >
          <Tab.Screen name="Feed" component={FeedScreen} options={{ title: 'Feed' }} />
          <Tab.Screen name="Classements" component={RankingsScreen} options={{ title: 'Classements' }} />
          <Tab.Screen name="Favoris" component={FavoritesScreen} options={{ title: 'Favoris' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </MatchesProvider>
  );
}
