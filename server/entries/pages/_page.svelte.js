import { c as create_ssr_component, e as escape, d as each, v as validate_component } from "../../chunks/index.js";
import { LinkedList } from "@simonlongstaff/linked-list/src/index.js";
const app = "";
function capitalizeFirstLetter$1(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const ListItemCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { listItem } = $$props;
  let { listIndex } = $$props;
  let { removeItem = () => {
  } } = $$props;
  let { moveUp = () => {
  } } = $$props;
  let { moveDown = () => {
  } } = $$props;
  let listKey = listItem?.value ? Object.keys(listItem?.value) : [];
  if ($$props.listItem === void 0 && $$bindings.listItem && listItem !== void 0)
    $$bindings.listItem(listItem);
  if ($$props.listIndex === void 0 && $$bindings.listIndex && listIndex !== void 0)
    $$bindings.listIndex(listIndex);
  if ($$props.removeItem === void 0 && $$bindings.removeItem && removeItem !== void 0)
    $$bindings.removeItem(removeItem);
  if ($$props.moveUp === void 0 && $$bindings.moveUp && moveUp !== void 0)
    $$bindings.moveUp(moveUp);
  if ($$props.moveDown === void 0 && $$bindings.moveDown && moveDown !== void 0)
    $$bindings.moveDown(moveDown);
  return `<div class="${"card"}"><h1 style="${"margin-bottom: 10px"}" class="${"font-bold text-3xl "}"># ${escape(listIndex + 1)}</h1>
${each(listKey, (key) => {
    return `<div><span class="${"font-bold"}">${escape(capitalizeFirstLetter$1(key))} : </span>
        <span>${escape(listItem.value[key])}</span>
    </div>`;
  })}
    <div class="${"flex"}"><button style="${"margin: 5px 5px 5px 0"}" class="${"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-1"}">Move Up
        </button>
        <button style="${"margin: 5px 0 5px 5px"}" class="${"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-1"}">Move Down
        </button></div>
    <button class="${"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"}">Delete
    </button></div>`;
});
const AddKeyValuePair = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { keyValue = [] } = $$props;
  let { index } = $$props;
  function onKeyChange(event) {
    keyValue[index].key = event.target.value;
  }
  function onValueChange(event) {
    keyValue[index].value = event.target.value;
  }
  if ($$props.keyValue === void 0 && $$bindings.keyValue && keyValue !== void 0)
    $$bindings.keyValue(keyValue);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.onKeyChange === void 0 && $$bindings.onKeyChange && onKeyChange !== void 0)
    $$bindings.onKeyChange(onKeyChange);
  if ($$props.onValueChange === void 0 && $$bindings.onValueChange && onValueChange !== void 0)
    $$bindings.onValueChange(onValueChange);
  return `<div class="${"flex"}"><span class="${"flex-1 flex flex-col"}" style="${"margin: 5px"}"><label class="${"block text-gray-700 text-sm font-bold mb-2"}" for="${"key"}">Key</label>
        <input class="${"flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}" type="${"text"}" id="${"key"}"></span>

    <span class="${"flex-1 flex flex-col"}" style="${"margin: 5px"}"><label class="${"block text-gray-700 text-sm font-bold mb-2"}" for="${"value"}">Value</label>
        <input class="${"flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}" type="${"text"}" id="${"value"}"></span></div>`;
});
const AddItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { push = () => {
  } } = $$props;
  let { unshift = () => {
  } } = $$props;
  let { addAt = () => {
  } } = $$props;
  let { length = 0 } = $$props;
  let numOfKeyValuePairs = 0;
  let keyValuePairs = [];
  if ($$props.push === void 0 && $$bindings.push && push !== void 0)
    $$bindings.push(push);
  if ($$props.unshift === void 0 && $$bindings.unshift && unshift !== void 0)
    $$bindings.unshift(unshift);
  if ($$props.addAt === void 0 && $$bindings.addAt && addAt !== void 0)
    $$bindings.addAt(addAt);
  if ($$props.length === void 0 && $$bindings.length && length !== void 0)
    $$bindings.length(length);
  return `<div class="${"card"}"><h1 class="${"font-bold text-3xl"}">Add Item</h1>
    ${each({ length: numOfKeyValuePairs }, (_, i) => {
    return `${validate_component(AddKeyValuePair, "AddKeyValuePair").$$render($$result, { keyValue: keyValuePairs, index: i }, {}, {})}`;
  })}

    <button style="${"margin: 20px 0 0 0"}" class="${"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"}">Add Key Value Pair</button>
    ${``}</div>`;
});
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const CurrentItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentItem } = $$props;
  let { next = () => {
  } } = $$props;
  let { prev = () => {
  } } = $$props;
  let listKey = currentItem?.value ? Object.keys(currentItem?.value) : [];
  if ($$props.currentItem === void 0 && $$bindings.currentItem && currentItem !== void 0)
    $$bindings.currentItem(currentItem);
  if ($$props.next === void 0 && $$bindings.next && next !== void 0)
    $$bindings.next(next);
  if ($$props.prev === void 0 && $$bindings.prev && prev !== void 0)
    $$bindings.prev(prev);
  return `<div class="${"card"}"><h1 style="${"margin-bottom: 10px"}" class="${"font-bold text-3xl "}">Current Item</h1>
    ${each(listKey, (key) => {
    return `<div><span class="${"font-bold"}">${escape(capitalizeFirstLetter(key))} : </span>
            <span>${escape(currentItem.value[key])}</span>
        </div>`;
  })}

    <div class="${"flex justify-between"}" style="${"margin-top: 10px"}"><button class="${"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}">Prev
        </button>
        <button class="${"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}">Next
        </button></div></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{background:#dbeafe}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let list = new LinkedList();
  list.push({ value: "Item 1", id: 1 });
  list.push({ value: "Item 2", id: 2 });
  list.push({ value: "Item 3", id: 3 });
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
    console.log(list.getLength());
  }
  function swapUp(index) {
    list.swapUp(index);
    list = list;
  }
  function swapDown(index) {
    list.swapDown(index);
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
  $$result.css.add(css);
  return `<div class="${"app"}"><div style="${"margin: 40px"}"><h1 class="${"text-center text-3xl font-bold und"}">Linked List</h1>
        <h3 class="${"text-center text-xl font-bold"}">Example page for doubly linked list implementation in TypeScript</h3></div>

    ${validate_component(AddItem, "AddItem").$$render(
    $$result,
    {
      push: addToList,
      unshift: unshiftToList,
      addAt: addToListAtIndex,
      length: getLength()
    },
    {},
    {}
  )}

    <div class="${"card"}"><button class="${"bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"}">Reverse List</button></div>

    ${list.current !== void 0 ? `${validate_component(CurrentItem, "CurrentItem").$$render(
    $$result,
    {
      currentItem: list.getCurrent(),
      next,
      prev: previous
    },
    {},
    {}
  )}` : ``}

        <div class="${"flex-column-cards"}">${each({ length: getLength() }, (_, index) => {
    return `${list.getAtIndex(index)?.value !== void 0 ? `${validate_component(ListItemCard, "ListItemCard").$$render(
      $$result,
      {
        listItem: list.getAtIndex(index),
        listIndex: index,
        removeItem,
        moveUp: swapUp,
        moveDown: swapDown
      },
      {},
      {}
    )}` : ``}`;
  })}</div>
</div>`;
});
export {
  Page as default
};
