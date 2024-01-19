import { createAction, props } from "@ngrx/store";

export const changeStoreAppData = createAction(
  '[AppModule] Changing Store App Data',
  props<{ data: any }>()
);
