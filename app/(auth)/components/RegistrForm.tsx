"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RegisterFormType } from "../@types/registerFormType";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const formSchema = z.object({
  name: z.string().min(3).max(15),
  surname: z.string().min(3).max(15),
  email: z.string().email(),
  phone: z.string().min(3).max(10),
  password: z.string().min(6),
});

const RegiterFormField = ({
  name,
  label,
  placeholder,
  description,
  imputType,
  formControl,
}: RegisterFormType) => {
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

const RegistrForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      password: "",
    },
  });
  const router = useRouter();

  const handlerSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/registartion", {
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
      toast("Успешная регистрация", {
        description: result.message,
        action: {
          label: "Закрыть",
          onClick: () => console.log("Закрыть"),
        },
      });
      router.replace("/");
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Ошибка регистрации", {
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
        <RegiterFormField
          name="name"
          label="Имя"
          placeholder="Введите имя"
          imputType="text"
          formControl={form.control}
        />
        <RegiterFormField
          name="surname"
          label="Фамилия"
          placeholder="Введите фамилию"
          imputType="text"
          formControl={form.control}
        />
        <RegiterFormField
          name="email"
          label="Email"
          placeholder="Введите email"
          imputType="email"
          formControl={form.control}
        />
        <RegiterFormField
          name="phone"
          label="Телефон"
          placeholder="Введите телефон"
          imputType="tel"
          formControl={form.control}
        />

        <RegiterFormField
          name="password"
          label="Пароль"
          placeholder="Введите пароль"
          imputType="password"
          formControl={form.control}
        />
        <Button type="submit">Регистрация</Button>
      </form>
    </Form>
  );
};

export default RegistrForm;
