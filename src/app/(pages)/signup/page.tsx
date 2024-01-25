"use client"
import useAuth from "@/context/useAuth"
import Signup from "@/components/Signup"
import { useRouter } from "next/navigation"
import React from "react"

const SignupPage = ()=>{
    const router = useRouter();
    const {authStatus} = useAuth();

    if (authStatus){
        router.replace('/profile');
        return <></>
    }
    return(
        <section className="px-4 py-10 sm:py-16 sm:px:6 lg:px-8 lg:py-24">
            <Signup />
        </section>
    )
}  
export default SignupPage;