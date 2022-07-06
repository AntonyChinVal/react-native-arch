export const AUTH_SERVICE_TYPE = Symbol();

export type SigningParams = {
  username: string;
  password: string;
};

export interface AuthService {
  signing(params: SigningParams): Promise<void>;
}
