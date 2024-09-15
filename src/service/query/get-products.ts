"use server";

import { bannerType } from "../types/banner";

const url = process.env.APP__URL;


export const getProducts = async (): Promise<bannerType[]> => {
    try {
        const res = await fetch(`${url}/banners`);
        const data = await res.json();
        return data;
    } catch (error) {
        const message = (error as Error).message;
        throw new Error(message);
    }
}