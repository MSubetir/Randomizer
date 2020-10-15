import React from 'react'

const TextForm = ({onChange, onSubmit, form}) => (
        
        <form 
            className="d-flex justify-content-end align-items-center container my-3 col-10"
            onSubmit={onSubmit} 
        >
                
                <div className="form-group mr-2 my-0">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="texto"
                        name="text"  
                        onChange={onChange}
                        value ={form.text}
                        maxLength="40"
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