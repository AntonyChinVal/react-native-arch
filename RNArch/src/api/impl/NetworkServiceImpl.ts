import {NetworkService} from 'api/NetworkService';
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {baseURL, headers} from '../config';

export class NetworkServiceImpl implements NetworkService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({baseURL, headers});
  }

  setAccessToken(token: string): void {
    this.client.defaults.headers.common.authorization = `Bearer ${token}`;
  }
  clearAccessToken(): void {
    delete this.client.defaults.headers.common.authorization;
  }
  request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.request<T>(config);
  }
}
