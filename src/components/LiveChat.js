import React from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  return (
    <div className="border border-gray-400 h-[500px] px-2 py-2 bg-slate-100 rounded-lg">
      <ChatMessage />
    </div>
  );
};

export default LiveChat;
