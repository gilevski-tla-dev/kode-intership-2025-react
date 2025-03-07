import { DepartmentProvider } from "@/app/providers/DepartmentContext";
import { ProfileList } from "@/features/ProfileList";
import { AppTabBar } from "@/widgets/AppTabBar";

export const HomePage = () => {
  return (
    <DepartmentProvider>
      <AppTabBar />
      <ProfileList />
    </DepartmentProvider>
  );
};

export default HomePage;
