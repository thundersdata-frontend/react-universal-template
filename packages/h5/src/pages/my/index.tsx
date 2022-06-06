import React, { FC } from 'react';
import styles from './index.module.less';

interface MyPageProps {}

const MyPage: FC<MyPageProps> = () => {
  return <div className={styles.center}>Hello mine page</div>;
};

export default MyPage;
