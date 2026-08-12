"use client";

// Description: A lightweight client-side profile component that allows
// users to edit and persist their display name using
// React Hook Form, Joi validation and localStorage.

import { USER_UPDATED_EVENT } from "@/constants/events";
import { localService } from "@/services/local.service";
import { useState, useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
    window.addEventListener(USER_UPDATED_EVENT, callback);
    return () => window.removeEventListener(USER_UPDATED_EVENT, callback);
};

const getSnapshot = () => localService.getUser() ?? "";
const getServerSnapshot = () => "";

export const UserInfo = () => {
    const savedName = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleStartEdit = () => {
        setInputValue(savedName);
        setIsEditing(true);
    };

    const handleSave = () => {
        const trimmed = inputValue.trim();
        localService.setUser(trimmed);
        window.dispatchEvent(new Event(USER_UPDATED_EVENT));
        setIsEditing(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSave();
        if (e.key === "Escape") setIsEditing(false);
    };

    return (
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 font-bold flex items-center justify-center text-xs border border-orange-500/30 shrink-0">
                {savedName ? savedName[0].toUpperCase() : "👤"}
            </div>

            {isEditing ? (
                <div className="flex items-center gap-1.5">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ваше ім'я..."
                        autoFocus
                        className="w-28 px-2 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-orange-500/50 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                    <button
                        type="button"
                        onClick={handleSave}
                        className="px-2 py-1 text-xs font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors cursor-pointer"
                    >
                        ✓
                    </button>
                </div>
            ) : (
                <div
                    onClick={handleStartEdit}
                    className="flex items-center gap-1.5 group cursor-pointer py-1 px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors"
                    title="Натисніть, щоб змінити ім'я"
                >
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-200 group-hover:text-orange-500 transition-colors">
                        {savedName || (
                            <span className="text-gray-400 dark:text-gray-500 italic font-normal">
                                Enter your name...
                            </span>
                        )}
                    </span>
                    <span className="text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        ✏️
                    </span>
                </div>
            )}
        </div>
    );
};

export default UserInfo;
