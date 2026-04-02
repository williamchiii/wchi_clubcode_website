import React from "react";
import type { Exec } from "../lib/data";

export default function ExecCard({ exec }: { exec: Exec }) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
      <h4 className="text-md font-semibold text-zinc-900 dark:text-zinc-100">{exec.name}</h4>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">{exec.role}</p>
      {exec.bio && <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{exec.bio}</p>}
    </div>
  );
}
