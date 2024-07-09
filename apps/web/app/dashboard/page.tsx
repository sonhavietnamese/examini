'use client'

import { UserButton } from '@clerk/nextjs'

export default function DashboardPage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="flex w-2/3 justify-end pr-12">
				<UserButton />
			</div>
			<button type={'button'}>Wau</button>
		</main>
	)
}
