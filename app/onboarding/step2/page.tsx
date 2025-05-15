import Link from "next/link"

export default function Step2Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-2xl p-8 flex flex-col h-80">
        <div className="flex-1 flex items-center justify-center">
          <p className="text-xl font-medium text-gray-900 text-center animate-fade-in font-freight">
            This space is just for you — to say what you&apos;re feeling, without pressure or judgment.
          </p>
        </div>
        <div className="h-24 flex items-center justify-center">
          <Link
            href="/onboarding/step3"
            className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 btn-hover-effect w-24 h-10"
          >
            Nice
          </Link>
        </div>
      </div>
    </div>
  )
}
