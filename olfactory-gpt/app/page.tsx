'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';
import ChatBubble from './components/ChatBubble';

export default function Chat() {
  const [input, setInput] = useState('');
  const { messages, sendMessage } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <h1 className='text-[25px] text-center m-[10px]'>OlfactoryGPT</h1>
      {messages.map((message, index) => (
       <ChatBubble
            key={index}
            message={message}
        ></ChatBubble>
      ))}

      <form
        onSubmit={e => {
          e.preventDefault();
          sendMessage({ text: input });
          setInput('');
        }}
      >
        <input
          className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={e => setInput(e.currentTarget.value)}
        />
      </form>
    </div>
  );
}