<script>
  import { onMount } from 'svelte';
  import TailwindStyles from './TailwindStyles.svelte';

  const message = 'Travel Search Engine';
  let count = 0;
  onMount(() => {
    const interval = setInterval(() => count++, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<style>
  .App-logo {
    animation: App-logo-scale infinite 1.6s ease-in-out alternate;
  }
  @keyframes App-logo-scale {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }
</style>

<div class="text-center font-serif">
  <header
    class="bg-gray-100 h-screen flex justify-center items-center flex-col text-3xl">
    <img
      src="/logo.svg"
      class="App-logo pointer-events-none m-4 h-64"
      alt="logo" />
    <p>Page has been open for <code>{count}</code> seconds.</p>
    <p>Edit <code>src/App.svelte</code> and save to reload.</p>
    <a
      class="text-orange-500 font-bold"
      href="https://svelte.dev"
      target="_blank"
      rel="noopener noreferrer">
      {message}
    </a>
  </header>
</div>
