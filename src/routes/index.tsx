import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Events from '../pages/Events';
import News from '../pages/News';
import Liturgy from '../pages/Liturgy';
import Informens from '../pages/Informens';
import Teams from '../pages/Teams';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';

const MainNavigation = createDrawerNavigator();

const MainNavigationRoutes: React.FC = () => (
  <MainNavigation.Navigator
    drawerStyle={{ backgroundColor: '#326b97' }}
    drawerContentOptions={{
      labelStyle: { color: '#fff', fontSize: 16 },
      activeTintColor: '#0677d0',
      activeBackgroundColor: '#0677d0',
      style: { width: '100%', marginLeft: 0 },
    }}
  >
    <MainNavigation.Screen
      options={{ title: 'Início' }}
      name="Home"
      component={Home}
    />
    <MainNavigation.Screen
      options={{ title: 'Quadrante' }}
      name="SignIn"
      component={SignIn}
    />
    <MainNavigation.Screen
      options={{ title: 'Eventos' }}
      name="Events"
      component={Events}
    />
    <MainNavigation.Screen
      options={{ title: 'Notícias' }}
      name="News"
      component={News}
    />
    <MainNavigation.Screen
      options={{ title: 'Liturgia' }}
      name="Liturgy"
      component={Liturgy}
    />
    <MainNavigation.Screen
      options={{ title: 'Informens' }}
      name="Informens"
      component={Informens}
    />
    <MainNavigation.Screen
      options={{ title: 'Equipes' }}
      name="Teams"
      component={Teams}
    />
    <MainNavigation.Screen
      options={{ title: 'Galeria' }}
      name="Gallery"
      component={Gallery}
    />
    <MainNavigation.Screen
      options={{ title: 'Contato' }}
      name="Contact"
      component={Contact}
    />
  </MainNavigation.Navigator>
);

export default MainNavigationRoutes;
