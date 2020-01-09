import { takeLatest, put, call } from "redux-saga/effects";

import UserActions, { UserTypes } from "../reducers/user";
import allServices from "../services";

const { GetUsers } = allServices;
const { setUsers } = UserActions;


// Action watcher for GET_USERS Action.
function* getUsersWatcher() {
    yield takeLatest(UserTypes.GET_USERS, getUsersHandler);
}

// Action Handler generator function for GET_USERS
function* getUsersHandler() {
    try {
        const response = yield call(GetUsers);
        yield put(setUsers(response.results));
    } catch (error) {
        console.log('Error while loading users');
    }
}

// Export all Action watchers
export default [getUsersWatcher];

