"use client"

import { useEffect, useState } from "react"
import api from "../services/api"





export default function Funcionarios(){

    const [funcionarios,setFuncionarios]=useState([])

    async function carregarFuncionarios() {
        
        try {
            const response = await api.get("/funcionarios")
            setFuncionarios(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        carregarFuncionarios()
    },[])


    return(
        <div className="max-w-5xl mx-auto mt-10 p-6">
            <div className="bg-slate-900 text-white shadow-2xl rounded-2xl border border-slate-700 p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">Funcionários</h1>
                        <p className="text-slate-300 mt-1">Lista de colaboradores cadastrados</p>
                    </div>

                    <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {funcionarios.length} {funcionarios.length === 1 ? "funcionário" : "funcionários"}
                    </span>
                </div>

                {funcionarios.length === 0 ? (
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center text-slate-300">
                        Nenhum funcionário cadastrado ainda.
                    </div>
                ) : (
                    <div className="grid gap-4 md:grid-cols-2">
                        {funcionarios.map((funcionario) => (
                            <div
                                key={funcionario.id}
                                className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-blue-500 transition duration-300"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <h2 className="text-lg font-semibold text-white">{funcionario.nome}</h2>
                                    <span className="text-sm text-blue-400">#{funcionario.id}</span>
                                </div>
                                <p className="mt-3 text-slate-300">
                                    <span className="font-medium text-white">Cargo:</span> {funcionario.cargo}
                                </p>
                                <p className="text-slate-300">
                                    <span className="font-medium text-white">Salário:</span> R$ {Number(funcionario.salario).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}