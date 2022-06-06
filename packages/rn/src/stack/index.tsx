import { StackNavigationOptions, CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import TabStack from './tabStack';

import OrderDetail from '../modules/homepage/screens/orderDetail';
import ModifyPassword from '../modules/user/screens/modifyPass';

const MAIN_SCREENS = [
  {
    name: 'Tab',
    component: TabStack,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'modifyPassword',
    component: ModifyPassword,
    options: {
      headerTitle: '修改密码',
    },
  },
  {
    name: 'orderDetail',
    component: OrderDetail,
    options: {
      headerTitle: '订单详情',
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
      <Stack.Group>
        {MAIN_SCREENS.map(screen => (
          <Stack.Screen key={screen.name} {...screen} />
        ))}
      </Stack.Group>
    </Stack.Navigator>
  );
};
