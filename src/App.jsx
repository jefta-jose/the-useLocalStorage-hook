import './App.css'
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [value, setValue, clear] = useLocalStorage('key', 'intialValue')

  const handleSubmit = (e) => {
    if (e.target[0].value === '') return alert('Please enter something');
    e.preventDefault();
    setValue(e.target[0].value)
  }
  const handleClear = () => clear();

  return (
    <div className='container'>
      <h1>Custom Hook : useLocalStorage</h1>
      <h4>{value}</h4>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor="inputTxt"></label>
        <input type="text" name="" id="inputTxt" />
        <div style={{ display: "flex", gap: "2rem" }}>
          <button type='submit'>Save to localStorage</button>
          <button type='button' onClick={handleClear}>Clear</button>
        </div>
      </form>
    </div>
  )
}

export default App
