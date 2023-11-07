import './App.css';

import Button from './Button';
import Row from './Row';

import {
  useState,
  useEffect
} from 'react'

import {
  Table,
  Form
} from 'react-bootstrap'

import Modal from './Modal';  

import axios from 'axios';

// React Component1
const App = () => {

  const [userList, setUserList] = useState([{
    firstName: "Hakan",
    lastName: "Demir",
    age: 32
  }, {
    firstName: "Mehmet",
    lastName: "Şahin",
    age: 32
  }])

  const userInfoTemplate = {
    firstName: "",
    lastName: "",
    age: ""
  }

  const [userInfo, setUserInfo] = useState(userInfoTemplate)

  const [updateIndex, setUpdateIndex] = useState(-1)
  const [removeIndex, setRemoveIndex] = useState(-1)

  const [modalOn, setModalOn] = useState(false)

  useEffect(() => {

    console.log('effect', userInfo)

  }, [userInfo])

  const setUserInput = (key, value) => {

    setUserInfo({
      ...userInfo,
      [key]: value
    })
  }

  const resetForm = () => {

    setUpdateIndex(-1)
    setUserInfo(userInfoTemplate)
  }

  const loadData = () => {

    const url = 'https://reactpm.azurewebsites.net/api/users'

    axios.get(url)
    // PROMISE
    .then((response) => {
      console.log('response', response.data)
    })
    .catch((error) => {
      console.log('error', error)
    })
  }

  useEffect(() => {

    console.log('constructor')
    loadData()

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                userList.map((item, index) => {

                  return (
                    <Row
                      key={index}
                      item={item}
                      index={index}
                      onUpdate={() => {

                        const item = userList[index]
                        setUserInfo(item)

                        setUpdateIndex(index)
                      }}
                      onRemove={() => {

                        setModalOn(true)
                        setRemoveIndex(index)

                      }}
                    />
                  )
                })
              }
            </tbody>
          </Table>
        </div>
        <div>
          <Form.Control placeholder='Ad' value={userInfo.firstName} onChange={(e) => {

            // const firstName = e.target.value
            // setUserInfo({
            //   ...userInfo,
            //   firstName
            // })

            setUserInput('firstName', e.target.value)

          }} />
          <Form.Control placeholder='Soyad' value={userInfo.lastName} onChange={(e) => {

            setUserInput('lastName', e.target.value)

          }} />
          <Form.Control placeholder='Yaş' value={userInfo.age} onChange={(e) => {

            setUserInput('age', e.target.value)

          }} />
        </div>
        <div>
          <Button variant='success' title={updateIndex === -1 ? "Ekle" : "Güncelle"} onClick={() => {

            if (updateIndex === -1) {

              // EKLE
              const newList = [...userList, userInfo]
              setUserList(newList)

            } else {

              // GÜNCELLE

              const newList = userList.map((item, index) => {

                if (updateIndex === index) {
                  return userInfo
                }

                return item
              })

              setUserList(newList)
            }

            resetForm()

          }} />
        </div>
      </header>
      <Modal
        title="Emin misin ?"
        body={`${userList[removeIndex]?.firstName} isimli kişi silinecektir.`}
        show={modalOn}
        handleConfirm={() => {

          const newList = userList.filter((item, rIndex) => {
            return removeIndex !== rIndex
          })

          setUserList(newList)

          setModalOn(false)
          setRemoveIndex(-1)

        }}
        handleClose={() => {

          setModalOn(false)
          setRemoveIndex(-1)

          // if (isConfirmed) {
          //   const newList = userList.filter((item, rIndex) => {
          //     return removeIndex !== rIndex
          //   })

          //   setUserList(newList)
          // }


        }}
      />
    </div>
  );
}

// <Button /> JSX

export default App;
