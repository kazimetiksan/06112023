import './App.css';

import Button from './Button';
import Row from './Row';

import {
  useState,
  useEffect
} from 'react'

// React Component
const App = () => {

  const userList = [{
    firstName: "Hakan",
    lastName: "Demir",
    age: 32
  }]

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    age: ""
  })

  useEffect(() => {

    console.log('effect', userInfo)
  }, [userInfo])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {
            userList.map((item, index) => {

              return (
                <Row item={item} />
              )
            })
          }
        </div>
        <div>
          <input placeholder='Ad' value={userInfo.firstName} onChange={(e) => {

            const firstName = e.target.value
            setUserInfo({
              ...userInfo,
              firstName
            })

          }} />
          <input placeholder='Soyad' value={userInfo.lastName} onChange={(e) => {

            const lastName = e.target.value
            setUserInfo({
              ...userInfo,
              lastName
            })

          }} />
          <input placeholder='Yaş' value={userInfo.age} onChange={(e) => {
            
            const age = e.target.value
            setUserInfo({
              ...userInfo,
              age
            })
            
          }} />
        </div>
        <div>
          <Button title="Ekle" onClick={() => {

          }} />
        </div>
      </header>
    </div>
  );
}

// <Button /> JSX

export default App;
