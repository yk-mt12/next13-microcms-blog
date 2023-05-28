import Link  from "next/link"

export const Header = () => {
  return (
    <header className="flex items-center justify-center w-full h-24 border-b">
      <a
        className="flex items-center justify-center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
      <nav className="flex">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dynamic">Dynamic</Link>
          </li>
          <li>
            <Link href="/blog">Static</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
