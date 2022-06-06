export type SigninParams = {
  username: string;
  password: string;
};

export interface AuthService {
  signin(params: SigninParams): Promise<string>;
}
