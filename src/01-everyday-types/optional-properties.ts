// untuk membuat properti dalam objek menjadi opsional, gunakan tanda ? setelah nama properti
// function printName(obj: { first: string; last?: string }) {}

// bentuk pemanggilannya bisa seperti berikut:
printName({ first: "wafa" });
printName({ first: "wafa", last: "saeful" });

// tapi, untuk membaca opsional property, harus dicek terlebih dahulu apakah opsional propertynya bernilai undefined
function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  // console.log(obj.last.toUpperCase());
  // Object is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}
