import { ImageBackground, ScrollView } from 'react-native';
import { Flex, helpers, Avatar } from '@td-design/react-native';

import { Container } from '../../../components/Container';
import { CustomRefreshControl } from '../../../components/CustomRefreshControl';

const { px } = helpers;
const AVATAR_SIZE = px(66);

export default function Mine() {
  return (
    <Container>
      <ScrollView refreshControl={<CustomRefreshControl />}>
        <ImageBackground source={require('../assets/bg.webp')} style={{ width: '100%', height: px(210) }}>
          <Flex style={{ height: px(202), paddingLeft: px(21), paddingTop: px(110) }}>
            <Avatar size={AVATAR_SIZE} />
          </Flex>
        </ImageBackground>
      </ScrollView>
    </Container>
  );
}
