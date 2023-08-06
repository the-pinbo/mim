function LayerCard(props) {
    return (
        <div>
            <div>
                <span><strong>Description: </strong></span>
                <span>{props.data.description}</span>
            </div>
            <div>
                <span><strong>Protocol(s): </strong></span>
                <span>{props.data.protocol}</span>
            </div>
            <div>
                <span><strong>Protocol Data Unit: </strong></span>
                <span>{props.data.protocol_data_unit}</span>
            </div>
            <div>
                <span><strong>Addressing: </strong></span>
                <span>{props.data.adderssing}</span>
            </div>
        </div>
    )
}
export default LayerCard