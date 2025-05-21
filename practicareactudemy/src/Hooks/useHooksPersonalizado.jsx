import { useState } from "react"

const useHooksPersonalizado = () => {
    const [verduras, setVerduras] = useState([])
    const [texto, setTexto] = useState()
  return[verduras, setVerduras]
}

export default useHooksPersonalizado
