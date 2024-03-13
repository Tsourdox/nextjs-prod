"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const NewsletterSubscriberSchema = z.object({
  email: z.string().email(),
});

type NewsletterSubscriber = z.infer<typeof NewsletterSubscriberSchema>;

export default function Form() {
  const form = useForm<NewsletterSubscriber>({
    resolver: zodResolver(NewsletterSubscriberSchema),
  });

  const save = (data: NewsletterSubscriber) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-2 p-4"
      onSubmit={form.handleSubmit(save)}
    >
      <label htmlFor="email">Email</label>
      <input
        className="text-black"
        id="email"
        type="text"
        {...form.register("email")}
      />
      <p>Felmeddelande...</p>
      <button type="submit">Skicka</button>
    </form>
  );
}
