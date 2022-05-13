import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import type { FC } from 'react';
import { Home } from './screens/Home';
import { Details } from './screens/Details';
import type { NFTData } from './components/NFTCard';

export type RootStackParamList = {
  Home: undefined;
  Details: { data: NFTData };
};

export const App: FC = () => {
  const [loaded] = useFonts({
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
    /* eslint-enable @typescript-eslint/no-unsafe-assignment */
  });

  if (!loaded) {
    return null;
  }

  const Stack = createStackNavigator<RootStackParamList>();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
