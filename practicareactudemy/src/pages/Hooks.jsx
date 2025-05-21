import {Link} from 'react-router-dom'

const Hooks = () => {
  return (
    <>
    <h1>Hooks</h1>
      <ul>
        <li>
             <Link to ='/hooks/evento-click'>Evento click</Link>
        </li>
        <li>
             <Link to ='/hooks/usestate'>useState</Link>
        </li>
        <li>
             <Link to ='/hooks/onChangue'>OnChangue</Link>
        </li>
        <li>
             <Link to ='/hooks/eventos-varios'>eventos-varios</Link>
        </li>
        <li>
             <Link to ='/hooks/useEffect'>UseEffect</Link>
        </li>
         <li>
            <Link to ='/hooks/customhook'>CustomHook</Link>
         </li>
         <li>
            <Link to ='/hooks/louderdata'>Use-Louder-data</Link>
         </li>
         <li>
            <Link to ='/hooks/usenavigate'>UseNavigate</Link>
         </li> 
         <li>
            <Link to ='/hooks/uselocation'>UseLocation</Link>
         </li>
         <li>
            <Link to ='/hooks/useref'>Useref</Link>
         </li>
      </ul>
    </>
  )
}

export default Hooks
