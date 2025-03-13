import searchFilterSlice from "@/features/SearchFilter/model/searchFilterSlice";
import themeReducer from "@/entities/theme/model/themeSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    searchFilter: searchFilterSlice,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
