"use client";

import dynamic from "next/dynamic";

const WorkListItem = dynamic(
  () => import("./WorkListItem").then((mod) => ({ default: mod.WorkListItem })),
  {
    ssr: false,
  }
);

type WorkListItemProps = {
  href: string;
  year: string;
  title: string;
  description: string;
};

export const WorkListItemDynamic = (props: WorkListItemProps) => {
  return <WorkListItem {...props} />;
};
