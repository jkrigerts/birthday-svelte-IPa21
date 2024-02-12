<script>
  import Birthday from "./Birthday.svelte";
	import BirthdayForm from "./BirthdayForm.svelte";

  export let data;
  let birthdays = data.birthdays;
</script>

<h1>Birthday list</h1>

<ul>
  {#if birthdays}
    {#each birthdays as person}
      <li>
        <Birthday name={person.name} dob={person.dob} />
      </li>
    {/each}
  {/if}
</ul>

<h1>Add a new birthday</h1>
<BirthdayForm />

<style>
  li {
    list-style: none;
  }
  ul {
    padding: 0;
  }
</style>