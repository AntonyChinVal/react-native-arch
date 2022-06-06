import {networkService} from 'api';
import {AuthService, SigninParams} from 'services/AuthService';

export class AuthServiceImpl implements AuthService {
  async signin(params: SigninParams): Promise<string> {
    try {
      const response = await networkService.request<string>({
        method: 'POST',
        url: '/auth/signin',
        data: params,
      });
      return response;
    } catch (e) {
      throw e;
    }
  }
}
