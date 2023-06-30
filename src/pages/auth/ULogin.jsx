import {useState} from "react";

export const ULogin = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [name, setName] = useState('')
    const [surName, setSurName] = useState('')
    return (
        <>
            <div className={"container d-flex align-items-center justify-content-center"} style={{height: '100vh'}}>
                <form className={"w-50 p-5 shadow"}>
                    <h1 className={"text-center text-primary mb-3"}>Kirish</h1>
                    <div className="form-outline mb-4">
                        <input type="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}
                               id="form2Example1" className="form-control"/>
                        <label className="form-label" htmlFor="form2Example1">tel raqam</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="text" value={name} onChange={e => setName(e.target.value)}
                               id="form2Example2" className="form-control"/>
                        <input type="text" value={surName} onChange={e => setSurName(e.target.value)}
                               id="form2Example2" className="form-control"/>
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                    </div>

                    <button type="button" className="btn btn-primary btn-block mb-4">Sign
                        in
                    </button>
                </form>
            </div>

        </>
    )
}