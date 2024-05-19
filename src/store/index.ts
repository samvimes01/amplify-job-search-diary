import { generateClient } from "aws-amplify/data";
import { StateCreator, create } from 'zustand';
import { ClientSlice } from './interface';
import { Schema } from '../../amplify/data/resource';
import { ProfileSlice, createProfileSlice } from './profile';

// temp todo slice - delete later
interface TodoSlice {
  createTodo: (content: string) => void
  deleteTodo: (id: string) => void
}
export const createTodoSlice: StateCreator<
  ClientSlice & TodoSlice,
  [],
  [],
  TodoSlice
> = (set) => ({
  createTodo: (content: string) => set(({ client }) => {
    client.models.Todo.create({ content });
    return { client };
  }),
  deleteTodo: (id: string) => set(({ client }) => {
    client.models.Todo.delete({ id });
    return { client };
  }),
})
//

export const useAmplifyClient = create<ClientSlice & TodoSlice & ProfileSlice>((...a) => ({
  client: generateClient<Schema>({ authMode: "userPool" }),
   ...createTodoSlice(...a),
   ...createProfileSlice(...a),
}))

