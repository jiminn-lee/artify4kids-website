<script>
	import { onMount } from 'svelte';
	import { scrollDistance, headerHeight } from '$lib/stores';
	import Button from '$lib/components/Button.svelte';
	import Statistics from '$lib/components/Statistics.svelte';
	import options from '$lib/grainedOptions';

	let header;
	onMount(() => {
		grained('#header', options);
		headerHeight.set(header.clientHeight);
	});

	export let data;
</script>

<svelte:head>
	<title>Artify4Kids</title>
	<meta property="og:title" content="Artify4Kids" />
	<script src="src/lib/grained.js"></script>
</svelte:head>

<svelte:window bind:scrollY={$scrollDistance} />

<main>
	<section id="header" class="min-h-lvh flex flex-col" bind:this={header}>
		<div class="absolute bottom-0 w-full">
			<div class="flex w-full items-center flex-col text-white">
				<h1 class="text-8xl font-bold mb-8">Artify4Kids</h1>
				<p class=" font-light italic text-center w-[550px]">
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
					class="slideInBottomSm object-bottom h-[40vh]"
					id="sm-2"
				/>
			</div>
		</div>
	</section>
	<section class="flex flex-col justify-center items-center gap-24 bg-a-yellow-bg text-a-black">
		<Statistics stats={data.statObjects} />
		<div class="flex items-center flex-wrap">
			<img
				loading="lazy"
				src="images/gtku.jpg"
				alt=""
				class="rounded-3xl mr-8 scale-90 transition-transform hover:scale-95 duration-500"
			/>
			<div class="w-[550px]">
				<h1 class="font-bold text-5xl text-left">Get to know us</h1>
				<p class="font-light text-left my-4 text-a-grey">
					Our team is made up of passionate individuals who are committed to our mission. Get to
					know us and learn more about the people behind Artify4Kids.
				</p>
				<Button
					href="/about-us"
					text="About Us"
					class="text-white border-2 bg-a-green border-a-green hover:bg-a-green-hover hover:border-a-green-hover"
				/>
			</div>
		</div>
		<div class="flex items-center flex-wrap-reverse">
			<div class="w-[550px]">
				<h1 class="font-bold text-5xl text-right">All the latest updates</h1>
				<p class="font-light text-right my-4 text-a-grey">
					Stay up-to-date with all the latest news and events happening at Artify4Kids. From new art
					projects to volunteer opportunities, we have everything you need to know. Check out our
					blog to catch the latest news and coverage on our events!
				</p>
				<Button
					href="/news-blog"
					text="News & Blog"
					class="text-white border-2 bg-a-blue border-a-blue hover:bg-a-blue-hover hover:border-a-blue-hover float-right"
				/>
			</div>
			<img
				loading="lazy"
				src="images/atlu.jpg"
				alt=""
				class="rounded-3xl ml-8 scale-90 transition-transform hover:scale-95 duration-500"
			/>
		</div>
		<div class="flex items-center flex-wrap">
			<img
				src="images/uap.jpg"
				alt=""
				class="rounded-3xl mr-8 scale-90 transition-transform hover:scale-95 duration-500"
				loading="lazy"
			/>
			<div class="w-[550px]">
				<h1 class="font-bold text-5xl text-left">Upcoming art projects</h1>
				<p class="font-light text-left my-4 text-a-grey">
					Our projects aim to provide a diverse range of art experiences to children of ages 6-11,
					including painting, drawing, and other mediums. Take a look at our calendar for our next
					events!
				</p>
				<Button
					href="/upcoming"
					text="Upcoming"
					class="text-white border-2 bg-a-purple border-a-purple hover:bg-a-purple-hover hover:border-a-purple-hover"
				/>
			</div>
		</div>
		<div
			id="take-action"
			class="max-w-[1000px] flex flex-col items-center mb-28 bg-cover px-48 py-32 rounded-3xl bg-center transition-transform hover:scale-105 duration-500"
		>
			<h1 class="font-bold text-5xl text-center text-white">How you can help</h1>
			<p class="font-light text-center my-4 text-gray-200">
				There are several ways you can help us empower young artists. You can donate to our cause,
				volunteer your time, or spread the word about our organization.
			</p>
			<Button
				href="/take-action"
				text="Take Action"
				class="text-white border-2 bg-a-red border-a-red hover:bg-a-red-hover hover:border-a-red-hover"
			/>
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
</style>
