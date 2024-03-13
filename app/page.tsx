import Form from "./Form";

export const revalidate = 60;

export default function Home() {
  return (
    <main className="">
      <h1 className="text-8xl">Site</h1>
      <p>{new Date().toUTCString()}</p>
      <Form />
    </main>
  );
}
