export type SigningParams = {
  username: string;
  password: string;
};

export interface AuthService {
  signing(params: SigningParams): Promise<string>;
}
