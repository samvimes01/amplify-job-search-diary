import "@aws-amplify/ui-react/styles.css";
import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { useAmplifyClient } from "./store";

function App() {
  const client = useAmplifyClient((state) => state.client);
  const createTodo = useAmplifyClient((state) => state.createTodo);
  const deleteTodo = useAmplifyClient((state) => state.deleteTodo);

  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    const sub = client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
    return () => sub.unsubscribe();
  }, [client]);

  function addTodo() {
    const content = window.prompt("Todo content");
    if (!content) return;
    createTodo(content);
  }

  return (
    <>
      <h1>My todos</h1>
      <button onClick={addTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li onClick={() => deleteTodo(todo.id)} key={todo.id}>
            {todo.content}
          </li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
    </>
  );
}

export default App;
