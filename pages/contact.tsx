import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import Loader from "../components/Loader";
import {
  Container,
  Row,
  Col,
  Textarea,
  Text,
  Input,
  Button,
  Spacer,
} from "@nextui-org/react";
import { tw } from "twind";

const recaptchaRef = React.createRef();

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    //@ts-ignore
    recaptchaRef.current.execute();
    setLoading(true);
    setMessage("");

    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data?.name?.trim(),
          email: data?.email?.trim(),
          message: data?.message?.trim(),
        }),
      });
      setMessage(
        <Text>
          <Text small>Thanks for your message.</Text>
        </Text>
      );
    } catch (err) {
      console.log("some error happened", err);

      setMessage(
        <Text>
          <Text small>Oh no! You sank my battleship. Please try again.</Text>
        </Text>
      );
      setLoading(false);
    }
    setLoading(false);
  };
  return (
    <form
      className={tw`w-full max-w-lg text-left`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={tw`flex flex-wrap -mx-3 mb-6`}>
        <div className={tw`w-full px-3`}>
          <label
            className={tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
            htmlFor="grid-first-name"
          >
            Name
          </label>
          <input
            className={tw`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="grid-first-name"
            type="text"
            placeholder="Your Name"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
            name="name"
          />
        </div>
      </div>
      <div className={tw`flex flex-wrap -mx-3 mb-6`}>
        <div className={tw`w-full px-3`}>
          <label
            className={tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
            htmlFor="grid-password"
          >
            E-mail
          </label>
          <input
            className={tw`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
            id="email"
            name="email"
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            placeholder="youremail@something.com"
          />
        </div>
      </div>
      <div className={tw`flex flex-wrap -mx-3 mb-6`}>
        <div className={tw`w-full px-3`}>
          <label
            className={tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
            htmlFor="grid-password"
          >
            Message
          </label>
          <textarea
            className={tw`no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none`}
            id="message"
            name="message"
            {...register("message", {
              maxLength: {
                value: 255,
                message: "Message is too long",
              },
              required: {
                value: true,
                message: "Message is required",
              },
            })}
          ></textarea>
        </div>
      </div>
      <div className={tw`md:flex md:items-center`}>
        <div className={tw`md:w-1/3`}>
          <button
            className={tw`h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 inline-flex items-center leading-6 text-sm shadow transition ease-in-out duration-150`}
            type="submit"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submit
              </>
            ) : (
              <>Submit</>
            )}
          </button>
        </div>
        <div className={tw`md:w-2/3`}>
          {message && message}
          <ul>
            {Object.keys(errors).map((fieldName) => (
              <li key={fieldName} className="error">
                <Text color="error">{`${errors[fieldName].message}`}</Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey="6LdFg_ogAAAAAHMN3MV-ma-hbJj1KuRk-z1a6NC5"
      />
    </form>
  );
};

export default Contact;
