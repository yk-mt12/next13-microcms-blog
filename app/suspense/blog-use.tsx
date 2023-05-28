import { use } from "react";
import { getList } from "@/libs/client";


export function BlogUse() {
  const { contents } = use(getList());


  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }


  return (
    <ul>
      {contents.map((item: any) => {
        return (
          <li key={item.id}>
            <h1>{item.title}</h1>
          </li>
        );
      })}
    </ul>
  );
}