import { View, Text } from '@tarojs/components';
import { useRouter } from '@tarojs/taro';

export default function OrderDetail() {
  const router = useRouter<{ id: string; name: string; email: string }>();
  const { id, name, email } = router.params;

  return (
    <View>
      <View>
        <Text>OrderDetail</Text>
      </View>
      <View>
        <Text>id: {id}</Text>
      </View>
      <View>
        <Text>name: {name}</Text>
      </View>
      <View>
        <Text>email: {email}</Text>
      </View>
    </View>
  );
}
