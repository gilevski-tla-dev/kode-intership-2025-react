import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { DetailsPage } from "@/pages/DetailsPage";

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:id" element={<DetailsPage />} />
      </Routes>
    </HashRouter>
  );
};
