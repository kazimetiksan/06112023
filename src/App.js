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

  useEffect(() => {

    console.log('effect', userInfo)

  }, [userInfo])

  useEffect(() => {

    console.log('constructor')

  }, [])

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
                        console.log('silinecek satır', index)

                        const newList = userList.filter((item, rIndex) => {
                          return index !== rIndex
                        })

                        setUserList(newList)
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
    </div>
  );
}

// <Button /> JSX

export default App;
