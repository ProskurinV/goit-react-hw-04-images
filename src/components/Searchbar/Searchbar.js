import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { SearchBarEl, FormEl, Input, Btn } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar({ onSubmit }) {
  const initialValues = {
    searchQuery: '',
  };

  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ initialValues }} onSubmit={handleSubmit}>
      <SearchBarEl>
        <FormEl>
          <Btn type="submit">
            <AiOutlineSearch size={30} />
          </Btn>

          <Input
            name="searchQuery"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </FormEl>
      </SearchBarEl>
    </Formik>
  );
}

SearchBar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
