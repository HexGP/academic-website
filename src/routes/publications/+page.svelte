<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { publications } from "$lib/stores/publications";
</script>

<Nav />

<main class="container py-12">
  <h1 class="text-4xl font-bold mb-8">Publications</h1>

  <div class="grid gap-8">
    {#each $publications as publication}
      <div class="flex flex-col md:flex-row items-start bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <!-- Image -->
        <img
          src={publication.image}
          alt={publication.title}
          class="w-full md:w-1/4 rounded-md object-cover mb-4 md:mb-0 md:mr-6"
        />

        <!-- Content -->
        <div class="flex-1">
          <h2 class="text-2xl font-semibold dark:text-white">{publication.title}</h2>
          <p class="text-sm text-gray-600">{publication.authors}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 italic mb-2">
            {publication.venue}
          </p>
          <p class="text-base text-gray-700 dark:text-gray-300 mb-4">
            {publication.description}
          </p>

          <!-- Badges -->
          <div class="flex flex-wrap gap-2">
            {#each publication.badges as badge}
              <a
                href={badge.link}
                target="_blank"
                class="px-3 py-1 text-sm rounded-full bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition"
                >{badge.label}</a
              >
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</main>

<Footer />