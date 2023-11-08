import * as userSlice from "./userSlice";

import store from "./store";

// export const getAll = (params) => {
//     store.dispatch(
//         userSlice.getAll(
//             params
//         )
//     )
// }

export const getAll = params => store.dispatch(userSlice.getAll(params))