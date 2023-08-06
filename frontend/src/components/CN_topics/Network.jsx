import { motion } from "framer-motion"
import { CN_text } from "../../constants/cn"
import styles from "../../constants/style"
import ip_header from "../../assets/ip_header.png"
function Network() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Network Layer</div>
            <div>
                {CN_text.network_layer.description[0]}
                <div><strong>{CN_text.network_layer.description[1]}</strong></div>
            </div>
            <div className="my-5">
                <div className={styles.subheading}>IP Address:</div>
                <ul className="list-disc">
                    <li className="mb-1">{CN_text.network_layer.ip.description[0]}</li>
                    <li className="mb-1">{CN_text.network_layer.ip.description[1]}</li>
                    <li className="mb-1">{CN_text.network_layer.ip.description[2]}</li>
                    <li className="mb-1">{CN_text.network_layer.ip.description[3]}</li>
                </ul>
            </div>
            <div className="my-5">
                <div className={styles.subheading}>IPv4 Datagram Header:</div>
            </div>
            <div className="flex justify-center w-full">
                <img src={ip_header} />
            </div>
            <div className="flex justify-center w-full mb-5">
                <code className="text-green-500">Source: GeeksForGeeks</code>
            </div>
            <ul className="list-disc">
                <li className="mb-1"> <strong>Version: </strong> {CN_text.network_layer.datagram.version}</li>
                <li className="mb-1"> <strong>Header Length: </strong> {CN_text.network_layer.datagram.header_len}</li>
                <li className="mb-1"> <strong>Service Type: </strong> {CN_text.network_layer.datagram.service_type}</li>
                <li className="mb-1"> <strong>Total Length: </strong> {CN_text.network_layer.datagram.total_len}</li>
                <li className="mb-1"> <strong>Identification: </strong> {CN_text.network_layer.datagram.identification}</li>
                <li className="mb-1"> <strong>Flags: </strong> {CN_text.network_layer.datagram.flags}</li>
                <li className="mb-1"> <strong>Fragment Offest: </strong> {CN_text.network_layer.datagram.fragment_offset}</li>
                <li className="mb-1"> <strong>TTL: </strong> {CN_text.network_layer.datagram.ttl}</li>
                <li className="mb-1"> <strong>Protocol: </strong> {CN_text.network_layer.datagram.protocol}</li>
                <li className="mb-1"> <strong>Header Checksum: </strong> {CN_text.network_layer.datagram.header_checksum}</li>
                <li className="mb-1"> <strong>Source IP: </strong> {CN_text.network_layer.datagram.src_ip}</li>
                <li className="mb-1"> <strong>Destination IP: </strong> {CN_text.network_layer.datagram.dest_ip}</li>
                <li className="mb-1"> <strong>Options: </strong> {CN_text.network_layer.datagram.options}</li>
                <li className="mb-1"> <strong>Padding: </strong> {CN_text.network_layer.datagram.padding}</li>
            </ul>
            <div className="mt-8 mb-5">
                <div className={styles.subheading}>Subnetting:</div>
                <ul className="list-disc">
                    <li className="mb-1">{CN_text.network_layer.subnetting.description}</li>
                    <div className="flex w-full">
                        <div className="basis-1/2">
                            <div className="flex justify-center">
                                <span className={`text-center ${styles.subheading_}`}>{CN_text.network_layer.subnetting.ip_without_subnet[0]}</span>
                                <span className={`text-center ${styles.subheading}`}>{CN_text.network_layer.subnetting.ip_without_subnet[1]}</span>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-center text-blue-500 text-sm" >(Network ID)</span>
                                <span className="text-center text-[#00df9a] text-sm" >(Host ID)</span>
                            </div>
                            <code className="flex justify-center">
                                Without Subnetting
                            </code>
                        </div>
                        <div className="basis-1/2">
                            <div className="flex justify-center">
                                <span className={`text-center ${styles.subheading_}`}>{CN_text.network_layer.subnetting.ip_with_subnet[0]}</span>
                                <span className={`text-center ${styles.subheading}`}>{CN_text.network_layer.subnetting.ip_with_subnet[1]}</span>
                                <span className={`text-center ${styles.subheading_}`}>{CN_text.network_layer.subnetting.ip_with_subnet[2]}</span>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-center text-blue-500 text-sm" >(Network ID)</span>
                                <span className="text-center text-[#00df9a] text-sm" >(Subnet ID)</span>
                                <span className="text-center text-blue-500 text-sm" >(Host ID)</span>
                            </div>
                            <code className="flex justify-center">
                                With Subnetting
                            </code>
                        </div>
                    </div>
                    <li className="mb-1"><strong>Subnet Mask: </strong>
                        <ul className="list-square ml-5">
                            <li className="mb-1">{CN_text.network_layer.subnetting.subnet_mask.description[0]}</li>
                            <li className="mb-1">{CN_text.network_layer.subnetting.subnet_mask.description[1]}</li>
                            <div className="flex justify-center">
                                <span className={`text-center ${styles.subheading}`}>{CN_text.network_layer.subnetting.subnet_mask.sample}</span>
                            </div>
                            <li className="mb-1">
                                <div className="flex justify-center">
                                    <div className="flex justify-center w-[50%]">
                                        <span className="basis-1/5 text-center"> <strong><code>IP</code></strong></span>
                                        <span className="basis-1/5 text-center">{CN_text.network_layer.subnetting.subnet_mask.ip[0]}</span>
                                        <span className="basis-1/5 text-center">{CN_text.network_layer.subnetting.subnet_mask.ip[1]}</span>
                                        <span className="basis-1/5 text-center">{CN_text.network_layer.subnetting.subnet_mask.ip[2]}</span>
                                        <span className="basis-1/5 text-center">{CN_text.network_layer.subnetting.subnet_mask.ip[3]}</span>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="flex justify-center w-[50%]">
                                        <span className="basis-1/5 text-center"> <strong><code>IP(binary)</code></strong></span>
                                        <span className="basis-1/5 text-center">{CN_text.network_layer.subnetting.subnet_mask.ip_bin[0]}</span>
                                        <span className="basis-1/5 text-center">{CN_text.network_layer.subnetting.subnet_mask.ip_bin[1]}</span>
                                        <span className="basis-1/5 text-center">{CN_text.network_layer.subnetting.subnet_mask.ip_bin[2]}</span>
                                        <span className="basis-1/5 text-center">{CN_text.network_layer.subnetting.subnet_mask.ip_bin[3]}</span>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="flex justify-center w-[50%]">
                                        <span className="basis-1/5 text-center"> <strong><code>Subnet Mask</code></strong></span>
                                        <span className="basis-1/5 text-center text-blue-500">{CN_text.network_layer.subnetting.subnet_mask.subnet_mask[0]}</span>
                                        <span className="basis-1/5 text-center text-blue-500">{CN_text.network_layer.subnetting.subnet_mask.subnet_mask[1]}</span>
                                        <span className="basis-1/5 text-center text-blue-500">{CN_text.network_layer.subnetting.subnet_mask.subnet_mask[2]}</span>
                                        <span className="basis-1/5 text-center text-[#00df9a]">{CN_text.network_layer.subnetting.subnet_mask.subnet_mask[3]}</span>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="flex justify-center w-[50%]">
                                        <span className="basis-1/5 text-center"> <strong><code></code></strong></span>
                                        <span className="basis-3/5 text-center text-blue-500"> <strong><code>Network ID Containing Part</code></strong></span>
                                        <span className="basis-1/5 text-center text-[#00df9a]"> <strong><code>Host ID</code></strong></span>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="flex justify-center w-[50%]">
                                        <span className="basis-5/5 text-center"> <strong><code>CIDR Notation: {CN_text.network_layer.subnetting.subnet_mask.cidr}</code></strong></span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}
export default Network