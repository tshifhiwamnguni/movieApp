

const Filter = () => {
  const people = [
    { name: "Tim", age: 20, role: "admin" },
    { name: "Matt", age: 25, role: "user" },
    { name: "Alex", age: 19, role: "user" }
  ];

  const filteredPeople = people.filter((person) => {
    return person.age > 19 && person.role === "admin";
  });

  return filteredPeople.map((person) => (
    <div key={person.name}>{person.name}</div>
  ));
};

export default Filter;