import React from 'react';
import CategoryListItem from './CategoryListItem.jsx';

const CategoryList = (props) => {
  // Map over the categories and retunr a LI for each Category
  const { cats } = props;
  const mappedCats = cats.map((cat) => (
    <CategoryListItem cat={cat.category} key={cat.category} />
  ));

  return (
    <div className="category-list">
      {mappedCats}
    </div>
  );
};

export default CategoryList;
