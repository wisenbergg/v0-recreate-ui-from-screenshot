import { redirect } from "next/navigation"
import Link from "next/link"

export default function HomePage() {
  redirect("/onboarding/step1")

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8">
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-gray-900">Hey. I&apos;m really glad you&apos;re here.</h2>
          <p className="text-gray-700">
            This space is just for you — to say what you&apos;re feeling, without pressure or judgment.
          </p>
          <p className="text-gray-700">I&apos;m here to listen, no matter what&apos;s on your mind.</p>
          <div className="pt-2 flex justify-center">
            <Link
              href="/onboarding/next-step"
              className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
