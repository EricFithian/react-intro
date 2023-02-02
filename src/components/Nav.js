import './Nav.css'
// define our Nav component
function Nav({data, anotherProp}) {

    console.log(data);
    console.log(anotherProp);

    return (
      <>
        {data.map(item => {
            return (
                <>
                    <h1>Name: {item.name}</h1>
                    <h3>Age: {item.age}</h3>
                    <h3>Company: {item.company}</h3>
                </>
            )
        })}
      </>
    )
}

export default Nav