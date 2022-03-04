import React from "react";
import { useForm } from "react-hook-form";
import CheckBoxHook from "../checkbox/CheckBox";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";
function RegisterHook() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmitForm = (data) => {
    console.log(data);
    reset({
      userName: "",
      email: "",
      password: "",
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="w-full max-w-[500px] mx-auto flex flex-col gap-5 mt-5 font-[500]"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="userName">User Name</label>
        {/* <input
          type="text"
          name="useName"
          id="useName"
          className="p-5 w-full border border-gray-100 transition-all focus:border-blue-400 text-black rounded-lg outline-none"
          placeholder="Please type your useName"
        /> */}
        <InputHook
          type="text"
          name="userName"
          id="userName"
          placeholder="Please type your userName"
          control={control}
        ></InputHook>
        <label htmlFor="password">Password</label>
        <InputHook
          type="password"
          name="password"
          id="password"
          placeholder="Please type your password"
          control={control}
        ></InputHook>
        <label htmlFor="email">Email</label>
        <InputHook
          type="email"
          name="email"
          id="email"
          placeholder="Please type your email"
          control={control}
        ></InputHook>
        <label>Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} name="gender" value="Male"></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="Female"
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>

        <div>
          <CheckBoxHook
            control={control}
            text="I accept the condition and terms"
            name="terms"
          ></CheckBoxHook>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 font-medium text-white rounded-xl p-5"
      >
        Submit
      </button>
    </form>
  );
}

export default RegisterHook;
