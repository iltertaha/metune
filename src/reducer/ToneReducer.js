import { TONE_CHANGED} from "../action/actionTypes";

const initState = {
    currentTone: {toneName: "", cent: "", freq: "", octave: ""}
};

export const ToneListener = (state = initState, action) => {
    switch (action.type) {
        case TONE_CHANGED:
            return {
                ...state,
                currentTone: action.currentTone
            };
        default:
            return state;
    }
}