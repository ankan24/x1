 import { useNavigate } from "react-router-dom";

const Dashboard = ({ setIsAuth }: { setIsAuth: (val: boolean) => void }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuth(false);
    navigate("/");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;