<script>
  import Birthday from "./Birthday.svelte";

  export let data;
</script>

<h1>Birthday list</h1>

<ul>
  {#if data}
    {#each data as person}
      <li>
        <Birthday name={person.name} dob={person.dob} />
      </li>
    {/each}
  {/if}
</ul>

<style>
  li {
    list-style: none;
  }
  ul {
    padding: 0;
  }
</style>