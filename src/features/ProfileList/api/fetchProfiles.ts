import { api } from "@/shared/api/baseApi";
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

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await api.get<ApiResponse>("/users");
    return response.data.items;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};

export const useUsers = () => {
  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
    retry: 1,
  });

  return {
    users,
    isLoading,
    error,
    refetch,
  };
};
