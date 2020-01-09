import { createReducer, createActions } from "reduxsauce";

// Initial state for user reducer
const INITIAL_STATE = {
    usersList: [],
};

// It will create Action Types and Action Creators
const { Types, Creators } = createActions({
    setUsers: ["payload"],
    toggleLogin: null,
    // sagas
    GetUsers: null
});

export const userReducer = createReducer(INITIAL_STATE, {
    [Types.SET_USERS]: setUsers
});

// It will set users
function setUsers(state, { payload }) {
    return {
        ...state,
        usersList: payload
    };
}

export const UserTypes = Types;
export default Creators;
