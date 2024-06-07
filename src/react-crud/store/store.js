import { configureStore } from "@reduxjs/toolkit";
import userDetails from "../slice/userDetails";


export const store = configureStore({
    reducer: {
        userDetail: userDetails,
    },
});

