import {all} from 'redux-saga/effects'
import {fetchVendorWatcher} from './vendorSaga'


 export function* rootSaga(){
    yield all([
        fetchVendorWatcher(),
        // fetchVendorWatcher(),
    ])
    console.log('hello is sagass')
}
