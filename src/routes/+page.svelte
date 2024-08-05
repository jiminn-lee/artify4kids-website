<script>
	import { onMount } from 'svelte';
	import { scrollDistance, headerHeight } from '$lib/stores';
	import Button from '$lib/components/Button.svelte';
	import Statistics from '$lib/components/Statistics.svelte';
	import grainedOptions from '$lib/utils';

	let header;
	onMount(() => {
		grained('#header', grainedOptions);
		headerHeight.set(header.clientHeight);
	});

	let imgIndex = Array.from({ length: 17 }, (v, i) => i + 1);

	export let data;
</script>

<svelte:head>
	<title>Artify4Kids</title>
	<meta property="og:title" content="Artify4Kids" />
	<script src="src/lib/grained.js"></script>
</svelte:head>

<svelte:window bind:scrollY={$scrollDistance} />

<main>
	<section id="header" class="flex min-h-lvh flex-col" bind:this={header}>
		<div class="absolute bottom-0 w-full">
			<div class="flex w-full flex-col items-center text-white">
				<h1 class="mb-4 text-8xl font-bold">Artify4Kids</h1>
				<p class=" w-[550px] text-center font-light italic">
					<span>Artify4Kids</span> is a 501c(3) <span>non-profit</span> organization that provides
					<span>free</span>
					art programs to undeserved children in the <span>Bay Area</span>. Our goal is to provide a
					safe and inclusive space for <span>young artists</span> to explore their creativity and develop
					their artistic skills.
				</p>
			</div>
			<div class="flex justify-center">
				<img
					src="images/sm-1.png"
					alt=""
					class="slideInBottomSm hobject-bottom h-[40vh]"
					id="sm-1"
				/>
				<img src="images/lg-1.png" alt="" class="slideInBottom h-[45vh]" id="lg-1" />
				<img src="images/lg-2.png" alt="" class="slideInBottom h-[45vh]" id="lg-2" />
				<img
					src="images/sm-2.png"
					alt=""
					class="slideInBottomSm h-[40vh] object-bottom"
					id="sm-2"
				/>
			</div>
		</div>
	</section>
	<section class="flex flex-col items-center justify-center gap-24 bg-a-yellow-bg text-a-black">
		<Statistics stats={data.statObjects} />
		<div class="flex flex-wrap items-center">
			<img
				loading="lazy"
				src="images/gtku.jpg"
				alt=""
				class="mr-8 h-[270px] rounded-3xl transition-transform duration-500 hover:scale-105"
			/>
			<div class="w-[550px]">
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
		<div class="flex flex-wrap-reverse items-center">
			<div class="w-[550px]">
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
				src="images/atlu.jpg"
				alt=""
				class="ml-8 h-[270px] rounded-3xl transition-transform duration-500 hover:scale-105"
			/>
		</div>
		<div class="flex flex-wrap items-center">
			<img
				src="images/uap.jpg"
				alt=""
				class="mr-8 h-[270px] rounded-3xl transition-transform duration-500 hover:scale-105"
				loading="lazy"
			/>
			<div class="w-[550px]">
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
			class="flex max-w-[1000px] flex-col items-center rounded-3xl bg-cover bg-center px-48 py-32 transition-transform duration-500 hover:scale-105"
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
	#header {
		background-color: hsla(38, 0%, 100%, 1);
		background-image: radial-gradient(at 15% 19%, hsla(354, 96%, 73%, 1) 0px, transparent 50%),
			radial-gradient(at 53% 17%, hsla(251, 54%, 60%, 1) 0px, transparent 50%),
			radial-gradient(at 88% 21%, hsla(213, 87%, 67%, 1) 0px, transparent 50%),
			radial-gradient(at 86% 80%, hsla(107, 64%, 70%, 1) 0px, transparent 50%),
			radial-gradient(at 16% 83%, hsla(52, 89%, 81%, 1) 0px, transparent 50%);
	}

	.slideInBottom {
		animation-name: slideInBottom;
		animation-timing-function: ease-out;
		animation-duration: 0.5s;
		animation-fill-mode: both;
	}
	.slideInBottomSm {
		animation-name: slideInBottomSm;
		animation-timing-function: ease-out;
		animation-duration: 0.5s;
		animation-fill-mode: both;
	}

	#sm-1,
	#sm-2 {
		animation-delay: 0.1s;
	}

	@keyframes slideInBottom {
		from {
			transform: translateY(400px);
		}
		to {
			transform: translateY(0px);
		}
	}

	@keyframes slideInBottomSm {
		from {
			transform: translateY(400px);
		}
		to {
			transform: translateY(50px);
		}
	}

	#take-action {
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hych.jpg');
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
