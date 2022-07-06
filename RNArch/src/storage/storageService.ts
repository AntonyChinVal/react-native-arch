export const STORAGE_SERVICE_TYPE = Symbol();

export interface StorageService {
  saveToken(token: string): Promise<void>;
  getToken(): Promise<string | null>;
  deleteToken(): Promise<void>;
}
