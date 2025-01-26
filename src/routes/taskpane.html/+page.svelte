<script>
	import { addSlide } from '../../example-api/powerpoint';
	import { writeToCell } from '../../example-api/excel';
</script>

<h1 class="bg-secondary-500">This is taskpane</h1>

<button onclick={addSlide}> Add slide </button>
<button onclick={writeToCell}> Write to cell </button>
