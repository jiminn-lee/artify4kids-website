<script>
	import { scrollDistance } from '$lib/stores';
	import Header from '$lib/components/Header.svelte';
	import { ChevronDown, ChevronUp } from 'lucide-svelte';
	import Masonry from 'svelte-masonry';

	import events from '$lib/events';

	let refresh;

	let isToggled = [].fill(false);
	function handleExpand(index) {
		isToggled[index] = !isToggled[index];
	}
</script>

<svelte:head>
	<title>Events | Artify4Kids</title>
	<meta property="og:title" content="Upcoming | Artify4Kids" />
</svelte:head>

<svelte:window bind:scrollY={$scrollDistance} />

<main>
	<Header
		title="Events"
		description="Below are all the details about our scheduled events and lessons!"
		color="bg-a-purple"
	/>
	<section class="flex flex-col gap-4 bg-a-purple-bg py-28">
		{#each events as event, i}
			<div
				class="mx-[5%] flex h-fit items-center rounded-3xl border-2 border-a-purple-hover/50 bg-white p-8 transition-all hover:-translate-y-2 max-[986px]:flex-col max-[986px]:gap-4"
			>
				<img
					src={event.image}
					alt=""
					class="mr-6 h-[225px] min-w-[300px] rounded-xl bg-slate-400 object-cover"
				/>
				<div>
					<h1 class="mb-2 text-left text-3xl font-bold text-a-black">{event.name}</h1>
					<p class="mr-[5%]">{event.details}</p>
				</div>

				<!-- <h2>{event.date}</h2> -->
				<!-- <button class=" mb-1 flex items-center" onclick={() => handleExpand(i)}>
					{#if isToggled[i]}
						<ChevronUp strokeWidth="1px" />
					{:else}
						<ChevronDown strokeWidth="1px" />
					{/if}

					<h2 class=" ml-1 text-center">See Details</h2>
				</button>
				{#if isToggled[i]}
					<hr class="mb-4 w-full rounded-full border-a-black/10" />

					<p>{event.details}</p>
				{/if} -->
			</div>
		{/each}

		<!-- <iframe
			id="open-web-calendar"
			style="background:url('https://raw.githubusercontent.com/niccokunzmann/open-web-calendar/master/static/img/loaders/circular-loader.gif') center center no-repeat;"
			src="https://open-web-calendar.hosted.quelltext.eu/calendar.html?css=.dhx_cal_event_clear_date%20%7B%20color%3A%20white%3B%20%7D%0A.dhx_cal_event_line_content%20%7B%20color%3A%20white%3B%20%7D%0A.dhx_cal_tab.active%20%7B%20color%3A%20white%3B%20%7D%0A.dhx_cal_today_button%20%7B%20border-color%3A%20%237852D1%3B%20%7D%0A.dhx_cal_today_button%3Ahover%20%7B%20border-color%3A%20%237852D1%3B%20%7D%0A%23infoIcon%20%7B%20display%3A%20none%3B%20%7D%0A.dhx_cal_event_clear%3Abefore%20%7B%20display%3A%20none%3B%20%7D%0A.dhx_cal_tab%3Aactive%20%7B%20background-color%3A%20%236249c4%3B%20%7D%0A.dhx_cal_tab%3Ahover%20%7B%20border-color%3A%20%237862d1%3B%7D%0A.dhx_cal_navline%20%7B%20%0Aborder-top-width%3A%201px%3B%20%0Aborder-top-color%3A%20%23d0dbe3%3B%20%0Aborder-top-style%3A%20solid%3B%20%0Aborder-right-width%3A%201px%3B%20%0Aborder-right-color%3A%20%23d0dbe3%3B%20%0Aborder-right-style%3A%20solid%3B%20%0Aborder-left-width%3A%201px%3B%20%0Aborder-left-color%3A%20%23d0dbe3%3B%20%0Aborder-left-style%3A%20solid%3B%20%0A%7D%0A.dhx_cal_header%20%7B%0Aborder-left-width%3A%201px%3B%20%0Aborder-left-color%3A%20%23d0dbe3%3B%20%0Aborder-left-style%3A%20solid%3B%20%0A%7D%0A.dhx_cal_data%20%7B%0Aborder-left-width%3A%201px%3B%20%0Aborder-left-color%3A%20%23d0dbe3%3B%20%0Aborder-left-style%3A%20solid%3B%20%0A%7D%0A.dhx_cal_navline%2C%20.dhx_scale_bar%2C%20.dhx_cal_container%2C%20.dhx_cal_header%2C%20.dhx_cal_scale_placeholder%2C%20.dhx_scale_holder%2C%20.dhx_scale_hour%20%7Bbackground-color%3A%20%23f5f3fc%3B%7D.event%2C%20.dhx_cal_tab.active%2C%20.dhx_cal_tab.active%3Ahover%20%7Bbackground-color%3A%20%237862d1%3B%7D%20.dhx_month_head%2C%20.dhx_cal_tab%2C%20.dhx_cal_today_button%20%7Bcolor%3A%20%237862d1%3B%7D%20.dhx_cal_tab%2C%20.dhx_cal_tab.active%20%7Bborder-color%3A%20%237862d1%3B%7D.dhx_scale_holder_now%2C%20.dhx_now%20.dhx_month_head%2C%20.dhx_now%20.dhx_month_body%20%7B%20background-color%3A%20%23f5f3fc%3B%7D&amp;hour_format=%25g%3A%25i%E2%80%AF%25a&amp;skin=terrace&amp;title=Artify4Kids%20Upcoming%20Events%20Calender&amp;url=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Fical%2F232b20871050a16bbf794707bdd1e78c057c16b08edf47ca6c5c4a3f74e706a5%2540group.calendar.google.com%2Fpublic%2Fbasic.ics"
			sandbox="allow-scripts allow-same-origin allow-top-navigation"
			allowTransparency="true"
			scrolling="no"
			frameborder="0"
			height="800px"
			width="1200px"
			title="Artify4Kids Upcoming Events Calender"
			class="ml-auto mr-auto"
		></iframe> -->
	</section>
</main>
