import {
  combineReducers 
} from "redux";

import settingsSlice from "./settings/reducer";

export default combineReducers({
  "Settings": settingsSlice.reducer,
});