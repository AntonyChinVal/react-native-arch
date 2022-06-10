import {NetworkService, NETWORK_SERVICE_TYPE} from 'api/networkService';
import {container} from 'container';
import {User} from 'entity/userEntity';
import {injectable} from 'inversify';
import {UserService} from 'services/userService/userService';

@injectable()
export class UserServiceImpl implements UserService {
  async getUser(): Promise<User> {
    try {
      const networkService =
        container.get<NetworkService>(NETWORK_SERVICE_TYPE);
      const response = await networkService.request<User>({
        method: 'GET',
        url: 'user/get',
      });
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}
