import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">

      <h1 className="m-10">Link Active </h1>
      <Link className="bg-gray-300 rounded-md px-5 py-2 m-10" href="/matches">Matche</Link>
      <Link className="bg-gray-300 rounded-md px-5 py-2 m-10" href="/staking">Staking</Link>

    </div>
  )
}
