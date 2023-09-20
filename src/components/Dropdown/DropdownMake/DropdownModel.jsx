import { useState } from 'react';
import css from './DropdownModel.module.css';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { themoviedbOneApi } from 'servise/operation';

export const DropdownModel = ({ allCars }) => {
  //   console.log(allCars);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [carId, setCarId] = useState('');

  const handleAction = input => {
    setInputValue(input);
    console.log(input);
    const { id } = allCars.find(car => car.make === `${input}`);
    setCarId(id);
  };

  console.log(carId);

  async function getOneCars(carId) {
    try {
      // setIsLoading(true);

      await themoviedbOneApi(carId);
    } catch (error) {
      // setError('Что-то пошло не так');
    } finally {
      // setIsLoading(false);
    }
  }
  return (
    <div>
      <div className={css.dropdown_wrapper}>
        <label>
          Car brand
          <input
            className={css.dropdown_text}
            type="text"
            name="firstName"
            placeholder="Enter the text"
            defaultValue={inputValue}
          />
          {!isOpen ? (
            <RiArrowDownSLine
              size={20}
              onClick={() => setIsOpen(prev => !prev)}
            />
          ) : (
            <RiArrowUpSLine
              size={20}
              onClick={() => setIsOpen(prev => !prev)}
            />
          )}
        </label>
        {isOpen && (
          <nav className={css.dropdown_nav}>
            <ul className={css.dropdown_list}>
              {allCars.map(oneCar => {
                return (
                  <li
                    key={oneCar.id}
                    className={css.dropdown_item}
                    onClick={() => handleAction(oneCar.make)}
                  >
                    {oneCar.make}
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
        <label>
          Price/ 1 hour
          <input type="text" name="lastName" placeholder="To $" />
        </label>
        <label>
          Сar mileage / km
          <input type="text" name="firstName" placeholder="From" />
        </label>
        <label>
          <input type="text" name="firstName" placeholder="To" />
        </label>
        <button onClick={() => getOneCars}>Submit</button>
      </div>
    </div>
  );
};
