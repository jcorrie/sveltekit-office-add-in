<script>
	import { addSlide } from '../../example_addin_func/powerpoint';
	import { writeToCell } from '../../example_addin_func/excel';
</script>

<h1 class="bg-secondary-500">This is taskpane</h1>

<button onclick={addSlide}> Add slide </button>
<button onclick={writeToCell}> Write to cell </button>
