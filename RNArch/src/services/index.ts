import {AuthServiceImpl} from './authService';
import {AuthService} from './authService/authService';
import {UserServiceImpl} from './userService';
import {UserService} from './userService/userService';

export const authService: AuthService = new AuthServiceImpl();
export const userService: UserService = new UserServiceImpl();
