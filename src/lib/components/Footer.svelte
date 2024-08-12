<script>
	import info from '$lib/info';
</script>

<footer class="border-2 border-a-black/10 pt-10">
	<a href="/" class="mb-10 flex items-center justify-center">
		<img src="/favicon-96.png" alt="" class="mr-2 w-10" />
		<h1 class="text-2xl font-semibold text-a-black">Artify4Kids</h1>
	</a>
	<hr class="mb-6 ml-auto mr-auto w-1/2 rounded-full border-a-black/10" />
	<div class="flex justify-center">
		<ul class="flex w-56 flex-col items-center gap-2 font-light text-a-grey">
			<li><h1 class=" mb-2 text-lg font-normal text-a-black">Menu</h1></li>
			<li>
				<a
					class="rounded-3xl px-4 transition-all hover:bg-a-black/5 active:bg-a-black/10"
					href="/about-us">About Us</a
				>
			</li>
			<li>
				<a
					class="rounded-3xl px-4 transition-all hover:bg-a-black/5 active:bg-a-black/10"
					href="/chapters">Chapters</a
				>
			</li>
			<li>
				<a
					class="rounded-3xl px-4 transition-all hover:bg-a-black/5 active:bg-a-black/10"
					href="/news-blog">News & Blog</a
				>
			</li>
			<li>
				<a
					class="rounded-3xl px-4 transition-all hover:bg-a-black/5 active:bg-a-black/10"
					href="/upcoming">Upcoming</a
				>
			</li>
			<li>
				<a
					class="rounded-3xl px-4 transition-all hover:bg-a-black/5 active:bg-a-black/10"
					href="/take-action">Take Action</a
				>
			</li>
		</ul>
		<ul class="flex w-56 flex-col items-center gap-2 font-light text-a-grey">
			<li><h1 class=" mb-2 text-lg font-normal text-a-black">Social</h1></li>
			<li>
				<a
					href={info.instagram}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 rounded-3xl px-4 transition-all hover:bg-a-black/5 active:bg-a-black/10"
				>
					<svg
						fill="#454343"
						width="20"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
							d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
						/></svg
					>
					Instagram
				</a>
			</li>
			<li>
				<a
					href={info.x}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 rounded-3xl px-4 transition-all hover:bg-a-black/5 active:bg-a-black/10"
				>
					<svg
						fill="#454343"
						width="20"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
							d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
						/></svg
					>Twitter
				</a>
			</li>
			<li>
				<a
					href={info.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 rounded-3xl px-4 transition-all hover:bg-a-black/5 active:bg-a-black/10"
				>
					<svg
						fill="#454343"
						width="20"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
							d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
						/></svg
					>LinkedIn
				</a>
			</li>
			<li>
				<a
					href={info.tiktok}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 rounded-3xl px-4 transition-all hover:bg-a-black/5 active:bg-a-black/10"
					><svg
						fill="#454343"
						width="20"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
							d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"
						/></svg
					>TikTok</a
				>
			</li>
		</ul>
		<ul class="flex w-56 flex-col items-center gap-2 text-center font-light text-a-grey">
			<li><h1 class=" mb-2 text-lg font-normal text-a-black">Contact Us</h1></li>
			<li>
				<a
					href={info.addressLink}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 rounded-3xl px-4 transition-all hover:bg-a-black/5 active:bg-a-black/10"
				>
					<svg
						fill="#454343"
						height="20"
						width="20"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 384 512"
						><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
							d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
						/></svg
					>
					<h1 class="w-[calc(13rem-20px)]">{info.address}</h1>
				</a>
			</li>
			<li>
				<a
					href={info.phoneLink}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 rounded-3xl px-4 transition-all hover:bg-a-black/5 active:bg-a-black/10"
				>
					<svg
						fill="#454343"
						width="18"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
							d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
						/></svg
					>{info.phone}</a
				>
			</li>
			<li>
				<a
					href={info.emailLink}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 rounded-3xl px-4 transition-all hover:bg-a-black/5 active:bg-a-black/10"
				>
					<svg
						fill="#454343"
						width="18"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
							d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
						/></svg
					>
					{info.email}
				</a>
			</li>
		</ul>
	</div>
	<hr class="ml-auto mr-auto mt-6 w-1/2 rounded-full border-a-black/10" />
	<h1 class="my-3 ml-auto mr-auto w-fit text-sm text-a-grey">
		Designed & Created by <a
			href="https://github.com/jiminn-lee"
			target="_blank"
			rel="noopener noreferrer"
			class="text-a-red underline">Jimin Lee</a
		>
	</h1>
</footer>
