'use client';
import React, { FormEvent, useState } from 'react'
import appwriteService from '@/appwrite/config';
import useAuth from '@/context/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {toast} from 'react-hot-toast';



function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const { setAuthStatus } = useAuth();
    const [loading,setLoading] = useState(false);

    const login = async(e :FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            setLoading(true);
            const session =await appwriteService.login(formData);
            toast.success("Login successful");
            if (session){
                setAuthStatus(true);
                router.push('/profile');
                setLoading(false);

            }
        } catch ( error:any) {
            setError(error.message);
            toast.error(error.message);
            
        }
        finally{
            setLoading(false);
        }

    }
    

  return (
    <div className='flex items-center justify-center'>
    <div className={'mx-auto w-full max-w-lg bg-gray-200 rounded-xl p-10'}>
        <div className='mb-2 flex justify-center'>
            <span className='inline-block w-full max-w-[60px]'>
                <img src="/favicon.ico" alt="logo" />
            </span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight text-black'>

            Sign in to your account

        </h2>
        <p className='mt-2 text-center text-base text-gray-600'>

            not have an account?&nbsp;
            <Link href="/signup"
                className='font-medium text-blue-600 transition-all duration-200 hover:underline'>
               Signup
            </Link>
        </p>
        {error &&
            <p className='text-center text-red-600 mt-8'>
                {error}
            </p>}
        <form onSubmit={login} className='mt-8'>
            <div className='space-y-5'>
                <div>
                    <label htmlFor="email" className='text-base font-medium text-gray-900'>
                        Enter Email
                    </label>
                    <div className='mt-2'>

                        <input type="email"
                            className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 text-gray-800 p-5' placeholder='Email'
                            id='email'
                            value={formData.email}
                            onChange={(e) =>
                                setFormData((prev) =>
                                    ({ ...prev, email: e.target.value }))
                            }
                            required
                        />

                    </div>
                </div>
                <div>
                    <label htmlFor="password" className='text-base font-medium text-gray-900'>
                        Enter password
                    </label>
                    <div className='mt-2'>

                        <input type="password"
                            className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 text-gray-800 p-5' placeholder='Enter new password'
                            id='password'
                            value={formData.password}
                            onChange={(e) =>
                                setFormData((prev) =>
                                    ({ ...prev, password: e.target.value }))
                            }
                            required
                        />

                    </div>

                </div>
                <div>
                    <button type='submit'
                    className=' flex m-auto justify-center rounded-xl px-3  bg-black border-2 mt-10 border-blue-300 py-3 font-semibold leading-7 text-white font-mono hover:bg-gray-900 hover:text-gray-100'>
                            {loading?"Please wait...":"Login"}
                    </button>
                </div>
            </div>
        </form>
    </div>

</div>
  )
}

export default Login