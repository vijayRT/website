<template>
	<div class="max-w-xs rounded overflow-hidden shadow-lg">
		<img
			v-if="content.image"
			class="w-full"
			:src="require(`~/assets/projects/${content.imageName}`)"
			alt="Sunset in the mountains"
		>
		<div class="px-6 py-4 bg-gray-800 elev">
			<div class="font-bold text-xl mb-2">
				{{ content.title }}
			</div>
			<p class="text-white text-base">
				{{ content.description }}
			</p>
			<div class="pt-4 pb-2">
				<span
					class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
				>
					<a :href="`https://github.com/vijayRT/${content.githubRepo}`" target="_blank">Github</a></span
				>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'ProjectCard',
	props: {
		// eslint-disable-next-line vue/require-default-prop
		content: Object
	}
})
</script>
