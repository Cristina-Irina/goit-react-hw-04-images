import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchForm, SearchButton, SearchInput } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';

const Notification = styled.div`
  background-color: #ff6b6b;
  color: ${props => props.theme.colors.white};
  text-align: center;
  padding: 10px 15px;
  font-weight: bold;
`;

const Searchbar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState('');

  const onChangeInput = e => {
    const value = e.currentTarget.value.trim().toLowerCase();
    setSearchValue(value);
  };

  const onSearchImage = e => {
    e.preventDefault();
    if (!searchValue) {
      showError('Enter text for search.');
      return;
    }

    onSubmit(searchValue);
    setSearchValue('');
    setError('');
  };

  const showError = errorMessage => {
    setError(errorMessage);
    setTimeout(() => {
      setError('');
    }, 2000);
  };

  return (
    <SearchForm onSubmit={onSearchImage}>
      <SearchButton type="submit">
        <BsSearch size="16" />
      </SearchButton>
      <SearchInput
        id="input"
        type="text"
        autoComplete="off"
        autoFocus
        onChange={onChangeInput}
        placeholder="Search images and photos"
        value={searchValue}
      />
      {error && <Notification>{error}</Notification>}
    </SearchForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
