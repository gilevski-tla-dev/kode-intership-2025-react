import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";

export const selectActiveTab = (state: RootState) =>
  state.searchFilter.activeTab;
export const selectSearchQuery = (state: RootState) =>
  state.searchFilter.searchQuery;
export const selectSortType = (state: RootState) => state.searchFilter.sortType;

export const selectFilters = createSelector(
  [selectActiveTab, selectSearchQuery, selectSortType],
  (activeTab, searchQuery) => ({
    activeTab,
    searchQuery: searchQuery.toLowerCase(),
    selectSortType,
  })
);
