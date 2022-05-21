import styles from './Cars.module.css'

const cars = ({ brand, km, color }) => {
    return (
        <div>
            <h2>Carro</h2>
            <ul>
                <li>Marca: {brand}</li>
                <li>KM: {km}</li>
                <li>Cor: {color}</li>
            </ul>
        </div>
    )
}

export default cars