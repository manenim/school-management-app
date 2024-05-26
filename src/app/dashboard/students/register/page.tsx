"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useRouter } from "next/navigation";
import { Oval } from 'react-loader-spinner';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { format } from "date-fns";
import { CalendarIcon, LoaderCircle } from "lucide-react";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useAddStudentMutation } from "@/services/studentsApi";

const formSchema = z
  .object({
    nationalId: z.string().min(1), // Assuming National ID is a unique identifier (change if needed)
    name: z.string().min(1),
    surname: z.string().min(1),
    dob: z.date({
      required_error: "A date of birth is required.",
    }),
    studentNumber: z.string().min(1),
  })
  .refine(
    (data) => {
      const dob = new Date(data.dob);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      return age <= 22
    },
    {
      message: "Age must be 22 or younger",
      path: ["dob"],
    }
  );
const StudentsForm = () => {
  const [addStudent, { data, error, isLoading }] = useAddStudentMutation();

      const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        nationalId: "", // Assuming National ID can be empty initially
        name: "",
        surname: "",
        // dob: "",
        studentNumber: "",
        // dob: "",
      },
    });

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        
      console.log({ values });
      const newStudent = {
        nationalId: values.nationalId,
        name: values.name,
        surname: values.surname,
        dateOfBirth: values.dob,
        studentNumber: values.studentNumber,
      };
        
          try {
        const res = await addStudent({ newStudent });

        router.push("/dashboard/students", { scroll: false });
        console.log(res);
      } catch (err: unknown) {
        console.log(err);
      }
    
      
         router.push("/dashboard/students", { scroll: false });

    };



    return (
      <div className="w-full pt-10">
        <h3 className="text-center font-bold text-[2.3rem] pb-8">
          Add a Student
        </h3>

        <div className="flex min-h-screen flex-col items-center justify-between">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="max-w-md flex flex-col gap-4 border rounded-2xl w-full p-4">
              <FormField
                control={form.control}
                name="nationalId"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>National ID Number</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="National ID Number"
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Name" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="surname"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Surname</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Surname" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl className="min-w-full">
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}>
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="center">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          captionLayout="dropdown-buttons"
                          fromYear={1999}
                          toYear={2024}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1999-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="studentNumber"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Student Number</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Student Number"
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <Button disabled={isLoading} type="submit" className="w-full">
                {!isLoading ? (
                  <p>Submit</p>
                ) : (
                  <Oval
                    height="20"
                    width="20"
                    color="#ffffff"
                    ariaLabel="oval-loading"
                  />
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    );
};

export default StudentsForm;
