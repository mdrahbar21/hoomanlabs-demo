"use client";
import React from 'react';
import { IoChevronDownOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import sendEmail from "@/components/email/web3send";

const formSchema = z.object({
    email: z.string().email(),
    text: z.string(),
    name: z.string(),
});

export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            text: "",
            name: "",
        },
    });

    const onSubmit = async (values:any) => {
        console.log({ values });
        await sendEmail(values);
    };

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-screen max-w-[1440px] gap-10 mx-auto py-10 mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="col-span-1 flex flex-col min-w-[320px] sm:min-w-[400px] px-8 sm:px-12"
                >
                    <div className="col-span-1 flex flex-col min-w-[320px] sm:min-w-[400px] px-8 sm:px-12">
                        <h2 className="md:text-start text-center font-semibold text-[48px] md:text-[72px] tracking-tight">
                            Get In Touch
                        </h2>
                        <h3 className='text-xl text-start px-2 mt-6'>
                            Phone
                        </h3>
                        <p className='text-base px-2 '>
                            +91 8445979949
                        </p>
                        <h3 className='text-xl text-start px-2 mt-6'>
                            Email
                        </h3>
                        <p className='text-base px-2 '>
                            tarun@hoomanlabs.com
                        </p>
                        <h3 className='text-xl text-start px-2 mt-6'>
                            Address
                        </h3>
                        <p className='text-base px-2 '>
                            123, Main Street, BLR
                        </p>
                    </div>
                </motion.div>
                <div className="col-span-1 ">
                    <div className=" col-span-1 relative rounded-[8px] flex flex-col min-w-[320px] sm:min-w-[400px] w-[36vw]  mx-auto text-white ">
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                        background:
                            "linear-gradient(to bottom, rgba(109, 108, 107, 1), rgba(211, 209, 207, 0))",
                        padding: "1px",
                        borderRadius: "8px",
                        content: "''",
                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        maskComposite: "exclude",
                        }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient( to bottom right, rgba(218, 136, 67, 1) 0%, rgba(150, 94, 46, 0.9) 55%, rgba(130, 81, 40, 0.8) 75%, rgba(116, 73, 36, 0) 100%)",
                        borderRadius: "inherit",
                        opacity: "0.04",
                      }}
                    />
                    <div className="flex justify-center items-center ">  
                        <div className=" text-white p-8 rounded-lg shadow-lg w-[90vw] max-w-[500px]">
                        <h3 className="text-4xl mb-6 text-center">Contact Us</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <div className="flex flex-col w-full">
                                    <label htmlFor="name" className="mb-2 font-Gilroy font-light">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John"
                                        {...register("name")}
                                        className="p-2 rounded border border-gray-700 focus:outline-none bg-transparent font-Gilroy font-extralight"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="mb-2 font-Gilroy font-light">Mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="johndoe@mail.net"
                                    {...register("email")}
                                    className="p-2 rounded border border-gray-700 focus:outline-none bg-transparent font-Gilroy font-extralight"
                                />
                                {errors.email && <p className="text-red-500 text-xs italic font-Gilroy font-light">{errors.email.message}</p>}
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="text" className="mb-2 font-Gilroy font-light">Description</label>
                                <textarea
                                    id="text"
                                    placeholder="Description"
                                    {...register("text")}
                                    className="p-2 rounded border border-gray-700 focus:outline-none bg-transparent min-h-[100px] font-Gilroy font-extralight"
                                />
                                {errors.text && <p className="text-red-500 text-xs italic">{errors.text.message}</p>}
                            </div>
                            <button
                                type="submit"
                                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none mt-4"
                            >
                                Request a Demo
                            </button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
