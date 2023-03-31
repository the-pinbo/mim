function Distance() {
    return (
        <div className="text-black bg-white">
            <p className="text-lg my-3">The basic concept is: the node that is closest to the key, owns it.</p>
            <p>In order to find the "closest" node we need a distance metric that quantifies the closeness.</p>
            <p>For two nodes/keys in our Kademlia distribution, the distance metric is d(x,y) = X ⊕ Y</p>
            <div className="my-3">
            XOR can be used as a distance metric because
            <ul>
            <li className="list-disc mx-5">a ⊕ a = 0</li>
            <li className="list-disc mx-5">a ⊕ b &gt; 0</li>
            <li className="list-disc mx-5">d(a, b) + d(b, c) = a ⊕ b ⊕ c = a ⊕ c = d(a, c)</li>
            </ul>
            </div>

        </div>
    )
}
export default Distance