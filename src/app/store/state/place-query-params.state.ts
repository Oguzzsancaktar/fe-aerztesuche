import { ISearchPlaceQuery } from 'src/app/models';

export const initialPlaceQueryParamsState: ISearchPlaceQuery = {
  searchText: '',
  near: 1000,
  address: '',
  page: 1,
  pageSize: 10,
};
