import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

const EditSchool = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const editSchoolHandler = e => {
        e.preventDefault()

        const EditNewSchool = {
            id : uuidv4(),
            title,
            desc,
        }
        console.log(EditNewSchool)
    }

    return (
        <div>
            <h2>Edit School</h2>
            <form onSubmit={editSchoolHandler}>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="form-control mt-3 "
                    placeholder="title"
                    type="text" />
                <input
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                    className="form-control mt-3 "
                    placeholder="description"
                    type="text" />
                <button className="btn btn-danger my-3" >edit</button>
            </form>
        </div>
    );
};

export default EditSchool;