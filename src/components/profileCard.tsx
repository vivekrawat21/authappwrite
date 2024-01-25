"use client";
import appwriteService from "@/appwrite/config";
import { Models } from "appwrite";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";


const ProfileCard= () => {
 
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
    useEffect(() => {
        (async () => {
            
            const userData = await appwriteService.getCurrentUser();
            if (userData) {
                setUser(userData)
               
            }
        })()
    }, [])
    

    return (
        user && (
            <>
                <div className="flex gap-y-6 flex-wrap">
                    <div className="flex w-full gap-x-4 items-center">
                        <div className="w-28 border-2 rounded-full border-sky-200">
                            <Avatar  img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  />
                        </div>
                        <div className="relative">
                            <p className="font-bold text-xl w-full mb-1">{user.name}</p>
                            <div className="text-[12px] p-0.5 inline-block rounded-md bg-gradient-to-tr from-primary to-secondary">
                                <button className="px-2 rounded-md font-bold bg-black">FREE</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500  rounded-xl px-8 py-8 w-full flex gap-y-4 flex-wrap">
                        <div className="relative w-full">
                            <p className="text-sm text-gray-800 font-bold">Display Name</p>
                            <p className="font-semibold font-mono ">{user.name}</p>
                        </div>
                        <div className="relative w-full">
                            <p className="text-sm text-gray-800 font-bold">Email Id</p>
                            <p className="font-semibold font-mono ">{user.email}</p>
                        </div>
                        <div className="relative w-full">
                            <p className="text-sm text-gray-800 font-bold">Phone Number</p>
                            <p className="font-semibold font-mono ">999-888-7777</p>
                        </div>
                        <div className="relative w-full">
                            <p className="text-sm text-gray-800">Password</p>
                            <p className="font-semibold font-mono ">********</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <Link
                            href={"/logout"}
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl px-6 py-3 inline-block hover:bg-gray-100 duration-150"
                        >
             Logout
                          
                        </Link>
                    </div>
                </div>
            </>
        )
    );
}

export default ProfileCard;