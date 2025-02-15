export default function FreeTimeQuestion() {
    return (
        <div>
            <h1>How much free time do you have?</h1>
            <input 
                type="range" 
                min="1" 
                max="5" 
                defaultValue="3"
                list="tickmarks"
                className="slider" 
                id="myRange" 
            />
            <datalist id="tickmarks">
                <option value="1" label="1"></option>
                <option value="2" label="2"></option>
                <option value="3" label="3"></option>
                <option value="4" label="4"></option>
                <option value="5" label="5"></option>
            </datalist>
        </div>
    );
}