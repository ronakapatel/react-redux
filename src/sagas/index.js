import { all, fork } from "redux-saga/effects";

import userSagas from "./user";

const forkList = sagasList => sagasList.map(saga => fork(saga));

export default function* rootSagas() {
    yield all([
        ...forkList(userSagas)
    ]);
}
