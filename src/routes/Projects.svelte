<div class="w-full font-Source mt-10 flex flex-col gap-6">
	<h3 class="text-2xl text-white">Projects</h3>
	<p class="text-sm text-white">
		These are some of the John's know projects (Wait till I show you my Desktop. lol)
	</p>
	<div class="w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		{#each Array(5) as array, _}
			<div class="rounded-md p-4 text-white border border-white">
				<h4 class="text-xl font-medium mb-6 font-Montserrat">Project Title</h4>

				<p class="text-sm mb-6 text-justify">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nemo obcaecati distinctio
					odit iure recusandae nostrum eum praesentium, aliquid modi harum repellat delectus
					dignissimos totam illum repudiandae natus itaque porro!
				</p>
				<div class="flex justify-around">
					<p class="text-blue-400 font-medium hover:text-blue-600">GitHub</p>
					<p class="text-blue-400 font-medium hover:text-blue-600">Live Demo</p>
					<p class="text-blue-400 font-medium hover:text-blue-600">Blog</p>
				</div>
			</div>
		{/each}
	</div>
</div>
