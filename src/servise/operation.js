import axios from 'axios';

export const themoviedbApi = async () => {
  const response = await axios.get(
    `https://64904bd51e6aa71680cafa12.mockapi.io/api/v1/advert`
  );

  // console.log(response.data);
  return response.data;
};

export const themoviedbOneApi = async id => {
  const response = await axios.get(
    `https://64904bd51e6aa71680cafa12.mockapi.io/api/v1/advert/:id`
  );

  console.log(response);
  return response.data;
};

// запрос полной информации о фильме для страницы кинофильма.

// export const themoviedbMoviesApiFilm = async id => {
//   const response = await axios.get(
//     `https://64904bd51e6aa71680cafa12.mockapi.io/api/v1/advert/${id}`
//   );

//   const { title, overview, poster_path, release_date, vote_average } =
//     response.data;

//   return { title, overview, poster_path, release_date, vote_average };
// };

// // поиск фильма введенного пользователем в инпут
// export const themoviedbGetFilm = async query => {
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdiOWUxNGYzNTg3NjIwODVjNGE4YzkxYzc5ZjhlZSIsInN1YiI6IjY0NzM0NTgwNWNkMTZlMDExNmQ5NzRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8VcB9r4iSid7CNi1G7L9GBX-4TzHHGev52Q2Kpm-aQ',
//     },
//   };

//   const response = await axios.get(
//     `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
//     options
//   );
//   // const { results } = response.data;

//   return response.data;
// };

// // запрос на актерский состав Cast
// export const themoviedbApiActorFilm = async movieId => {
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdiOWUxNGYzNTg3NjIwODVjNGE4YzkxYzc5ZjhlZSIsInN1YiI6IjY0NzM0NTgwNWNkMTZlMDExNmQ5NzRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8VcB9r4iSid7CNi1G7L9GBX-4TzHHGev52Q2Kpm-aQ',
//     },
//   };

//   const response = await axios.get(
//     `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
//     options
//   );
//   const { cast } = response.data;

//   const data = cast.map(({ name, profile_path, character, id }) => {
//     return {
//       name,
//       profile_path,
//       character,
//       id,
//     };
//   });
//   return data;
// };

// // Запрос на информацию о фильме

// export const themoviedbApiInfoFilm = async movieId => {
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdiOWUxNGYzNTg3NjIwODVjNGE4YzkxYzc5ZjhlZSIsInN1YiI6IjY0NzM0NTgwNWNkMTZlMDExNmQ5NzRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8VcB9r4iSid7CNi1G7L9GBX-4TzHHGev52Q2Kpm-aQ',
//     },
//   };

//   const response = await axios.get(
//     `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
//     options
//   );
//   const { results } = response.data;
//   const dataInfo = results.map(({ author, content, id }) => {
//     return {
//       author,
//       content,
//       id,
//     };
//   });

//   return dataInfo;
// };
