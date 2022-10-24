import { store } from "../Toolkit/store";

export type Children = {
  children: React.ReactNode;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
