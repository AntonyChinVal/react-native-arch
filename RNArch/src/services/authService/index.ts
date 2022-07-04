import { networkService } from 'api';
import { NetworkService } from 'api/networkService';
import { injectable } from 'inversify';
import { AuthService, SigningParams } from 'services/authService/authService';

@injectable()
export class AuthServiceImpl implements AuthService {
  async signing(params: SigningParams): Promise<string> {
    const networkServiceInner: NetworkService = networkService;
    const response = await networkServiceInner.request<string>({
      method: 'POST',
      url: '/auth/signin',
      data: params,
    });
    return response.data;
  }
}
