import {networkService} from 'api';
import {injectable} from 'inversify';
import {AuthService, SigningParams} from 'services/authService/authService';

@injectable()
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
