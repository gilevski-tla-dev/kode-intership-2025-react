import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store";
import GlobalStyle from "@/shared/config/GlobalStyle";
import ThemeProvider from "./providers/ThemeProvider";
import { Router } from "./routers/router";

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
