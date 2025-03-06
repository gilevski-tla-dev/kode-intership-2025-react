import { ProfileList } from "@/features/ProfileList";
import { AppTabBar } from "@/widgets/AppTabBar";

export const HomePage = () => {
  return (
    <>
      <AppTabBar />
      <ProfileList />
    </>
  );
};

export default HomePage;
