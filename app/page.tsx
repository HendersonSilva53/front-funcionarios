import Header from "./components/Header";

export default function Home() {
  return(
    <div>
      <Header />

      <main style= {{display: "flex", justifyContent: "center", alignItems:"center",
        height: "80vh", flexDirection: "column"
      }}>
        <h2>Bem-vindo ao Newbies F.C</h2>

        <p>Sistema desenvolvido durante o curso de Devops</p>
      </main>
    </div>
  );
}