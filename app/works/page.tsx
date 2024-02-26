import React from "react";
import s from "./page.module.scss";
import Layout from "../components/layout/layout";
import cn from "classnames";
import {  IWorkPhoto } from "../types";
import FormTelegram from "../components/FormTelegram/FormTelegram";
import FullImage from "../components/FullImages/FullImage";
import { Metadata } from "next";

const getData = async () => {
    try {
        const response = await fetch(`https://wclouds.ru/api/work-photos?populate=*`, {
            method: "GET",
            next: {
                revalidate: 300,
            },
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACESS_TOKEN}`,
            },
        });
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const metadata: Metadata = {
    title: 'Наши Работы',
    description:
        "Производим установку натяжных потолков в Петрозаводске, Кондопоге и соседних районах по выгодным ценам. Занимаемся производством потолочных конструкций из качественых матералов.",
    openGraph: {
        title: "",
        description: "",
        images: [`https://wclouds.ru/uploads/light_2_c4fedcaf67.jpg`],
    }
};

const CatalogWork = async () => {
    const data = await getData();
    const photo: Array<IWorkPhoto> = data.data;


    return (
        <Layout>
            <section className={cn(s.section)}>
                <FormTelegram />
                <FullImage images={photo[0].attributes.images} />
            </section>
        </Layout>
    );
};

export default CatalogWork;
