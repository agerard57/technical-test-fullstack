export async function getAllUsers() {
  try {
    const response = await fetch("http://localhost:3001/users");
    return await response.json();
  } catch (error) {
    return [];
  }
}
