import { useAuthStore } from "../store/useAuthStore";

const ChatPage = () => {

  const { logout } = useAuthStore();

  return (
    <div className="z-20">
        <button onClick={logout}>loguut</button>
      
    </div>
  )
}

export default ChatPage
