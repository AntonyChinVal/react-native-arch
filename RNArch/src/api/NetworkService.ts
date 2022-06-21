import {AxiosRequestConfig, AxiosResponse} from 'axios';

export const NETWORK_SERVICE_TYPE = Symbol();

export interface NetworkService {
  request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}
