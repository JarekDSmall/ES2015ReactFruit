// src/helpers.js

export function choice(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }
  
  export function remove(items, item) {
    const itemIndex = items.indexOf(item);
    if (itemIndex !== -1) {
      return items.splice(itemIndex, 1)[0];
    }
    return undefined;
  }