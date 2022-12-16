<script>
	import { locale, locales } from '$i18n';
</script>

<select
	class="float-right"
	style="background-color: transparent; color: white;"
	bind:value={$locale}
>
	{#each locales as l}
		<option value={l}>{l.toUpperCase()}</option>
	{/each}
</select>
