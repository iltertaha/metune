import { TONE_CHANGED } from "./actionTypes";

export const changeCurrentTone = tone => ({
    type: TONE_CHANGED,
    currentTone: tone
});
