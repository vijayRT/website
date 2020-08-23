<template>
	<div class="view flex-col px-4 lg:px-24">
		<div class="flex flex-col">
			<span class="text-3xl">Academic Projects</span>
			<div class="flex flex-row flex-wrap py-12">
				<ProjectCard v-for="project in academicProjects" :key="project.id" :content="project" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
export default Vue.extend({
	components: {
		ProjectCard
	},
	data () {
		return {
			academicProjects: [
				{
					id: 'research',
					image: true,
					title: 're-Search',
					description: 'Academic Search Engine built using Python and Vue.js for indexing, search, and retrieval of ~1 million academic research papers.',
					imageName: 'research.png',
					githubRepo: 'reSearch'
				}
			]
		}
	}
})
</script>
