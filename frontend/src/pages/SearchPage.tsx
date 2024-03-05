// import { useSearchRestaurants } from "@/api/RestaurantApi";
// import CuisineFilter from "@/components/CuisineFilter";
// import PaginationSelector from "@/components/PaginationSelector";
// import SearchBar, { SearchForm } from "@/components/SearchBar";
// import SearchResultCard from "@/components/SearchResultCard";
// import SearchResultInfo from "@/components/SearchResultInfo";
// import SortOptionDropdown from "@/components/SortOptionDropdown";
// import { useState } from "react";
import { useSearchRestaurants } from "@/api/RestaurantApi";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useState } from "react";
import { useParams } from "react-router-dom";

// export type SearchState = {
//   searchQuery: string;
//   page: number;
//   selectedCuisines: string[];
//   sortOption: string;
// };
export type SearchState = {
  searchQuery: string;
  page:number;
}

const SearchPage = () => {
  const { city } = useParams();

  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page:1
  })


  const { results, isLoading } = useSearchRestaurants(searchState,city);

  const setPage =(page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }))
  }

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState)=>({
      ...prevState,
      searchQuery: searchFormData.searchQuery
    }))
  }
  const resetSearch = () => {
    setSearchState((prevState)=>({
      ...prevState,
      searchQuery: ""
    }))
  }

  if (isLoading) {
    <span>loading....</span>
  }
  if(!results?.data || !city) {
    return <span>No results found</span>
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list">
        insert cuisines here
      </div>
      <div id="main-content" className="flex flex-col gap-5">
        
        <SearchBar 
        searchQuery={searchState.searchQuery}
        onSubmit={setSearchQuery} 
        placeHolder="search by cuisine or restaurant"
        onReset={resetSearch}
        ></SearchBar>
        
        <SearchResultInfo total={results.pagination.total} city={city}></SearchResultInfo>
        <PaginationSelector 
          page={results.pagination.page}
          pages={results.pagination.pages}
          onPageChange={setPage}
        
        ></PaginationSelector>
        {
          results?.data.map((restaurant)=>{
            return (
              <SearchResultCard restaurant={restaurant}></SearchResultCard>
            )
          })
        }
        <PaginationSelector 
          page={results.pagination.page}
          pages={results.pagination.pages}
          onPageChange={setPage}
        
        ></PaginationSelector>
      </div>

      {/* User searched for {city}
      <span>
        {results?.data.map((restaurant) => {
          return (
            <span className="flex ">
              found - {restaurant.restaurantName}, {restaurant.city}
            </span>
          );
        })}
      </span> */}
    </div>
  );
};

export default SearchPage;
