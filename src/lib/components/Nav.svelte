<script lang="ts">
  import { siteConfig } from "$lib/config/site";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
</script>

<nav class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
  <div class="container flex h-16 items-center justify-between">
    <div class="flex items-center gap-6">
      <a href="/" class="text-lg font-semibold tracking-tight">{siteConfig.name}</a>
      <div class="flex items-center gap-4 text-sm">
        {#each siteConfig.navItems as item}
          <a
            href={item.href}
            class="text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.title}
          </a>
        {/each}
      </div>
    </div>
    <ThemeToggle />
  </div>
</nav>