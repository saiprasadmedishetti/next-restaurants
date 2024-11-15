"use server";

const BASE_URL = process.env.NEXT_APP_STRAPI_URL

export async function getRestaurants() {
  return await (await fetch(`${BASE_URL}/api/restaurants`)).json();
}
export async function getRestaurantById(id: string) {
  return await (
    await fetch(`${BASE_URL}/api/restaurants/${id}`)
  ).json();
}
