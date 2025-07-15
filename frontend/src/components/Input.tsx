// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Input({placeholder, reference} : {placeholder: string, reference: any}){
    return (
        <input ref={reference} className="px-4 py-2 border rounded-md m-2" type="text" placeholder={placeholder}/>
    )
}