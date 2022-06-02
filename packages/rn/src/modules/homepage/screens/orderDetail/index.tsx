import { RouteProp, useRoute } from '@react-navigation/native';
import { Text } from '@td-design/react-native';
import { Container } from '../../../../components/Container';

export const OrderDetail = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'OrderDetail'>>();
  const { order } = route.params;

  return (
    <Container>
      <Text>OrderDetail</Text>
      <Text>id: {order.id}</Text>
      <Text>name: {order.name}</Text>
      <Text>email: {order.email}</Text>
    </Container>
  );
};
