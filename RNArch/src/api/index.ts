import { NetworkService } from 'api/networkService';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { injectable } from 'inversify';
import { baseURL, headers } from './config';

@injectable()
export class NetworkServiceImpl implements NetworkService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({ baseURL, headers });
  }

  request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.request<T>(config);
  }
}

const networkService = new NetworkServiceImpl();
export { networkService };
