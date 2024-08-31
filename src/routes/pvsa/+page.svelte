<script>
	import { scrollDistance, headerHeight } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		headerHeight.set(0);
		scrollDistance.set(2);
	});
</script>

<main class="flex h-[900px] items-center justify-center bg-a-red-bg pt-20">
	<div class="max-w-[900px] rounded-3xl border-2 border-a-black/10 bg-white p-20">
		<h1 class="text-xl font-bold">To be eligible for PVSA hours from Artify4Kids:</h1>
		<ol type="1" class="list-outisde list-decimal">
			<li class="py-3">
				Candidates must submit a documented record of volunteer activities and hours served through
				the Artify Volunteer Hours sheet.
			</li>
			<li class="py-3">
				The deadline for submission is the last day of every month at 12:00 AM PST. Should this
				deadline be missed, candidates must wait until the following month to submit their hours.
				Candidates cannot submit hours that were earned more than 6 months earlier. (ex. You are not
				allowed to submit hours for a January event in September.)
			</li>
			<li class="py-3">
				In order to qualify to receive PVSA from Artify4Kids, candidates must have completed hours
				within a single 12-month period at the candidates’ choice.
			</li>
			<li class="py-3">
				Candidates must meet the number of hours designated by the Presidential Volunteer Service
				Award. Please check out the eligibility: <a
					target="_blank"
					rel="noopener noreferrer"
					class="text-a-red underline"
					href="https://presidentialserviceawards.gov/eligibility"
					>https://presidentialserviceawards.gov/eligibility</a
				>
			</li>
			<li class="py-3">
				Artify4Kids has the right to refuse to approve activities with undocumented hours and/or
				dates.
			</li>
			<li class="py-3">
				To officially submit your PVSA hours, download your recorded hours (in the Google Sheets)
				and share it to <a
					class="text-a-red underline"
					href="mailto:artify4kids@gmail.com"
					target="_blank"
					rel="noopener noreferrer">artify4kids@gmail.com</a
				>
			</li>
		</ol>
	</div>
</main>
