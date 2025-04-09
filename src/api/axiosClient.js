import axios from "axios";

/**
 * 운영계 API URL. (운영계)
 */
const REST_API_URL = "https://rest.08liter.com";

/**
 * 개발계 API URL.
 */
const DEV_API_URL = "https://dev-rest.08liter.com";

/**
 * 개발계 PAY API URL.
 */
const DEV_PAY_API_URL = "https://dev-pay.08liter.com";

/**
 * 공팔리터 관련 헤더.
 */
function getX08LiterHeaders() {
  return {
    "X-08liter-Country": "KR",
    // 'X-08liter-Domain': 'www.08liter.com',
    "X-08liter-Language": "ko",
    // 'X-08liter-Platform': 'WP',
    "X-08liter-Token": "",
    // 'X-08liter-Tuuid': '34185914963081678028856704135299',
    // 'X-08liter-Version': '2.12.0',
    // 'X-Requested-With': 'XMLHttpRequest',
  };
}

/**
 * Axios 인스턴스 생성.
 */
export const axiosClient = axios.create({
  baseURL: DEV_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    ...getX08LiterHeaders(),
  },
});

/**
 * 개발계 Pay 클라이언트.
 */
export const devPayClient = axios.create({
  baseURL: DEV_PAY_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    ...getX08LiterHeaders(),
  },
});

/**
 * 운영계 클라이언트.
 */
export const prodClient = axios.create({
  baseURL: REST_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    ...getX08LiterHeaders(),
  },
});

/**
 * 개발계 클라이언트.
 */
export const devClient = axios.create({
  baseURL: DEV_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    ...getX08LiterHeaders(),
  },
});

// 요청 인터셉터 (토큰 자동 추가)
// axiosClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('accessToken')
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   (error) => Promise.reject(error),
// )

// 응답 인터셉터 (에러 처리)
// axiosClient.interceptors.response.use(
//   (response) => response.data,
//   (error) => {
//     console.error('API Error:', error.response || error.message)
//     return Promise.reject(error)
//   },
// )
