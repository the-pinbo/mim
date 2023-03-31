import DistImg from "../../assets/dist.png"

function Visualizing() {
    return (
        <div className="text-black bg-white">
            <p>XOR is not a usual distance we can measure, and hence it requires a special way to visualize. XOR tends to turn like bits to 0, so when we XOR two 160 bits numbers, the like bits will turn to 0.</p>
            <p>Hence, the more common the prefix between the two 160-bit IDs, the smaller the resultant value, hence the shorter the distance. Thus we can visualize the distance between nodes by placing them in a complete binary tree.</p>
            <img src={DistImg} className="mx-auto my-2" />
        </div>
    )
}
export default Visualizing