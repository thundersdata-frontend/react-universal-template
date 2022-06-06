import { storageService } from './StorageService';
import { navigate, push, replace, goBack, goto, navigationRef } from './NavigationService';

export default {
  name: 'rn',
  ref: navigationRef,

  getToken(): Token {
    return storageService.token;
  },

  updateStorage<T>(key: string, value: T) {
    storageService.updateStorage(key, value);
  },

  getStorage(key: string) {
    return storageService.getStorage(key);
  },

  navigate,
  push,
  replace,
  goBack,
  goto,
} as Platform;
