import axios from 'axios';
import {
  getAccessToken,
  getRefreshToken,
  setCookieToken,
} from '../modules/Cookie';

const jwtAxios = axios.create();

const refreshJWT = async (accessToken, refreshToken) => {
  const header = { headers: { Authorization: `Bearer ${accessToken}` } };
  const res = await axios.get(
    `/api/auth/refresh?refreshToken=${refreshToken}`,
    header,
  );

  console.log('---------------------');
  console.log(res.data);

  return res.data;
};

// before Request
const beforeReq = (config) => {
  const accessToken = getAccessToken();

  if (!accessToken) {
    return Promise.reject({
      response: {
        data: {
          message: 'REQUIRE_LOGIN',
        },
      },
    });
  }

  // 설정 헤더에 accessToken을 추가한다.
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

// fail request
const requestFail = (err) => {
  console.log('request error.............');

  return Promise.reject(err);
};

// before return response
const beforeRes = async (res) => {
  console.log('before return response............');
  console.log(res);
  const data = res.data;

  if (data && data.error === 'ERROR_ACCESS_TOKEN') {
    try {
      const result = await refreshJWT(getAccessToken(), getRefreshToken());

      setCookieToken('access_token', result.accessToken);
      setCookieToken('refresh_token', result.refreshToken);

      // 원래의 호출
      const originalRequest = res.config;

      originalRequest.headers.Authorization = `Bearer ${result.accessToken.token}`;

      return await axios(originalRequest);
    } catch (e) {
      return Promise.reject({
        response: {
          data: {
            message: 'REQUIRE_LOGIN',
          },
        },
      });
    }
  }
  return res;
};

// fail response
const responseFail = (err) => {
  return Promise.reject(err);
};

jwtAxios.interceptors.request.use(beforeReq, requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;
