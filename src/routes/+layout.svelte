<script lang="ts">
	import '../app.css'; // Add this line
	import { setTheme } from '$lib/utils/theme';
	import { browser } from '$app/environment';
  
	if (browser) {
	  // Initialize theme on load
	  const savedTheme = localStorage.getItem('theme');
	  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	  const initialTheme = savedTheme || (systemDark ? 'dark' : 'light');
	  setTheme(initialTheme as 'light' | 'dark');
	}
  </script>
  
  <slot />