import {User} from 'entity/userEntity';

export const USER_SERVICE_TYPE = Symbol();

export interface UserService {
  getUser(): Promise<User>;
}
