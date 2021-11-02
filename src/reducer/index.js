import {ToneListener} from "./NoteReducer";

import { combineReducers } from "redux";

export const Reducers = combineReducers({
    toneReducer: ToneListener
});