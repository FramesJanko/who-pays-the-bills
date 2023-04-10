import React,{ useState, useContext, useRef } from 'react'
import { MyContext } from '../context'
import {Button, Form, Alert } from 'react-bootstrap'


const Stage1 = () => {
    const textInput = useRef();
    const context = useContext(MyContext);
    const [error,setError] = useState([false,'']);

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;
        const validate = validateInput(value);

        if(validate){
            setError([false,''])
            context.addPlayer(value)
            console.log('Add Player: ' + value)
        }
    }
    
    const validateInput = (value) => {
        if(value === ''){
            setError([true,'Must enter at least 3 characters.'])
            return false;
        }
        if(value.length <= 2){
            setError([true,'Must enter at least 3 characters.'])
            return false;
        }
        
        return true;
    }
    console.log(context)
    return(
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='Add player name'
                        name='player'
                        ref={textInput}
                    />
                </Form.Group>
                {error[0] ? <Alert>{error[1]}</Alert>: null}
                <Button className='miami' variant='primary' type='submit'>Add Player</Button>
                {
                    context.state.players && context.state.players.length > 0 ? 
                    <>
                        <hr/>
                        <div>
                            <ul className='list-group'>
                                {
                                    context.state.players.map((player,idx) => (
                                        <li key={idx} className='list-group-item d-flex justify-content-between align-items-center list-group-item-action'>
                                            {player}
                                            <span className='badge badge-danger'
                                            onClick={()=>context.deletePlayer(idx)}>X</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div
                                className='action_button'
                                onClick={()=> context.next()}
                            >
                                Pick loser
                            </div>
                        </div>
                    </>
                    : null
                }
            </Form>
        </>
    )
}

export default Stage1