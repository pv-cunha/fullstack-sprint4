import React from 'react';
import styles from './Menu.module.css';
import MenuItem from './menuItem/MenuItem';
import { useCategories } from '../../../context/CategoriesContext';

const Menu = () => {
  const { categories } = useCategories();

  return (
    <nav className={styles.menuNav}>
      <ul className={styles.menuList}>
        {categories &&
          categories.map((category) => (
            <MenuItem key={category.id} category={category} />
          ))}
      </ul>
    </nav>
  );
};

export default Menu;
