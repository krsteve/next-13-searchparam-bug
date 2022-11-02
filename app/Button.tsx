'use client';

import { usePathname, useRouter } from "next/navigation";
import type { FC } from "react";

export const Button: FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const randNum = Math.ceil(Math.random() * 100);
    const setNewParams = () => {
        router.push(pathname + `?foo=${randNum}`);
    }

    return <button onClick={setNewParams}>Set New Params</button>
}