import './App.css'
import {useCharacterList} from "../../hooks/useCharacterList"

export const IndexPage = () =>  {
  const { characterData, loadingCharacterData } = useCharacterList(true)

  return (
    <>
      {loadingCharacterData ? <p>Loading...</p> : <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", backgroundColor: theme === "dark" ? "black" : "white"}}>

        {characterData.items.map((item, index) => <CharacterCardComponent name={item.name} image={item.image}/>)}
      </div>}
    </>
  )
}