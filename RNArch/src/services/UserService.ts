import {User} from 'entity/UserEntity';

export interface UserService {
  getUser(): Promise<User>;
}
