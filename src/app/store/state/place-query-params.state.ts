import { ISearchPlaceQuery } from 'src/app/core/models';

export const initialPlaceQueryParamsState: ISearchPlaceQuery = {
  searchText: '',
  near: 50,
  address: 'Köln',
};
