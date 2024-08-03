<script>
	import { onMount } from 'svelte';
	import { scrollDistance, headerHeight } from '$lib/stores';
	import faqs from '$lib/faqs';
	import options from '$lib/grainedOptions';
	import info from '$lib/info';

	let header;
	onMount(() => {
		grained('#header', options);
		headerHeight.set(header.clientHeight);
	});

	let faqAnswers = [];
	let faqIsToggled = [];

	function faqToggle(index) {
		if (faqIsToggled[index] != true) {
			faqAnswers[index].classList.remove('h-0');
			faqAnswers[index].classList.remove('invisible');

			faqIsToggled[index] = true;
		} else {
			faqAnswers[index].classList.add('h-0');
			faqAnswers[index].classList.add('invisible');
			faqIsToggled[index] = false;
		}
	}
</script>

<svelte:head>
	<title>About Us | Artify4Kids</title>
	<meta property="og:title" content="About Us | Artify4Kids" />
	<script src="src/lib/grained.js"></script>
</svelte:head>

<svelte:window bind:scrollY={$scrollDistance} />

<main>
	<section
		id="header"
		class="h-[40vh] flex flex-col justify-center items-center bg-a-green"
		bind:this={header}
	>
		<h1 class="text-white text-8xl font-bold mb-8">About Us</h1>
		<p class="text-white font-light italic text-center w-[550px]">
			As a non-profit organization, we aim to provide accessible arts and crafts education to
			underserved children in the Bay Area. Join us in empowering young artists!
		</p>
	</section>
	<section
		class="flex flex-col justify-center items-center gap-24 bg-a-green-bg text-a-black py-28"
	>
		<div class="flex items-center gap-12 flex-wrap mx-10">
			<h1 class="font-bold text-5xl w-fit text-right">Our misson <br /> & approach</h1>
			<p class="max-w-[550px] text-a-grey font-light">
				At Artify4Kids, we believe that every child deserves access to art education. Our programs
				provide a safe and nurturing environment for children to channel their creativity and
				develop new skills. We prioritize diversity and inclusivity in all our programs, ensuring
				that every child feels supported and valued. Let's empower young artists and build a
				brighter future for our community!
			</p>
		</div>
		<div class="flex flex-col items-center gap-12">
			<h1 class="font-bold text-5xl">Meet the team</h1>
			<div class="flex gap-5 flex-wrap justify-center w-3/4">
				{#each info.team as member}
					<div
						id="team"
						style={`background-image: url(${member.img});`}
						class={`h-96 w-72 bg-no-repeat rounded-3xl bg-white bg-[length:100%_auto] bg-[center_top_-1rem] border-2 border-a-black/10 hover:-translate-y-2 transition-transform`}
					>
						<div class="h-[65%]"></div>
						<div class="p-4 bg-white w-full">
							<h2 class=" text-a-grey font-light pt-2">{member.position}</h2>
							<h1 class="font-bold text-xl text-a-black">{member.name}</h1>
							<a
								href={`mailto:${member.email}`}
								class="font-light underline text-a-red transition-all hover:text-a-red-hover"
								>{member.email}</a
							>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<div>
			<h1 class="font-bold text-5xl text-center mb-12">Frequently asked questions</h1>
			<div class="flex flex-col gap-6 px-10">
				{#each faqs as faq (faq.index)}
					<button
						on:click={() => faqToggle(faq.index)}
						class="max-w-[1000px] bg-white rounded-3xl px-8 border-2 border-a-black/10 py-3"
					>
						<div class="flex justify-between items-center">
							<h1 class="font-semibold text-2xl">{faq.question}</h1>
							<svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
								><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
									d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
								/></svg
							>
						</div>
						<p
							bind:this={faqAnswers[faq.index]}
							class="font-light text-a-grey text-left h-0 invisible leading-relaxed"
						>
							{faq.answer}
						</p>
					</button>
				{/each}
			</div>
		</div>
	</section>
</main>

<style>
	* {
		position: relative;
	}
</style>
