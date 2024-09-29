<script>
	import { scrollDistance } from '$lib/stores';
	import Button from '$lib/components/Button.svelte';
	import HomeHeader from '$lib/components/HomeHeader.svelte';
	import Statistics from '$lib/components/Statistics.svelte';

	let imgIndex = Array.from({ length: 21 }, (v, i) => i + 1);

	export let data;
</script>

<svelte:head>
	<title>Artify4Kids</title>
	<meta property="og:title" content="Artify4Kids" />
</svelte:head>

<svelte:window bind:scrollY={$scrollDistance} />

<main>
	<HomeHeader />
	<section class="flex flex-col items-center justify-center gap-24 bg-a-yellow-bg text-a-black">
		<Statistics stats={data.statObjects} />
		<div class="flex flex-wrap items-center justify-center">
			<img
				loading="lazy"
				src="images/gtku.webp"
				alt=""
				class="h-[270px] rounded-3xl transition-transform duration-500 hover:scale-105"
			/>
			<div class="mx-10 mt-10 max-w-[550px]">
				<h1 class="text-left text-5xl font-bold">Get to know us</h1>
				<p class="my-4 text-left font-light text-a-grey">
					Our team is made up of passionate individuals who are committed to our mission. Get to
					know us and learn more about the people behind Artify4Kids.
				</p>
				<Button
					href="/about-us"
					text="About Us"
					class="border-2 border-a-green bg-a-green text-white hover:border-a-green-hover hover:bg-a-green-hover"
				/>
			</div>
		</div>
		<div class="flex flex-wrap-reverse items-center justify-center">
			<div class="mx-10 mt-10 max-w-[550px]">
				<h1 class="text-right text-5xl font-bold">All the latest updates</h1>
				<p class="my-4 text-right font-light text-a-grey">
					Stay up-to-date with all the latest news and events happening at Artify4Kids. From new art
					projects to volunteer opportunities, we have everything you need to know. Check out our
					blog to catch the latest news and coverage on our events!
				</p>
				<Button
					href="/news-blog"
					text="News & Blog"
					class="float-right border-2 border-a-blue bg-a-blue text-white hover:border-a-blue-hover hover:bg-a-blue-hover"
				/>
			</div>
			<img
				loading="lazy"
				src="images/atlu.webp"
				alt=""
				class="h-[270px] rounded-3xl transition-transform duration-500 hover:scale-105"
			/>
		</div>
		<div class="flex flex-wrap items-center justify-center">
			<img
				src="images/uap.webp"
				alt=""
				class="h-[270px] rounded-3xl transition-transform duration-500 hover:scale-105"
				loading="lazy"
			/>
			<div class="mx-10 mt-10 max-w-[550px]">
				<h1 class="text-left text-5xl font-bold">Upcoming art projects</h1>
				<p class="my-4 text-left font-light text-a-grey">
					Our projects aim to provide a diverse range of art experiences to children of ages 6-11,
					including painting, drawing, and other mediums. Take a look at our calendar for our next
					events!
				</p>
				<Button
					href="/upcoming"
					text="Upcoming"
					class="border-2 border-a-purple bg-a-purple text-white hover:border-a-purple-hover hover:bg-a-purple-hover"
				/>
			</div>
		</div>
		<div
			id="take-action"
			class="flex max-w-[1000px] flex-col items-center rounded-3xl bg-cover bg-center px-16 py-32 transition-transform duration-500 hover:scale-105 sm:mx-10"
		>
			<h1 class="text-center text-5xl font-bold text-white">How you can help</h1>
			<p class="my-4 text-center font-light text-gray-200">
				There are several ways you can help us empower young artists. You can donate to our cause,
				volunteer your time, or spread the word about our organization.
			</p>
			<Button
				href="/take-action"
				text="Take Action"
				class="border-2 border-a-red bg-a-red text-white hover:border-a-red-hover hover:bg-a-red-hover"
			/>
		</div>
		<div class="mb-24 flex w-full flex-col items-center">
			<h1 class="mb-7 text-center text-5xl font-bold text-a-black">Past Artwork</h1>
			<div class="wrapper relative h-[400px] w-[90%] overflow-hidden">
				{#each imgIndex as img}
					<img
						src={`past-artwork/past-artwork-${img}.webp`}
						alt="Past artwork from Artify events"
						loading="lazy"
						style={`--n: ${img}`}
						class="item absolute left-full h-[400px] w-[300px] rounded-3xl"
					/>
				{/each}
			</div>
		</div>
	</section>
</main>

<style>
	#take-action {
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hych.webp');
		background-size: cover;
		background-position: center;
	}

	.wrapper {
		mask-image: linear-gradient(
			to right,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 1) 20%,
			rgba(0, 0, 0, 1) 80%,
			rgba(0, 0, 0, 0)
		);
	}

	.item {
		animation-name: scrollLeft;
		animation-duration: 60s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		left: max(calc(17 * 300px), 100%);
		animation-delay: calc(60s / 17 * (17 - var(--n)) * -1);
	}

	@keyframes scrollLeft {
		to {
			left: calc(-1 * 300px);
		}
	}
</style>
