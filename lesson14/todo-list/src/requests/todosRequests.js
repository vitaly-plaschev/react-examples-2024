const todoDataInitial = [
  {
    id: 1,
    title: "Feed the cat",
    priority: "High",
    date: "2024/03/28",
    status: "In progress",
  },
  {
    id: 2,
    title: "Throw a garbage",
    priority: "Medium",
    date: "2024/03/14",
    status: "In progress",
  },
  {
    id: 3,
    title: "Call to mum",
    priority: "High",
    date: "2024/03/08",
    status: "In progress",
  },
  {
    id: 4,
    title: "Complete ReactJS homework",
    priority: "High",
    date: "2024/03/11",
    status: "In progress",
  },
  {
    id: 5,
    title: "Complete my work stuff in time",
    priority: "Medium",
    date: "2024/03/02",
    status: "Done",
  },
  {
    id: 6,
    title: "Change the bulbs in bathroom",
    priority: "Low",
    date: "2024/03/07",
    status: "Done",
  },
  {
    id: 7,
    title: "Repair my bicycle",
    priority: "Low",
    date: "2024/03/01",
    status: "Done",
  },
  {
    id: 8,
    title: "Buy a new 27 inch monitor",
    priority: "Low",
    date: "2024/02/20",
    status: "Done",
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
