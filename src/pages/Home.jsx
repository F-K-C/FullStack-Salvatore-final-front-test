import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Api } from '../api/api'
import Card from '../components/Card/Card'

export default function Home() {

    const [celulares, setCelulares] = useState([])

    async function fetchData() {
        const apiUrl = Api.aparelho.readAll()

        const response = await Api.buildApiGetRequest(apiUrl)

        if (response.ok) {
            const data = await response.json()

            setCelulares(data)
        } else {
            toast.error('Erro ao carregar lista de Celulares.')
        }
    }
    useEffect(function () {
        fetchData()
    }, [])
    return (
        <>
            <div className="cards">
                {celulares.map(function (celular) {
                    return <Card key={celular.nome} item={celular} />
                })}
            </div>
        </>
    )
}