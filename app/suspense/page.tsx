import { Suspense } from "react";
import { getList } from "@/libs/client";
import { Blog }  from "./blog";
import { BlogPromiseProps } from "./blog-props";
import { BlogUse } from "./blog-use";

export const revalidate = 0;

export default async function StaticPage() {
    const data = getList();

    const time = new Date().toLocaleString();

    if(!data) {
        return <div>記事がありません。</div>;
    }

    return (
        <div>
            <h1>{time}</h1>
            <h2>非同期コンポーネント</h2>
            <Suspense fallback={<div>Loading...</div>}>
                 {/* @ts-expect-error Server Component */}
                <Blog />
            </Suspense>
            <hr />
            <h2>PromiseをPropsで渡す場合</h2>
            <Suspense fallback={<div>Loading...</div>}>
                 {/* @ts-expect-error Server Component */}
                <BlogPromiseProps promise={data} />
            </Suspense>
            <hr />
            <h2>React.use()を利用</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <BlogUse />
            </Suspense>
        </div>
    );
}