import Action from './action'

// export const increment = (nr) => {
//     return {
//         type:'INCREMENT',
//         payload:nr
//     }
// }
// export const decrement = () => {
//     return {
//         type:'DECREMENT'
//     }
// }

export const getVendor = () => {
    console.log('is form getvendor action ',1)
    return{
        type:Action.GET_VENDOR,
    }
}
// type:Action.GET_VENDOR_FROM_API,
// export const getVendorSuccess = (data) => {
//     console.log(data)
//     return{
//         type:'GET_VENDOR_SUCCESS',
//         payload:data
//     }
// }