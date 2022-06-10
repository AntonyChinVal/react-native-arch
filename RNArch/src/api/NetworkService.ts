import {AxiosRequestConfig, AxiosResponse} from 'axios';

export const NETWORK_SERVICE_TYPE = 'NetworkService';

export interface NetworkService {
  request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}
