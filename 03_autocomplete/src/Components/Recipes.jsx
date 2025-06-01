import React, { useEffect, useState } from "react";
import RecipiCard from "./RecipiCard";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes/search");
      const json = await response.json();
      setRecipes(json.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    // if (searchTerm.trim() === "") {
    //   setSuggestions([]);
    //   return;
    // }

    const filtered = recipes.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSuggestions(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="searchbar-wrapper">
        <div>
          <input
            type="search"
            placeholder="search..."
            onChange={(e) => handleSearch(e)}
          />
        </div>
        {searchTerm && (
          <div className="suggestion-wrapper">
            {suggestions.map((item) => (
              <div key={item?.id} className="suggestion">
                <li>{item?.name}</li>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="recipies-wrapper">
        {recipes.length > 0 ? (
          <>
            {recipes.map((item) => (
              <RecipiCard
                key={item?.id}
                name={item?.name}
                image={item?.image}
                rating={item?.rating}
                mealType={item?.mealType}
              />
            ))}
          </>
        ) : (
          <h1>No items found!</h1>
        )}
      </div>
    </div>
  );
};

export default Recipes;
