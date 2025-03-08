import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchFilterState {
  searchQuery: string;
  activeTab: string;
}

const initialState: SearchFilterState = {
  searchQuery: "",
  activeTab: "Все",
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
  },
});

export const { setSearchQuery, setActiveTab } = searchFilterSlice.actions;
export default searchFilterSlice.reducer;
