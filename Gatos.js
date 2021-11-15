function Gatos(){
    let imgGatos = ["../public/img/cat01.jpg","../public/img/cat02.jpg","../public/img/cat03.jpg"]
    return(
    <>
    <li><img src={imgGatos[0]} alt="gato01"/></li>
    <li><img src={imgGatos[1]} alt="gato02"/></li>
    <li><img src={imgGatos[2]} alt="gato03"/></li>
    </>
    )
  }

  export default Gatos;