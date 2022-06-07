// @ts-ignore
import { CommonActions, createNavigationContainerRef, StackActions } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

/**
 * 跳转到某个页面
 * @param name
 * @param params
 */
export function navigate(name: string, params?: Record<string, any>) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}

/**
 * 压入某个页面
 * @param name
 * @param params
 */
export function push(name: string, params?: Record<string, any>) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
}

/**
 * 重定向到某个页面
 */
export function replace(name: string, params?: Record<string, any>) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}

/**
 * 返回上个页面
 */
export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.canGoBack() && navigationRef.goBack();
  }
}

/**
 * 返回路由栈里的之前的某个页面
 * @param step
 */
export function goto(step = -1) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch((state: any) => {
      const routes = [...state.routes].slice(0, step);
      return CommonActions.reset({
        ...state,
        routes,
        index: routes.length - 1,
      });
    });
  }
}
