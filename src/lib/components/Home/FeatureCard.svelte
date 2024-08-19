<script lang="ts">
	type Props = {
		icon: string;
	};
	const { icon }: Props = $props();
</script>

<div
	class="flex flex-col items-start gap-1 rounded-md p-5 transition-all duration-400 border border-white/0 hover:bg-purple-50 hover:border hover:border-purple-200"
>
	<div class="p-2 border border-purple-400/50 rounded-lg inline-flex bg-purple-500/10">
		<i class="leading-none text-md text-purple-500 {icon}"></i>
	</div>

	<div class="mt-2">
		<h3 class="text-violet-600 font-semibold mb-2"><slot name="title" /></h3>
		<p class="text-zinc-600"><slot name="content" /></p>
	</div>
</div>
