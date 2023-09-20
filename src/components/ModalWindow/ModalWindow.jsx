import css from './ModalWindow.module.css';
import { ReactComponent as CloseModal } from '../../img/closeModalWindow.svg';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const ModalWindow = ({
  setActive,
  oneCar: {
    id,
    year,
    type,
    address,
    functionalities,
    img,
    rentalPrice,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    rentalConditions,
    mileage,
  },
}) => {
  useEffect(() => {
    const handleCloseEsc = evt => {
      if (evt.code === 'Escape') {
        setActive(false);
        return;
      }
    };
    document.addEventListener('keydown', handleCloseEsc);
    return () => {
      document.removeEventListener('keydown', handleCloseEsc);
    };
  }, [setActive]);

  const strAdress = address.split(',');
  const strRentalConditions = rentalConditions.split('/');

  return (
    <div className={css.modal} onClick={() => setActive(false)}>
      <div className={css.modal_contant} onClick={e => e.stopPropagation()}>
        <CloseModal
          className={css.modal_close}
          onClick={() => setActive(false)}
        />

        {/* <img src={close} alt="closeModalWindow" className={css.modal_close} onClick={() => setActive(false)}/> */}
        <img src={img} alt="car" width={461} />
        <div>
          <ul>
            <li>{strAdress[1]}</li>
            <li>{strAdress[2]}</li>
            <li>id:{id}</li>
            <li>year:{year}</li>
            <li>Type:{type}</li>
          </ul>
          <ul>
            <li>FuelConsumption:{fuelConsumption}</li>
            <li>EngineSize:{engineSize}</li>
          </ul>
          <p>{description}</p>
        </div>
        <p>Accessories and functionalities:</p>
        <ul>
          {accessories.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <ul>
          {functionalities.map(functional => {
            return <li key={functional}>{functional}</li>;
          })}
        </ul>
        <p>Rental Conditions: </p>
        <ul>
          {strRentalConditions.map(strRentalCondition => {
            return <li>{strRentalCondition}</li>;
          })}
          <li>Mileage:{mileage}</li>
          <li>Price: {rentalPrice}</li>
        </ul>
        <button className={css.button} type="button">
          <a href="tel:+380730000000" className={css.modal_link}>
            Rental car
          </a>
        </button>
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  oneCar: PropTypes.shape({
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    functionalities: PropTypes.array.isRequired,
    year: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
    accessories: PropTypes.string.isRequired,
    rentalConditions: PropTypes.string.isRequired,
    mileage: PropTypes.string.isRequired,
  }),
  setActive: PropTypes.func,
};
