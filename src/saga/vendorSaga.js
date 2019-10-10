import axios from 'axios'
import {call,put,takeEvery} from 'redux-saga/effects'

 function* fetchVendor(){
    const vendors = yield call([axios,axios.get],"http://192.168.100.6:3333/vendors")
    yield put({ type:'GET_VENDOR_SUCCESS', payload:vendors.data.payload })
}
 export function* fetchVendorWatcher (){
     console.log('isss fetcher watcher',2)
    yield takeEvery('GET_VENDOR',fetchVendor)
}

// [axios,axios.get],