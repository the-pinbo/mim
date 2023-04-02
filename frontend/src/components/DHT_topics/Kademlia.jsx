import NetDiag from "../../assets/kademlia.png"

function Kademlia() {
    return (
        <div className="text-black bg-white">
            <p className="text-xl mb-3">Kademlia is a <b>peer-to-peer Distributed Hash Table (DHT)</b> based on the XOR metric.</p>
            <ul>
                <li className="list-disc">Every node participating gets a 160-bit identifier.</li>
                <li className="list-disc">The unique identifier can be implicitly derived or explicitly assigned.</li>
                <li className="list-disc">The distance between two IDs id1 and id2 is defined as <i className="text-[#00df9a]">id1 XOR id2</i>.</li>                
            </ul>
            <img src={NetDiag} className="mx-auto my-2" />
        </div>
    )
}
export default Kademlia