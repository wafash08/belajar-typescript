// union adalah type yang dibentuk dari dua atau lebih type lain,
// yang mewakili nilai2 yang mungkin salah satu dari type tersebut

// function printId(id: number | string) {
//   console.log("Your ID is: " + id);
// }
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });

// tapi ada masalah dalam penggunaan union type ini, salah satunya adalah
// typescript hanya memperbolehkan operasi yang valid untuk "setiap" union's member.
// artinya kalo lu punya union type string | number, lu ga bisa make method yang hanya tersedia untuk string type.
// ini bisa diselesaikan dengan narrowing, tepatnya metode discrimanted union
// @see https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions

// contoh sederhana
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

// langkah pertama: definisikan masing-masing type
type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

// gabung jadi sebuah union
type Shape = Circle | Square;

// lalu terapkan discriminated union
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle": {
      return Math.PI * shape.radius ** 2;
    }

    case "square": {
      return shape.sideLength ** 2;
    }
    // case "circle":
    //   return Math.PI * shape.radius ** 2;

    // // (parameter) shape: Circle
    // case "square":
    //   return shape.sideLength ** 2;

    // // (parameter) shape: Square
  }
}

getArea({
  kind: "square",
  sideLength: 8,
});
