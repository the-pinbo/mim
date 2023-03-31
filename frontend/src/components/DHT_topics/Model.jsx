import styles from "../../constants/style"
import { useState } from "react"
import { motion } from "framer-motion"
import Distance from "./Distance"
import Visualizing from "./Visualizing"
import Routing from "./Routing"
import KBuckets from "./KBuckets"
import Communication from "./Communication"
import Kademlia from "./Kademlia"
function Model() {
    const [subtopic, setSubtopic] = useState(0)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-black flex bg-white h-full">
                <div className="basis-4/12 flex justify-center">
                    <ul>
                        <li><button onClick={() => setSubtopic(1)} className={`bg-[#9B67CF] ${subtopic == 1 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Distance metric</button></li>
                        <li><button onClick={() => setSubtopic(2)} className={`bg-[#00E0E1] ${subtopic == 2 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Visualizing Distance</button></li>
                        <li><button onClick={() => setSubtopic(3)} className={`bg-[#41CD61] ${subtopic == 3 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Routing</button></li>
                        <li><button onClick={() => setSubtopic(4)} className={`bg-[#FFC600] ${subtopic == 4 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>K-Buckets</button></li>
                        <li><button onClick={() => setSubtopic(5)} className={`bg-[#FF7860] ${subtopic == 5 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Communication Interface</button></li>
                    </ul>
                </div>
                <div className="basis-8/12">
                    {subtopic == 0 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}><div className="my-2"></div><Kademlia/></motion.div>}
                    {subtopic != 0 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex justify-end">
                            <button onClick={() => setSubtopic(0)} className={styles.back}>Back</button>
                        </motion.div>
                    )}
                    {subtopic == 1 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}><Distance/></motion.div>}
                    {subtopic == 2 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}><Visualizing/></motion.div>}
                    {subtopic == 3 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}><Routing/></motion.div>}
                    {subtopic == 4 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}><KBuckets/></motion.div>}
                    {subtopic == 5 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}><Communication/></motion.div>}
                </div>
            </div>
        </motion.div>
    )
}
export default Model