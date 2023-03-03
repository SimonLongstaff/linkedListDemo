<script>
    import "../app.css";
    import { LinkedList} from "@simonlongstaff/linked-list/src";
    import ListItemCard from "../ListItemCard.svelte";
    import AddItem from "../AddItem.svelte";
    import CurrentItem from "../CurrentItem.svelte";

    let list = new LinkedList();
    list.push({
        value: "Item 1",
        id: 1
    });
    list.push({
        value: "Item 2",
        id: 2
    });
    list.push({
        value: "Item 3",
        id: 3
    });

    function addToList(value) {
        list.push(value);
        list = list;
    }

    function unshiftToList(value) {
        list.unshift(value);
        list = list;
    }

    function addToListAtIndex(value, index) {
        list.insertAtIndex(value, index);
        list = list;
    }

    function removeItem(index) {
        console.log(index);
        list.removeAtIndex(index);
        list = list;
        console.log(list.getLength())
    }

    function swapUp(index) {
        list.swapUp(index);
        list = list;
    }

    function swapDown(index) {
        list.swapDown(index);
        list = list;
    }

    function reverseList() {
        list.reverse();
        list = list;
    }

    function getLength() {
        return list.length;
    }

    function next() {
        list.next();
        list = list;
    }

    function previous() {
        list.previous();
        list = list;
    }

</script>

<div class="app">

    <div style="margin: 40px">
        <h1 class="text-center text-3xl font-bold und">Linked List</h1>
        <h3 class="text-center text-xl font-bold">Example page for doubly linked list implementation in TypeScript</h3>
    </div>

    <AddItem
            push="{addToList}"
            unshift="{unshiftToList}"
            addAt="{addToListAtIndex}"
            length="{getLength()}"
    />

    <div class="card">
        <button class="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded" on:click="{reverseList}">Reverse List</button>
    </div>

    {#key list}
        {#if list.current !== undefined}
            <CurrentItem
                    currentItem="{list.getCurrent()}"
                    next="{next}"
                    prev="{previous}"
            />
        {/if}

        <div class="flex-column-cards">
            {#each {length: getLength()} as _, index}
                {#if list.getAtIndex(index)?.value !== undefined}
                    <ListItemCard listItem={list.getAtIndex(index)}
                          listIndex={index}
                          removeItem="{removeItem}"
                          moveUp="{swapUp}"
                          moveDown="{swapDown}"
                    />
                {/if}
            {/each}
        </div>
    {/key}
</div>


<style lang="postcss">
    :global(html) {
        background: theme("colors.blue.100");
    }
</style>
