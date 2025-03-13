import ThemeToggle from "@/entities/theme/ui/ThemeToggle";
import { AppTabBar } from "@/widgets/AppTabBar";
import { ProfileList } from "@/widgets/ProfileList";

export const HomePage = () => {
  return (
    <>
      <ThemeToggle />
      <AppTabBar />
      <ProfileList />
    </>
  );
};

export default HomePage;
