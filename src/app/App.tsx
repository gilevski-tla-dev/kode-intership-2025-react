import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DetailsPage } from "../pages/DetailsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store";
import GlobalStyle from "@/shared/config/GlobalStyle";
import ThemeProvider from "./providers/ThemeProvider";

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <GlobalStyle />
          <HashRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile/:id" element={<DetailsPage />} />
            </Routes>
          </HashRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
