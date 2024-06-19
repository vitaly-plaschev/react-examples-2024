const todoDataInitial = [
  {
    id: 1,
    title: "Feed the cat",
    priority: "High",
    date: "2024/03/28",
    status: "In progress",
    price: 10,
    amount: 5,
  },
  {
    id: 2,
    title: "Throw a garbage",
    priority: "Medium",
    date: "2024/03/14",
    status: "In progress",
    price: 10,
    amount: 5,
  },
  {
    id: 3,
    title: "Call to mom",
    priority: "High",
    date: "2024/03/08",
    status: "In progress",
    price: 20,
    amount: 5,
  },
  {
    id: 4,
    title: "Complete ReactJS homework",
    priority: "High",
    date: "2024/03/11",
    status: "In progress",
    price: 20,
    amount: 5,
  },
  {
    id: 5,
    title: "Complete my work stuff in time",
    priority: "Medium",
    date: "2024/03/02",
    status: "Done",
    price: 30,
    amount: 5,
  },
  {
    id: 6,
    title: "Change the bulbs in bathroom",
    priority: "Low",
    date: "2024/03/07",
    status: "Done",
    price: 30,
    amount: 5,
  },
  {
    id: 7,
    title: "Repair my bicycle",
    priority: "Low",
    date: "2024/03/01",
    status: "Done",
    price: 50,
    amount: 5,
  },
  {
    id: 8,
    title: "Buy a new 27 inch monitor",
    priority: "Low",
    date: "2024/02/20",
    status: "Done",
    price: 50,
    amount: 5,
  },
];

if (!localStorage.getItem("todos"))
  localStorage.setItem("todos", JSON.stringify(todoDataInitial));

export const priorities = [
  { id: 1, name: "Low", value: "Low" },
  { id: 2, name: "Medium", value: "Medium" },
  { id: 3, name: "High", value: "High" },
];

export const statuses = [
  { id: 1, name: "In progress", value: "In progress" },
  { id: 2, name: "Done", value: "Done" },
];

export function getTodos() {
  return new Promise(function (resolve, reject) {
    const todoData = JSON.parse(localStorage.getItem("todos"));
    setTimeout(() => resolve(todoData), 1000);
  });
}

export function addTodo(todo) {
  return new Promise(function (resolve, reject) {
    const todoData = JSON.parse(localStorage.getItem("todos"));
    todoData.push(todo);
    localStorage.setItem("todos", JSON.stringify(todoData));
    setTimeout(() => resolve(todoData), 1000);
  });
}

export function moveToCart(todo) {
  return new Promise(function (resolve, reject) {
    const todoData = JSON.parse(localStorage.getItem("todos"));
    const index = todoData.findIndex((item) => item.id === todo.id);
    if (todo.amount !== 0) {
      todoData[index].amount--;
    }
    localStorage.setItem("todos", JSON.stringify(todoData));
    setTimeout(() => resolve(todoData), 1000);
  });
}

export function removeFromCart(todo) {
  return new Promise(function (resolve, reject) {
    const todoData = JSON.parse(localStorage.getItem("todos"));
    
    const cartData = JSON.parse(localStorage.getItem("todos_cart"));
    const indexCart = cartData.findIndex((item) => item.id === todo.id);
    if (indexCart === -1) {
      return setTimeout(() => resolve(todoData), 1000);
    }

    const index = todoData.findIndex((item) => item.id === todo.id);
    if (todo.amount !== 0) {
      todoData[index].amount++;
    }
    localStorage.setItem("todos", JSON.stringify(todoData));
    setTimeout(() => resolve(todoData), 1000);
  });
}

export function editTodo(todo) {
  return new Promise(function (resolve, reject) {
    const todoData = JSON.parse(localStorage.getItem("todos"));
    const index = todoData.findIndex((item) => item.id === todo.id);
    todoData.splice(index, 1, todo);
    localStorage.setItem("todos", JSON.stringify(todoData));
    setTimeout(() => resolve(todoData), 1000);
  });
}

export function deleteTodo(todo) {
  return new Promise(function (resolve, reject) {
    const todoData = JSON.parse(localStorage.getItem("todos"));
    const index = todoData.findIndex((item) => item.id === todo.id);
    todoData.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todoData));
    setTimeout(() => resolve(todoData), 1000);
  });
}

export function getTodosByPriority(priority) {
  const todoData = JSON.parse(localStorage.getItem("todos"));
  const todosByPriority = todoData.filter((todo) => todo.priority === priority);

  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(todosByPriority), 1000);
  });
}

export function getTodosByStatus(status) {
  const todoData = JSON.parse(localStorage.getItem("todos"));
  const todosByStatus = todoData.filter((todo) => todo.status === status);

  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(todosByStatus), 1000);
  });
}

export function getTodosByTitle(filterText) {
  const todoData = JSON.parse(localStorage.getItem("todos"));
  if (!filterText)
    return new Promise(function (resolve, reject) {
      resolve(todoData);
    });

  const todosByTitle = todoData.filter((todo) =>
    todo.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return new Promise(function (resolve, reject) {
    resolve(todosByTitle);
  });
}

export function getTodoById(id) {
  const todoData = JSON.parse(localStorage.getItem("todos"));
  const index = todoData.findIndex(
    (item) => parseInt(item.id) === parseInt(id)
  );
  const todoById = todoData[index];
  return new Promise(function (resolve, reject) {
    resolve(todoById);
  });
}
