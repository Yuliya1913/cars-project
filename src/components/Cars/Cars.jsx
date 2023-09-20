import css from './Cars.module.css';
import PropTypes from 'prop-types';

import { CarsItem } from 'components/CarsItem/CarsItem';

export const Cars = ({ allCars, addFavoriteCar, deleteFavoriteCar }) => {
  return (
    <ul className={css.list}>
      {allCars.map(oneCar => {
        return (
          <CarsItem
            key={oneCar.id}
            oneCar={oneCar}
            addFavoriteCar={addFavoriteCar}
            deleteFavoriteCar={deleteFavoriteCar}
          />
        );
      })}
    </ul>
  );
};

Cars.propTypes = {
  allCars: PropTypes.arrayOf(PropTypes.object.isRequired),
  addFavoriteCar: PropTypes.func,
  deleteFavoriteCar: PropTypes.func,
};
