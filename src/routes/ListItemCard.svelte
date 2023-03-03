<script>
    export let listItem;
    export let listIndex;
    export let removeItem = () => {}
    export let moveUp = () => {}
    export let moveDown = () => {}
    let listKey = listItem?.value ? Object.keys(listItem?.value) : [];

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function deleteSelf() {
        if(listIndex > 0) {
            removeItem(listIndex+1);
        }
        else {
            removeItem(listIndex);
        }
    }
</script>

<div class="card">
    <h1 style="margin-bottom: 10px" class="font-bold text-3xl "># {listIndex+1}</h1>
{#each listKey as key}
    <div>
        <span class="font-bold">{capitalizeFirstLetter(key)} : </span>
        <span>{listItem.value[key]}</span>
    </div>
    {/each}
    <div class="flex">
        <button on:click={moveUp(listIndex)} style="margin: 5px 5px 5px 0" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-1">
            Move Up
        </button>
        <button on:click={moveDown(listIndex)} style="margin: 5px 0 5px 5px" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-1">
            Move Down
        </button>
    </div>
    <button on:click={deleteSelf} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Delete
    </button>
</div>



