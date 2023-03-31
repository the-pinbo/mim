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
        },
        ethernet:{
            preamble: "Ethernet frame starts with a 7-Bytes Preamble. This is a pattern of alternative 0's and 1's which indicates starting of the frame and allow sender and receiver to establish bit synchronization. Preamble indicates the receiver that frame is coming and allow the receiver to lock onto the data stream before the actual frame begins.",
            sfd: "Start of frame delimiter (SFD) is a 1-Byte field that is always set to 10101011. SFD indicates that upcoming bits are starting the frame, which is the destination address.",
            dest: "This is a 6-Byte field that contains the MAC address of the machine for which data is destined.",
            src: "This is a 6-Byte field that contains the MAC address of the source machine.",
            vlan: "The Ethernet frame can also include a VLAN (Virtual Local Area Network) tag, which is a 4-byte field inserted after the source address and before the EtherType field. This tag allows network administrators to logically separate a physical network into multiple virtual networks, each with its own VLAN ID.",
            ether: "EtherType is a two-octet field in an Ethernet frame. It is used to indicate which protocol is encapsulated in the payload of the frame and is used at the receiving end by the data link layer to determine how the payload is processed.",
            payload: "This is the place where actual data is inserted. Both IP header and data will be inserted here if Internet Protocol is used over Ethernet. The maximum data present may be as long as 1500 Bytes",
            fsc: "Framee Check Sequence is a 4 Byte field. This field contains a 32-bits hash code of data, which is generated over the Destination Address, Source Address, Length, and Data field. If the checksum computed by destination is not the same as sent checksum value, data received is corrupted."
        }
    },
    network_layer: {
        description: "",
        ip: {

        },
        datagram:{
            version:"",
            header_len:"",
            service_type:"",
            total_len:"",
            identification:"",
            null:"",
            dont_frag:"",
            more_frag:"",
            fragment_offset:"",
            ttl:"",
            protocol:"",
            header_checksum:"",
            src_ip:"",
            dest_ip:"",
            options:"",
            padding:""
        },
        subnetting:{

        }
    },
    transport_layer: {
        description: "",
        multi_demulti: {
            multi: {},
            demulti: {},
            ports: {}
        },
        segment: {
            source_port:"",
            dest_port:"",
            sequence_num:"",
            ack_num:"",
            header_len:"",
            empty:"",
            control_flags:"",
            tcp_window:"",
            ckecksum:"",
            urgent:"",
            options:"",
            padding:"",
            payload:""
        },
        flags:{
            urg:{
                code:"",
                text:"",
                data:""
            },
            ack:{
                code:"",
                text:"",
                data:""
            },
            psh:{
                code:"",
                text:"",
                data:""
            },
            rst:{
                code:"",
                text:"",
                data:""
            },
            syn:{
                code:"",
                text:"",
                data:""
            },
            fin:{
                code:"",
                text:"",
                data:""
            },
        },
        three_way_handshake: "",
        four_way_handshake: ""
    },
    application_layer: {
        description: "",
        dns:{

        },
        dhcp:{

        }
    }
}