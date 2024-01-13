export class PaginatedData<T>{
  constructor(
    public data: T[],
    public count: number) {}
}
