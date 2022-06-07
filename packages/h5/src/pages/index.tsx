import biz from '@mono-app/business';
import { Button } from 'antd-mobile';
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
      <Button onClick={handleNavigate}>去详情</Button>
    </div>
  );
}
