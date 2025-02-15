null == undefined; // true;
null == 0; // false
// null >= 0; // true

// Check if a global variable existed
if (typeof window !== 'undefined') {
  // if window object is available or not
  // do something on client side
}

JSON.stringify({
  id: null,
  name: undefined,
});
// will return "{\"id\":null}"
// undefined is removed from the JSON 
