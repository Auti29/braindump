export function Input({placeholder, handleChange} : {placeholder: string, handleChange: () => void}){
    return (
        <input className="px-4 py-2 border rounded-md m-2" type="text" placeholder={placeholder} onChange={handleChange}/>
    )
}