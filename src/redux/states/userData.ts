export interface UserDataState {
  loading: boolean;
  data: data;
}

export interface data {
  favorites: number[];
  user: { _id: string; username: string };
}
