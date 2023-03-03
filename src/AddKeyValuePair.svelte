<script>
export let keyValue =[];
export let index;

export function onKeyChange(event) {
    keyValue[index].key = event.target.value;
}

export function onValueChange(event) {
    keyValue[index].value = event.target.value;
}


</script>

<div class="flex">
    <span class="flex-1 flex flex-col" style="margin: 5px">
        <label class=" block text-gray-700 text-sm font-bold mb-2" for="key">Key</label>
        <input class="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="key"  on:change={onKeyChange} />
    </span>

    <span class="flex-1 flex flex-col" style="margin: 5px">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="value">Value</label>
        <input class="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="value" on:change={onValueChange} />
    </span>
</div>
