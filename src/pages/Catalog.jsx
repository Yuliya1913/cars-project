import { Cars } from 'components/Cars/Cars';
import { DropdownModel } from 'components/Dropdown/DropdownMake/DropdownModel';
import { useEffect, useState } from 'react';
import { themoviedbApi } from 'servise/operation';

const Catalog = () => {
  const [allCars, setAllCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [next, setNext] = useState(8);
  const [favoriteCar, setFavoriteCar] = useState([]);

  useEffect(() => {
    async function getALLCars() {
      try {
        setIsLoading(true);

        const results = await themoviedbApi();

        if (!results) {
          return;
        }
        setAllCars(results);
      } catch (error) {
        setError('Что-то пошло не так');
      } finally {
        setIsLoading(false);
      }
    }
    getALLCars();
  }, []);

  // Добавляем понравившуюся машину
  function addFavoriteCar(modal) {
    setFavoriteCar([...favoriteCar, modal]);
  }
  console.log(favoriteCar);

  useEffect(() => {
    window.localStorage.setItem('favoriteCar', JSON.stringify(favoriteCar));
  }, [favoriteCar]);

  // const data = localStorage.getItem('favoriteCar');
  // const parsedSettings = JSON.parse(data);
  // console.log(parsedSettings);

  // const rememberMe = localStorage.getItem('rememberMe') === 'true';
  // const carsFavorite = rememberMe ? localStorage.getItem('favoriteCar') : '';
  // this.setState({ carsFavorite, rememberMe });

  function deleteFavoriteCar(modal) {
    const result = favoriteCar.map(car => car.id !== modal.id);

    setFavoriteCar(result);
  }

  const seeMoreDrinks = () => {
    setNext(next + next);
  };

  const sliceCars = allCars.slice(0, next);

  const allCarsLengs = allCars.length > 0;

  return (
    <>
      <DropdownModel allCars={allCars} />

      {allCarsLengs && (
        <Cars
          allCars={sliceCars}
          deleteFavoriteCar={deleteFavoriteCar}
          addFavoriteCar={addFavoriteCar}
        />
      )}

      {allCars.length !== sliceCars.length && (
        <button
          style={{
            color: '#3470FF',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '500',
            margin: 'auto',
            display: 'block',
            border: 'none',
            backgroundColor: '#cbe0f2af',
            cursor: 'pointer',
          }}
          type="button"
          onClick={seeMoreDrinks}
        >
          Load more
        </button>
      )}
      {isLoading && !error && <b>Request in progress...</b>}
    </>
  );
};

export default Catalog;
