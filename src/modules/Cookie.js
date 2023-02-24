import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookieToken = (
  accessToken,
  accessExpiredTime,
  refreshToken,
  refreshExpiredTime,
) => {
  cookies.set('access_token', accessToken, {
    sameSite: 'strict',
    path: '/',
    expires: new Date(new Date().setTime(accessExpiredTime)),
  });

  cookies.set('refresh_token', refreshToken, {
    sameSite: 'strict',
    path: '/',
    expires: new Date(new Date().setTime(refreshExpiredTime)),
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
