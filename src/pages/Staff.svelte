<script>
	import { getStaffData } from "../data/data.js";
  import Person from "../lib/Person.svelte";

	const staffData = getStaffData();
</script>

<div id="Staff">
	<h2>Staff</h2>
	{#each staffData as staff}
		<div class="staff-member">
			<Person name={staff.name} title={staff.title} bio={staff.bio} imagePath={staff.imagePath}/>
		</div>
	{/each}
</div>

<style>
	#Staff {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.staff-member {
		padding-bottom: 64px;
	}
</style>