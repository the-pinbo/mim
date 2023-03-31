export const CN_text = {
    para1: "Computer Networking is an important field of computer science that deals with connecting various devices together and ensuring that these devices are able to communicate with each other. In the recent years this field of Computer Science has seen rapid development and increased number of users which has led to development of various services and technologies in this domain.",
    para2: "BitTorrent uses a peer-to-peer networking model, in which users connect to each other directly, rather than through a central server. BitTorrent protocol heavily relies on Computer Networking Algorithms and Protocols in order to establish robust connections among the peers.",
    // 
    tcp_5_layer_modal: {
        description: ["The TCP/IP 5-Layer model is a framework used to standardize the communication protocols used on the internet. It is a five-layer model that describes how data is transmitted over a network and how different protocols work together to ensure reliable communication. The model consists of five layers: Application Layer, Transport Layer, Network Layer, Data Link Layer, and the Physical Layer. Each layer performs a specific function in the communication process.", "The TCP/IP 5-Layer model is an essential concept for anyone involved in computer networking as it provides a common language and framework for understanding how data is transmitted over a network.", "Click on the Layers on the left side to get brief description of each layer."],
        physical_layer: {
            description: "The Physical Layer is responsible for the transmission of data over physical media such as cables or wireless signals.",
            protocol: "10BaseT, 802.11",
            protocol_data_unit: "Bits",
            adderssing: "N/A" 
        },
        data_link_layer: {
            description:"The Data Link Layer defines the protocols used to transmit data over a physical network.",
            protocol: "Ethernet, WiFi",
            protocol_data_unit: "Frames",
            adderssing: "MAC Address",
        },
        network_layer: {
            description:"The Network Layer is responsible for routing data packets across multiple networks using IP.",
            protocol:"IP",
            protocol_data_unit:"Datagram",
            adderssing:"IP Address",
        },
        transport_layer: {
            description: "The Transport Layer ensures reliable delivery of data across the network and provides end-to-end communication between applications on different hosts.",
            protocol:"TCP, UPD",
            protocol_data_unit:"Segment",
            adderssing:"Ports",
        },
        application_layer: {
            description: "The Application Layer is responsible for providing services to end-users such as email, file transfer, and web browsing.",
            protocol:"HTTP, SMTP, Many More",
            protocol_data_unit:"Messages",
            adderssing:"N/A",
        },
    },
    // 
    physical_layer: {
        description: "The physical layer sits at the lowset of the 5-layer network stack. The job of the physical layer is to move the individual bits of information from one node to the next. The protocols in this layer are link-dependent and also depend on the actual transmission medium of the link. For Example, Ethernet has many physical layer protocols: one for twisted-pair copper wiree, another for coaxial cable, another for fiber, and so on."
    },
    data_link_layer: {
        description: ["To move a data packet from one node to te next node in the route, the Data Link Layer is employed. The data from the higher layers is passed down to the Link Layer, which delivers the datagram to the next node along the route. Examples of link-layer protocols inculde Ethernet, WiFi, and the cable access network's DOCSIS protocol. Link Layer packets are called Frames.","The Link Layer uses MAC Address to identify cource and destination."],
        mac:{
            description: ["MAC stands for Media Access Control. MAC Address is used to identify data transmission destination on a Collision Domain. It is a 48-bit long globally unique identifier attached to an individual network interface.","Usually MAC Addresses are written in 6 groupings of 2 Hexadecimal Numbers. The first three octets of the MAC are specific to the manufacturer and the last three can be assigned in any way ensuring that the resulting MAC Address is unique."],
            sample: ["00:0a:83",":b1:c0:8e"],
            transmission:{
                unicast: "",
                multicast:"",
                broadcast:"",
            }
        },
        ethernet:{

        }
    },
}