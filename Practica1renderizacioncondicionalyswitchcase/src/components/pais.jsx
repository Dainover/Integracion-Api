const pais = (pais) => {
  return (
    <div>
      <tr key={pais.id}>
        <td>{pais.id}</td>
        <td>{pais.nombre}</td>
      </tr>
    </div>
  );
};

export default pais;
