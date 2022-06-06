import { RouteProp, useRoute } from '@react-navigation/native';
import { Text } from '@td-design/react-native';
import { Container } from '../../../../components/Container';

export default function OrderDetail() {
  const route = useRoute<RouteProp<MainStackParamList, 'OrderDetail'>>();
  const { id, name, email } = route.params;

  return (
    <Container>
      <Text>OrderDetail</Text>
      <Text>id: {id}</Text>
      <Text>name: {name}</Text>
      <Text>email: {email}</Text>
    </Container>
  );
}
