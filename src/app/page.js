  import Image from "next/image";
  import Link from "next/link";


  export default function Home() {
    return (
      <div className="min-h-screen bg-white text-black dark:bg-black">
        
        {/* ---------------- NAVBAR ---------------- */}
        <header className="flex items-center justify-between py-6 px-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/ChomromFootball_logo.jpg"
              alt="Logo"
              width={45}
              height={45}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold text-green-600">EcoBin</h1>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex gap-8 text-lg">
            <a href="#" className="hover:text-green-600">Home</a>
            <a href="#" className="hover:text-green-600">About</a>
            <a href="#" className="hover:text-green-600">Contact</a>
          </nav>

          {/* Sign up button */}
          <Link href="/login">
            <button className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700">
              Login
            </button>
          </Link>
        </header>

        {/* ---------------- HERO SECTION ---------------- */}
        <main className="flex flex-col md:flex-row items-center justify-between px-10 py-16">
          
          {/* Left text */}
          <div className="max-w-lg space-y-6">
            <h1 className="text-5xl font-extrabold text-green-700 leading-tight">
              WASTE <br /> RECYCLE
            </h1>

            <p className="text-gray-600">
              เว็ปเราช่วยทำให้การจัดการขยะเป็นเรื่องง่ายและมีประสิทธิภาพมากขึ้น ด้วยระบบติดตามถังขยะอัจฉริยะที่ช่วยให้คุณตรวจสอบสถานะและการเก็บขยะได้แบบเรียลไทม์
            </p>

            <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700">
              Read More
            </button>
          </div>

          {/* Right image */}
          <div className="mt-10 md:mt-0">
            <Image
              src="/ChomromFootball_logo.jpg"
              alt="Recycling People"
              width={550}
              height={550}
              className="drop-shadow-xl"
            />
          </div>
        </main>

      </div>
    );
  }
