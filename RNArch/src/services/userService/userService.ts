import {User} from 'entity/userEntity';

export const USER_SERVICE_TYPE = 'UserService';

export interface UserService {
  getUser(): Promise<User>;
}
