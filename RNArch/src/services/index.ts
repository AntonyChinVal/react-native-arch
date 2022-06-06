import {AuthServiceImpl} from './impl/AuthServiceImpl';
import {UserServiceImpl} from './impl/UserServiceImpl';

export const authService = new AuthServiceImpl();
export const userService = new UserServiceImpl();
