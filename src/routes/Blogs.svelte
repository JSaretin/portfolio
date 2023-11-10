<div class="w-full text-white p-4 h-full overflow-y-scroll relative">
	<h3 class="text-2xl mb-8">Blogs</h3>
	<p class="text-sm leading-relaxed">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit reprehenderit, facilis veniam
		quibusdam quos pariatur, dolorum necessitatibus obcaecati totam, eos dicta ad et nulla expedita.
		Quis laboriosam repellat quae aliquid.
	</p>

	<div class="w-full flex flex-col gap-4 mt-6 overflow-y-scroll">
		{#each Array(5) as b, _}
			<div class="text-sm rounded-md border border-white overflow-hidden cursor-pointer font-Source">
				<div class="w-full h-[200px] overflow-hidden bg-gray-700" >
                    <img src="https://source.unsplash.com/500x300?random" alt="">
                </div>
				<div class="p-6">
					<h4 class="font-bold mb-4 font-Montserrat">This is the awesome blog title that you don't want to miss</h4>
					<p class="leading-relaxed">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore obcaecati perspiciatis,
						officia dolorum fugiat optio facilis sint?
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
