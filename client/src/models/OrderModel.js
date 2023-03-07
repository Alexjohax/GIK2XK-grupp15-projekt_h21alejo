import api from "../api";

export async function getAllOrders() {
  const result = await api.get("/orders");

  if (result.status == 200) return result.data;
  else {
    console.log(result.status, " ", result.data);
    return [];
  }
}
