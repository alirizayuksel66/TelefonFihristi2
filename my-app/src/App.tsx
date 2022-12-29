import React, { useState } from "react";


function App() {

  const [ekles, setEkles] = useState([])
  const [ekle1, setEkle1] = useState<string>("")
  const [ekle2, setEkle2] = useState<string>(' - ')
  const [ekle3, setEkle3] = useState<string>(' - ')
  const [ekle4, setEkle4] = useState<string>(' - ')
  const submitHandle = (e: React.FormEvent) => {
    e.preventDefault()
    setEkles([...ekles, ekle1 + ekle2 + ekle3 + ekle4 ])
    setEkle1(' ')
    setEkle2(' - ')
    setEkle3(' - ')
    setEkle4(' - ')
    console.log(ekles)
    }

  return (
    <div>
      <h1>Telefon Fihristi</h1>
      <form onSubmit={submitHandle}>
        <label className="duzen">Adınız</label><input className="duzen" type="text" value={ekle1} onChange={e => setEkle1(e.target.value)}></input>
        <label className="duzen">Soyadınız</label><input className="duzen" type="text" value={ekle2} onChange={e => setEkle2(e.target.value)}></input>
        <label className="duzen">Numaranız</label><input className="duzen" type="text" value={ekle3} onChange={e => setEkle3(e.target.value)}></input>
        <label className="duzen">Ülke</label><input className="duzen" type="text" value={ekle4} onChange={e => setEkle4(e.target.value)}></input> <br></br>
        <button className="duzen">Ekle</button>
      </form>
      <table className="duzen">
          <tr>
            <th>Adı - Soyadı - Numrası - Ülke</th>
          </tr>
          {ekles.map((ekle1, index) => (
            <tr>
              <td key={index}>{ekle1}</td>
            </tr>
          ))}
        </table>
    </div>
  );
}

export default App;