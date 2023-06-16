import { useState } from 'react';
import { Container } from 'utils/Container';
import {
  FormSearch,
  SearchFormWrap,
  FormInput,
  FormButton,
} from './SearchForm.styled';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const formSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <>
      <Container>
        <SearchFormWrap>
          <FormSearch onSubmit={formSubmit}>
            <div>
              <FormInput
                type="text"
                placeholder="Enter name of movie..."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
            </div>

            <FormButton type="submit">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEipZg-O6T2kLEu2GPEsOlGf4_--3Q74UjTg&usqp=CAU"
                alt="search"
                width="30"
                height="30"
              ></img>
            </FormButton>
          </FormSearch>
        </SearchFormWrap>
      </Container>
    </>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
