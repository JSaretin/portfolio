<script>
	import About from './About.svelte';
	import Blogs from './Blogs.svelte';
	import Projects from './Projects.svelte';
	import Skills from './Skills.svelte';
	import Socials from './Socials.svelte';
</script>

<div class="h-full w-full font-Montserrat">
	<div class="h-full w-full flex flex-col lg:flex-row">
		<!-- <div class="flex-1 h-full lg:overflow-hidden">
			<div class="row-start-1 row-end-7 w-full p-4 overflow-y-scroll">
				
			</div>
			<div
				class="row-start-7 flex text-lg text-white justify-between p-6 border border-white w-full"
			>
				<p>Twitter</p>
				<p>Twitter</p>
				<p>Twitter</p>
				<p>Twitter</p>
			</div>
		</div> -->
		<div class="flex-[2] lg:overflow-y-scroll h-full p-4 lg:p-6 max-w-4xl mx-auto">
			<About />
			<Skills />
			<!-- <Projects /> -->
			<Socials />
		</div>
		<!-- <div class="flex-1 overflow-hidden h-full border-l border-l-white">
			<Blogs />
		</div> -->
	</div>
</div>
