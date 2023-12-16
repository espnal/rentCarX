'use client'
import {useState} from 'react';
import { SearchManufacturer } from '.'

const SearchBar = () => {
    const [manufacture, setManufacture] = useState("")
    const handleSearch = () => {}
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <SearchManufacturer manufacture={manufacture} setManufacture={setManufacture}/>
    </form>
  )
}

export default SearchBar
