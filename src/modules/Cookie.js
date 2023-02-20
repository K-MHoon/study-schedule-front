import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookieToken = (accessToken, refreshToken) => {
  const today = new Date();

  const accessTokenExpireDate = today.setMinutes(today.getMinutes() + 30);
  cookies.set('access_token', accessToken, {
    sameSite: 'strict',
    path: '/',
    expires: new Date(accessTokenExpireDate),
  });

  const refreshTokenExpireDate = today.setDate(today.getDate() + 7);
  cookies.set('refresh_token', refreshToken, {
    sameSite: 'strict',
    path: '/',
    expires: new Date(refreshTokenExpireDate),
  });
};

export const getAccessToken = () => {
  return cookies.get('refresh_token');
};

export const getRefreshToken = () => {
  return cookies.get('refresh_token');
};

export const removeCookieToken = () => {
  cookies.remove('access_token', { sameSite: 'strict', path: '/' });
  cookies.remove('refresh_token', { sameSite: 'strict', path: '/' });
};
