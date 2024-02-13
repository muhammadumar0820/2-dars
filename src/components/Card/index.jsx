import './index.css'
function Card(props) {
    const {car} = props;
    let status = 'Eski'
    if (car.start_production > 2000){
        status = 'Yangi'
    }
  return (
    <div className='card-wrapper'>
        <img src={car.image} alt="" />
        <h3>{car.title}</h3>
        <h3>{car.start_production}</h3>
        <h3>{car.class}</h3>
        <h3>{status}</h3>
    </div>
  )
}

export default Card