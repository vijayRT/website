<template>
	<nav>
		<div class="navbar lg:px-8 py-8 lg:py-16">
			<div class="flex-4 lg:flex-1 text-white pl-8">
				<NuxtLink
					to="/"
				>
					<span
						class="font-semibold lg:text-2xl tracking-tight"
					>Vijay Rajasekar</span
					>
				</NuxtLink
				>
			</div>
			<div class="flex-1 items-end lg:hidden">
				<button
					class="px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
					@click="toggle = !toggle"
				>
					<svg
						class="fill-current h-3 w-3"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
			<div
				class="hidden lg:flex-1 lg:justify-end lg:px-8 lg:flex lg:items-center lg:visible"
			>
				<NuxtLink
					:class="'navbar-item ' + underlinePageName('About')"
					to="/about"
				>
					About
				</NuxtLink
				>
				<NuxtLink
					:class="'navbar-item ml-12 ' + underlinePageName('Projects')"
					to="/projects"
				>
					Projects
				</NuxtLink
				>
				<NuxtLink
					:class="'navbar-item ml-12 ' + underlinePageName('Skills')"
					to="/skills"
				>
					Skills
				</NuxtLink
				>
				<a
					class="inline-block text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 ml-12"
					href="/resume.pdf"
					target="_blank"
				>Resume</a
				>
			</div>
		</div>
		<div v-if="toggle" class="flex flex-col flex-wrap lg:hidden items-end mr-8">
			<NuxtLink
				:class="'navbar-item ' + underlinePageName('About')"
				to="/about"
			>
				About
			</NuxtLink
			>
			<NuxtLink
				:class="'navbar-item mt-3 ' + underlinePageName('Projects')"
				to="/projects"
			>
				Projects
			</NuxtLink
			>
			<NuxtLink
				:class="'navbar-item mt-3 ' + underlinePageName('Skills')"
				to="/skills"
			>
				Skills
			</NuxtLink
			>
			<a
				class="inline-block text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 my-3"
				href="/resume.pdf"
				target="_blank"
			>Resume</a
			>
		</div>
	</nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'NavBar',
	data () {
		return {
			toggle: false
		}
	},
	methods: {
		underlinePageName (pageName: string) {
			if (this.$nuxt.$route.name === pageName) {
				return 'navbar-item-active'
			}
			return ''
		}
	}
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
.navbar {
  @apply flex-1 flex items-center justify-between;
}

.navbar-item {
  @apply text-xl text-gray-400;
}

.navbar-item:hover {
  @apply text-white;
}

.navbar-item-active {
  @apply underline;
}
</style>
