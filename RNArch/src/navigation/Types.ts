import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Route} from './Routes';

export type AppStackParamList = {
  [Route.SPLASH]: undefined;
  [Route.LOGIN]: undefined;
};

export type AllRoutes = AppStackParamList;

export type AllNames = Route;

export type AppNavigationProp<RouteName extends keyof AllRoutes = AllNames> =
  NativeStackScreenProps<AllRoutes, RouteName>;
