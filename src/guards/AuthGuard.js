"use client"

import LoadingScreen from "@/components/loading-screen/LoadingScreen";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



export default function AuthGuard({children}) {
    const [isLoading, setIsLoading] = useState(true);
    const { isLogin, user } = useSelector((state) => state.login);
    const router = useRouter();
    useEffect(()=>{
        const login = isLogin
        if(!login) {
            router.replace("/login")
        }else{
            setIsLoading(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (isLoading?<LoadingScreen /> :children)
}