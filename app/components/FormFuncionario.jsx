"use client"

import { useState } from "react"
import api from "../services/api"

export default function FormFuncionario(){
    

    const [nome,setNome] = useState("")
    const [cargo,setCargo] = useState("")
    const [salario, setSalario] = useState("")

    async function cadastrar() {
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
  className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-8 flex flex-col gap-5"
>
  <h2 className="text-2xl font-bold text-center text-gray-800">
    Cadastro de Funcionário
  </h2>

  <input
    type="text"
    placeholder="Nome..."
    value={nome}
    onChange={(e) => setNome(e.target.value)}
    className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <input
    type="text"
    placeholder="Cargo..."
    value={cargo}
    onChange={(e) => setCargo(e.target.value)}
    className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <input
    type="number"
    placeholder="Salário..."
    value={salario}
    onChange={(e) => setSalario(e.target.value)}
    className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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