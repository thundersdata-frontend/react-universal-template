import { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import biz from '@mono-app/business';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ children, title }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>{children}</Text>
    </View>
  );
};

const App = () => {
  const { fetchOrder, getOrder, order } = biz.useOrderService();

  useEffect(() => {
    fetchOrder();
    getOrder();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Section title="Order">{JSON.stringify(order)}</Section>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default App;
