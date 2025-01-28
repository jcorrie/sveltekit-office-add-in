<script>
	import { addSlide } from '../../add-in/example_powerpoint';
	import { writeToCell } from '../../add-in/example_excel';
</script>

<h1 class="bg-secondary-500">This is taskpane.html</h1>

<button onclick={addSlide}> Add slide </button>
<button onclick={writeToCell}> Write to cell </button>
