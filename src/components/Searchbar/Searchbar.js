import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { SearchBarEl, FormEl, Input, Btn } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    console.log(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <SearchBarEl>
          <FormEl>
            <Btn type="submit" disabled={isSubmitting}>
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
      )}
    </Formik>
  );
}

SearchBar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
