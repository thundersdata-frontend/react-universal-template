import { useEffect } from 'react';
import { View, Text, Button } from '@tarojs/components';

import biz from '@mono-app/business';

export default function Index() {
  const { fetchOrder, getOrder, navigateOrder, order } = biz.useOrderService();

  useEffect(() => {
    fetchOrder();
    getOrder();
  }, []);

  const handleNavigate = () => {
    navigateOrder();
  };

  return (
    <View className="index">
      <Text>Hello world!</Text>
      <View>
        <View>
          <Text>Order:</Text>
          <Text>{JSON.stringify(order)}</Text>
        </View>
        <Button onClick={handleNavigate}>跳转到详情</Button>
      </View>
    </View>
  );
}
