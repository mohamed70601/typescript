// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "M",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}
