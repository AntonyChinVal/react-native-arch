import { networkService } from 'api';
import { injectable } from 'inversify';
import { AuthService, SigningParams } from 'services/authService/authService';
import { storageService } from 'storage';

@injectable()
export class AuthServiceImpl implements AuthService {
  async signing(params: SigningParams): Promise<void> {
    const response = await networkService.request<string>({
      method: 'POST',
      url: '/auth/signin',
      data: params,
    });
    await storageService.saveToken(response.data);
    networkService.setAccessToken(response.data);
  }
}
