<script>
	import { Button } from 'konsta/svelte';
	import { t } from '$i18n';
	import Logo from '$lib/Logo.svelte';
	import NavbarLanding from '$lib/Navbar/NavbarLanding.svelte';
</script>

<div class="min-h-screen bg-cover bg-no-repeat bg-fixed bg-center bg-deadlift">
	<NavbarLanding />
	<div class="h-full flex items-center justify-center">
		<div class="px-8">
			<Logo />
			<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-white">
				{$t('index.title')}
			</h2>
			<br />
			<Button large rounded>{$t('button.start')}</Button>
		</div>
	</div>
</div>
