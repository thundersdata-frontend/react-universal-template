import React, { FC } from 'react';
import styles from './index.module.less';

interface MessagePageProps {}

const MessagePage: FC<MessagePageProps> = () => {
  return <div className={styles.center}>Hello message page</div>;
};

export default MessagePage;
