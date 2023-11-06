import './App.css';

import Button from './Button';
import Row from './Row';

import {
  useState
} from 'react'

// React Component
const App = () => {

  // code

  const userInfo = {
    firstName: "Hakan",
    lastName: "Demir",
    age: 32
  }

  const getLastName = () => {

    return userInfo.lastName
  }

  const isLoggedIn = true

  const userList = [
    {
      firstName: "Hakan",
      lastName: "Demir",
      age: 32
    },
    {
      firstName: "Elif",
      lastName: "Yavuz",
      age: 34
    },
    {
      firstName: "Mehmet",
      lastName: "Şahin",
      age: 36
    }
  ]

  // let number = 10

  const [number, setNumber] = useState(10)

  return (
    <div className="App">
      <header className="App-header">
        <div>
        {
          userList.map((item, index) => {

            return (
              // <div>{item.firstName} {item.lastName} {item.age > 33 ? "Yaş Uygun" : "Yaş Uygun Değil"}</div>
              <Row item={item} />
            )
          })
        }

        </div>
        <div>{userInfo.firstName} isimli kullanıcının yaşı {userInfo.age > 30 ? "Uygun" : "Uygun Değildir"}</div>
        {
          isLoggedIn ? (
            <div>Oturum Açık</div>
          ) : (
            <div>Oturum Kapalı</div>
          )
        }
         <div style={{
          marginTop: 20
         }}>
          <div>Anlık Değer: {number}</div>
          <Button title="Increase" onClick={() => {
            setNumber(number+1)
            console.log('anlık değer', number)
          }} />
          <Button title="Decrease" onClick={() => {
            setNumber(number-1)
            console.log('anlık değer', number)
          }} />
        </div>
      </header>
    </div>
  );
}

// <Button /> JSX

export default App;
