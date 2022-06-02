import { useState } from 'react';
import { API } from '@mono-app/api';
import { platform } from './utils';

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
    const order = platform.getStorage('order');
    if (order) {
      platform.navigate('OrderDetail', { order: JSON.parse(order) });
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
