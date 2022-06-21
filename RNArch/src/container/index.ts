import {Container} from 'inversify';
import {AuthServiceImpl} from 'services/authService';
import {AuthService, AUTH_SERVICE_TYPE} from 'services/authService/authService';
import {UserServiceImpl} from 'services/userService';
import {UserService, USER_SERVICE_TYPE} from 'services/userService/userService';

const container = new Container();

container.bind<AuthService>(AUTH_SERVICE_TYPE).to(AuthServiceImpl);
container.bind<UserService>(USER_SERVICE_TYPE).to(UserServiceImpl);

export {container};
