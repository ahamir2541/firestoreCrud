import React from 'react';
import AddSchool from './AddSchool'
// import EditSchool from './EditSchool'
import { useEffect } from 'react';
import { useState } from 'react';
import firebase from './firebase'

const App = () => {
  const [schools, setSchools] = useState([])
  const [loading, setLoading] = useState(false)

  const ref = firebase.firestore().collection('schools')

  const getSchools = () => {
    setLoading(true)
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setSchools(items)
      setLoading(false)
    })
  }

  const deleteHanlder = (id) => {
    ref.doc(id).delete()
      .then(() => {
        console.log('deleted')
      })
      .catch(err => {
        console.log(err)
      })
  }

  // const editHanlder = (updatedSchool) => {
  //   ref.doc(updatedSchool.id).update(updatedSchool)
  //     .then(() => {
  //       console.log('successfully edited')
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  useEffect(() => {
    getSchools()
  }, [])

  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <AddSchool/>
          {/* <EditSchool/> */}
          {schools.map(school => (
            <div key={school.id} >
              <h2> {school.title} </h2>
              <h5> {school.desc} </h5>
              <button onClick={() => deleteHanlder(school.id) } className="btn btn-danger" >delete</button>
              {/* <button onClick={() => editHanlder({ title : school.title, desc, id : school.id }) } className="btn btn-danger" >edit</button> */}
            </div>
          )) }
        </div>
      </div>
    </div>
  )
};

export default App;