export async function getAllTours() {
  try {
    const data = await fetch("http://localhost:5000/api/tour", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await data.json();
    return result;    
  } catch (error) {}
}
