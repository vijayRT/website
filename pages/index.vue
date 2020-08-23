<template>
	<div class="view flex-col items-center">
		<div class="flex-1 flex flex-col justify-center px-8">
			<p class="text-xl">
				Hi, my name is
			</p>
			<p class="text-5xl">
				Vijay Rajasekar
			</p>
			<p class="text-xl">
				I'm a versatile software engineer with professional and academic experience in a wide variety of tech domains.
			</p>
		</div>
		<div class="flex-1 flex justify-center items-start mt-4">
			<a
				href="https://github.com/vijayrt"
				target="_blank"
				class="social-link lg:inline-block"
			>
				<fa :icon="['fab', 'github']" />
			</a>
			<a
				href="https://www.linkedin.com/in/vijayrajasekar96/"
				target="_blank"
				class="social-link lg:inline-block mx-12"
			>
				<fa :icon="['fab', 'linkedin']" />
			</a>
			<a
				href="https://twitter.com/CrowNoseFear"
				target="_blank"
				class="social-link lg:inline-block"
			>
				<fa :icon="['fab', 'twitter']" />
			</a>
		</div>
	</div>
</template>
<script>
export default {}
</script>

<style lang="postcss">

.view {
    @apply flex flex-5 text-white;
}

.social-link {
	@apply text-3xl text-gray-400;
}

.social-link:hover {
	@apply text-white;
}
</style>
