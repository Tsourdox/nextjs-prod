"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const NewsletterSubscriberSchema = z.object({
  email: z.string().email(),
});

type NewsletterSubscriber = z.infer<typeof NewsletterSubscriberSchema>;

export default function Form() {
  const { register, formState, handleSubmit } = useForm<NewsletterSubscriber>({
    resolver: zodResolver(NewsletterSubscriberSchema),
  });

  const save = (data: NewsletterSubscriber) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col gap-2 p-4" onSubmit={handleSubmit(save)}>
      <label htmlFor="email">Email</label>
      <input
        className="text-black"
        id="email"
        type="text"
        {...register("email")}
      />
      {formState.errors.email && <p>{formState.errors.email.message}</p>}
      <button type="submit">Skicka</button>
    </form>
  );
}
