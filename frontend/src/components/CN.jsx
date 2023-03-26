import styles from "../constants/style"
import { CN_text } from "../constants/cn"
import { useState, useEffect } from "react"
import { Application, Data_link, Model, Network, Transport, Physical } from "./CN_topics";
import { motion } from 'framer-motion'
function CN() {
    const [topic, setTopic] = useState(0);
    return (
        <div className="py-6 bg-white flex justify-center">
            <div className="flex bg-white flex-wrap w-[60%]">
                <div className={`text-center basis-full ${styles.title}`}>Computer Networks</div>
                <div className="basis-full">{CN_text.para1}</div>
                <div className="basis-full pb-5">{CN_text.para2}</div>
                <div className="basis-full flex justify-center">
                    <div className={`w-max flex justify-center bg-[#00df9a] ${styles.btn_grp}`} id="button-grp">
                        <button onClick={() => setTopic(0)} className={`${topic == 0 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button_start}`}>TCP/IP 5 Layer Model</button>
                        <button onClick={() => setTopic(1)} className={`${topic == 1 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button}`}>Physical Layer</button>
                        <button onClick={() => setTopic(2)} className={`${topic == 2 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button}`}>Data Link Layer</button>
                        <button onClick={() => setTopic(3)} className={`${topic == 3 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button}`}>Network Layer</button>
                        <button onClick={() => setTopic(4)} className={`${topic == 4 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button}`}>Transport Layer</button>
                        <button onClick={() => setTopic(5)} className={`${topic == 5 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button_end}`}>Application Layer</button>
                    </div>
                </div>
                <div className="w-full h-[5px] rounded-3xl bg-black my-3"></div>
                <div className="my-10">
                    {topic == 0 && <Model />}
                    {topic == 1 && <Physical />}
                    {topic == 2 && <Data_link />}
                    {topic == 3 && <Network />}
                    {topic == 4 && <Transport />}
                    {topic == 5 && <Application />}
                </div>
            </div>
        </div>
    )
}

export default CN