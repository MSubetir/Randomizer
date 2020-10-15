import React from 'react'

const TextForm = ({onChange, onSubmit, form}) => (
    
        <form 
            className="d-flex justify-content-end align-items-center container my-3 col-10"
            onSubmit={onSubmit} 
        >
           
                <div className="form-group my-0">
                    <input 
                        type="number"
                        className="form-control"
                        placeholder="início"
                        name="nStart"  
                        onChange={onChange}
                        value ={form.nStart}
                    />
                </div>

                <div className="form-group mx-2 my-0">
                    <input 
                        type="number"
                        className="form-control"
                        placeholder="fim"
                        name="nEnd"  
                        onChange={onChange}
                        value ={form.nEnd}
                        
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >Submit
                </button>
            
        </form>
    
)
 
export default TextForm