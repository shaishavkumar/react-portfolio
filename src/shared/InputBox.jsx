
function InputBox() {
    const currOptions = ['Option 1' , 'Option 2']
    return (
        <>
            <label>From</label>
            <select>
                {currOptions.map((currency) => {
                    return <option key={currency} value={currency}>{currency}</option>
                })}
            </select>
        </>
    )
}

export default InputBox