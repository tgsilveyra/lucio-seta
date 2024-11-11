import Link from "next/link";

type WorkListItemProps = {
  href: string;
  year: string;
  title: string;
  description: string;
};

export const WorkListItem = ({
  href,
  year,
  title,
  description,
}: WorkListItemProps) => {
  return (
    <Link href={href}>
      <li>
        <p>{year}</p>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </li>
    </Link>
  );
};
