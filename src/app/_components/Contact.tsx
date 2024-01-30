import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { env } from "~/env";

const validationSchema = Yup.object({
  from_name: Yup.string().max(30, "Name too long").required("* Name required"),
  from_email: Yup.string().email("Invalid email").required("* Email required"),
  message: Yup.string()
    .required("Write a message")
    .max(10000, "Message too long")
    .min(10, "Message too short"),
});

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitterName, setSubmitterName] = useState("");

  const serviceId = env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const formik = useFormik({
    initialValues: {
      from_name: "",
      from_email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, formikHelpers) => {
      emailjs.send(serviceId, templateId, values, publicKey).then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setSubmitterName(values.from_name);
          formikHelpers.setSubmitting(false);
          formikHelpers.resetForm();
        },
        (error) => {
          console.log((error as Error).message);
          formikHelpers.setSubmitting(false);
        },
      );
    },
  });

  if (isSubmitted) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Thank You, {submitterName}!</h2>
          <p>
            Your message has been successfully sent. We will get back to you
            soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      id="contact"
      className="flex h-screen flex-col items-center justify-center bg-gray-100"
    >
      <div className="flex w-3/4 overflow-hidden rounded-lg bg-white shadow-md">
        {/* Image Section */}
        <div className="hidden md:block md:w-5/12">
          <img
            src="/img/Electrical-image.jpg"
            alt="Electrical services"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <form
          onSubmit={formik.handleSubmit}
          className="mb-4 w-full px-6 py-10 md:w-1/2 md:px-12 md:py-12"
        >
          {/* Heading Section */}
          <h1 className="mb-8 text-4xl font-bold text-oe-blue">Contact Us</h1>

          {/* Name Field */}
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="from_name"
            >
              Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="from_name"
              type="text"
              placeholder="Enter your name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.from_name}
            />
            {formik.touched.from_name && formik.errors.from_name && (
              <p className="text-xs italic text-red-500">
                {formik.errors.from_name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="from_email"
            >
              Email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="from_email"
              type="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.from_email}
            />
            {formik.touched.from_email && formik.errors.from_email && (
              <p className="text-xs italic text-red-500">
                {formik.errors.from_email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="message"
              placeholder="Your Message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              rows={7}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className="text-xs italic text-red-500">
                {formik.errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-oe-blue px-4 py-2 font-bold text-white transition duration-100 hover:bg-oe-orange focus:outline-none"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
