import Link from "next/link";

export default function Header() {
  return (
    <header className="text-black p-4 pt-10">
      <div className="container mx-auto flex justify-between items-center font-lateef">
        {/* Logo Section */}
        <div className="text-2xl font-lateef font-normaL ml-12">
          <Link href="/">simple thinking</Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-2xl font-lateef font-normal">
            <li>
              <Link href="/books">books</Link>
            </li>
            <li>
              <Link href="/politics">politics</Link>
            </li>
            <li>
              <Link href="/startup">startup</Link>
            </li>
            <li>
              <Link href="/life">life</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
