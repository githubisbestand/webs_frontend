import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../slice/userDetails";

export const store = configureStore({
        reducer :{
            app : userDetail,
        },
});

