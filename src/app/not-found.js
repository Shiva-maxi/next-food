import Link from "next/link";

export default function notFound(){
    return (
        <div>
            <h1>This page cannot be found</h1>
            <Link href={'/'}>Home page</Link>
        </div>
    )
}