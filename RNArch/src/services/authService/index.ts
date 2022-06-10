import {networkService} from 'api';
import {AuthService, SigningParams} from 'services/authService/authService';

export class AuthServiceImpl implements AuthService {
  async signing(params: SigningParams): Promise<string> {
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
