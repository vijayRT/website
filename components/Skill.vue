<template>
	<div class="max-w-xs flex flex-col">
		<img
			:src="require(`@/assets/skills/${skillIcon}`)"
			class="w-24"
		>
		<div class="flex pt-4 justify-center">
			{{ skillName }}
		</div>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		skillIcon: {
			type: String,
			default: ''
		},
		skillName: {
			type: String,
			default: ''
		}
	}
}
</script>
