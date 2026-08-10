"use client";

// Description: A lightweight client-side profile component that allows
// users to edit and persist their display name using
// React Hook Form, Joi validation and localStorage.

import { localService } from "@/services/local.service";
import { userValidator } from "@/validator/user.validator";
import { joiResolver } from "@hookform/resolvers/joi";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
    username: string;
};

const UserInfo = () => {
    const DEFAULT_USER = "John Doe";

    const getInitialUser = () => {
        if (typeof window === "undefined") {
            return DEFAULT_USER;
        }

        return localService.getUser() ?? DEFAULT_USER;
    };

    const [userName, setUserName] = useState(getInitialUser);
    const [isEditing, setIsEditing] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: joiResolver(userValidator),
        defaultValues: {
            username: "",
        },
    });

    const onSubmit = ({ username }: FormData) => {
        const trimmed = username.trim();

        setUserName(trimmed);
        localService.setUser(trimmed);
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2 relative">
                <div className="relative flex flex-col">
                    <input
                        {...register("username")}
                        autoFocus
                        placeholder="Enter name..."
                        className={`w-36 px-3 py-1.5 text-xs font-medium rounded-xl border outline-none transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm ${
                            errors.username
                                ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                                : "border-orange-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                        }`}
                    />

                    {errors.username && (
                        <span className="absolute top-full left-0 mt-1 z-30 text-[10px] font-bold text-red-500 bg-red-50 dark:bg-red-950/80 border border-red-200 dark:border-red-800/50 px-2 py-0.5 rounded-md shadow-md whitespace-nowrap">
                            {errors.username.message}
                        </span>
                    )}
                </div>

                <button
                    type="submit"
                    className="px-3.5 py-1.5 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-xs font-bold transition-all shadow-md shadow-orange-500/20 cursor-pointer"
                >
                    OK
                </button>
            </form>
        );
    }

    return (
        <div
            onClick={() => {
                reset({ username: userName });
                setIsEditing(true);
            }}
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-gray-100/80 dark:bg-gray-800/80 hover:bg-orange-50 dark:hover:bg-gray-700/80 border border-gray-200 dark:border-gray-700/80 cursor-pointer transition-all duration-200 group select-none shadow-sm"
            title="Click to edit profile name"
        >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white text-xs font-black uppercase shadow-sm group-hover:scale-105 transition-transform duration-200">
                {userName.slice(0, 2)}
            </div>

            <span className="text-xs font-bold text-gray-700 dark:text-gray-200 group-hover:text-orange-500 transition-colors">
                {userName}
            </span>
        </div>
    );
};

export default UserInfo;
