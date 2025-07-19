type SearchProps = {
  query: string[];
  setSearchParams: (params: Record<string, string | null>) => void;
};

export default function SearchBar({ query, setSearchParams }: SearchProps) {
  return (
    <div className="filtrosContainer">
    <form>
      <label htmlFor="searchByName">Buscar: </label>
      <input
        id="searchByName"
        name="searchByName"
        value={query}
        onChange={(e) => setSearchParams({ title: e.target.value })}
        className="inputBusqueda"
      />
    </form>
    </div>
  );
}