import Form from "./Form";

export const revalidate = 60;

export default function Home() {
  return (
    <main className="">
      <h1 className="text-8xl">Site</h1>
      <p>DATE: {new Date().toUTCString()}</p>
      <p>NODE: {process.env.NODE_ENV}</p>
      <p>SECRET: {process.env.SECRET_MESSAGE}</p>
      <Form />
    </main>
  );
}
