import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-5">
      <div className="container flex items-center justify-between">
        <div className=" flex items-center">
          <Link href="/" className="font-semibold tracking-tight text-2xl">
            RDobariya.
          </Link>
          {/* <ul className="flex items-center gap-5">
            <li className="font-medium">Work</li>
            <li className="font-medium">Information</li>
            <li className="font-medium">Contact</li>
          </ul> */}
        </div>
      </div>
    </header>
  );
}
