import React, { useState} from "react";
const TransactionSection =()=>{

    const [description, setDescription] = useState('')
    const [amount,setAmount] = useState(null);
    const [transaction,setTransaction] = useState([]);
    const [editId,setEditId]= useState(null)

    const addTransaction = (e) =>{
        e.preventDefault();
        if(editId) {
            const newTransaction = transaction.map((t) =>(
              t.id === editId ? {id: editId, description, amount } : t
            ))
            setTransaction(newTransaction);
            setEditId(null);
        } else  {
             setTransaction([...transaction, {id: Date.now(),description,amount}])
             
        }
        setDescription('')
             setAmount(0)
    
    }
    const handleEdit = (t) => {
        setEditId(t.id);
        setDescription(t.description);
        setAmount(t.amount);
    }

    const handleDelete = (id) => {
        setTransaction(transaction.filter(t=> t.id !== id))
    }

    return(
        <div className='bg-red-300 min-h-screen'>
            <h1 className='text-3xl font-bold text-center pt-12'>Personal Expenses Tracker</h1>
            <div className='container mt-20 mx-auto px-5'>
            <div className='p-5 bg-white rounded-lg shadow-lg'>
            <h2 className='text-2xl font-bold text-center mb-5'>Transactions </h2>
                    <table className='w-full table-fixed flex flex-col items-between text-left'>
                        <thead>
                            <tr className='flex w-full justify-between'>
                                <th className='text-xl font-bold w-full md:w-1/4 px-2 py-2'>Description</th>
                                <th className='text-xl font-bold w-full md:w-1/4 px-2 py-2'>Amount</th>
                                <th className='text-xl font-bold w-full md:w-1/4 px-2 py-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transaction.map((t) => (
                                <tr key={t.id} className='flex w-full justify-betwwen'>
                                    <td className='py-2 px-2 w-full md:w-1/4'>{t.description}</td>
                                    <td className='py-2 px-2 w-full md:w-1/4'><span>R</span>{t.amount}</td>
                                    <td className='py-2 px-2 w-full md:w-1/4'>
                                     <button className='bg-yellow-500 px-4 py-2 text-white' onClick={e => handleEdit(t)}>Edit </button>
                                     <button className='bg-red-500 px-4 py-2 text-white mr-2' onClick={e => handleDelete(t.id)}>Delete</button>
                                 </td>    
                             </tr>
                        ))}
                        </tbody>
                    </table>
                <div className='mt-16 mb-4 w-full lg:w-1/2 xl:w-1/3 p-5 mx-auto rounded shadow-lg border border-gray-100'>

                    <h1 className='text-xl font-bold text-center mb-5'> Add Transaction</h1>
                    <form onSubmit={addTransaction} className='flex text-center flex-col mx-auto border-1 border-double border-indigo-600 w-full justify-between my-5'> 
                        <input 
                            type='text'
                            className= "border border-slate-300 rounded-md w-full px-2 py-2 mb-2"
                            placeholder='Description'
                            onChange={e=> setDescription(e.target.value)}
                            value={description}
                        />
                        <input 
                            type='number'
                            className='border border-slate-300 rounded-md w-full px-2 py-2 mb-2'
                            placeholder='Amount'
                            onChange={e=> setAmount(e.target.value)}
                            value={amount}    
                        />
                        <button className='bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus:outline-none focus:ring focus:ring-violet-300 px-4 py-2' type='submit'>
                            Add Transaction
                        </button>    
                    </form>    
                </div>
    
            </div>
        </div>
    </div>  

    )
}

export default TransactionSection