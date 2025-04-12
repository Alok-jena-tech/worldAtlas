import React, { useState } from "react";
import { useTransition, useEffect } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/ui/Loader";
import { CountryCard } from "../components/ui/CountryCard";
import { SearchFilter } from "../components/ui/SearchFilter";
export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
      console.log("pppppppp", countries);

    });
  }, []);
  if (isPending) return <Loader />;
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };
  const filterRegion=(country)=>{
    if(filter==="All") return country;
    return country.region === filter;
      // return filter.toLowerCase().includes(country.region.toLowerCase()) not use this
    
  
  }
  // here is the main logic for search
  const filterCountries = countries.filter((country) => {
    return searchCountry(country) && filterRegion(country) 
    ;
  });

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => {
          console.log(curCountry)
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};
