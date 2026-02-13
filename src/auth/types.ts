export interface JwtPayload {
  sub: number;
  email: string;
}
export interface RequestWithUser extends Request {
  user: JwtPayload;
}
export interface AuthUserResponse {
  accessToken: string;
  refreshToken: string;
  userData: {
    id: number;
    email: string;
    name: string;
  };
}