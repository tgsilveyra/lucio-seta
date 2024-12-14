export function getAbsolutePath(relativePath: string) {
  return process.env.NODE_ENV !== "production"
    ? `http://localhost:3000${relativePath}`
    : `${process.env.NEXT_PUBLIC_URL}${relativePath}`;
}
