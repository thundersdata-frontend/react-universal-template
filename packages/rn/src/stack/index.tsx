import { StackNavigationOptions, CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import ModifyPassword from '../screens/ModifyPassword';
import { TabStack } from './tabStack';

const MAIN_SCREENS = [
  {
    name: 'Tab',
    component: TabStack,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'ModifyPassword',
    component: ModifyPassword,
    options: {
      headerTitle: '修改密码',
    },
  },
];

const Stack = createStackNavigator();

export default () => {
  const commonStackOptions: StackNavigationOptions = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };

  return (
    <Stack.Navigator initialRouteName="Tab" screenOptions={commonStackOptions}>
      <Stack.Group screenOptions={{ headerShown: false }}>
        {MAIN_SCREENS.map(screen => (
          <Stack.Screen key={screen.name} {...screen} />
        ))}
      </Stack.Group>
    </Stack.Navigator>
  );
};
