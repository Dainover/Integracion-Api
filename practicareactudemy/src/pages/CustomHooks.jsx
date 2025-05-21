import { Link } from "react-router-dom";
import { categorias, productos } from "./../Data/datos";
import { useState } from "react";
import useHooksPersonalizado from "./../Hooks/useHooksPersonalizado";
const CustomHooks = () => {
    const [categoria, setCategoria] = useState(0);
    const [producto, setProducto] = useState(0);
    const [verduras, setVerduras] = useHooksPersonalizado();
    const handleDesplegar = (valor) => {
       
      setCategoria(valor);
      if(valor ===0){//si es 0 no se despliega nada
        setVerduras([]);
        
      }else{
        setVerduras(productos.filter((prod)=>prod.categorias === parseInt(valor)));//filtramos los productos por categoria
      }
    }
    return (
      <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/hooks">Hooks</Link>
              </li>
              <li className="breadcrumb-item acitve" aria-current="page">
                EventosVarios
              </li>
            </ol>
          </nav>
          <hr />
          <h3>UseEffect</h3>
          <div>
            <label htmlFor="categoria">Categorias</label>
            <select value={categoria} onChange={(e)=>{handleDesplegar(e.target.value)}} id="categoria">
              <option value="0">Seleccione...</option>
              {categorias.map((cat)=>(
                <option key={cat.id} value={cat.id}>{cat.nombre}</option>
              ))}
            </select>
          </div>

           <div>
            <label htmlFor="producto">productos</label>
            <select value={producto} onChange={(e)=>{setProducto(e.target.value)}} id="productos">
              <option value="0">Seleccione...</option>
              {verduras.map((verdura)=>(
                <option key={verdura.id} value={verdura.id}>{verdura.nombre}</option>
              ))}
            </select>
          </div>
       
       </>
    );
}

export default CustomHooks;
