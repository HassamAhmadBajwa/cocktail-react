import React from "react";
import Loading from "./Loading";
import Cocktail from "./Cocktail";
import { useAppContext } from "../pages/Home";
const CocktailList = () => {
  const { loading, cocktails } = useAppContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <div className="title">
        <h3>no cocktails matched your search criteria</h3>
      </div>
    );
  }
  return (
    <div className="section">
      <h2 className="title">cocktails</h2>
      <div className="cocktails-center grid">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
