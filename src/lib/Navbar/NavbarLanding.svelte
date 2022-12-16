<script>
	import { Navbar } from 'konsta/svelte';
	import LanguagePicker from '$lib/LanguagePicker.svelte';
</script>

<Navbar title="Navbar" subtitle="Subtitle" class="top-0 sticky px-6" transparent="true">
	<LanguagePicker />
</Navbar>
