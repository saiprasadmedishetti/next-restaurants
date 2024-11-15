import { Metadata } from "next";
import { getRestaurants } from "../actions/restaurants";
import { renderContent, RichTextContent } from "../utils/render";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type RestaurentType = {
  documentId: string;
  Name: string;
  Description: RichTextContent;
};

export const metadata: Metadata = {
  title: "Restaurants",
};

export default async function Restaurants() {
  const { data: restaurants } = await getRestaurants();
  console.log(restaurants);
  return (
    <>
      <div className="mb-4 text-right">
        <Button asChild>
          <Link href={"/restaurants/new"}>New</Link>
        </Button>
      </div>

      <div className="flex gap-4">
        {restaurants?.map?.(
          ({ documentId, Name, Description }: RestaurentType) => (
            <Card key={documentId}>
              <CardHeader>
                <CardTitle>{Name}</CardTitle>
              </CardHeader>
              <CardContent>{renderContent(Description)}</CardContent>
              <CardFooter>
                <Button variant={'secondary'} className="ml-auto font-semibold" asChild>
                  <Link href={`restaurants/${documentId}`}>View</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </>
  );
}
