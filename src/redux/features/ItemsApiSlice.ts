import { apiSlice } from '../services/apiSlice';
interface Book {
  id: string;
  title: string;
  author: string;
  // добавьте другие поля, если они присутствуют в API-ответе
}
const filmApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    film: builder.query<Book[], void>({
      query: () => '/api/films/',
      keepUnusedDataFor: 5, // или любой другой URL для получения списка книг]
      // providesTags: ['cinema'], // ключ для реального обновления данных. // Скажем, при отправке измененных данных мы хотим чтобы сразу же отображались актуальные данные.
    }),
  }),
  overrideExisting: true,
});

export const { useFilmQuery } = filmApiSlice;
