import {NetworkService} from 'api/networkService';
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {baseURL, headers} from './config';

class NetworkServiceImpl implements NetworkService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({baseURL, headers});
  }

  request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.request<T>(config);
  }
}

export const networkService = new NetworkServiceImpl();
