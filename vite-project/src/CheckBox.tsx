type CheckBoxProps = {
  categoriasElegidas: string[];
  setSearchParams: (params: Record<string, string | null>) => void;
};

const categorias = ["Electrodomestico", "Tecnología", "Electronica"];

export default function CheckBox({ categoriasElegidas, setSearchParams }: CheckBoxProps) {
  const handleCheckboxChange = (categoria: string) => {
    let newCategorias = [...categoriasElegidas];

    if (newCategorias.includes(categoria)) {
      newCategorias = newCategorias.filter((c) => c !== categoria);
    } else {
      newCategorias.push(categoria);
    }

    const value = newCategorias.length > 0 ? newCategorias.join(",") : null;
    setSearchParams({ categoria: value });
  };

  return (
    <div>
      <h4>Filtrar por categoría:</h4>
      {categorias.map((categoria) => (
        <label key={categoria}>
          <input
            type="checkbox"
            checked={categoriasElegidas.includes(categoria)}
            onChange={() => handleCheckboxChange(categoria)}
          />
          {categoria}
        </label>
      ))}
    </div>
  );
}