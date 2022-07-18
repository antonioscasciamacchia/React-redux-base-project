import { takeLatest, put, delay} from "redux-saga/effects"
import actions from "./actions";

function* incrementAsync() {
    yield delay(1000)
    yield put({type: actions.INCREMENT})
}

function* decrementAsync() {
    yield delay(1000)
    yield put({type: actions.DECREMENT})
}

export function* testSaga() {
    yield takeLatest(actions.INCREMENT_ASYNC, incrementAsync)
    yield takeLatest(actions.DECREMENT_ASYNC, decrementAsync)
}