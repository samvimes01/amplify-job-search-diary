import { V6Client } from '@aws-amplify/api-graphql';
import { generateClient } from "aws-amplify/data";
import { create } from 'zustand';
import type { Schema } from "../../amplify/data/resource";

interface State {
  client: V6Client<Schema>,
  createTodo: (content: string) => void
  deleteTodo: (id: string) => void
}

export const useAmplifyClient = create<State>((set) => ({
  client: generateClient<Schema>(),
  createTodo: (content: string) => set(({ client }) => {
    client.models.Todo.create({ content });
    return { client };
  }),
  deleteTodo: (id: string) => set(({ client }) => {
    client.models.Todo.delete({ id });
    return { client };
  }),
}))

