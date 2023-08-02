import React from "react";
import Image from "next/image";
import TommyLogo from "../assets/TommyLogo.png"

export default function Login() {


    return (
        <div className="p-10 bg-slate-300 shadow-lg m-10 rounded flex flex-col items-center">
            <Image
                className="mb-2"
                src={TommyLogo}
                width={200}
            ></Image>
            <h1 className="text-2xl mb-4 text-gray-600 font-bold">Login</h1>
            <div className="flex flex-col justify-center items-start">
                <form className="flex flex-col text-gray-500">
                    <label>Email: </label>
                    <input className="bg-slate-800 p-2 rounded mb-2 text-md" type="email" placeholder="enter your email" />
                    <label>Password: </label>
                    <input className="bg-slate-800 p-2 rounded mb-4 text-md" type="password" placeholder="enter your password"></input>
                </form>
                <button className="bg-indigo-500 hover:bg-indigo-900 duration-300 px-2 py-1 rounded w-full">Login</button>
                <p className="text-sm text-gray-400 cursor-pointer mt-4 underline">signup</p>
                <p className="text-sm text-gray-400 cursor-pointer mt-4">forgotten password?
                </p>
            </div>
        </div>
    )
}