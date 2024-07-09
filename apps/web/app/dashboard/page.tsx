'use client'

import { inngest } from '@/inngest'
import { UserButton } from '@clerk/nextjs'

export default function DashboardPage() {
	const handle = async () => {
		await inngest.send({
			name: 'test/hello.world',
			data: {
				email: 'testFromNext@example.com',
			},
		})
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="flex w-2/3 justify-end pr-12">
				<UserButton />
			</div>
			<button onClick={handle} type={'button'}>
				Wau
			</button>
		</main>
	)
}
