import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchFilterState {
  searchQuery: string;
  activeTab: string;
  sortType: string | null;
}

const initialState: SearchFilterState = {
  searchQuery: "",
  activeTab: "Все",
  sortType: "alphabet",
};

export const searchFilterSlice = createSlice({
  name: "searchFilter",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
    setSortType: (state, action: PayloadAction<string | null>) => {
      state.sortType = action.payload;
    },
  },
});

export const { setSearchQuery, setActiveTab, setSortType } =
  searchFilterSlice.actions;
export default searchFilterSlice.reducer;
