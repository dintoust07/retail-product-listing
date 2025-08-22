import React from 'react'
import InputField from '../FormElements/InputField'
import debounce from '../../utils/debounce'
import type { ISearchBarProps } from '../../types/searchBarProps';
import styles from './styles';

export default function SearchBar({
  handleSearch
}: ISearchBarProps) { 
  const debouncedSearch = debounce(handleSearch, 500);

  return (
    <InputField
      data-testid='search-bar'
      name='search'
      placeholder='Search'
      style={styles.searchBar}
      onChange={(e: React.ChangeEvent<HTMLInputElement>)=>debouncedSearch(e.target.value)}
    />
  )
}
