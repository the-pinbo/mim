import { motion } from "framer-motion";
import { CN_text } from "../../constants/cn";
import binaryCode from "../../assets/binary-code.png"
import styles from "../../constants/style";
function Physical() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Physical Layer</div>
            <div className="flex">
                <div className="basis-4/12 flex justify-center">
                    <img src={binaryCode} className="h-48" />
                </div>
                <div className="basis-8/12">
                    {CN_text.physical_layer.description}
                </div>
            </div>
        </motion.div>
    )
}
export default Physical