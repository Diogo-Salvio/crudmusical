
const SuggestionCard = () => {
    return (
        <div className="flex justify-center items-center flex-col w-full">
            <div className="card w-[80%] flex justify-center items-center flex-col gap-4 mt-10 border-2 rounded border-black">
                <h3>Sugerir nova música</h3>
                <div className="flex gap-2">
                    <input className="w-[300px] text-sm border-1 rounded border-black p-2" type="text" placeholder="Insira aqui o link da sua música" />
                    <button>Enviar música</button>
                </div>
            </div>
        </div>
    )
}

export default SuggestionCard