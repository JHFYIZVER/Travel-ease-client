import { getUserByToken } from "@/app/(dashboard)/profile/api/route";
import { redirect } from "next/navigation";
export default async function Profile() {
  const user = await getUserByToken();

  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Профиль пользователя</h1>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
