import {networkService} from 'api';
import {User} from 'entity/userEntity';
import {injectable} from 'inversify';
import {UserService} from 'services/userService/userService';

@injectable()
export class UserServiceImpl implements UserService {
  async getUser(): Promise<User> {
    try {
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
