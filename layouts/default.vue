<template>
	<div id="app">
		<NavBar />
		<transition name="fade" mode="out-in">
			<Nuxt />
		</transition>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from '../components/NavBar.vue'
export default Vue.extend({
	components: {
		NavBar
	}
})
</script>

<style lang="postcss" scoped>
#app {
	@apply flex min-h-screen flex-col bg-gray-900;
	background-image: url('../assets/random-grey-variations.png');
	background-repeat: repeat;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
