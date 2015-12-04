//
//   array: array, // array of objects
//   index: number, // where in the array the object to be modified is.
//   key: string, // key to change
//   value: string // new value to add
//

export default function immutableReplaceWith ( array, index, key, value ) {
  const newThing = array.map( ( item, itemIndex ) => {
    if ( itemIndex === index ) {
      return { ...item, [key]: value };
    } else {
      return item;
    }
  });

  return newThing;
}

// itemIndex === index ?
//   {...item, [key]: value}
// :
//   item;
