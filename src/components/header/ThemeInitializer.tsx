"use client";

import { localService } from "@/services/local.service";
import { useEffect } from "react";

export const ThemeInitializer = () => {
    useEffect(() => {
        const savedTheme = (localService.getTheme() as "light" | "dark") || "dark";
        localService.setTheme(savedTheme);
    }, []);

    return null;
};
