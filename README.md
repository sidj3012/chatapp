# Personal Details
- **Name**: Siddharth Jain
- **University**: IIT Bhilai
- **Department**: Computer Science and Engineering


# e-Hato Chat Application

![e-Hato Chat Application]

## Demo

View the live demo at [e-Hato Chat Application Demo](https://chatapp-lac-ten.vercel.app/)

## Features
- **User Registration and Authentication**: Sign in and sign up using email.
- **Messaging**: Sending and receiving text messages between users.
- **Group Creation**: Create chat groups for multiple users.
- **Real-Time Chatting**: Enjoy real-time chat with other users.
- **ChatBot**: Chat with AI.



## Tech Stack

- **Next.js**: A popular React framework for building web applications.
- **Tailwind CSS**: A utility-first CSS framework for designing modern and responsive UIs.
- **React**: A JavaScript library for building user interfaces.
- **Mongoose**: A JavaScript object-oriented programming library that helps manage relationships between data and translates between objects in code and MongoDB.
- **MongoDB**: A NoSQL database for storing chat data.
- **NextAuth**: An authentication library for Next.js applications.
- **Pusher**: A hosted service that makes it super-easy to add real-time data and functionality to web and mobile applications.
- **Bcryptjs**: A JavaScript library that implements the Bcrypt password hashing algorithm. It's used to create and store password hashes, which can be helpful in case of a data breach. 
- **Google Generative AI**: API key of gemini API is used to implement chatbot.
- **React Hot Toast**: A library for creating visually appealing and informative notifications in your React applications.
- **React Hook Form**: A library that helps manage forms in React.
- **Emotion**: A library designed for writing css styles with JavaScript.
- **React Hook Form**: A library that helps manage forms in React.
- **React Hook Form**: A library that helps manage forms in React.
- **React Hook Form**: A library that helps manage forms in React.

## Installation

Follow these steps to set up the Nexus Chat Application locally:

1. Clone the repository

```bash
git clone https://github.com/sidj3012/chatapp.git
cd chatapp
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env.local` file in the root directory of the project and add the following environment variables:

```bash
MONGODB_URL=<YOUR_MONGODB_CONNECTION_STRING>
NEXTAUTH_SECRET=<YOUR_NEXTAUTH_SECRET>

NEXT_PUBLIC_PUSHER_APP_KEY=<YOUR_PUSHER_APP_KEY>
PUSHER_APP_ID=<YOUR_PUSHER_APP_ID>
PUSHER_SECRET=<YOUR_PUSHER_SECRET>

NEXT_PUBLIC_GEMINI_API_KEY=<YOUR_GEMINI_API_KEY>
```

4. Start the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
