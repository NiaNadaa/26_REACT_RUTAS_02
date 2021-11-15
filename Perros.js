function Perros(){
    let imgPerros = ["../public/img/dog01.jpg","../public/img/dog02.jpg","../public/img/dog03.jpg"]
    return(
     <>
    <li><img src={imgPerros[0]} alt="perro01"/></li>
    <li><img src={imgPerros[1]} alt="perro02"/></li>
    <li><img src={imgPerros[2]} alt="perro03"/></li>
    </>
    )
}

export default Perros;