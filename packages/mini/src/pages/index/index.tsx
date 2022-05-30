import { useEffect } from 'react';
import { View, Text } from '@tarojs/components';

import biz from '@mono-app/business';

export default function Index() {
  const { fetchOrder, getOrder, order } = biz.useOrderService();

  useEffect(() => {
    fetchOrder();
    getOrder();
  }, []);

  return (
    <View className="index">
      <Text>Hello world!</Text>
      <View>
        <View>
          <Text>Order:</Text>
          <Text>{JSON.stringify(order)}</Text>
        </View>
      </View>
    </View>
  );
}
