export default interface ISearchPlaceQuery {
  searchText: string;
  near: number;
  address: string;
  page?: number;
  pageSize?: number;
}
