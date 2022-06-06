import biz from '@mono-app/business';
import React, { useEffect } from 'react';

import styles from './index.module.less';

export default function HomePage() {
  const { fetchOrder, getOrder, navigateOrder, order } = biz.useOrderService();

  useEffect(() => {
    fetchOrder();
    getOrder();
  }, []);

  const handleNavigate = () => {
    navigateOrder();
  };

  return (
    <div className={styles.center}>
      <div>Order:</div>
      <div>{JSON.stringify(order)}</div>
    </div>
  );
}
