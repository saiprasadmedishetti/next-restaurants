import { Metadata } from "next";

export const metadata:Metadata= {
  title:'Home'
}

export default async function Home() {
  return (
    <div className="container mx-auto p-5">
      <h1 className="font-bold text-2xl mb-4">Welcome!</h1>
     <p>An exquisite dining experience where culinary art meets warm hospitality. Indulge in flavors from around the world, crafted with passion and precision.</p>
    </div>
  );
}
