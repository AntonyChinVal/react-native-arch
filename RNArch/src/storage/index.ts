import { StorageService } from 'storage/storageService';
import * as Keychain from 'react-native-keychain';

export class StorageServiceImpl implements StorageService {
  async saveToken(token: string): Promise<void> {
    await Keychain.setGenericPassword('username', token);
  }

  async getToken(): Promise<string | null> {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        return credentials.password;
      }
    } catch (error) {
      console.log('Error retrieving credentials from keychain', error);
    }
    return null;
  }

  async deleteToken(): Promise<void> {
    await Keychain.resetGenericPassword();
  }
}

const storageService = new StorageServiceImpl();
export { storageService };
