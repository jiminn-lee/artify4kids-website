<script>
	import { onMount } from 'svelte';
	import { scrollDistance, headerHeight } from '$lib/stores';
	import Button from '$lib/components/Button.svelte';
	import Statistics from '$lib/components/Statistics.svelte';

	onMount(() => {
		let options = {
			animate: false,
			patternWidth: 100,
			patternHeight: 100,
			grainOpacity: 0.05,
			grainDensity: 1,
			grainWidth: 1,
			grainHeight: 1
		};
		grained('#header', options);

		headerHeight.set(header.clientHeight);
	});

	let header;
</script>

<svelte:head>
	<script src="src/lib/grained.js"></script>
</svelte:head>

<svelte:window bind:scrollY={$scrollDistance} />

<main>
	<section id="header" class="min-h-lvh flex flex-col" bind:this={header}>
		<div class="absolute bottom-0 w-full">
			<div class="flex w-full items-center flex-col">
				<h1 class="text-white text-8xl font-bold mb-8">Artify4Kids</h1>
				<p class="text-white font-light italic text-center w-[550px]">
					<span>Artify4Kids</span> is a 501c(3) <span>non-profit</span> organization that provides
					<span>free</span>
					art programs to undeserved children in the <span>Bay Area</span>. Our goal is to provide a
					safe and inclusive space for <span>young artists</span> to explore their creativity and develop
					their artistic skills.
				</p>
			</div>
			<div class="flex justify-center">
				<img src="photos/sm-1.png" alt="" class="object-bottom object-none" />
				<img src="photos/lg-1.png" alt="" class="" />
				<img src="photos/lg-2.png" alt="" class="" />
				<img src="photos/sm-2.png" alt="" class="object-bottom object-none" />
			</div>
		</div>
	</section>
	<section id="content" class="flex flex-col justify-center gap-28 bg-a-yellow-bg text-a-black">
		<Statistics />
		<div class="flex flex-col items-center">
			<h1 class="font-bold text-5xl text-center">Get to know us</h1>
			<p class="font-light text-center my-4 w-[550px] text-a-grey">
				Our team is made up of passionate individuals who are committed to our mission. Get to know
				us and learn more about the people behind Artify4Kids.
			</p>
			<Button
				href="/about-us"
				text="About Us"
				class="text-white border-2 bg-a-green border-a-green hover:bg-a-green-hover hover:border-green-red-hover"
			/>
		</div>
		<div class="flex flex-col items-center">
			<h1 class="font-bold text-5xl text-center">All the latest updates</h1>
			<p class="font-light text-center my-4 w-[550px] text-a-grey">
				Stay up-to-date with all the latest news and events happening at Artify4Kids. From new art
				projects to volunteer opportunities, we have everything you need to know. Check out our blog
				to catch the latest news and coverage on our events!
			</p>
			<Button
				href="/news-blog"
				text="News & Blog"
				class="text-white border-2 bg-a-blue border-a-blue hover:bg-a-blue-hover hover:border-a-blue-hover"
			/>
		</div>
		<div class="flex flex-col items-center">
			<h1 class="font-bold text-5xl text-center">Upcoming art projects</h1>
			<p class="font-light text-center my-4 w-[550px] text-a-grey">
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
		<div class="flex flex-col items-center mb-28">
			<h1 class="font-bold text-5xl text-center">How you can help</h1>
			<p class="font-light text-center my-4 w-[550px] text-a-grey">
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
</style>
