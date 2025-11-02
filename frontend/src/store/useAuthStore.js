import {create} from "zustand";

export const useAuthStore = create ((set ) => ({
    authUser :{name : "jone", _id :"123" , age:"23"},
    isLoading : false,
    isLogin : false,

    login :() => {
        console.log("just login ");
        set({ isLogin : true , isLoading : true});
    },
}));