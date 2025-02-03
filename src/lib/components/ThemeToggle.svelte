<script lang="ts">
  import { Button } from "./ui/button";
  import { Sun, Moon } from "lucide-svelte";
  import { type Theme, getTheme, toggleTheme } from "$lib/utils/theme"; // Correct import
  import { onMount } from 'svelte';

  let currentTheme: Theme = 'light';

  onMount(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    currentTheme = (savedTheme === 'light' || savedTheme === 'dark') 
      ? savedTheme 
      : systemDark 
        ? 'dark' 
        : 'light';
  });
</script>

<Button
  variant="ghost"
  size="icon"
  on:click={() => {
    currentTheme = toggleTheme();
  }}
>
  {#if currentTheme === 'light'}
    <Sun class="h-[1.2rem] w-[1.2rem]" />
  {:else}
    <Moon class="h-[1.2rem] w-[1.2rem]" />
  {/if}
  <span class="sr-only">Toggle theme</span>
</Button>