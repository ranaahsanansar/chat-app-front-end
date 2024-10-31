import { apiRoutes } from '@/constants/apiRoutes';
import { GroupCardResponse } from '@/constants/types';
import { baseUrl } from '@/constants/urls';
import { getCall } from '@/utils/apiCalls';

export const getAllGroupsCards = async (token: string | null): Promise<GroupCardResponse[]> => {
  const url = `${baseUrl}${apiRoutes.getAllGroups}`;
  const data = await getCall(url, token);
  return data.data.groups;
};

export const searchGroups = async (keyword: string): Promise<GroupCardResponse[]> => {
  const url = `${baseUrl}${apiRoutes.searchGroups}?keyword=${keyword}`;
  const data = await getCall(url);
  return data.data.groups;
};
