import { useEffect } from "react";
import { fetchUsers } from "../api/fetchProfiles";
import ProfileCard from "./ProfileCard";

export const ProfileList = () => {
  useEffect(() => {
    // запрос при монтировании компонента
    const fetchData = async () => {
      try {
        const users = await fetchUsers();
        console.log("Fetched users:", users); //данные в консоль
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
};

export default ProfileList;
