import {Context, createWrapper} from "next-redux-wrapper";
import {AnyAction, applyMiddleware, createStore, Store} from "redux";
import {reducer, RootState} from "./reducers"
import thunk, {ThunkDispatch} from "redux-thunk";

const makeStore = (context: Context) => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>