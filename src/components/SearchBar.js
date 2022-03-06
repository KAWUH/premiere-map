import React, {useState} from 'react'


const SearchBar = () => {
 const [searchInput, setSearchInput] = useState("");
 const games = [
  { title: "Domination" },
  { title: "Blitzkrieg" },
];
const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
  console.log(searchInput);
};
if (searchInput.length > 0) {
    games.filter((game) => {
    return game.title.match(searchInput);
});
}

return (
    <div>
        <input type="search" className='searchbar' placeholder="Input game title..." onChange={handleChange} value={searchInput}/>
    </div>
);

};
export default SearchBar;



