import './App.css';

import Button from './Button';
import Row from './Row';

import {
  useState,
  useEffect
} from 'react'

// React Component
const App = () => {

  const [userList, setUserList] = useState([{
    firstName: "Hakan",
    lastName: "Demir",
    age: 32
  },{
    firstName: "Mehmet",
    lastName: "Şahin",
    age: 32
  }])

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    age: ""
  })

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

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {
            userList.map((item, index) => {

              return (
                <Row key={index} item={item} />
              )
            })
          }
        </div>
        <div>
          <input placeholder='Ad' value={userInfo.firstName} onChange={(e) => {

            // const firstName = e.target.value
            // setUserInfo({
            //   ...userInfo,
            //   firstName
            // })

            setUserInput('firstName', e.target.value)

          }} />
          <input placeholder='Soyad' value={userInfo.lastName} onChange={(e) => {

            setUserInput('lastName', e.target.value)

          }} />
          <input placeholder='Yaş' value={userInfo.age} onChange={(e) => {

            setUserInput('age', e.target.value)

          }} />
        </div>
        <div>
          <Button title="Ekle" onClick={() => {

            const newList = [...userList, userInfo]
            setUserList(newList)

          }} />
        </div>
      </header>
    </div>
  );
}

// <Button /> JSX

export default App;
