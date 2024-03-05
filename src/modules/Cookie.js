import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookieToken = (name, jwtToken) => {
  const token = jwtToken.token;
  const expiredDate = new Date(new Date().setTime(jwtToken.expiredTime));

  cookies.set(name, token, {
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
