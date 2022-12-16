<script>
  import {
    Navbar,
    Link,
  } from 'konsta/svelte';
  import { locale, locales } from "$i18n";
</script>

  <Navbar
    title="Navbar"
    subtitle="Subtitle"
    class="top-0 sticky px-6"
    transparent=true
  >
    <select class="float-right" style="background-color: transparent; color: white;" bind:value={$locale}>
      {#each locales as l}
        <option value={l}>{l.toUpperCase()}</option>
      {/each}
    </select>
  </Navbar>
