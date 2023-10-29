import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white min-h-screen flex flex-col">
      {/* NavBar */}
      <nav className="bg-blue-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <div className="w-32 h-12">
              <Image
                src="/assets/ngenlogo.png"
                alt="N Gen Diagnostics logo"
                width={200}
                height={100}
              />
            </div>
          </Link>

          <ul className="flex space-x-6">
            <li>
              <Link href="/about">
                <p className="hover:text-blue-200">About</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="hover:text-blue-200">Contact</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="py-6 px-4 text-center">
        <h1 className="text-4xl font-bold">
          Discover Our Innovative Medical Devices
        </h1>
        {/* <p className="mt-4 text-lg">A Keck Graduate Institute Company</p> */}
      </header>

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center">
        <div className="container mx-auto text-center">
          {/* Medical Device Section */}
          <div className="mb-8">
            <Image
              src="/assets/eppendorf.jpg"
              alt="Medical Device"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-4 sm:mb-0 inline-block" // mb-4 sm:mb-0 is for mobile responsiveness
            />

            {/* Device Features */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold">Key Features</h2>
              <ul className="mt-4 list-disc list-inside">
                <li>Wireless Connectivity</li>
                <li>Precision Measurement</li>
                <li>Real-time Data Analysis</li>
                <li>User-Friendly Interface</li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <p className="text-lg">
                Experience the future of healthcare today with this product.
              </p>
              <button className="bg-blue-700 hover:bg-pink-700 text-white py-3 px-6 rounded-full mt-4">
                Contact us for More Information
              </button>
            </div>
          </div>

          {/* N Gen Diagnostics Section */}
          <div className="mb-8 ">
            <Image
              src="/assets/ngend.png"
              alt="N Gen Diagnostics Logo"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-4 sm:mb-0 inline-block"
            />

            {/* Features of N Gen Diagnostics */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold">Key Features</h2>
              <ul className="mt-4 list-disc list-inside">
                <li>Wireless Connectivity</li>
                <li>Precision Measurement</li>
                <li>Real-time Data Analysis</li>
                <li>User-Friendly Interface</li>
                <li>Cloud Storage</li>
              </ul>
            </div>
            {/* Call to Action */}
            <div className="mt-8">
              <p className="text-lg">
                Experience the future of healthcare today with this product.
              </p>
              <button className="bg-blue-700 hover:bg-pink-700 text-white py-3 px-6 rounded-full mt-4">
                Contact us for More Information
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center">
        {/* Add footer content here if needed */}
      </footer>
    </div>
  );
}
