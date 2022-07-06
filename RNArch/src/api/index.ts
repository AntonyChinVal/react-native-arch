import { NetworkService } from 'api/networkService';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { baseURL, headers } from './config';

export class NetworkServiceImpl implements NetworkService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({ baseURL, headers });
  }

  request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.request<T>(config);
  }
  setAccessToken(token: string) {
    this.client.defaults.headers.common.authorization = `Bearer ${token}`;
  }

  clearAccessToken() {
    delete this.client.defaults.headers.common.authorization;
  }
}

const networkService = new NetworkServiceImpl();
export { networkService };
