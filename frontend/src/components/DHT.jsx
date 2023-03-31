import styles from "../constants/style"
import { DHT_text } from "../constants/dht"
import { useState } from "react"
import { Communication, Distance, KBuckets, Model, Routing, Visualizing } from "./DHT_topics";
function DHT() {
    const [topic, setTopic] = useState(0);
    return (
        <div className="py-6 bg-white flex justify-center">
            <div className="flex bg-white flex-wrap w-[60%]">
                <div className={`text-center basis-full ${styles.title}`}>Distributed Hash Tables</div>
                <div className="basis-full">{DHT_text.para1}</div>
                <div className="basis-full pb-5">{DHT_text.para2}</div>
                
                <div className="w-full h-[5px] rounded-3xl bg-black my-3"></div>
                <div className="my-10 w-full">
                    {topic == 0 && <Model />}
                    {topic == 1 && <Distance />}
                    {topic == 2 && <Visualizing />}
                    {topic == 3 && <Routing />}
                    {topic == 4 && <KBuckets />}
                    {topic == 5 && <Communication />}
                </div>
            </div>
        </div>
    )
}

export default DHT