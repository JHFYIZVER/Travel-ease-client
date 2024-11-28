import { cookies } from "next/headers";

export async function getUserByToken() {
  try {
    const response = await fetch("http://localhost:5000/api/users/by-token", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies().get("token")?.value}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Ошибка при получении пользователя: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Ошибка при запросе к серверу:", error);
    return null;
  }
}
