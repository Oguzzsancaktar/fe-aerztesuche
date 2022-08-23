import { ISearchPlaceQuery } from 'src/app/models';

export const initialPlaceQueryParamsState: ISearchPlaceQuery = {
  searchText: '',
  near: 10,
  address: 'Köln',
  page: 1,
  pageSize: 10,
};
