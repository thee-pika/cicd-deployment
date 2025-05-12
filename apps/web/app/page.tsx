import { prisma } from "@repo/db/client";

export default async function Home() {
  const user = await prisma.user.findFirst();

  if (!user) {
    return <div>NO USER FOUND</div>;
  }
  return (
    <div>
      <h1>Hello From Frontend...</h1>
      <h2>username:</h2>
      <p>{user.username}</p>
      <br />
      <h2>password:</h2>
      <p>{user.password}</p>
    </div>
  );
}
