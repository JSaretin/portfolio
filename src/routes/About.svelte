<script lang="ts">
	import John from '$lib/images/John.jpg';
</script>

<div class="flex">
	<div class="flex flex-col gap-6">
		<h2 class="text-3xl text-white">About Me</h2>
		<p class="leading-relaxed text-lg font-Source text-gray-100">
			John is a software engineer from <b>Nigeria</b>, he has been programming for over half a
			decade, and has sizable knowledge in many programming languages and framework include (but not
			limited) to the once below
		</p>
	</div>
	<div class="hidden lg:block rounded-full overflow-hidden aspect-square max-w-lg w-full">
		<img src={John} alt="" class="w-full h-full object-cover" />
	</div>
</div>
