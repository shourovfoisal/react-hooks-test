/**
 * Source
 * useTransition Hook Explained
 * https://medium.com/@ahsan-ali-mansoor/usetransition-hook-explained-885e87414b8
 */

import { useState, useTransition } from "react";

export const UseTransitionHook = () => {
  const [name, setName] = useState<string>("");
  const [lists, setLists] = useState<string[]>([]);

  const LIST_SIZE: number = 10000;

  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
    const dataList: string[] = [];

    for (let i: number = 0; i < LIST_SIZE; i++) {
      dataList.push(value + i);
    }

    startTransition(() => {
      setLists(dataList);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        className="border border-slate-400"
      />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        lists.map((list: string) => {
          return <div key={list}>{list}</div>;
        })
      )}
    </div>
  );
};
