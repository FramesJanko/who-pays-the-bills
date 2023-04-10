import React,{ useContext } from "react"
import { MyContext } from "../context"

const Stage2 = () => {
    const context = useContext(MyContext);

    return(
        <>
            <div>
                <h3>The loser is:</h3>
                <div>{context.state.result}</div>
            </div>
            <div
            onClick={()=> context.resetGame()}>
                START OVER
            </div>
            <div
            onClick={()=> context.getNewLoser()}>
                NEW LOSER
            </div>
        </>
    )
}

export default Stage2