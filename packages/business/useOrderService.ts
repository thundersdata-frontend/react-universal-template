import { useState } from 'react';
import { API } from '@mono-app/api';
import platform from '@mono-app/platform';

type Order = { id: number; name: string; email: string };

export default function useOrderService() {
  const [order, setOrder] = useState<Order>();

  const getOrder = () => {
    return API.authorization.data.list.fetch();
  };

  const fetchOrder = async () => {
    const order = await mockFetch();
    setOrder(order);
    platform.updateStorage('order', order);
  };

  const navigateOrder = () => {
    const order = platform.getStorage('order') as any;
    if (order) {
      platform.navigate('orderDetail', order);
    }
  };

  return {
    order,

    getOrder,
    fetchOrder,
    navigateOrder,
  };
}

function mockFetch(): Promise<Order> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'John Doe',
        email: 'test@123.com',
      });
    }, 1000);
  });
}
