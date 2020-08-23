<template>
	<div class="view flex-col px-8 py-8">
		<div class="flex-1 flex justify-center items-center">
			<img class="h-48 w-48 rounded-full" :src="require('@/assets/photo.jpg')">
		</div>
		<div class="flex-2 flex-wrap text-xl flex flex-col justify-start lg:px-64">
			<p>I'm a software engineer based in Windsor, ON, pursuing my MSc. Computer Science degree at the University of Windsor. </p>
			<br>
			<p>Versatility is my brand. I'm always looking for new things to learn and build, which has made me capable of adapting and innovating across different domains. I have a wide range of experience across various disciplines of software development, working in projects and teams of varying scale. </p>
			<br>
			<p>Some of the domains I've worked in are:</p>
			<br>
			<div class="flex flex-col lg:flex-row px-2 justify-evenly">
				<ul class="list-disc">
					<li>Web and Mobile UI/UX Development</li>
					<li>API Development</li>
					<li>Database Management</li>
				</ul>
				<ul class="list-disc">
					<li>Cloud Application Development</li>
					<li>Natural Language Processing</li>
					<li>Blockchain Software Engineering</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
}
</script>
