"use client";

import { FormEvent, useState } from "react";
import api from "../services/api";

export default function Home(){

    const [nome,setNome] = useState("")
    const [cargo,setCargo] = useState("")
    const [salario,setSalario] = useState("")

    async function cadastrarFuncionario(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        try {
            await api.post("/funcionario", {
                nome,
                cargo,
                salario:Number(salario)
            })
            alert("Funcionário cadastrado com sucesso!")
        } catch(error){
            alert("Erro ao cadastrar funcionário!")
            console.log(error)
        }
    }

    return(
        <form onSubmit={cadastrarFuncionario}>
            <h2>Cadastro de Funcionário</h2>

            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />

            <input type="text" placeholder="Cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} />
            
            <input type="text" placeholder="Salário" value={salario} onChange={(e) => setSalario(e.target.value)} />

            <button type="submit">Cadastrar</button>
        </form>
    )
}