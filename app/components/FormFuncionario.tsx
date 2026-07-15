"use client"

import { useState } from "react"
import api from "../services/api"

export default function FormFuncionario(){
    

    const [nome,setNome] = useState("")
    const [cargo,setCargo] = useState("")
    const [salario, setSalario] = useState("")

    async function cadastrar(e) {
        e.preventDefault()

        try {
            const response = await api.post("/funcionarios",{
                nome,
                cargo,
                salario:Number(salario)
            })
            alert("Funcionario cadastrado com sucesso")
        } catch (error) {
            alert("Erro ao cadastrar")
            console.log(error)
        }
        
    }
    
    return(
        <form
  onSubmit={cadastrar}
  className="max-w-md mx-auto mt-10 bg-slate-900 text-white shadow-2xl rounded-2xl border border-slate-700 p-8 flex flex-col gap-5"
>
  <h2 className="text-2xl font-bold text-center text-white">
    Cadastro de Funcionário
  </h2>

  <input
    type="text"
    placeholder="Nome..."
    value={nome}
    onChange={(e) => setNome(e.target.value)}
    className="bg-slate-100 text-slate-900 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <input
    type="text"
    placeholder="Cargo..."
    value={cargo}
    onChange={(e) => setCargo(e.target.value)}
    className="bg-slate-100 text-slate-900 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <input
    type="number"
    placeholder="Salário..."
    value={salario}
    onChange={(e) => setSalario(e.target.value)}
    className="bg-slate-100 text-slate-900 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <button
    type="submit"
    className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer"
  >
    Cadastrar
  </button>
</form>
    )
}