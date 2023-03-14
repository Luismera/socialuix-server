import { Express } from 'express-serve-static-core';

interface TokenData {
  userId: string;
  name: string;
  email: string;
  iat: string;
  exp: string;
}

declare module 'express-serve-static-core' {
  interface Request {
    tokenData: TokenData;
  }
}
