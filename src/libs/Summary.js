export async function getSummary(body) {
  const resp = await fetch(`http://localhost:3001/api/summary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  });
  const data = await resp.json();
  return data.data;
}