// const person: {
//   name: string;
//   age: number;
// } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "M",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// person.role.push("admin");
person.role[0] = 10;

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}
