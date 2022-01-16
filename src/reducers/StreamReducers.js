import {combineReducers} from "redux";
import authReducers from "./authReducers";
import {reducer as formReducer} from "redux-form";
import StreamReducer from "./StreamReducer";

export default combineReducers({
   auth: authReducers,
   form: formReducer,
   streams: StreamReducer
});

