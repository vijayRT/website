<template>
	<div class="view flex-col">
		<div class="flex flex-5 flex-wrap px-4 lg:px-32">
			<div v-for="section in sections" :key="section.title" class="flex sm:flex-basis-1 lg:flex-basis-3 flex-col">
				<span class="text-xl lg:text-3xl">{{ section.title }}</span>
				<div class="flex flex-row flex-wrap py-12 lg:space-x-16 items-baseline justify-start">
					<Skill v-for="skill in section.list" :key="skill.name" :skill-name="skill.name" :skill-icon="skill.icon" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
	data () {
		return {
			sections: [
				{
					title: 'Web Development',
					list: [
						{
							icon: 'react.png',
							name: 'React'
						},
						{
							icon: 'vue.png',
							name: 'Vue'
						}
					]
				},
				{
					title: 'Programming',
					list: [
						{
							icon: 'node.png',
							name: 'Node.js'
						},
						{
							icon: 'python.png',
							name: 'Python'
						},
						{
							icon: 'csharp.png',
							name: 'C#'
						}
					]
				},
				{
					title: 'Database Systems',
					list: [
						{
							icon: 'mysql.png',
							name: 'MySQL'
						},
						{
							icon: 'mongodb.png',
							name: 'MongoDB'
						}
					]
				}
			]
		}
	}
})
</script>
