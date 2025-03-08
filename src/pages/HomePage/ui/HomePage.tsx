import { AppTabBar } from "@/widgets/AppTabBar";
import { ProfileList } from "@/widgets/ProfileList";

export const HomePage = () => {
  return (
    <>
      <AppTabBar />
      <ProfileList />
    </>
  );
};

export default HomePage;
