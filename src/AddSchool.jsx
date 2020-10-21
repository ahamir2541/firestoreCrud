import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import firebase from './firebase'

const AddSchool = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const ref = firebase.firestore().collection('schools')

    const addSchool = (newSchool) => {
        ref.doc(newSchool.id).set(newSchool)
            .then(() => {
                console.log('successfully add')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const newSchoolHandler = e => {
        e.preventDefault()

        const newSchool = {
            id : uuidv4(),
            title,
            desc,
        }
        addSchool(newSchool)
    }

    return (
        <div>
            <h2>Add school</h2>
            <form onSubmit={newSchoolHandler}>
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
                <button className="btn btn-info my-3" >Add</button>
            </form>
        </div>
    );
};

export default AddSchool;