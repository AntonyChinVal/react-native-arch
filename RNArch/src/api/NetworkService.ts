import {AxiosRequestConfig, AxiosResponse} from 'axios';

export interface NetworkService {
  request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}
