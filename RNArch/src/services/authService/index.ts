import {networkService} from 'api';
import {AuthService, SigninParams} from 'services/authService/authService';

export class AuthServiceImpl implements AuthService {
  async signin(params: SigninParams): Promise<string> {
    try {
      const response = await networkService.request<string>({
        method: 'POST',
        url: '/auth/signin',
        data: params,
      });
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}
