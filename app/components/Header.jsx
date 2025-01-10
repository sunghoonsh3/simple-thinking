import Link from "next/link";

export default function Header() {
  return (
    <header className="text-black p-4">
      <div className="container mx-auto flex justify-between items-center font-lateef">
        {/* Logo Section */}
        <div className="text-2xl font-lateef font-light ml-12">
          <Link href="/">simple thinking</Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-2xl font-lateef font-light">
            <li>
              <Link href="/book">books</Link>
            </li>
            <li>
              <Link href="/about">politics</Link>
            </li>
            <li>
              <Link href="/blog">startup</Link>
            </li>
            <li>
              <Link href="/contact">life</Link>
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
