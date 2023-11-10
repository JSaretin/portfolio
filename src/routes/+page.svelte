<script>
	import About from './About.svelte';
	import Blogs from './Blogs.svelte';
	import Projects from './Projects.svelte';
	import Skills from './Skills.svelte';
	import Socials from './Socials.svelte';
</script>

<div class="relative w-full font-Source">
	<div class="static w-full left-0 top-0 shadow-sm shadow-gray-200">
		<div class="max-w-4xl w-full mx-auto flex justify-between text-white p-4">
			<div class="flex-1"><h1 class="font-bold uppercase">JSaretin</h1></div>
			<ul class="flex justify-between flex-1 text-sm text-gray-200">
				<li><a href="/">Home</a></li>
				<li><a href="/">About</a></li>
				<li><a href="/">Skill</a></li>
				<li><a href="/">Projects</a></li>
				<li><a href="/">Socials</a></li>
			</ul>
			<ul class="flex-1 flex justify-end">
				<li>
					<button class="bg-blue-500 p-1 rounded text-gray-950 text-sm">Get In Touch</button>
					<button class="bg-green-400 p-1 rounded text-gray-950 text-sm">Get In Quote</button>
				</li>
			</ul>
		</div>
	</div>
	<div class="p-4 lg:p-6 max-w-4xl mx-auto">
		<About />
		<Skills />
		<!-- <Projects /> -->
		<Socials />
	</div>
</div>
