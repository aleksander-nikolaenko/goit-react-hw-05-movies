import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';

export const SearchMovieForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSearchQuery = event => {
    const searchQuery = event.target.value.trim().toLowerCase();

    setQuery(searchQuery);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(query);

    setQuery('');
  };

  return (
    <Wrapper>
      <Form>
        <Button type="submit" onClick={handleSubmit}>
          <span>
            <BsSearch size={24} />
          </span>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          name="searchQuery"
          placeholder="Search movies"
          value={query}
          onChange={handleSearchQuery}
        />
      </Form>
    </Wrapper>
  );
};

SearchMovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const Form = styled.form`
  position: relative;
`;
const Button = styled.button`
  padding: 5px;
  font-size: 1.5rem;
  line-height: 1.5rem;
  border: none;
  background-color: initial;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
  cursor: pointer;
  color: ${p => p.theme.inputTextColor};
  &:hover {
    color: ${p => p.theme.accentColor};
  }
`;
const Input = styled.input`
  width: 400px;
  height: 32px;
  padding: 10px;
  font-size: 21px;
  border: none;
  outline: none;
  color: rgba(249, 249, 249, 0.67);
  background: ${p => p.theme.inputBgColor};
  border-radius: 5px;
`;
