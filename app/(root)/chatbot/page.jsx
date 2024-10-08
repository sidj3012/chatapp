"use client";
import { useState, useEffect } from "react";

import {
    GoogleGenerativeAI,
  } from "@google/generative-ai";

export default function Home(){
    const [messages, setMessages]  =useState([]);
    const [userInput, setUserInput]  =useState("");
    const [chat, setChat]  =useState(null);
    const [theme, setTheme]  =useState("light");
    const [error, setError] = useState(null);

    const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(API_KEY);

    const model = genAI.getGenerativeModel({
    model: "gemini-1.0-pro",
    });
    const MODEL_NAME = "gemini-1.0-pro"
    const generationConfig = {
        temperature: 0.9,
        topP: 1,
        topK: 1,
        maxOutputTokens: 2048,
    };

    useEffect(() => {
        const initChat = async() => {
            try{
                const newChat = await genAI
                .getGenerativeModel({model : MODEL_NAME})
                .startChat({
                    generationConfig,
                    history: messages.map((msg) => ({
                        text: msg.ext,
                        role: msg.role,
                    })),
                });
                setChat(newChat);

            }
            catch(error){
                setError("Failed to initialize chat");
            }
        };
        initChat();
    }, []);

     const handleSendMessage = async () => {
        try{
            const userMessage = {
                text: userInput,
                role: "user",
                timestamp: new Date(),

            };

            setMessages((prevMessages) => [...prevMessages, userMessage]);
            setUserInput("");

            if(chat){
                const result = await chat.sendMessage(userInput);
                const botMessage = {
                    text: result.response.text(),
                    role: "bot",
                    timestamp: new Date(),
                };

                setMessages((prevMessages) => [...prevMessages, botMessage]);

            }

        } 
        catch(error){
            console.log(error)
            setError("Failed to send msg");
        }
     };

     const handleThemeChange = (e) => {
        setTheme(e.target.value);
     };

    const getThemeColors = () => {
        return{
            primary: "bg-white",
            secondary: "bg-gray-100",
            accent: "bg-blue-500",
            text: "text-gray-800",
        };
    };

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            e.preventDefault();
            handleSendMessage();
        }
    };

    const {primary, secondary, accent, text} = getThemeColors();

    return (
        <div className={`flex flex-col h-screen p-4 ${primary}`}>
            <div className="flex justify-between items-center mb-4">
                <h1 className={`text-2xl font-bold ${text}`}>Chat with AI</h1>
                
            </div>
            <div className={`flex-1 overflow-y-auto ${secondary} rounded-md p-2`}>
                {messages.map((msg, index) => (
                    <div    
                        key={index}
                        className={`mb-4 ${msg.role==="user" ? "text-right":"text-left"}`}
                    >
                        <span 
                            className={`p-2 rounded-lg ${
                                msg.role === "user"
                                    ? `${accent} text-white`
                                    : `${primary} ${text}`
                            }`}
                        >
                            {msg.text}
                        </span>
                        <p className={`text-xs #{text} mt-1`}>
                            {msg.role === "bot" ? "Bot" : "You"} - {" "}
                            {msg.timestamp.toLocaleTimeString()}
                        </p>
                    </div>
                ))}
            </div>
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
            <div className="flex items-center mt-4">
                <input
                    type="text"
                    placeholder="Send message..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className={`flex-1 p-2 rounded-1-md border-t border-b border-l
                        focus: outline-none focus:border=${accent}`}
                />
                <button 
                    onClick={handleSendMessage}
                    className={`p-2 ${accent} text-white rounded-r-md hover:bg-opacity-80
                        focus:outline-none`}
                >
                    Send
                </button>

            </div>
        </div>
    );
}