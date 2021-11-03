import {ToneListener} from "./ToneReducer";

import { combineReducers } from "redux";

export const Reducers = combineReducers({
    toneReducer: ToneListener
});