<script>
	import About from './About.svelte';
	import Blogs from './Blogs.svelte';
	import Projects from './Projects.svelte';
	import Skills from './Skills.svelte';
	import Socials from './Socials.svelte';
</script>

<div class="relative w-full font-Source">
	<div
		class="fixed bg-black bg-opacity-70 backdrop-blur-sm lg:static w-full left-0 top-0 h-screen lg:h-fit lg:shadow-sm lg:shadow-gray-200 flex lg:block justify-center align-middle place-items-center translate-x-full lg:translate-x-0 transition-transform duration-200 ease-in-out"
	>
		<div
			class="h-full max-w-4xl lg:w-full mx-auto flex flex-col lg:flex-row justify-between text-white p-4"
		>
			<div class="hidden lg:block flex-1"><h1 class="font-bold uppercase">JSaretin</h1></div>
			<ul
				class="flex flex-col lg:flex-row justify-between flex-1 text-3xl lg:text-sm text-gray-200"
			>
				<li><a href="/">Home</a></li>
				<li><a href="/">About</a></li>
				<li><a href="/">Skill</a></li>
				<li><a href="/">Projects</a></li>
				<li><a href="/">Socials</a></li>
			</ul>
			<ul class="flex-1 flex flex-col lg:flex-row justify-end gap-4">
				<li class="">
					<button class="bg-blue-500 p-1 rounded text-gray-950 text-sm">Get In Touch</button>
				</li>
				<li class="">
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
