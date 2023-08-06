import styles from "../../constants/style"
import { useState } from "react"
import { motion } from "framer-motion"
import { CN_text } from "../../constants/cn"
import LayerCard from "./LayerCard"
function Model() {
    const [subtopic, setSubtopic] = useState(0)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >   
            <div className={`text-center basis-full mb-5 ${styles.title}`}>5-Layer Model</div>
            <div className="text-black flex">
                <div className="basis-4/12 flex justify-center">
                    <ul>
                        <li><button onClick={() => setSubtopic(1)} className={`bg-[#9B67CF] ${subtopic == 1 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Application Layer</button></li>
                        <li><button onClick={() => setSubtopic(2)} className={`bg-[#00E0E1] ${subtopic == 2 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Transport Layer</button></li>
                        <li><button onClick={() => setSubtopic(3)} className={`bg-[#41CD61] ${subtopic == 3 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Network Layer</button></li>
                        <li><button onClick={() => setSubtopic(4)} className={`bg-[#FFC600] ${subtopic == 4 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Data Link Layer</button></li>
                        <li><button onClick={() => setSubtopic(5)} className={`bg-[#FF7860] ${subtopic == 5 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Physical Layer</button></li>
                    </ul>
                </div>
                <div className="basis-8/12">
                    {subtopic == 0 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}><div className="my-2">{CN_text.tcp_5_layer_modal.description[0]}</div><div className="my-2">{CN_text.tcp_5_layer_modal.description[1]}</div><div className="my-2">{CN_text.tcp_5_layer_modal.description[2]}</div></motion.div>}
                    {subtopic != 0 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex justify-end">
                            <button onClick={() => setSubtopic(0)} className={styles.back}>Back</button>
                        </motion.div>
                    )}
                    {subtopic == 1 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>< LayerCard data={CN_text.tcp_5_layer_modal.application_layer}/></motion.div>}
                    {subtopic == 2 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>< LayerCard data={CN_text.tcp_5_layer_modal.transport_layer}/></motion.div>}
                    {subtopic == 3 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>< LayerCard data={CN_text.tcp_5_layer_modal.network_layer}/></motion.div>}
                    {subtopic == 4 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>< LayerCard data={CN_text.tcp_5_layer_modal.data_link_layer}/></motion.div>}
                    {subtopic == 5 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>< LayerCard data={CN_text.tcp_5_layer_modal.physical_layer}/></motion.div>}
                </div>
            </div>
        </motion.div>
    )
}
export default Model