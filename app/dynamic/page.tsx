import Link from "next/link";
import { getList } from "@/libs/client";

// キャッシュを利用しない
export const revalidate = 60;

export default async function StaticPage() {
  const { contents } = await getList();

  // ページの生成された時間を取得
  const now = Date.now().toLocaleString();

  if (!contents || contents.length === 0) {
    return <div>記事がありません。</div>;
  }

  return (
    <div>
      <h1>記事一覧</h1>
      <p>{now}</p>
      <ul>
        {contents.map((content) => {
          return (
            <li key={content.id}>
              <Link href={`/dynamic/${content.id}`}>
                {content.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
