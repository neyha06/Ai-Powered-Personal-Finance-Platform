import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Finance AI Platform",
  description: "One stop personal finance platform",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}`}
        >
          {/* header */}
          <Header />
          <main className="min-h-screen">
            {/* main tag is imp for seo to know where the main content is */}
            {children}
          </main>

          {/* footer */}
          <footer className="bg-blue-50 py-12 ">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>All rights reserved by Neha</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
