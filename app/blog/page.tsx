import Link from 'next/link';
import { getList } from '../../libs/client';

export default async function Blog() {
    const { contents } = await getList();

    // ページの生成された時間を取得
    const time = new Date().toLocaleDateString();

    if (!contents || contents.length === 0) return <div>記事がありません</div>;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    Welcome to <a className="text-blue-600">Blog!</a>
                </h1>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    {contents.map((blog) => (
                        <Link href={`/blog/${blog.id}`} key={blog.id}>
                            <h3 className="text-2xl font-bold">{blog.title} &rarr;</h3>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}