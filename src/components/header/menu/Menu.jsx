import React from 'react';
import styles from './Menu.module.css';
import MenuItem from '../menuItem/MenuItem';

const Menu = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/categories')
      .then((r) => r.json())
      .then((json) => {
        const menu = json.slice(0, json.length - 1);

        setData(menu);
      });
  }, []);

  return (
    <nav className={styles.menuNav}>
      <ul className={styles.menuList}>
        {data &&
          data.map((item) => (
            <MenuItem label={item.label} link={item.link} key={item.id} />
          ))}
      </ul>
    </nav>
  );
};

export default Menu;
