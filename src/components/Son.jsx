import { useMood } from "./context/MoodContext";

function Son () {
   const { mood, setMood } = useMood();

   const changeMood = () => {
      setMood(!mood)
   }

   return (
      <>
         <p>React Context is easy: {mood.toString().toUpperCase()}</p>
         <button onClick={changeMood}>Change my mood !</button>
      </>
   )
}

export default Son;