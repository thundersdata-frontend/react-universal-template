import { Box, Button, Text } from '@td-design/react-native';
import { Container } from '../../../components/Container';

import useOrderService from '@mono-app/business/useOrderService';
import { useEffect } from 'react';
import platform from '@mono-app/platform';

export default function Homepage() {
  const { fetchOrder, order, navigateOrder } = useOrderService();

  useEffect(() => {
    fetchOrder();
  }, []);

  const handlePress = () => {
    const order = platform.getStorage('order');
    console.log(order);
  };

  const handleNavigate = () => {
    navigateOrder();
  };

  return (
    <Container hasHeader={false}>
      <Box>
        <Text>Homepage</Text>
        <Text>Order: {JSON.stringify(order)}</Text>
        <Button title="mmkv storage order" onPress={handlePress} />
        <Button title="get order then goto detail page" onPress={handleNavigate} />
      </Box>
    </Container>
  );
}
