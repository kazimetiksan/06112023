const Row = ({
    item
}) => {

    // const userInfo = {
    //     firstName: "Hakan",
    //     lastName: "Demir",
    //     age: 32
    //   }
      
    // const {firstName} = userInfo // destructure


    return (
        <div>{item.firstName} {item.lastName}</div>
    )
}

export default Row