import { Store, select } from "@ngrx/store";

export const selectStateStoreApp = (store: Store<{ storeAppData: any }>, value: string) => {
  let data: any = null;
  store.pipe(select('storeAppData', value)).subscribe((value) => data = value).unsubscribe();
  return data || null;
};
