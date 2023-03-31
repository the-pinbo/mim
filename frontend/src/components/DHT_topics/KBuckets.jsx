import KB1 from "../../assets/KB.png"
import KB2 from "../../assets/KB2.png"

function KBuckets() {
    return (
        <div className="text-black bg-white">
            <p>Every node for each subtree, holds k entries and each K-bucket is sorted by time last seen when a node receives any message from other node in the network, it updates its appropriate k-bucket with the node id.</p>
            <p>Although there may be many candidate nodes for a certain k-bucket, the maximum number of nodes represented in a k-bucket is k.</p>
            <div className="flex flex-1">
            <img src={KB1} className="mx-auto my-2 w-[50%]" />
            <img src={KB2} className="mx-auto my-2 w-[50%]" />
            </div>
        </div>
    )
}
export default KBuckets