import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2 p-10">
      <Image 
        src={"/reactchallenges.webp"}
        width={150}
        height={150}
        className=' bg-slate-200 rounded'
      />
      <h1>Welcome to ReactChallenges.com</h1>
      <p>Feel free to edit <code>src/app/page.jsx</code> and start your challenge!</p>
    </main>
  )
}
