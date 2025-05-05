import Head from "next/head";
import { TodoList } from "../components/TodoList";

export default function Home() {
  return (
    <>
      <Head>
        <title>My To-Do List App</title>
        <meta name="description" content="A clean and simple to-do list app built with Next.js and Redux" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-4">
        <div className="w-full max-w-xl bg-white shadow-lg rounded-3xl p-6 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">📝 My To-Do List</h1>
          <TodoList />
        </div>
      </main> 
    </>
  );
}
