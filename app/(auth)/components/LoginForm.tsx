"use client";
import React from "react";
import { z } from "zod";
import { LoginFormType } from "../@types/loginFormType";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const LoginFormField = ({
  name,
  label,
  placeholder,
  description,
  imputType,
  formControl,
}: LoginFormType) => {
  return (
    <FormField
      name={name}
      control={formControl}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              className="outline-none"
              placeholder={placeholder}
              type={imputType || "text"}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const handlerSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      const token = await result.result.token;
      localStorage.setItem("token", token);
      toast("Успешная авторизация", {
        description: result.message,
        action: {
          label: "Закрыть",
          onClick: () => console.log("Закрыть"),
        },
      });
      router.replace("/");
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Ошибка авторизации", {
        action: {
          label: "Закрыть",
          onClick: () => console.log("Закрыть"),
        },
        style: {
          backgroundColor: "#f44336",
          color: "white",
          fontWeight: "bold",
        },
      });
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 max-w-[512px] w-full"
        onSubmit={form.handleSubmit(handlerSubmit)}
      >
        <LoginFormField
          name="email"
          label="Email"
          placeholder="Введите email"
          imputType="email"
          formControl={form.control}
        />
        <LoginFormField
          name="password"
          label="Пароль"
          placeholder="Введите пароль"
          imputType="password"
          formControl={form.control}
        />
        <Button type="submit">Вход</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
