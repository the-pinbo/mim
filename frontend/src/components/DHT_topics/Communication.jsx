function Communication() {
    return (
        <div className="text-black bg-white h-full">
            <p className="text-lg my-3">Every node part of Kademlia exposes 4 RPCs (Remote Procedure Calls)</p>
            <ul>
                <li className="list-disc">
                  The <code className="text-[#00df9a]">PING</code> RPC probes a node to see if it is
                  online.
                </li>
                <li className="list-disc">
                  The <code className="text-[#00df9a]">STORE</code> RPC instructs a node to store a [key,
                  value] pair for later retrieval.
                </li>
                <li className="list-disc">
                  The <code className="text-[#00df9a]">FIND_NODE</code> RPC takes a 160-bit key as an
                  argument. The recipient of the <code className="text-[#00df9a]">FIND_NODE</code> RPC
                  returns an (IP address, UDP port, Node ID) tuple for each of
                  the k nodes closest to the target id.
                </li>
                <li className="list-disc">
                  The <code className="text-[#00df9a]">FIND_VALUE</code> RPC behaves like 
                  <code className="text-[#00df9a]">FIND_NODE</code>, returning the k nodes closest to the
                  target identifier with one exception – if the RPC recipient
                  has received a <code className="text-[#00df9a]">STORE</code> for the given key, it
                  returns the stored value.
                </li>
              </ul>
        </div>
    )
}
export default Communication