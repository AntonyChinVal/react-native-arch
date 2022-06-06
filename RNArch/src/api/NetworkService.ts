import {AxiosRequestConfig, AxiosResponse} from 'axios';

export interface NetworkService {
  setAccessToken(token: string): void;
  clearAccessToken(): void;
  request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}
