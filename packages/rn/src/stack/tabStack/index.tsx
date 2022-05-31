import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Homepage from '../../screens/Homepage';
import Mine from '../../screens/Mine';

const Tab = createBottomTabNavigator();
const tabItems: { name: string; label: string; component: () => JSX.Element }[] = [
  {
    name: 'Homepage',
    component: Homepage,
    label: '首页',
  },
  {
    name: 'Mine',
    component: Mine,
    label: '我的',
  },
];

export const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Homepage"
      screenOptions={{
        // 懒加载TabScreen
        lazy: true,
        // 不显示TabScreen的header
        headerShown: false,
      }}
    >
      {tabItems.map(item => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            title: item.label,
            tabBarLabel: () => <Text>{item?.label}</Text>,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
