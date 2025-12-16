import { useState } from "react"
import {FaUserPlus} from "react-icons/fa"

export default function QueueForm({onAdd}){

    const [name, setName] = useState('')
    const [services, setServices] = useState('')

    const handleSubmit = (e)=> {
        e.preventDefault()
        if(!name.trim() || !services.trim()) return
        onAdd({name, services})
        setName('')
        setServices('')
    }

    return(
        <>
            <form className="queue-form" onSubmit={handleSubmit}>
                <h2>Add Queue</h2>

                <div className="form-group">
                    <input
                    placeholder="Customer Name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    type="text"  />
                </div>

                <div>
                    <select value={services} onChange={(e)=> setServices(e.target.value)}>
                    <option value="">select services</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Payment">Payment</option>
                    <option value="Support">Support</option>
                    </select>

                </div>
                <div style={{marginTop: "1rem"}}>
                    <button type="submit" >
                     <FaUserPlus/> Add Customer
                    </button>
                </div>

            </form>
        </>
    )
}