<script>
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta propery="og:type" content="article" />
	<meta propery="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<div>
		<h1>{data.meta.title}</h1>
		<h2>Published at {data.meta.date}</h2>
		<p>
			<svelte:component this={data.content} />
		</p>
	</div>
</article>
