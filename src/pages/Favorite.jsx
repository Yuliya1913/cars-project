const Favorite = () => {
  const data = localStorage.getItem('favoriteCar');
  const parsedSettings = JSON.parse(data);
  console.log(parsedSettings);
  return <div></div>;
};

export default Favorite;
