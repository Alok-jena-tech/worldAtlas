import React from "react";

export const SearchFilter = ({ search, setSearch, filter, setFilter,countries,setCountries }) => {
  console.log("fil", filter);
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    console.log("setfil", event.target.value);
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    console.log(("okk hrre"))
   const sortCountry=[...countries].sort((a,b)=>{
    return value==="asc"? a.name.common.localeCompare(b.name.common):
    b.name.common.localeCompare(a.name.common);
   })
   setCountries(sortCountry)
  };
  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleInputChange}
      />

      <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div>
      <div>
        <button onClick={() => sortCountries("des")}>Des</button>
      </div>
      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
