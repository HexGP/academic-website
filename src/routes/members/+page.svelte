<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { Card, CardHeader, CardTitle, CardContent } from '$lib/components/ui/card';
	import { members } from '$lib/stores/members';
</script>

<Nav />

<main class="container py-12">
	<h1 class="mb-8 text-4xl font-bold">Our Researchers</h1>

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each $members as member}
			<Card class="bg-white transition-shadow hover:shadow-lg dark:bg-gray-800">
				<CardContent class="p-6">
					<!-- Image container -->
					<div class="mb-4 flex justify-center">
						<div class="h-32 w-32">
							<div
								class="relative aspect-square w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"
							>
								<img
									src={member.image}
									alt={member.name}
									class="h-full w-full object-cover"
									loading="lazy"
								/>
								<div class="absolute inset-0 rounded-full ring-1 ring-inset ring-gray-300 dark:ring-gray-600"/>
							</div>
						</div>
					</div>
					<CardHeader class="p-0">
						<a href={member.link} target="_blank" rel="noopener noreferrer" class="hover:underline">
							<CardTitle class="text-gray-900 dark:text-white">{member.name}</CardTitle>
						</a>
						<p class="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
					</CardHeader>
					<p class="mt-2 text-sm text-gray-700 dark:text-gray-300">
						{member.interests}
					</p>
				</CardContent>
			</Card>
		{/each}
	</div>
</main>

<Footer />
