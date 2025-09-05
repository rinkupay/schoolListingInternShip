import "./globals.css";
import Link from "next/link";
import { Toaster } from 'react-hot-toast';
export const metadata = {
  title: "School Management",
  description: "Mini project with Next.js + MySQL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Toaster />
        {/* Header */}
        <header className="bg-blue-600 text-white shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
            <Link href="/" className="text-xl font-bold cursor-pointer">School Portal</Link>
            <nav className="space-x-6">
              <Link href="/addSchool" className="hover:underline">
                Add School
              </Link>
              <Link href="/showSchools" className="hover:underline">
                Show Schools
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow bg-gray-50">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 mt-8">
          <div className="max-w-7xl mx-auto p-4 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} School Portal. All rights reserved.</p>
            <p className="mt-1">
              Built with <span className="text-blue-400 font-semibold">Next.js</span> &amp; MySQL
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
