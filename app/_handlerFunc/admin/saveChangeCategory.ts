import { INewData } from "@/app/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface IProps {
    data: INewData;
    id: string;
    link: string;
    token: string;
    router: AppRouterInstance;
    authorization: (value: boolean, valueTwo: string) => void;
}

export const saveChangeCategory = async ({ data, id, link, token, router, authorization }: IProps) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SRC_STRAPI}/api/${link}/${id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });
        if (response.status === 401) {
            authorization(false, "");
            router.push("/admin");
        }
        if (!response.ok) {
            throw new Error(`Error uploading file: ${response.statusText}`);
        }

        const data = await response.json();
        return true;
    } catch (error) {
        console.error("Error during file upload:", error);
    }
};