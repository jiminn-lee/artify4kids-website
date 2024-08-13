<script>
	import { onMount } from 'svelte';
	import { scrollDistance, headerHeight } from '$lib/stores';
	import grainedOptions from '$lib/utils';

	let header;
	onMount(() => {
		grained('#header', grainedOptions);
		headerHeight.set(header.clientHeight);
	});
</script>

<svelte:head>
	<title>Take Action | Artify4Kids</title>
	<meta property="og:title" content="About Us | Artify4Kids" />
	<script src="/grained.js"></script>
</svelte:head>

<svelte:window
	bind:scrollY={$scrollDistance}
	on:resize={() => {
		headerHeight.set(header.clientHeight);
	}}
/>

<main>
	<section
		id="header"
		class="flex h-[400px] flex-col items-center justify-center bg-a-red"
		bind:this={header}
	>
		<h1 class="mx-10 mb-4 text-center text-6xl font-bold text-white drop-shadow-md md:text-8xl">
			Take Action
		</h1>
		<p
			class="mx-10 max-w-[550px] text-center text-sm font-light italic text-white drop-shadow-md md:text-base"
		>
			Whether you lean towards participating in person or if you'd rather contribute from the
			coziness of your home, we have procedures tailored to your preferences!
		</p>
	</section>
	<section class="flex flex-col items-center gap-20 bg-a-red-bg">
		<div class="mt-28">
			<div
				class="mx-10 flex max-w-[750px] flex-col items-center rounded-3xl border-2 border-a-red-hover/50 bg-white p-10 transition-all"
			>
				<h1 class="mb-4 text-center text-5xl font-bold text-a-black">Volunteer</h1>
				<hr class="w-full rounded-full border-a-black/10" />
				<p class="my-4 text-center font-light text-a-grey">
					We are always looking for volunteers who are passionate about art education and want to
					make a difference in the lives of children. If you are interested in volunteering with us,
					please get in touch with us through this form!
				</p>
				<button
					class="w-fit rounded-3xl border-2 border-a-red bg-a-red px-4 text-lg text-white transition-all hover:border-a-red-hover hover:bg-a-red-hover active:translate-y-0.5"
					><a
						href="https://docs.google.com/forms/d/e/1FAIpQLSen7saKU7nkRy6t089yrOOA1X-LEgLc3A_yYwZz8hA3AXBv4Q/viewform"
						target="_blank"
						rel="noopener noreferrer">Volunteer</a
					></button
				>
			</div>
		</div>
		<div class="mx-10 flex flex-wrap justify-center gap-20">
			<div class=" flex max-w-[550px] flex-col items-center">
				<h1 class="mb-4 text-center text-4xl font-bold text-a-black">Create a Chapter</h1>
				<hr class="w-full rounded-full border-a-black/10" />
				<p class="my-4 text-center font-light text-a-grey">
					Do you want to start your own Artify Chapter? Please fill out the chapter form, and we
					will advise and support you throughout the process of launching it while providing
					starting support. Be ready to show us a plan or agenda of your idea and be a leader of the
					entire chapter!
				</p>
				<button
					class="w-fit rounded-3xl border-2 border-a-red bg-white px-4 text-lg text-a-red-hover transition-all hover:border-a-red-hover hover:bg-a-red-hover hover:text-white active:translate-y-0.5"
					><a
						href="https://docs.google.com/forms/d/e/1FAIpQLSeJ9-8b8cT7Jj3fih9vm3-Ts-ZeG4UXG5lNI5lhnBDLbx-r3Q/viewform"
						target="_blank"
						rel="noopener noreferrer">Register</a
					></button
				>
			</div>
			<div class=" flex max-w-[550px] flex-col items-center">
				<h1 class="mb-4 text-center text-4xl font-bold text-a-black">Join Our Team</h1>
				<hr class="w-full rounded-full border-a-black/10" />
				<p class="my-4 text-center font-light text-a-grey">
					Do you want to be more involved? Would you rather work behind the scenes in our social
					media, design, or website team? Apply to be on our team alongside regular volunteer times.
					We will contact you shortly!
				</p>
				<button
					class="w-fit rounded-3xl border-2 border-a-red bg-white px-4 text-lg text-a-red-hover transition-all hover:border-a-red-hover hover:bg-a-red-hover hover:text-white active:translate-y-0.5"
					><a
						href="https://docs.google.com/forms/d/e/1FAIpQLSewG6jXziVNkJgq_NvmdvO5BirikFQCoull85WH2_VK2Cec1g/viewform"
						target="_blank"
						rel="noopener noreferrer">Apply</a
					></button
				>
			</div>
		</div>
		<div class="mx-10 mb-28 flex flex-wrap justify-center gap-20">
			<div class=" flex max-w-[550px] flex-col items-center">
				<h1 class="mb-4 text-center text-4xl font-bold text-a-black">Donate</h1>
				<hr class="w-full rounded-full border-a-black/10" />
				<p class="my-4 text-center font-light text-a-grey">
					Your donations will help us to continue providing art education to underserved children in
					the Bay Area. You can donate online or get in touch with us to learn more about other ways
					to support our cause.
				</p>
				<button
					class="w-fit rounded-3xl border-2 border-a-red bg-white px-4 text-lg text-a-red-hover transition-all hover:border-a-red-hover hover:bg-a-red-hover hover:text-white active:translate-y-0.5"
					><a
						href="https://www.gofundme.com/f/artify-nonprofit-buisness-campaign?utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all&utm_source=customer"
						target="_blank"
						rel="noopener noreferrer">GoFundMe</a
					></button
				>
			</div>
			<div class=" flex max-w-[550px] flex-col items-center">
				<h1 class="mb-4 text-center text-4xl font-bold text-a-black">Video Lesson</h1>
				<hr class="w-full rounded-full border-a-black/10" />
				<p class="my-4 text-center font-light text-a-grey">
					If you don't live in the area or if you don't have time to go in person but you still want
					to spread art education, we have the option of contributing through video lessons. Record
					a short 10-15 minute video about your favorite art project/technique that will help kids
					anywhere.
				</p>
				<!-- <button
					class="w-fit rounded-3xl border-2 border-a-red bg-white px-4 text-lg text-a-red-hover transition-all hover:border-a-red-hover hover:bg-a-red-hover hover:text-white active:translate-y-0.5"
					><a href="">Apply</a></button
				> -->
			</div>
		</div>
	</section>
</main>

<style>
	* {
		position: relative;
	}
</style>
