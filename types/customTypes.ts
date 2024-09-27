export type FetchedData = {
  data: Array<IItemData>;
};

export type IItemData = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRaiting;
};

type IRaiting = {
  rate: number;
  count: number;
};
