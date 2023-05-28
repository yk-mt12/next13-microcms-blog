import {notFound} from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "@/libs/client";

export async function generateStaticParams() {
    const { contents } = await getList();

    const paths = contents.map((post) => {
        return {
            postId: post.id,
        };
    });

    return [...paths];
}

export default async function BlogDetailPage({
    params: { postId },
}: {
    params: { postId: string };
}) {
    const post = await getDetail(postId);

    // ページの生成された時間を取得
    const time = new Date().toLocaleString();

    if (!post) {
        notFound();
    }
    
    return (
        <section className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    {post.title}
                </h1>
                <div className="text-2xl font-bold">
                    {time}
                </div>
                <div className="text-2xl font-bold">
                    {parse(post.body)}
                </div>
            </main>
        </section>
    );
}