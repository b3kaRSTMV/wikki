import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = { count: 0 };

export const test = createAction("PLUS");
export default createReducer(initialState, {
  [test]: function (state) {
    state.count = state.count + 1;
  }
});
