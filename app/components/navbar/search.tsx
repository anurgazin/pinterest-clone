import React, { useState } from "react";
import { getImagesByTags } from "@/services/images";
import { useAppDispatch } from "@/lib/hooks";
import { fetchImages } from "@/lib/slices/imageSlice";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    // Dispatch action to search images with the provided query
    e.preventDefault();
    try {
      const tags = query ? query.toLowerCase().split(",") : [];
      dispatch(fetchImages(tags));
    } catch (error) {}
  };

  return (
    <div className="w-full max-w-xs flex justify-between text-black">
      <form
        className="w-full max-w-xs bg-gray-100 focus:outline-none focus:shadow-outline"
        onSubmit={handleSearch}
      >
        <input
          className="w-full max-w-xs bg-gray-100 border rounded focus:outline-none focus:shadow-outline"
          id="navbar-search"
          type="text"
          placeholder="Search by tags(comma-separated)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" hidden />
      </form>
    </div>
  );
};

export default Search;
