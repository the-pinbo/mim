import RouImg from "../../assets/routing.png"

function Routing() {
    return (
        <div className="text-black bg-white">
            <p>Since there is no central entity, nodes must know how to route requests among themselves such that they always converge to the right node.</p>
            <p>To ensure this, every node in the network keeps track of a few nodes in its routing table. These are not random, but very strategic.</p>
            <p>Every node knows at least one node in each subtree that it is not part of. This means that the routing table may not have the address of the desired node, but it can lead us to one of the nodes present in its subtree.</p>
            <p>When a node receives a message from any other node, it makes an entry in its routing table thus ensuring the table is auto-updated without any explicit intervention.</p>
            <img src={RouImg} className="mx-auto my-2" />
        </div>
    )
}
export default Routing