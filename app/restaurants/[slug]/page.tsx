import { getRestaurantById } from "@/app/actions/restaurants";
import { renderContent } from "@/app/utils/render";

export default async function Restaurant({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { data: restaurant } = await getRestaurantById(slug);
  return (
    <>
      <h1>{restaurant?.Name}</h1>
      <div>{renderContent(restaurant?.Description)}</div>
    </>
  );
}
