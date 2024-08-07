import React, { useState } from 'react'

const Home = () => {
    const [date, setdate] = useState(0)
    const [numberval, setnumberval] = useState(0)
    const [descval, setdescval] = useState("")
    console.log(typeof date);

    const changedate = (e) => {
        setdate(e.target.value)
    }
    if (date == '2024-08-08') {
        console.log("This is right");
    }
    const changenumber = (e) => {
        console.log(numberval)
        setnumberval(e.target.value)
    }
    const handledesc = (e) => {
        setdescval(e.target.value)
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        setnumberval(0)
        setdescval("")
    }
    return (
        <div className='vw-100 container-fluid'>
            <h2 className='text-center my-3 '>Enter The Notebook World</h2>
            <form action="#" onSubmit={handlesubmit}>
                <div className="container w-50 d-flex flex-column justify-content-around border shadow-lg">
                    <div className='my-3'>
                        <label htmlFor="date" className='form-label'>Choose Date </label>
                        <input type="date" className='form-control' name="date" id="date" onChange={changedate} value={date} />
                    </div>
                    <div className='my-3'>
                        <label htmlFor="numberval" className='form-label'>Enter Money : &nbsp; </label>
                        <input type="number" className='form-control' name='money' id='numberval' value={numberval} onChange={changenumber} />
                    </div>
                    <div className=' my-3'>
                        <label htmlFor="textarea" className='form-label'>Description </label>
                        <textarea id='textarea' className='form-control' onChange={handledesc} value={descval} rows={5} cols={50} name='description' placeholder='Enter Description' />
                    </div>
                </div>
                <div className='d-flex w-25 m-auto'>
                    <button type="submit" className='btn sm-btn btn-primary m-auto px-4 my-3'>Add</button>
                    <button className='btn sm-btn btn-primary m-auto px-4 my-3'>Show</button>
                </div>
            </form>
        </div>
    )
}

export default Home
