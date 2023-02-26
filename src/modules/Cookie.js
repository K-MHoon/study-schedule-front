import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookieToken = (accessToken, refreshToken, expiredTime) => {
  const expiredDate = new Date(new Date().setTime(expiredTime));

  cookies.set('access_token', accessToken, {
    sameSite: 'strict',
    path: '/',
    expires: expiredDate,
  });

  cookies.set('refresh_token', refreshToken, {
    sameSite: 'strict',
    path: '/',
    expires: expiredDate,
  });
};

export const getAccessToken = () => {
  return cookies.get('access_token');
};

export const getRefreshToken = () => {
  return cookies.get('refresh_token');
};

export const removeCookieToken = () => {
  cookies.remove('access_token', { sameSite: 'strict', path: '/' });
  cookies.remove('refresh_token', { sameSite: 'strict', path: '/' });
};
