import {combineReducers} from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export const ReduxThunkReducers = combineReducers({
   // replaceMe: () => 'Tricking redux with dummy reducers'
    posts: postsReducer,
    users: usersReducer
});
