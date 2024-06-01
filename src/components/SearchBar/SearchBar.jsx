import css from './SearchBar.module.css'
// import toast, { Toaster } from 'react-hot-toast'; 
// export default function SearchBar({ onSubmit }) {


export default function SearchBar({ onSearch }) {
    const handleSubmit = event => {
        event.preventDefault();
        const query = event.target.elements.searchImage.value;
        // query.trim() === '' ? toast.error('Error! Field can not be empty!') : onSearch(query);
        query.trim() === '' ? 'Error! Field can not be empty!' : onSearch(query);
        event.target.reset();
    };
    
    return (
        <header className={css.header}>
            {/* <Toaster position="top-center"/> */}
            <form onSubmit={handleSubmit}>
                <input
                    name="searchImage"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </header>
    );
}


//ДЗ-3
// export default function SearchBox({ value, onSearch }) {
//   return (
//     <div className={css.filterDiv}>
//       <label>Find contacts by name</label>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => onSearch(e.target.value)}
//       />
//     </div>
//   );
// }