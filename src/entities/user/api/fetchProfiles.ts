import { api } from "@/shared/api/baseApi";
import { departmentTranslate } from "@/shared/utils/departmentTranslate";
import { useQuery } from "@tanstack/react-query";

export interface User {
  id: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  userTag: string;
  department: string;
  position: string;
  birthday: string;
  phone: string;
}

// Тип для ответа API
interface ApiResponse {
  items: User[];
}

export const fetchUsers = async (exampleKey: string): Promise<User[]> => {
  try {
    const url = `/users?__example=${exampleKey}`;
    const response = await api.get<ApiResponse>(url);
    return response.data.items;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};

export const useUsers = (activeTab: string) => {
  const exampleKey = departmentTranslate[activeTab] || "all";

  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery<User[], Error>({
    queryKey: ["users", exampleKey],
    queryFn: () => fetchUsers(exampleKey),
    staleTime: 5 * 60 * 1000, // кэш на 5 минут.
    retry: 1,
    refetchOnReconnect: true,
  });

  return { users, isLoading, error, refetch };
};
