import styles from './ui/styles/home.module.css'
import Image from "next/image";
import desktop from '../../public/image-desktop.jpeg'

export default function Home() {
  return (
      <main className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="container mx-auto p-4 relative">
          <div className="bg-white border-2 border-purple-100 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center">
              <h1 className={`text-2xl font-bold text-purple-700 mb-4 ${styles.text_wisteria}`}>Welcome</h1>
              <p className="text-gray-600 mb-6">
                Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.
              </p>
              <a href="/blog/posts" className={`outline outline-1 outline-offset-2 border-purple-700 text-purple-700 hover:text-white py-2 px-4 rounded hover:bg-purple-800 md:w-auto ${styles.fit_content}`}>
                Go to Blog
              </a>
            </div>
              <div className="relative flex justify-center items-center">
                  <Image width={1000} height={760} src='/image-desktop.jpeg' alt='text' className="hidden md:block z-10"/>
                  <Image width={560} height={620} src='/image-mobile.jpeg' alt='text' className="block md:hidden z-10"/>
              </div>
          </div>

        </div>
        <div className={`bg-purple-800 hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0 ${styles.bg_wisteria}`}></div>
      </main>
  );
}