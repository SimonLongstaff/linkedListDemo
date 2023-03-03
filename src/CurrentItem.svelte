<script>
    export let currentItem;
    export let next = () => {}
    export let prev = () => {};

    let listKey = currentItem?.value ? Object.keys(currentItem?.value) : [];

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



</script>

<div class="card">
    <h1 style="margin-bottom: 10px" class="font-bold text-3xl ">Current Item</h1>
    {#each listKey as key}
        <div>
            <span class="font-bold">{capitalizeFirstLetter(key)} : </span>
            <span>{currentItem.value[key]}</span>
        </div>
    {/each}

    <div class="flex justify-between" style="margin-top: 10px">
        <button on:click={prev} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Prev
        </button>
        <button on:click={next} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Next
        </button>
    </div>
</div>
