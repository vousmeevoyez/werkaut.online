<script>
  import {
    Chip
  } from 'konsta/svelte';
  import { t, locale, locales } from "$i18n";
</script>
<div class="flex justify-center">
 <Chip class="m-0.5">
    <div>
       <br>
       <br>
       <div class="flex items-center">
       <svg class=`h-6 w-8 mr-3 bg-${locales[locale]["flag"]}`/>
       <p class="text-white">Indonesia</p>
       </div>
    </div>
 </Chip>
</div>

