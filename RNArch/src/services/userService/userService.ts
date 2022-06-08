import {User} from 'entity/userEntity';

export interface UserService {
  getUser(): Promise<User>;
}
