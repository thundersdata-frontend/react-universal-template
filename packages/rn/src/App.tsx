import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { hide as hideSplash } from 'react-native-bootsplash';
import { useMemoizedFn, useSafeState } from '@td-design/rn-hooks';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { ThemeProvider } from '@td-design/react-native';

import { Fallback } from './components/Fallback';
import { lightTheme, darkTheme } from './theme';
import Stack from './stack';

import platform from '@mono-app/platform';

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await hideSplash({ fade: true });
    });
  }, []);

  // 手机主题切换
  const [theme, setTheme] = useSafeState(Appearance.getColorScheme());

  const themeChange = useMemoizedFn(() => {
    setTheme(Appearance.getColorScheme());
  });

  useEffect(() => {
    const listener = Appearance.addChangeListener(themeChange);

    return () => listener.remove();
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
          <NavigationContainer
            ref={platform.ref}
            fallback={<Fallback />}
            theme={theme === 'dark' ? DarkTheme : DefaultTheme}
          >
            <Stack />
          </NavigationContainer>
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
