import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  cookieStore.delete("token");

  return new Response(null, {
    status: 302,
    headers: {
      Location: "/",
    },
  });
}
