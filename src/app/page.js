import Image from "next/image";
import Link from "next/link";


export default function Home() {
   
  return (
      <div>
        <h1>welcome to Recipe App</h1>
        <Link href={'/recipe-list'}>Explore Recipes</Link>
      </div>
     

  );
}
