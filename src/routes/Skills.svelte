<script lang="ts">
	import Python from '$lib/images/skills/python.png';
	import Arduino from '$lib/images/skills/arduino.png';
	import Typescript from '$lib/images/skills/typescript.png';
	import ReactJs from '$lib/images/skills/react.png';
	import SvelteKit from '$lib/images/skills/sveltekit.png';
	import Supabase from '$lib/images/skills/supabase.png';
	import VueJs from '$lib/images/skills/vuejs.png';
	import Pgsql from '$lib/images/skills/pgsql.png';
</script>

<div class="flex flex-col gap-6 mt-10 font-Source">
	<h3 class="text-3xl text-white">Skills</h3>
	<p class="text-gray-100 text-base leading-relaxed">
		Check out the awesome lineup of languages I've wielded to bring my projects to life! 🎨 But hey,
		I'm not your typical programmer; think of me as a creative problem-solving wizard! 🚀💡 Ever had
		the wild idea of linking a smart contract on the blockchain to your aquaponics farm? Well, I not
		only make it happen but take it up a notch! 🌱💻 <br /><br /><span class="font-medium underline"
			>My creativity knows no bounds – and trust me, that's just the beginning! Ready for a
			mind-blowing journey? Buckle up because with me, the possibilities are endless! 🌈🚀
			#CodingMagic</span
		>
	</p>
	<div class="grid gap-4 w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-Source">
		<p
			class="px-4 py-2 rounded-2xl shadow-sm shadow-white text-white border border-white flex gap-2"
		>
			<img src={Python} alt="" class="w-6 h-6" />Python
		</p>
		<p
			class="px-4 py-2 rounded-2xl shadow-sm shadow-white text-white border border-white flex gap-2"
		>
			<img src={Typescript} alt="" class="w-6 h-6" />TypeScript
		</p>
		<p
			class="px-4 py-2 rounded-2xl shadow-sm shadow-white text-white border border-white flex gap-2"
		>
			<img src={Pgsql} alt="" class="w-6 h-6" />SQL/PGSQL
		</p>
		<p
			class="px-4 py-2 rounded-2xl shadow-sm shadow-white text-white border border-white flex gap-2"
		>
			<img src={Arduino} alt="" class="w-6 h-6" />Arduino
		</p>
		<p
			class="px-4 py-2 rounded-2xl shadow-sm shadow-white text-white border border-white flex gap-2"
		>
			<img src={ReactJs} alt="" class="w-6 h-6" />ReactJS
		</p>
		<p
			class="px-4 py-2 rounded-2xl shadow-sm shadow-white text-white border border-white flex gap-2"
		>
			<img src={SvelteKit} alt="" class="w-6 h-6" />SvelteKit
		</p>
		<p
			class="px-4 py-2 rounded-2xl shadow-sm shadow-white text-white border border-white flex gap-2"
		>
			<img src={VueJs} alt="" class="w-6 h-6" />Vue.JS
		</p>
		<p
			class="px-4 py-2 rounded-2xl shadow-sm shadow-white text-white border border-white flex gap-2"
		>
			<img src={Supabase} alt="" class="w-6 h-6" />Supabase
		</p>
	</div>
</div>
