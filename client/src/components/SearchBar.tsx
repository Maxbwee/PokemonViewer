type SearchBarProps = {
    onSearch: (name: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
    function search(formData: FormData) {
        const name = String(formData.get("name") ?? "").trim();
        if (name) onSearch(name);
    }

    return (
        <form action={search}>
            <input name="name" placeholder="Search by name or number" required />
            <button type="submit">Search</button>
        </form>
    );
}
