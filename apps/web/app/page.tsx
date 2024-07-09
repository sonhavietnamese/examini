import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<SignedIn>
				<h1>Go to the dashboard to create new messages</h1>
				<Link href="/dashboard">Dashboard</Link>
			</SignedIn>
			<SignedOut>
				<h1>Sign in to create new messages</h1>
			</SignedOut>
		</main>
	)
}
