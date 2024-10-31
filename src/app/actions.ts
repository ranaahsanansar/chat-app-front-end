import { apiRoutes } from '@/constants/apiRoutes';
import { baseUrl } from '@/constants/urls';
import { postCall } from '@/utils/apiCalls';

export const userLogin = async (username: string, password: string) => {
  const url = `${baseUrl}${apiRoutes.userLogin}`;
  const data = {
    username,
    password,
  };
  return await postCall(url, data);
};
