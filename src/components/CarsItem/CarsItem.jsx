import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { useState } from 'react';
import css from './CarsItem.module.css';
import poster from '../../img/no-poster-cars.png';
import { ReactComponent as Heard } from '../../img/normal.svg';
import { ReactComponent as HeardBlue } from '../../img/active.svg';
import PropTypes from 'prop-types';

export const CarsItem = ({ oneCar, addFavoriteCar }) => {
  const {
    id,
    make,
    year,
    model,
    type,
    address,
    functionalities,
    img,
    rentalPrice,
    rentalCompany,
  } = oneCar;

  const [modalActive, setModalActive] = useState(false);
  const [clickHard, setClichHard] = useState(false);

  const strAdress = address.split(',');

  // useEffect(() => {
  //   localStorage.setItem('clickHard', JSON.stringify(clickHard));
  // });

  // const result = localStorage.getItem('clickHard');
  // const parsedResult = JSON.parse(result);
  // // console.log(parsedResult);

  function handleAddCar(oneCar) {
    setClichHard(prev => !prev);
    addFavoriteCar(oneCar);
  }
  // console.log(clickHard);

  return (
    <div className={css.container}>
      {/* <button onClick={() => setClichHard(prev => !prev)}> */}
      {/* <button onClick={() => handleAdd(modal)}> */}
      {/* {!clickHard ? (
        <Heard className={css.btn_heard} />
      ) : (
        <HeardBlue className={css.btn_heard} />
      )} */}

      {!clickHard && (
        <Heard onClick={() => handleAddCar(oneCar)} className={css.btn_heard} />
      )}

      {clickHard && <HeardBlue className={css.btn_heard} />}
      {/* </button> */}

      <img
        src={img || poster}
        alt="car"
        loading="lazy"
        width={274}
        height={268}
        className={css.img}
      />
      <div className={css.wrapper}>
        <ul className={css.data}>
          <li className={css.make}>{make} </li>
          <li className={css.mode}>{model},</li>
          <li>{year}</li>
          <li className={css.price}>{rentalPrice}</li>
        </ul>

        <ul className={css.adress}>
          <li className={css.adress_list}>{strAdress[1]}</li>
          <li className={css.adress_list}>{strAdress[2]}</li>
          <li className={css.adress_list}>{rentalCompany}</li>
        </ul>
        <ul className={css.function}>
          <li className={css.function_list}>{type}</li>
          <li className={css.function_list}>{model}</li>
          <li className={css.function_list}>{id}</li>
          <li className={css.function_list}>{functionalities[0]}</li>
        </ul>
      </div>
      <button className={css.button_list} onClick={() => setModalActive(true)}>
        Learn more
      </button>
      {modalActive && (
        <ModalWindow
          oneCar={oneCar}
          active={modalActive}
          setActive={setModalActive}
        />
      )}
    </div>
  );
};

CarsItem.propTypes = {
  oneCar: PropTypes.object.isRequired,
  addFavoriteCar: PropTypes.func.isRequired,
  deleteFavoriteCar: PropTypes.func.isRequired,
};
