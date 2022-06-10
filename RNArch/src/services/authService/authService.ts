export const AUTH_SERVICE_TYPE = 'AuthService';

export type SigningParams = {
  username: string;
  password: string;
};

export interface AuthService {
  signing(params: SigningParams): Promise<string>;
}
