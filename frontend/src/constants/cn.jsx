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
    data_link_layer: {
        description: {

        }
    }

}