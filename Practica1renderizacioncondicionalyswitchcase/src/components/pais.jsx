const pais = ({pais}) => {
  return (
    
      <tr key={pais.id}>
        <td>{pais.id}</td>
        <td>{pais.nombre}</td>
      </tr>
    
  );
};

export default pais;
