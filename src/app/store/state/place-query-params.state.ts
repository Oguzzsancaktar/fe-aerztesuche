import { ISearchPlaceQuery } from 'src/app/core/models';

export const initialPlaceQueryParamsState: ISearchPlaceQuery = {
  searchText: '',
  near: 10,
  address: 'Köln',
};
