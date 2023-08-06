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
        description: ["To move a data packet from one node to te next node in the route, the Data Link Layer is employed. The data from the higher layers is passed down to the Link Layer, which delivers the datagram to the next node along the route. Examples of link-layer protocols inculde Ethernet, WiFi, and the cable access network's DOCSIS protocol. Link Layer packets are called Frames.","The Link Layer uses MAC Address to identify source and destination."],
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
        description: ["In the five-layer TCP/IP model of computer networking, the network layer is layer 3. The network layer is responsible for packet forwarding including routing through intermediate routers.Within the service layering semantics of the TCP/IP network architecture, the network layer responds to service requests from the transport layer and issues service requests to the data link layer.","The Network Layer uses IP Address to identify source and destination."],
        ip: {
            description:["An IP address is a unique address that identifies a device on the internet or a local network. IP stands for 'Internet Protocol,' which is the set of rules governing the format of data sent via the internet or local network.","IP Addresses are 32-bit long and are represented as 4 octets with each octet described in binary.","IP Addresses are destributed to organizations rather than being hardware specific.","IP Addresses belong to a network and not the device itself. A device can be assigned different IP Address each time it connects to the network."],
            sample:"192.168.1.1"
        },
        datagram:{
            version:"Version of the IP protocol (4 bits), which is 4 for IPv4.",
            header_len:"IP header length (4 bits), which is the number of 32 bit words in the header. The minimum value for this field is 5 and the maximum is 15.",
            service_type:"Low Delay, High Throughput, Reliability (8 bits).",
            total_len:"Length of header + Data (16 bits), which has a minimum value 20 bytes and the maximum is 65,535 bytes.",
            identification:"Unique Packet Id for identifying the group of fragments of a single IP datagram (16 bits).",
            flags: "3 flags of 1 bit each : reserved bit (must be zero), do not fragment flag, more fragments flag (same order).",
            fragment_offset:"Represents the number of Data Bytes ahead of the particular fragment in the particular Datagram. Specified in terms of number of 8 bytes, which has the maximum value of 65,528 bytes.",
            ttl:"Datagram’s lifetime (8 bits), It prevents the datagram to loop through the network by restricting the number of Hops taken by a Packet before delivering to the Destination.",
            protocol:"Name of the protocol to which the data is to be passed (8 bits).",
            header_checksum:"16 bits header checksum for checking errors in the datagram header.",
            src_ip:"32 bits IP address of the sender.",
            dest_ip:"32 bits IP address of the receiver.",
            options:"Optional information such as source route, record route. Used by the Network administrator to check whether a path is working or not.",
            padding:"Padding to align the header."
        },
        subnetting:{
            description: "Subnetting is the splitting of a large network into many smaller sub-networks/subnets",
            ip_without_subnet: [" 10.0.","1.10 "],
            ip_with_subnet: ["10.0.","1.","10"],
            subnet_mask: {
                description:["Subnet IDs are calculated via what is known as a subnet mask","A subnet mask is a 32-bit number created by setting host bits to all 0s and setting network bits to all 1s. In this way, the subnet mask separates the IP address into the network and host addresses."],
                ip: ["9","100","100","100"],
                ip_bin: ["00001001","11111111","11111111","00000000"],
                subnet_mask: ["11111111","11111111","11111111","00000000"],
                cidr: "9.100.100.100/24"
            }
        }
    },
    transport_layer: {
        description: ["Transport Layer is the second layer in the TCP/IP model. It is an end-to-end layer used to deliver messages to a host. It is termed an end-to-end layer because it provides a point-to-point connection rather than hop-to- hop, between the source host and destination host to deliver the services reliably. ","The unit of data encapsulation in the Transport Layer is a segment."],
        working: {
            sender: {
                data: "The transport layer receives data (message) from the Application layer and then performs Segmentation, divides the actual message into segments, adds source and destination's port numbers into the header of the segment, and transfers the message to the Network layer.",
                multiplexing: "Multiplexing(many to one) is when data is acquired from number of processes from the sender and merged into one packet along with headers and sent as a single packet. Multiplexing allows simultaneous use of different processes over a network that is running on a host.  The processes are differentiated by their port numbers."
            },
            receiver: {
                data: "The transport layer receives data from the Network layer, reassembles the segmented data, reads its header, identifies the port number, and forwards the message to the appropriate port in the Application layer.",
                demultiplexing: "Demultiplexing(one to many) is required at the receiver side when the message is distributed into different processes. Transport receives the segments of data from the network layer distributes and delivers it to the appropriate process running on the receiver's machine."
            },
        },
        segment: {
            source_port:"A 16-bit field that holds the port address of the application that is sending the data segment.",
            dest_port:"A 16-bit field that holds the port address of the application in the host that is receiving the data segment. ",
            sequence_num:"A 32-bit field that holds the sequence number, i.e, the byte number of the first byte that is sent in that particular segment. It is used to reassemble the message at the receiving end of the segments that are received out of order.",
            ack_num:"A 32-bit field that holds the acknowledgement number, i.e, the byte number that the receiver expects to receive next. It is an acknowledgement for the previous bytes being received successfully.",
            header_len:"This is a 4-bit field that indicates the length of the TCP header by a number of 4-byte words in the header, i.e if the header is 20 bytes(min length of TCP header), then this field will hold 5 (because 5 x 4 = 20) and the maximum length: 60 bytes, then it'll hold the value 15(because 15 x 4 = 60). Hence, the value of this field is always between 5 and 15.",
            control_flags:{
                data: "These are 6 1-bit control bits that control connection establishment, connection termination, connection abortion, flow control, mode of transfer etc.",
                urg: "Urgent pointer is valid",
                ack: "Acknowledgement number is valid( used in case of cumulative acknowledgement)",
                psh: "Request for push",
                rst: "Reset the connection",
                syn: "Synchronize sequence numbers",
                fin: "Terminate the connection",
            },
            tcp_window:"This field tells the window size of the sending TCP in bytes.",
            checksum:"This field holds the checksum for error control. It is mandatory in TCP as opposed to UDP. ",
            urgent:"This field (valid only if the URG control flag is set) is used to point to data that is urgently required that needs to reach the receiving process at the earliest. The value of this field is added to the sequence number to get the byte number of the last urgent byte. ",
            options_padding:"Additional options that can be configured for the segment and padding to align the segment",
            payload:"Data that is sent from the Application Layer"
        },
        three_way_handshake: {
            description: "The three-way handshake is a process used in the Transmission Control Protocol (TCP) to establish a connection between two devices. It is a key mechanism that ensures reliable and ordered communication between devices. The process involves the following three steps:",
            step1: " In the first step, the client wants to establish a connection with a server, so it sends a segment with SYN(Synchronize Sequence Number) which informs the server that the client is likely to start communication and with what sequence number it starts segments with.",
            step2: "Server responds to the client request with SYN-ACK signal bits set. Acknowledgement(ACK) signifies the response of the segment it received and SYN signifies with what sequence number it is likely to start the segments with.",
            step3: "In the final part client acknowledges the response of the server and they both establish a reliable connection with which they will start the actual data transfer."
        },
    },
    application_layer: {
        description: ["The application layer is the highest layer in the TCP/IP model and is responsible for providing services and protocols that enable users to access and utilize network resources. It is the layer that interacts with the user and the user's applications.","The application layer provides a range of services, including file transfer, email, remote login, and access to web pages.","One of the key features of the application layer is that it is independent of the underlying network. This means that applications can be developed without worrying about the details of the network infrastructure. The application layer abstracts away the complexity of the lower layers, providing a consistent interface for application development."],
        protocols:{
            http: "Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes. HTTP follows a classical client-server model, with a client opening a connection to make a request, then waiting until it receives a response. HTTP is a stateless protocol, meaning that the server does not keep any data (state) between two requests.",
            smtp:"It stands for Simple Mail Transfer Protocol. It is a part of the TCP/IP protocol. Using a process called “store and forward,” SMTP moves your email on and across networks. It works closely with something called the Mail Transfer Agent (MTA) to send your communication to the right computer and email inbox. The Port number for SMTP is 25.",
            ftp:"FTP stands for file transfer protocol. It is the protocol that actually lets us transfer files. It can facilitate this between any two machines using it. But FTP is not just a protocol but it is also a program.FTP promotes sharing of files via remote computers with reliable and efficient data transfer. The Port number for FTP is 20 for data and 21 for control.",
            telnet:"Telnet stands for the TELetype NETwork. It helps in terminal emulation. It allows Telnet clients to access the resources of the Telnet server. It is used for managing files on the internet. It is used for the initial setup of devices like switches. The telnet command is a command that uses the Telnet protocol to communicate with a remote device or system. Port number of telnet is 23.",
            dns:"It stands for Domain Name System. Every time you use a domain name, therefore, a DNS service must translate the name into the corresponding IP address. For example, the domain name www.abc.com might translate to 198.105.232.4. The Port number for DNS is 53.",
            dhcp:"It stands for Dynamic Host Configuration Protocol (DHCP). It gives IP addresses to hosts. There is a lot of information a DHCP server can provide to a host when the host is registering for an IP address with the DHCP server. Port number for DHCP is 67, 68. "
        },
    }
}