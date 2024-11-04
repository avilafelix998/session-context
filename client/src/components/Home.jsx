import useSession from "../hooks/useSession";

const Home = () => {
  const { username, logout } = useSession();

  

  return (
    <div>
      <h2>Bienvenido, {username.username}</h2>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Home;
