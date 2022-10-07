import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { SearchBarEl, FormEl, Input, Btn } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar(onSubmit) {
  const initialValues = {
    searchQuery: '',
  };

  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };
  return (
    <SearchBarEl>
      <Formik initialValues={{ initialValues }} onSubmit={handleSubmit}>
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
      </Formik>
    </SearchBarEl>
  );
}

SearchBar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
