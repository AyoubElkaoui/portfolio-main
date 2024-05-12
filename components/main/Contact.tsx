import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMap } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Recaptcha from "react-recaptcha";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [captchaVerified, setCaptchaVerified] = useState(false);

    // Function to handle form submission
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!captchaVerified) {
            setErrorMessage("Please verify reCAPTCHA.");
            return;
        }

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "0c0baa3b-a659-4cab-ac36-70379836c6ee");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            setSuccessMessage("Message sent successfully!");
            setErrorMessage("");
            console.log(result);
            // Reset form fields
            setFormData({ name: "", email: "", message: "" });
        } else {
            setSuccessMessage("");
            setErrorMessage("Failed to send message. Please try again later.");
        }
    }


    // Function to handle input change
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    // Callback function to handle reCAPTCHA verification
    function onCaptchaVerify(response: string | null) {
        if (response) {
            setCaptchaVerified(true);
            setErrorMessage("");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center z-20" id="contact">
            <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
            >
                <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                <h1 className="Welcome-text text-[13px]">
                    Contact me
                </h1>
            </motion.div>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
            >
                Let&apos;s Talk Tech: Building Bridges, One Message at a Time.
            </motion.div>
            <motion.div
                variants={slideInFromRight(0.5)}
                className='cursive text-[12px] text-gray-200 mb-10 mt-[10px] text-center'
            >
                Connect with Confidence: Your Gateway to Seamless Communication.
            </motion.div>
            <div className="flex justify-center items-center space-x-80 ">
                {/* Contact Form Card */}
                <div className="bg-gray-800 rounded-lg p-8 w-screen" style={{ margin: "0 25%" }}>
                    <h2 className="text-xl font-semibold text-white mb-4">Contact Form</h2>
                    {successMessage && <p className="text-green-500">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4" method="post">
                        {/* Form Inputs */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-gray-700 rounded-md p-3 text-white"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-gray-700 rounded-md p-3 text-white"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="bg-gray-700 rounded-md p-3 text-white"
                        ></textarea>
                        {/* reCAPTCHA */}
                        <Recaptcha
                            sitekey="6Lc62dkpAAAAALL70S4nPagzGuz4_kWkdSIUE8Yp"
                            render="explicit"
                            verifyCallback={onCaptchaVerify}
                        />
                        {/* Submit Button */}
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300">Send Message</button>
                        <a href="/Ayoub_Elkaoui_Full_Stack_Developer.pdf" download className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 text-center">
                            Download Resume
                        </a>
                        <div className="flex flex-col items-start space-y-4 text-white">
                            <div className="flex items-center space-x-4 ">
                                <FaEnvelope />
                                <span className="text-lg font-medium">Elkaoui.a@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaPhone />
                                <span className="text-lg font-medium">+31 6 85 72 23 87</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaMap />
                                <span className="text-lg font-medium">Amersfoort, Utrecht</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
