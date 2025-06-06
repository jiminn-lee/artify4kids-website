<script>
	import { scrollDistance } from '$lib/stores';
	import faqs from '$lib/faqs';
	import info from '$lib/info';
	import Header from '$lib/components/Header.svelte';

	let faqAnswers = [];
	let faqSymbols = [];
	let faqIsToggled = [];

	function faqToggle(index) {
		if (faqIsToggled[index] != true) {
			faqAnswers[index].classList.remove('h-0');
			faqAnswers[index].classList.remove('invisible');
			faqSymbols[index].innerText = '-';
			faqIsToggled[index] = true;
		} else {
			faqAnswers[index].classList.add('h-0');
			faqAnswers[index].classList.add('invisible');
			faqSymbols[index].innerText = '+';
			faqIsToggled[index] = false;
		}
	}
</script>

<svelte:head>
	<title>About Us | Artify4Kids</title>
	<meta property="og:title" content="About Us | Artify4Kids" />
</svelte:head>

<svelte:window bind:scrollY={$scrollDistance} />

<main>
	<Header
		title="About Us"
		description="As a non-profit organization, we aim to provide accessible arts and crafts education to
		underserved children in the Bay Area. Join us in empowering young artists!"
		color="bg-a-yellow"
	/>
	<section
		class="flex flex-col items-center justify-center gap-24 bg-a-yellow-bg py-28 text-a-black"
	>
		<div class="mx-10 flex flex-wrap items-center justify-center gap-12">
			<h1 class="w-fit text-right text-5xl font-bold">Our misson <br /> & approach</h1>
			<p class="max-w-[550px] font-light text-a-grey">
				At Artify4Kids, we believe that every child deserves access to art education. Our programs
				provide a safe and nurturing environment for children to channel their creativity and
				develop new skills. We prioritize diversity and inclusivity in all our programs, ensuring
				that every child feels supported and valued. Let's empower young artists and build a
				brighter future for our community!
			</p>
		</div>
		<div class="flex flex-col items-center gap-12">
			<h1 class="text-5xl font-bold">Meet the team</h1>
			<div class="flex w-3/4 flex-wrap justify-center gap-5">
				{#each info.team as member}
					<div
						id="team"
						style={`background-image: url(${member.img});`}
						class={`h-96 w-72 rounded-3xl border-2 border-a-yellow-hover/50 bg-white bg-size-[100%_auto] bg-position-[center_top_-1rem] bg-no-repeat transition-transform hover:-translate-y-2`}
					>
						<div class="h-[65%]"></div>
						<div class="w-full bg-white p-4">
							<h2 class=" pt-2 font-light text-a-grey">{member.position}</h2>
							<h1 class="text-xl font-bold text-a-black">{member.name}</h1>
							<a
								href={`mailto:${member.email}`}
								class="font-light text-a-red underline transition-all hover:text-a-red-hover"
								>{member.email}</a
							>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<div>
			<h1 class="mx-10 mb-12 text-center text-5xl font-bold">Frequently asked questions</h1>
			<div class="flex flex-col gap-6 sm:px-10">
				{#each faqs as faq (faq.index)}
					<button
						on:click={() => faqToggle(faq.index)}
						class="max-w-[1000px] rounded-3xl border-2 border-a-yellow-hover/50 bg-white px-8 py-3"
					>
						<div class="flex items-center justify-between">
							<h1 class="text-2xl font-semibold">{faq.question}</h1>
							<h1 class="text-2xl" bind:this={faqSymbols[faq.index]}>+</h1>
						</div>
						<p
							bind:this={faqAnswers[faq.index]}
							class="invisible h-0 text-left font-light leading-relaxed text-a-grey"
						>
							{faq.answer}
						</p>
					</button>
				{/each}
			</div>
		</div>
	</section>
</main>
