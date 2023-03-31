import { motion } from "framer-motion"
import { CN_text } from "../../constants/cn"
import styles from "../../constants/style"
function Data_link() {
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
                    <li>{CN_text.data_link_layer.mac.description[0]}</li>
                    <li>{CN_text.data_link_layer.mac.description[1]}</li>
                </ul>
                <div className="flex justify-center">
                    <span className={`text-center ${styles.subheading_}`}>{CN_text.data_link_layer.mac.sample[0]}</span>
                    <span className={`text-center ${styles.subheading}`}>{CN_text.data_link_layer.mac.sample[1]}</span>
                </div>
            </div>
            <div className="my-5">
                <div className={styles.subheading}>Ethernet Frame:</div>
            </div>
        </motion.div>
    )
}
export default Data_link