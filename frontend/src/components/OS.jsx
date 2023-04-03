import styles from "../constants/style"
import { useState, useEffect } from "react"
import { OS_text } from "../constants/os"
import down from "../assets/arrow-down-solid.svg"
import up_down from "../assets/arrows-up-down-solid.svg"
import person from "../assets/person-solid.svg"
import { TypesOfOS, Ptm } from "./OS_topics";
import { Link } from "react-router-dom";
const OS = () => {
    const [topic, setTopic] = useState(0);
    return (
        <div className="py-6 bg-white flex justify-center">
            <div>
                <Link to="/" className={styles.back}>Back</Link>
            </div>
            <div className="flex bg-white flex-wrap w-[60%]">
                <div className={`text-center basis-full ${styles.title}`}>Operating Systems</div>
                <div className="basis-full">{OS_text.para1}</div>
                <table className="table-auto text-center basis-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">
                                <div className="flex justify-center">
                                    <div className="w-3/4 flex justify-center">
                                        <img src={person} alt="" className="w-10" />
                                        User
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tr>
                        <td className="basis-full text-center"><img className={`w-3 mx-auto ${styles.arrow_down}`} src={up_down} alt="down arrow" /></td>
                    </tr>
                    <tbody>
                        <tr>
                            <td className={`${styles.table_data}`}>Application programs</td>
                        </tr>
                        <tr>
                            <td className="basis-full text-center"><img className={`w-3 mx-auto ${styles.arrow_down}`} src={up_down} alt="down arrow" /></td>
                        </tr>
                        <tr>
                            <td className={`${styles.table_data}`}>Operating system</td>
                        </tr>
                        <tr>
                            <td className="basis-full text-center"><img className={`w-3 mx-auto ${styles.arrow_down}`} src={up_down} alt="down arrow" /></td>
                        </tr>
                        <tr>
                            <td className={`${styles.table_data}`}>Computer hardware</td>
                        </tr>
                    </tbody>
                </table>
                <div className="basis-full pb-5 pt-2">{OS_text.para2}</div>
                <div className="basis-full flex justify-center">
                    <div className={`w-max flex justify-center bg-[#00df9a] ${styles.btn_grp}`}>
                        <button onClick={() => setTopic(0)} className={`${topic == 0 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button_start}`}>Types of Operating Systems</button>
                        <button onClick={() => setTopic(1)} className={`${topic == 1 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button_end}`}>Process and Thread Management</button>
                        {/* <button onClick={() => setTopic(2)} className={`${topic == 2 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button}`}>What is an Operating System?</button>
                        <button onClick={() => setTopic(3)} className={`${topic == 3 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button_end}`}>What is an Operating System?</button> */}
                    </div>
                </div>
                <div className="w-full h-[5px] rounded-3xl bg-black my-3"></div>
                <div className="my-10">
                    {topic == 0 && <TypesOfOS/>}
                    {topic == 1 && <Ptm/>}
                </div>
            </div>
        </div>
    )
}

export default OS