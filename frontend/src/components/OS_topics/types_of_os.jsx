import styles from "../../constants/style"
import { useState } from "react"
import { motion } from "framer-motion"
import { CN_text } from "../../constants/cn"
import { OS_text } from "../../constants/os"
import singleprocessor from "../../assets/SingleProcessor.png"
import batchprocessor from "../../assets/batchProcessor.png"
import multiprogram from "../../assets/multiProgram.webp"
import multitasking from "../../assets/multitasking.png"
import OS from "../OS"
function TypesOfOS() {
    const [subtopic, setSubtopic] = useState(0)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-black flex">
                <div className="basis-5/12 flex justify-center">
                    <ul>
                        <li><button onClick={() => setSubtopic(1)} className={`${subtopic == 1 ? "bg-[#CCDDB7]" : "bg-[#88d18a]"} ${subtopic == 1 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Single process Operating System</button></li>
                        <li><button onClick={() => setSubtopic(2)} className={`${subtopic == 2 ? "bg-[#CCDDB7]" : "bg-[#88d18a]"} ${subtopic == 2 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Batch-processing Operating System</button></li>
                        <li><button onClick={() => setSubtopic(3)} className={`${subtopic == 3 ? "bg-[#CCDDB7]" : "bg-[#88d18a]"} ${subtopic == 3 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Multi-programming Operating System</button></li>
                        <li><button onClick={() => setSubtopic(4)} className={`${subtopic == 4 ? "bg-[#CCDDB7]" : "bg-[#88d18a]"} ${subtopic == 4 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Multitasking Operating System</button></li>
                        <li><button onClick={() => setSubtopic(5)} className={`${subtopic == 5 ? "bg-[#CCDDB7]" : "bg-[#88d18a]"} ${subtopic == 5 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Multi-processing operating system</button></li>
                        <li><button onClick={() => setSubtopic(6)} className={`${subtopic == 6 ? "bg-[#CCDDB7]" : "bg-[#88d18a]"} ${subtopic == 6 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Real-time operating system</button></li>
                        <li><button onClick={() => setSubtopic(7)} className={`${subtopic == 7 ? "bg-[#CCDDB7]" : "bg-[#88d18a]"} ${subtopic == 7 ? "border-2 border-black" : "border-white"} ${styles.button_tcp}`}>Distributed operating system</button></li>
                    </ul>
                </div>
                <div className="basis-7/12">
                    {subtopic == 0 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}><div className="my-2">
                            {OS_text.types_of_os.main.para1}
                        </div>
                        <div className="my-2">
                            {OS_text.types_of_os.main.para2}
                            </div>
                        <div className="my-2">
                            {OS_text.types_of_os.main.para3}
                            </div>
                        <div className="my-2">
                            {OS_text.types_of_os.main.para4}
                            </div>
                        </motion.div>}

                    {subtopic != 0 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex justify-end">
                            <button onClick={() => setSubtopic(0)} className={styles.back}>Back</button>
                        </motion.div>
                    )}
                    {subtopic == 1 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <p className="pb-5">
                            {OS_text.types_of_os.single_process.para1}
                        </p>
                        <p className="pb-5">
                            {OS_text.types_of_os.single_process.para2}
                        </p>
                        <img src={singleprocessor} alt="single processor" className="mx-auto" />
                        <p className="text-right text-xs pb-5">
                            {OS_text.types_of_os.single_process.caption}
                        </p>

                        <p className="pb-5">
                            {OS_text.types_of_os.single_process.para3}
                        </p>
                        <p className="pb-5">
                            {OS_text.types_of_os.single_process.para4}
                        </p>
                        <p className="pb-5">
                            {OS_text.types_of_os.single_process.para5}
                        </p>
                    </motion.div>}

                    {subtopic == 2 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <p className="pb-5">
                            {OS_text.types_of_os.batch_process.para1}
                        </p>
                        <p className="pb-5">
                            {OS_text.types_of_os.batch_process.para2}
                        </p>
                        <p className="pb-5">
                            {OS_text.types_of_os.batch_process.para3}
                        </p>
                        <img src={batchprocessor} alt="batch processor" className="mx-auto" />
                        <p className="text-right text-xs pb-5">
                            {OS_text.types_of_os.batch_process.caption}
                        </p>
                        <p className="pb-5">
                            {OS_text.types_of_os.batch_process.para4}
                        </p>
                        <p className="pb-5">
                            {OS_text.types_of_os.batch_process.para5}
                        </p>
                    </motion.div>}

                    {subtopic == 3 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <p className="pb-5">
                            {OS_text.types_of_os.multi_program.para1}
                        </p>
                        <p className="pb-5">
                            {OS_text.types_of_os.multi_program.para2}
                        </p>
                        <img src={multiprogram} alt="multi processor" className="mx-auto" />
                        <p className="text-right text-xs pb-5">
                            {OS_text.types_of_os.multi_program.caption}
                        </p>
                        <p className="pb-5">
                            {OS_text.types_of_os.multi_program.para3}
                        </p>
                        <p className="pb-5">
                            {OS_text.types_of_os.multi_program.para4}
                        </p>
                        <p className="pb-5">
                            {OS_text.types_of_os.multi_program.para5}
                        </p>
                    </motion.div>}

                    {subtopic == 4 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <p className="pb-5">
                            {OS_text.types_of_os.multi_tasking.para1}
                        </p>
                        <p className="pb-5">
                            {OS_text.types_of_os.multi_tasking.para2}
                        </p>
                        <img src={multitasking} alt="multi processor" className="mx-auto" />
                        <p className="text-right text-xs pb-5">
                            {OS_text.types_of_os.multi_tasking.caption}
                        </p>
                        <p className="pb-5">
                            {OS_text.types_of_os.multi_tasking.para3}
                        </p>
                        <p className="pb-5">
                            {OS_text.types_of_os.multi_tasking.para4}
                        </p>

                    </motion.div>}

                    {subtopic == 5 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        
                    </motion.div>}
                </div>
            </div>
        </motion.div>
    )
}
export default TypesOfOS