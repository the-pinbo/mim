import { motion } from "framer-motion"
import { CN_text } from "../../constants/cn"
import styles from "../../constants/style"
import { useState } from "react"
import Ethernt from "./Ethernet"
function Data_link() {
    const [subtopic, setSubtopic] = useState(0)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Data Link Layer</div>
            <div>
                {CN_text.data_link_layer.description[0]}
                <div><strong>{CN_text.data_link_layer.description[1]}</strong></div>
            </div>
            <div className="my-5">
                <div className={styles.subheading}>MAC Address:</div>
                <ul className="list-disc">
                    <li className="mb-1">{CN_text.data_link_layer.mac.description[0]}</li>
                    <li className="mb-1">{CN_text.data_link_layer.mac.description[1]}</li>
                </ul>
                <div className="flex justify-center">
                    <span className={`text-center ${styles.subheading_}`}>{CN_text.data_link_layer.mac.sample[0]}</span>
                    <span className={`text-center ${styles.subheading}`}>{CN_text.data_link_layer.mac.sample[1]}</span>
                </div>
            </div>
            <div className="my-5">
                <div className={styles.subheading}>Ethernet Frame:</div>
            </div>
            <div className="flex w-full text-lg justify-center">
                <div className="basis-full flex justify-center">
                    <button onClick={() => { setSubtopic(0) }} className={`bg-[#FF7A81] ${subtopic == 0 ? "border-black" : "border-transparent"} ${styles.ethernet_btn}`}>Preamble</button>
                    <button onClick={() => { setSubtopic(1) }} className={`bg-[#F7A05B] ${subtopic == 1 ? "border-black" : "border-transparent"} ${styles.ethernet_btn}`}>SFD</button>
                    <button onClick={() => { setSubtopic(2) }} className={`bg-[#FFFF69] ${subtopic == 2 ? "border-black" : "border-transparent"} ${styles.ethernet_btn}`}>Destiantion Address</button>
                    <button onClick={() => { setSubtopic(3) }} className={`bg-[#D3EAA6] ${subtopic == 3 ? "border-black" : "border-transparent"} ${styles.ethernet_btn}`}>Source Address</button>
                    <button onClick={() => { setSubtopic(4) }} className={`bg-[#A8F1EA] ${subtopic == 4 ? "border-black" : "border-transparent"} ${styles.ethernet_btn}`}>VLAN Header</button>
                    <button onClick={() => { setSubtopic(5) }} className={`bg-[#AAFFEE] ${subtopic == 5 ? "border-black" : "border-transparent"} ${styles.ethernet_btn}`}>Ether Type</button>
                    <button onClick={() => { setSubtopic(6) }} className={`bg-[#AAABEC] ${subtopic == 6 ? "border-black" : "border-transparent"} ${styles.ethernet_btn}`}>Payload</button>
                    <button onClick={() => { setSubtopic(7) }} className={`bg-[#C7B4E2] ${subtopic == 7 ? "border-black" : "border-transparent"} ${styles.ethernet_btn}`}>FCS</button>
                </div>
            </div>
            <div className="w-full h-[5px] rounded-3xl bg-black my-3"></div>
            <div className="my-5 w-full h-[50px]">
                {subtopic == 0 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>< Ethernt data={CN_text.data_link_layer.ethernet.preamble} /></motion.div>}
                {subtopic == 1 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>< Ethernt data={CN_text.data_link_layer.ethernet.sfd} /></motion.div>}
                {subtopic == 2 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>< Ethernt data={CN_text.data_link_layer.ethernet.dest} /></motion.div>}
                {subtopic == 3 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>< Ethernt data={CN_text.data_link_layer.ethernet.src} /></motion.div>}
                {subtopic == 4 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>< Ethernt data={CN_text.data_link_layer.ethernet.vlan} /></motion.div>}
                {subtopic == 5 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>< Ethernt data={CN_text.data_link_layer.ethernet.ether} /></motion.div>}
                {subtopic == 6 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>< Ethernt data={CN_text.data_link_layer.ethernet.payload} /></motion.div>}
                {subtopic == 7 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>< Ethernt data={CN_text.data_link_layer.ethernet.fsc} /></motion.div>}
            </div>
        </motion.div>
    )
}
export default Data_link