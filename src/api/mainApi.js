import { axiosClient } from "./axiosClient";

/**
 * 메인 페이지 API.
 */
export const mainApi = {
  /**
   * 메인 페이지 데이터 조회. (메뉴 + 캠페인 리스트)
   */
  getMainData: async () => {
    const response = await axiosClient.get("/api-v200/rest/experience/main");
    return response.data;
  },

  /**
   * 메뉴 아이템 조회. (예시: /api-v200/rest/experience/Recommend?page=$page)
   */
  getMenuItems: async (link) => {
    const replacedLink = link.replace("$page", "1");
    const response = await axiosClient.get(replacedLink);
    return response.data.items;
  },
};
