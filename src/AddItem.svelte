<script>
    import AddKeyValuePair from "./AddKeyValuePair.svelte";
    export let push = () => {};
    export let unshift = () => {};
    export let addAt = () => {};
    export let length = 0;

    let index = 0;
    let numOfKeyValuePairs = 0;
    let keyValuePairs = [];

    function keyValuePairArrayToObject(keyValuePairArray) {
        let obj = {};
        console.log(keyValuePairArray);
        keyValuePairArray.forEach(keyValuePair => {
            obj[keyValuePair.key] = keyValuePair.value;
        });
        return obj;
    }

    function pushKeyValuePairs() {
        push(keyValuePairArrayToObject(keyValuePairs))
        numOfKeyValuePairs = 0;
        keyValuePairs = new Array(numOfKeyValuePairs).fill({key: "", value: ""});
    }

    function unshiftKeyValuePairs() {
        unshift(keyValuePairArrayToObject(keyValuePairs))
        numOfKeyValuePairs = 0;
        keyValuePairs = new Array(numOfKeyValuePairs).fill({key: "", value: ""});
    }

    function addAtKeyValuePairs(index) {
        if(index > length || index < 0)
        {
            alert("Index out of bounds")
            return;
        }
        addAt(keyValuePairArrayToObject(keyValuePairs), index)
        numOfKeyValuePairs = 0;
        keyValuePairs = new Array(numOfKeyValuePairs).fill({key: "", value: ""});
    }

    function addNewKeyValuePair() {
        numOfKeyValuePairs++;
        keyValuePairs.push({key: "", value: ""});
        numOfKeyValuePairs = numOfKeyValuePairs;
        keyValuePairs = keyValuePairs;
    }



</script>

<div class="card">
    <h1 class="font-bold text-3xl">Add Item</h1>
    {#each {length: numOfKeyValuePairs} as _, i}
        <AddKeyValuePair keyValue="{keyValuePairs}" index="{i}" />
    {/each}

    <button style="margin: 20px 0 0 0" on:click={() => addNewKeyValuePair()}
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Key Value Pair</button>
    {#if numOfKeyValuePairs > 0}
        <button style="margin: 10px 0 0 0"
                on:click={() => unshiftKeyValuePairs()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Top
        </button>
        <button style="margin: 10px 0 0 0"
                on:click={() => pushKeyValuePairs()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Bottom
        </button>
        <div style="margin: 10px 0 0 0" class="flex flex-col">
            <label for="index"  class=" block text-gray-700 text-sm font-bold mb-2">Add at index</label>
            <input type="number" style="margin: 10px 0"
                   class="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   id="index"
                   bind:value={index} />
            <button on:click={() => addAtKeyValuePairs(index)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add
            </button>
        </div>
    {/if}
</div>
