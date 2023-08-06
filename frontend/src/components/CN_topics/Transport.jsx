import { motion } from "framer-motion"
import { CN_text } from "../../constants/cn"
import styles from "../../constants/style"
import tcp_header from "../../assets/tcp_header.png"
import handshake from "../../assets/3_way_handshake.png"
function Transport() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Transport Layer</div>
            <div>
                {CN_text.transport_layer.description[0]}
                <div><strong>{CN_text.transport_layer.description[1]}</strong></div>
            </div>
            <div className="my-5">
                <div className={styles.subheading}>Working:</div>
                <ul className="list-disc">
                    <li className="mb-1"><strong>Sender</strong>
                        <ul className="ml-5 list-[square]">
                            <li className="mb-1">{CN_text.transport_layer.working.sender.data}</li>
                            <li className="mb-1">{CN_text.transport_layer.working.sender.multiplexing}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>Receiver</strong>
                        <ul className="ml-5 list-[square]">
                            <li className="mb-1">{CN_text.transport_layer.working.receiver.data}</li>
                            <li className="mb-1">{CN_text.transport_layer.working.receiver.demultiplexing}</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <div className="my-5">
                    <div className={styles.subheading}>TCP Segment:</div>
                </div>
                <div className="flex justify-center w-full">
                    <img src={tcp_header} />
                </div>
                <div className="flex justify-center w-full mb-5">
                    <code className="text-green-500">Source: GeeksForGeeks</code>
                </div>
                <ul className="list-disc">
                    <li className="mb-1"> <strong>Source Port: </strong> {CN_text.transport_layer.segment.source_port}</li>
                    <li className="mb-1"> <strong>Destination Port: </strong> {CN_text.transport_layer.segment.dest_port}</li>
                    <li className="mb-1"> <strong>Sequence Numbeer: </strong> {CN_text.transport_layer.segment.sequence_num}</li>
                    <li className="mb-1"> <strong>Acknowledgement Number: </strong> {CN_text.transport_layer.segment.ack_num}</li>
                    <li className="mb-1"> <strong>Header Length: </strong> {CN_text.transport_layer.segment.header_len}</li>
                    <li className="mb-1"> <strong>Control Flags: </strong> {CN_text.transport_layer.segment.control_flags.data}
                        <ul className="list-[square] ml-5 mb-2">
                            <li className="mb-1"><strong>URG: </strong>{CN_text.transport_layer.segment.control_flags.urg}</li>
                            <li className="mb-1"><strong>ACK: </strong>{CN_text.transport_layer.segment.control_flags.ack}</li>
                            <li className="mb-1"><strong>PSH: </strong>{CN_text.transport_layer.segment.control_flags.psh}</li>
                            <li className="mb-1"><strong>RST: </strong>{CN_text.transport_layer.segment.control_flags.rst}</li>
                            <li className="mb-1"><strong>SYN: </strong>{CN_text.transport_layer.segment.control_flags.syn}</li>
                            <li className="mb-1"><strong>FIN: </strong>{CN_text.transport_layer.segment.control_flags.fin}</li>
                        </ul>
                    </li>
                    <li className="mb-1"> <strong>TCP Window: </strong> {CN_text.transport_layer.segment.tcp_window}</li>
                    <li className="mb-1"> <strong>Checksum: </strong> {CN_text.transport_layer.segment.checksum}</li>
                    <li className="mb-1"> <strong>Urgent Pointer: </strong> {CN_text.transport_layer.segment.urgent}</li>
                    <li className="mb-1"> <strong>Options and Padding: </strong> {CN_text.transport_layer.segment.options_padding}</li>
                </ul>
            </div>
            <div>
                <div className="my-5">
                    <div className={styles.subheading}>TCP 3-Way Handshake:</div>
                </div>
                <div className="flex justify-center w-full">
                    <img src={handshake} />
                </div>
                <div className="flex justify-center w-full mb-5">
                    <code className="text-green-500">Source: GeeksForGeeks</code>
                </div>
                {CN_text.transport_layer.three_way_handshake.description}
                <ul className="list-[square] ml-5">
                    <li><strong><code>STEP 1 (SYN): </code></strong>{CN_text.transport_layer.three_way_handshake.step1}</li>
                    <li><strong><code>STEP 2 (SYN/ACK): </code></strong>{CN_text.transport_layer.three_way_handshake.step2}</li>
                    <li><strong><code>STEP 3 (ACK): </code></strong>{CN_text.transport_layer.three_way_handshake.step3}</li>
                </ul>
            </div>
        </motion.div>
    )
}
export default Transport