import { motion } from "framer-motion"
import { CN_text } from "../../constants/cn"
import styles from "../../constants/style"
function Application() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Application Layer</div>
            <div>
                <ul className="list-disc">
                    <li className="mb-1">{CN_text.application_layer.description[0]}</li>
                    <li className="mb-1">{CN_text.application_layer.description[1]}</li>
                    <li className="mb-1">{CN_text.application_layer.description[2]}</li>
                </ul>
            </div>
            <div className="my-5">
                <div className={styles.subheading}>Application Layer Protocols:</div>
                <ul className="list-disc">
                    <li className="mb-1"><strong>HTTP</strong>
                        <ul className="ml-5 list-[square]">
                            <li className="mb-1">{CN_text.application_layer.protocols.http}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>SMTP</strong>
                        <ul className="ml-5 list-[square]">
                            <li className="mb-1">{CN_text.application_layer.protocols.smtp}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>FTP</strong>
                        <ul className="ml-5 list-[square]">
                            <li className="mb-1">{CN_text.application_layer.protocols.ftp}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>TELNET</strong>
                        <ul className="ml-5 list-[square]">
                            <li className="mb-1">{CN_text.application_layer.protocols.telnet}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>DNS</strong>
                        <ul className="ml-5 list-[square]">
                            <li className="mb-1">{CN_text.application_layer.protocols.dns}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>DHCP</strong>
                        <ul className="ml-5 list-[square]">
                            <li className="mb-1">{CN_text.application_layer.protocols.dhcp}</li>
                        </ul>
                    </li>
                </ul>
            </div>           
        </motion.div>
    )
}
export default Application