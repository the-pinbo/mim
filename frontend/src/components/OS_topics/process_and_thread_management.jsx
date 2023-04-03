import React from "react"
import { motion } from "framer-motion"
import styles from "../../constants/style"
import { useState } from "react"
import { OS_text } from "../../constants/os"
import comparision_schedule from "../../assets/comparision.jpeg"
import context_switching from "../../assets/context_switching.png"
import load_balancing from "../../assets/load_balancing.png"
import pntm from "../../assets/pntm.png"
import priority_based from "../../assets/priority_based.webp"
import round_robin from "../../assets/round-robin.jpg"
import thread_pool from "../../assets/thread-pool.png"
import Thread_Synchronization from "../../assets/Thread-Synchronization.png"
import user_kernel_thread from "../../assets/user_kernel_thread.png"
import Semaphore from "../../assets/Semaphore.png"
import advantage_of_mutex from "../../assets/advantage-of-mutex.webp"
import condition from "../../assets/condition.jpg"
import deadlock from "../../assets/deadlock.png"
import shared_mem from "../../assets/shared_mem.png"
import message_passing from "../../assets/mp.png"
import pipe from "../../assets/pipe.png"

function Ptm() {
    const [subtopic, setSubtopic] = useState(0);
    return (   
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
        >
            <div className="text-black flex">
                <div className="basis-5/12 flex justify-center">    
                    <ul>
                        <li><button onClick={() => setSubtopic(1)} className={`${subtopic == 1 ? "bg-[#CCDDB7]" : "bg-[#88d18a]"} ${subtopic == 1 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Process Scheduling</button></li>
                        <li><button onClick={() => setSubtopic(2)} className={`${subtopic == 2 ? "bg-[#CCDDB7]" : "bg-[#88d18a]"} ${subtopic == 2 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Thread creation and management</button></li>
                        <li><button onClick={() => setSubtopic(3)} className={`${subtopic == 3 ? "bg-[#CCDDB7]" : "bg-[#88d18a]"} ${subtopic == 3 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Thread Synchronization</button></li>
                        <li><button onClick={() => setSubtopic(4)} className={`${subtopic == 4 ? "bg-[#CCDDB7]" : "bg-[#88d18a]"} ${subtopic == 4 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Thread Communication</button></li>
                        
                    </ul>
                </div>
                <div className="basis-7/12">
                    {subtopic == 0 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <div className="my-2">
                            {OS_text.pntm.main.para1}
                        </div>
                        <div className="my-2">
                            {OS_text.pntm.main.para2}
                            </div>
                        <div className="my-2">
                            {OS_text.pntm.main.para3}
                            </div>
                        <div className="my-2">
                            {OS_text.pntm.main.para4}
                            </div>
                        <div className="my-2">
                            {OS_text.pntm.main.para5}
                            </div>
                        <div className="my-2">
                            {OS_text.pntm.main.para6}
                            </div>
                        </motion.div>}

                    {subtopic != 0 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex justify-end">
                            <button onClick={() => setSubtopic(0)} className={styles.back}>Back</button>
                        </motion.div>
                    )}

                    {subtopic == 1 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <p className="pb-5">
                            {OS_text.pntm.process_scheduling.para1}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.process_scheduling.para2}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.process_scheduling.para3}
                        </p>
                        <img src={round_robin} alt="round robin" className="mx-auto" />
                        <p className="text-right text-xs pb-5">
                            {OS_text.pntm.process_scheduling.caption1}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.process_scheduling.para4}
                        </p>
                        <img src={priority_based} alt="priority scheduling" className="mx-auto" />
                        <p className="text-right text-xs pb-5">
                            {OS_text.pntm.process_scheduling.caption2}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.process_scheduling.para5}
                        </p>
                        <img src={comparision_schedule} alt="comparision" className="mx-auto" />
                        <p className="text-right text-xs pb-5">
                            {OS_text.pntm.process_scheduling.caption3}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.process_scheduling.para6}
                        </p>
                        <img src={load_balancing} alt="load balancing image" className="mx-auto" />
                        <p className="text-right text-xs pb-5">
                            {OS_text.pntm.process_scheduling.caption4}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.process_scheduling.para7}
                        </p>
                    </motion.div>}

                    {subtopic == 2 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <p className="pb-5">
                            {OS_text.pntm.thread_creation_and_management.para1}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.thread_creation_and_management.para2}
                        </p>
                        <img src={user_kernel_thread} alt="user-level vs kernel-level thread" className="mx-auto" />
                        <p className="text-right text-xs pb-5">
                            {OS_text.pntm.thread_creation_and_management.caption1}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.thread_creation_and_management.para3}
                        </p>            
                        <p className="pb-5">
                            {OS_text.pntm.thread_creation_and_management.para4}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.thread_creation_and_management.para5}
                        </p>
                        <img src={Thread_Synchronization} alt="thread synchronization" className="mx-auto" />
                        <p className="text-right text-xs pb-5">
                            {OS_text.pntm.thread_creation_and_management.caption2}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.thread_creation_and_management.para6}
                        </p>
                        <img src={context_switching} alt="Context switching" className="mx-auto" />
                        <p className="text-right text-xs pb-5">
                            {OS_text.pntm.thread_creation_and_management.caption3}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.thread_creation_and_management.para7}
                        </p>
                        <img src={thread_pool} alt="thread pooling and affinity" className="mx-auto" />
                        <p className="text-right text-xs pb-5">
                            {OS_text.pntm.thread_creation_and_management.caption4}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.thread_creation_and_management.para8}
                        </p>
                    </motion.div>}

                    {subtopic == 3 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <p className="pb-5">
                            {OS_text.pntm.synchronization.para1}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.synchronization.para2}
                        </p>

                        {/* sub heading */}
                        <h3 className="text-2xl font-bold pb-5">
                            {OS_text.pntm.synchronization.sub_heading1}
                        </h3>
                        <p className="pb-5">
                            {OS_text.pntm.synchronization.para3}
                        </p>
                        {/* unordered list */}
                        <ul className="list-disc list-inside pb-5">
                            {OS_text.pntm.synchronization.list1.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })}
                        </ul>
                        <img src={Semaphore} alt="critical section" className="mx-auto" />
                        <p className="text-right text-xs pb-5">
                            {OS_text.pntm.synchronization.caption1}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.synchronization.para4}
                        </p>
                        {/* sub heading */}
                        <h3 className="text-2xl font-bold pb-5">
                            {OS_text.pntm.synchronization.sub_heading2}
                        </h3>
                        <p className="pb-5">
                            {OS_text.pntm.synchronization.para5}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.synchronization.para6}
                        </p>
                        {/* unordered list */}
                        <ul className="list-disc list-inside pb-5">
                            {OS_text.pntm.synchronization.list2.map((item, index) => {
                                return (
                                    <div className="pb-3">
                                        <li key={index}>{item}</li>
                                    </div>
                                    )
                            })}
                        </ul>
                        <img src={advantage_of_mutex} alt = "Mutex" className="mx-auto" />
                        <p className="text-right text-xs pb-5">
                            {OS_text.pntm.synchronization.caption2}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.synchronization.para7}
                        </p>
                        {/* sub heading */}
                        <h3 className="text-2xl font-bold pb-5">
                            {OS_text.pntm.synchronization.sub_heading3}
                        </h3>
                        <p className="pb-5">
                            {OS_text.pntm.synchronization.para8}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.synchronization.para9}
                        </p>
                        {/* unordered list */}
                        <ul className="list-disc list-inside pb-5">
                            {OS_text.pntm.synchronization.list3.map((item, index) => {
                                return (
                                    <div className="pb-3">
                                        <li key={index}>{item}</li>
                                    </div>
                                    )
                            })}
                        </ul>
                        <img src={condition} alt="condition  variable" className="mx-auto" />
                        <p className="text-right text-xs pb-5">
                            {OS_text.pntm.synchronization.caption3}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.synchronization.para10}
                        </p>
                        {/* sub heading */}
                        <h3 className="text-2xl font-bold pb-5">
                            {OS_text.pntm.synchronization.sub_heading4}
                        </h3>
                        <p className="pb-5">
                            {OS_text.pntm.synchronization.para11}
                        </p>
                        <img src={deadlock} alt="deadlock" className="mx-auto" />
                        <p className="text-right text-xs pb-5">
                            {OS_text.pntm.synchronization.caption4}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.synchronization.para12}
                        </p>
                        {/* ordered list */}
                        <ol className="list-decimal list-inside pb-5">
                            {OS_text.pntm.synchronization.list4.map((item, index) => {
                                return (
                                <div className="pb-3">
                                    <li key={index}>{item}</li>
                                </div>
                                )
                            })}
                        </ol>
                        <p className="pb-5">
                            {OS_text.pntm.synchronization.para13}
                        </p>
                        {/* ordered list */}
                        <ol className="list-decimal list-inside pb-5">
                            {OS_text.pntm.synchronization.list5.map((item, index) => {
                                return (
                                    <div className="pb-5">
                                        <li key={index}>{item}</li>
                                    </div>
                                    )
                            })}
                        </ol>
                        <p className="pb-5">
                            {OS_text.pntm.synchronization.para14}
                        </p>
                        {/* some space */}
                        <div className="pb-5"></div>
                        <p className="pb-5">
                            {OS_text.pntm.synchronization.para15}
                        </p>
                    </motion.div>}

                    {subtopic == 4 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <p className="pb-5">
                            {OS_text.pntm.communication_between_threads.para1}
                        </p>
                        {/* sub heading */}
                        <h3 className="text-2xl font-bold pb-5">
                            {OS_text.pntm.communication_between_threads.sub_heading1}
                        </h3>
                        <p className="pb-5">
                            {OS_text.pntm.communication_between_threads.para2}
                        </p>
                        <img src={shared_mem} alt="Shared Memory" className="mx-auto" />
                        <p className="text-right text-xs pb-5">
                            {OS_text.pntm.communication_between_threads.caption1}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.communication_between_threads.para3}
                        </p>
                        {/* sub heading */}
                        <h3 className="text-2xl font-bold pb-5">
                            {OS_text.pntm.communication_between_threads.sub_heading2}
                        </h3>
                        <p className="pb-5">
                            {OS_text.pntm.communication_between_threads.para4}
                        </p>
                        <p className="pb-5">    
                            {OS_text.pntm.communication_between_threads.para5}
                        </p>
                        <img src={message_passing} alt="Message Passing" className="mx-auto" />
                        <p className="text-right text-xs pb-5">
                            {OS_text.pntm.communication_between_threads.caption2}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.communication_between_threads.para6}
                        </p>
                        {/* sub heading */}
                        <h3 className="text-2xl font-bold pb-5">
                            {OS_text.pntm.communication_between_threads.sub_heading3}
                        </h3>
                        <p className="pb-5">
                            {OS_text.pntm.communication_between_threads.para7}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.communication_between_threads.para8}
                        </p>
                        <img src={pipe} alt="Pipe" className="mx-auto" />
                        <p className="text-right text-xs pb-5">
                            {OS_text.pntm.communication_between_threads.caption3}
                        </p>
                        <p className="pb-5">
                            {OS_text.pntm.communication_between_threads.para9}
                        </p>
                    </motion.div>}
                </div>
            </div>
        </motion.div>
    
    )     
}

export default Ptm