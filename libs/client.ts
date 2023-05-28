import { createClient, 
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSDate, } from "microcms-js-sdk";

export type Blog = {
    id: string;
    title: string;
    body: string;
    publishedAt: MicroCMSDate;
    eyecatch?: MicroCMSImage;
};

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("Missing env MICROCMS_SERVICE_DOMAIN");
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error("Missing env MICROCMS_API_KEY");
}

// api取得用のクライアントを作成
export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
    const data = await client.getList<Blog>({
        endpoint: "blog",
        queries,
    });

    return data;
};

// ブログ詳細を取得
export const getDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
    ) => {
        const detailData = await client.getListDetail<Blog>({
            endpoint: "blog",
            contentId,
            queries,
        });

        return detailData;
    };

    