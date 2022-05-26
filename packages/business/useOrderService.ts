import { useState } from 'react';
import { API } from '@mono-app/api';

type Order = { id: number; name: string; email: string };

export default function useOrderService() {
  const [order, setOrder] = useState<Order>();

  const getOrder = () => {
    return API.authorization.data.list.fetch();
  };

  const fetchOrder = async () => {
    const order = await mockFetch();
    setOrder(order);
  };

  return {
    order,

    getOrder,
    fetchOrder,
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
