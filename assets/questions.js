/*
  Final Revision question bank.
  mcq: q = question, o = four options, a = answer letter, e = explanation, r = topic to review.
  structured: q = question, m = marks, a = model answer, r = topic to review.
  Answers use a small markup: blank line = new paragraph, ``` fences = code, "- " = bullet, `code`, **bold**.
*/
window.QUESTIONS = {
 "mcq": [
  {
   "title": "Unit 1: Data Communication Fundamentals",
   "items": [
    {
     "q": "Which of these is NOT one of the five components of a data communication system?",
     "o": [
      "The transmission medium",
      "A firewall",
      "The protocol",
      "The sender"
     ],
     "a": "b",
     "e": "The five components are message, sender, receiver, medium and protocol. A firewall is a security device, useful but not a required component.",
     "r": "1.2"
    },
    {
     "q": "A walkie-talkie lets both people talk, but only one at a time. Which data flow is this?",
     "o": [
      "Simplex",
      "Half-duplex",
      "Multiplexing",
      "Full-duplex"
     ],
     "a": "b",
     "e": "Half-duplex is two-way, but only one direction at a time. Full-duplex (a phone call) is both directions at once.",
     "r": "1.3"
    },
    {
     "q": "Which of these is an example of simplex transmission?",
     "o": [
      "A walkie-talkie conversation",
      "A video call on a laptop",
      "A telephone call",
      "A broadcast TV transmitter sending to televisions"
     ],
     "a": "d",
     "e": "Simplex is one direction only: the TV receives but never sends back to the transmitter.",
     "r": "1.3"
    },
    {
     "q": "Why are digital signals preferred to analog signals for sending data?",
     "o": [
      "They resist noise because a repeater can regenerate a clean 0 or 1",
      "They always travel further without repeaters",
      "They need no cable at all",
      "They never need to be encoded"
     ],
     "a": "a",
     "e": "A digital signal has a small number of levels, so equipment can decide which level was sent and regenerate it exactly, removing accumulated noise.",
     "r": "1.4"
    },
    {
     "q": "Which modern interface uses serial transmission?",
     "o": [
      "An old parallel printer (LPT) port",
      "A 32-bit parallel internal bus",
      "USB",
      "An IDE ribbon cable"
     ],
     "a": "c",
     "e": "USB, SATA, PCI Express and Ethernet are serial. At high speeds, serial links avoid the timing skew between the wires of a parallel cable.",
     "r": "1.5"
    },
    {
     "q": "Which transmission medium is immune to electromagnetic interference and suits long, fast backbone links?",
     "o": [
      "Wi-Fi radio",
      "Fibre optic cable",
      "Coaxial cable",
      "Cat6 UTP"
     ],
     "a": "b",
     "e": "Fibre carries pulses of light, so electrical interference does not affect it, and it carries high speeds over long distances.",
     "r": "1.6"
    },
    {
     "q": "Ignoring overheads, how long does a 20 MB file take to send over a 40 Mbps link?",
     "o": [
      "8 seconds",
      "4 seconds",
      "2 seconds",
      "0.5 seconds"
     ],
     "a": "b",
     "e": "Convert bytes to bits: 20 MB × 8 = 160 Mb. Then 160 Mb ÷ 40 Mbps = 4 s.",
     "r": "1.7"
    },
    {
     "q": "What does latency measure?",
     "o": [
      "The maximum data rate of a link",
      "The delay for data to travel from source to destination",
      "The data rate actually achieved",
      "The number of corrupted bits"
     ],
     "a": "b",
     "e": "Latency is delay, measured in milliseconds (for example by `ping`). Bandwidth is the maximum rate and throughput is the rate actually achieved.",
     "r": "1.7"
    },
    {
     "q": "An Ethernet frame ends with a 32-bit value that the receiver uses to detect corruption. What is it?",
     "o": [
      "The IP header checksum",
      "A digital signature",
      "A CRC (the frame check sequence)",
      "A single parity bit"
     ],
     "a": "c",
     "e": "The Ethernet frame check sequence is a CRC-32. The receiver recalculates it and discards frames that do not match.",
     "r": "1.8"
    },
    {
     "q": "Which switching method reserves a dedicated path for the whole conversation, like the traditional telephone network?",
     "o": [
      "Store-and-forward packet routing",
      "Circuit switching",
      "Frequency-division multiplexing",
      "Packet switching"
     ],
     "a": "b",
     "e": "Circuit switching sets up and reserves a path. The Internet uses packet switching, where each packet is routed independently and links are shared.",
     "r": "1.9"
    }
   ]
  },
  {
   "title": "Unit 2: Computer Network Fundamentals",
   "items": [
    {
     "q": "A network that covers a single office building is a:",
     "o": [
      "WAN",
      "MAN",
      "LAN",
      "PAN"
     ],
     "a": "c",
     "e": "A Local Area Network covers a small area such as a room, building or campus.",
     "r": "2.2"
    },
    {
     "q": "Which type of network connects devices around one person, such as a phone and wireless earbuds?",
     "o": [
      "PAN",
      "MAN",
      "LAN",
      "WAN"
     ],
     "a": "a",
     "e": "A Personal Area Network (often Bluetooth) covers a few metres around one person.",
     "r": "2.2"
    },
    {
     "q": "In which model do dedicated computers provide services that other computers request?",
     "o": [
      "Mesh",
      "Client-server",
      "Peer-to-peer",
      "Ring"
     ],
     "a": "b",
     "e": "In client-server networks, servers provide shared services centrally; in peer-to-peer every computer can share and request.",
     "r": "2.3"
    },
    {
     "q": "In a star topology, what happens if the cable to one PC fails?",
     "o": [
      "All traffic reverses direction",
      "Only that PC loses its connection",
      "The whole network stops working",
      "The central switch shuts down"
     ],
     "a": "b",
     "e": "Each device has its own link to the central switch, so one failed cable affects only that device. The switch itself is the single point of failure.",
     "r": "2.4"
    },
    {
     "q": "Which topology gives the most redundancy but needs the largest number of links?",
     "o": [
      "Full mesh",
      "Ring",
      "Star",
      "Bus"
     ],
     "a": "a",
     "e": "In a full mesh every device links to every other, needing n(n−1)/2 links, so it is expensive but very fault tolerant.",
     "r": "2.4"
    },
    {
     "q": "A company website that only its own staff can reach is an example of an:",
     "o": [
      "Extranet",
      "Intranet",
      "Open Wi-Fi hotspot",
      "Internet exchange point"
     ],
     "a": "b",
     "e": "An intranet is a private network using Internet technologies for members only. An extranet opens part of it to partners.",
     "r": "2.5"
    },
    {
     "q": "Which IEEE standard family defines Wi-Fi?",
     "o": [
      "802.1Q",
      "802.15",
      "802.11",
      "802.3"
     ],
     "a": "c",
     "e": "802.11 is Wi-Fi. 802.3 is Ethernet, 802.1Q is VLAN tagging and 802.15 covers personal area networks.",
     "r": "2.6"
    },
    {
     "q": "Why does Wi-Fi use CSMA/CA rather than CSMA/CD?",
     "o": [
      "Wireless devices cannot detect collisions while they are transmitting",
      "CSMA/CD is only used for fibre",
      "CSMA/CA is faster on cables",
      "Wi-Fi never has collisions"
     ],
     "a": "a",
     "e": "A radio cannot listen for a collision while it is sending, so Wi-Fi tries to avoid collisions instead of detecting them.",
     "r": "2.6"
    },
    {
     "q": "What is the maximum UTP segment length for Ethernet?",
     "o": [
      "100 metres",
      "10 metres",
      "2 kilometres",
      "500 metres"
     ],
     "a": "a",
     "e": "Twisted-pair Ethernet runs are limited to 100 m; longer distances need a switch in between or fibre.",
     "r": "2.7"
    },
    {
     "q": "Which cable is used to connect a PC to a switch?",
     "o": [
      "Console (rollover) cable",
      "Crossover cable",
      "Coaxial cable",
      "Straight-through cable"
     ],
     "a": "d",
     "e": "Unlike devices (PC to switch) use straight-through cables. Crossover cables connect like devices, though Auto-MDIX makes this automatic on modern ports.",
     "r": "2.7"
    },
    {
     "q": "In the three-layer hierarchical design, at which layer do end devices connect?",
     "o": [
      "Transport layer",
      "Core layer",
      "Distribution layer",
      "Access layer"
     ],
     "a": "d",
     "e": "End devices plug into the access layer; distribution applies policy and routes between VLANs; the core is the fast backbone.",
     "r": "2.8"
    },
    {
     "q": "Which network service automatically gives a PC its IP address, mask, gateway and DNS server?",
     "o": [
      "SNMP",
      "DNS",
      "DHCP",
      "NTP"
     ],
     "a": "c",
     "e": "The Dynamic Host Configuration Protocol leases addresses and settings to clients automatically.",
     "r": "2.9"
    }
   ]
  },
  {
   "title": "Unit 3: Network Devices and Protocols",
   "items": [
    {
     "q": "Which device forwards frames using MAC addresses?",
     "o": [
      "Router",
      "Modem",
      "Hub",
      "Switch"
     ],
     "a": "d",
     "e": "A switch is a layer 2 device that forwards frames using its MAC address table. A router forwards packets using IP addresses.",
     "r": "3.1"
    },
    {
     "q": "Which device separates broadcast domains?",
     "o": [
      "Hub",
      "Switch",
      "Router",
      "Repeater"
     ],
     "a": "c",
     "e": "Routers do not forward broadcasts, so each router interface is a separate broadcast domain. Switches separate collision domains only.",
     "r": "3.1"
    },
    {
     "q": "A switch receives a frame for a MAC address that is not in its MAC table. What does it do?",
     "o": [
      "Forwards the frame only to the router",
      "Sends the frame back to the sender",
      "Floods the frame out of every port except the one it arrived on",
      "Drops the frame"
     ],
     "a": "c",
     "e": "Unknown destinations are flooded; when the destination replies, the switch learns its port and forwards later frames directly.",
     "r": "3.1"
    },
    {
     "q": "Which Cisco command saves the configuration so that it survives a reboot?",
     "o": [
      "`copy running-config startup-config`",
      "`reload`",
      "`erase startup-config`",
      "`show startup-config`"
     ],
     "a": "a",
     "e": "The running configuration is in RAM; copying it to the startup configuration stores it in NVRAM.",
     "r": "3.2.3"
    },
    {
     "q": "Besides `transport input ssh`, what does a Cisco switch need before it accepts SSH logins?",
     "o": [
      "Only an enable secret",
      "A DHCP pool",
      "A domain name, RSA keys and a local user, with `login local` on the VTY lines",
      "A console password"
     ],
     "a": "c",
     "e": "SSH needs RSA keys (which need a hostname and domain name) and a username to authenticate against with `login local`.",
     "r": "3.2.2"
    },
    {
     "q": "What does `switchport mode trunk` do on a switch port?",
     "o": [
      "Lets the port carry several VLANs using 802.1Q tags",
      "Shuts the port down",
      "Turns the port into a routed interface",
      "Puts the port into VLAN 1 only"
     ],
     "a": "a",
     "e": "A trunk carries traffic for many VLANs between switches (or to a router), tagging each frame with its VLAN ID.",
     "r": "3.2.4"
    },
    {
     "q": "Which Cisco command gives a one-line summary of each interface with its IP address and up/down status?",
     "o": [
      "`show ip interface brief`",
      "`show mac address-table`",
      "`show vlan brief`",
      "`show version`"
     ],
     "a": "a",
     "e": "`show ip interface brief` is the quickest check of addressing and interface status.",
     "r": "3.2.6"
    },
    {
     "q": "Which protocol is connection-oriented and provides reliable, ordered delivery?",
     "o": [
      "ICMP",
      "IP",
      "TCP",
      "UDP"
     ],
     "a": "c",
     "e": "TCP sets up a connection, numbers segments, acknowledges them and retransmits lost data. UDP has none of this.",
     "r": "3.3.1"
    },
    {
     "q": "What is the correct order of the TCP three-way handshake?",
     "o": [
      "ACK, SYN, FIN",
      "SYN, SYN-ACK, ACK",
      "SYN, FIN, ACK",
      "SYN, ACK, SYN-ACK"
     ],
     "a": "b",
     "e": "The client sends SYN, the server answers SYN-ACK and the client confirms with ACK.",
     "r": "3.3.1"
    },
    {
     "q": "What is the correct order of the DHCP messages?",
     "o": [
      "Request, Offer, Discover, Acknowledge",
      "Discover, Offer, Request, Acknowledge",
      "Offer, Discover, Acknowledge, Request",
      "Discover, Request, Offer, Acknowledge"
     ],
     "a": "b",
     "e": "DORA: the client broadcasts Discover, servers Offer, the client Requests one offer and the server Acknowledges.",
     "r": "3.3.2"
    },
    {
     "q": "At which OSI layer do routers and IP addresses operate?",
     "o": [
      "Layer 7, Application",
      "Layer 2, Data link",
      "Layer 3, Network",
      "Layer 4, Transport"
     ],
     "a": "c",
     "e": "The network layer handles logical (IP) addressing and routing between networks.",
     "r": "3.4.1"
    },
    {
     "q": "What is the PDU at the data link layer called?",
     "o": [
      "Bit",
      "Packet",
      "Segment",
      "Frame"
     ],
     "a": "d",
     "e": "Transport uses segments, network uses packets, data link uses frames and physical uses bits.",
     "r": "3.4.3"
    },
    {
     "q": "The TCP/IP model's Application layer corresponds to which OSI layers?",
     "o": [
      "Application, Presentation and Session (layers 5 to 7)",
      "Data link and Physical",
      "Transport and Network",
      "Application only"
     ],
     "a": "a",
     "e": "TCP/IP combines the top three OSI layers into one Application layer.",
     "r": "3.4.2"
    },
    {
     "q": "Why is Telnet considered insecure?",
     "o": [
      "It uses UDP",
      "It cannot connect to routers",
      "It sends everything, including passwords, as plain text",
      "It only works on Windows"
     ],
     "a": "c",
     "e": "Anyone capturing the traffic can read Telnet passwords. SSH (port 22) replaces it with encryption.",
     "r": "3.3"
    }
   ]
  },
  {
   "title": "Unit 4: Addressing Network Devices",
   "items": [
    {
     "q": "How many bits long is a MAC address?",
     "o": [
      "64",
      "32",
      "48",
      "128"
     ],
     "a": "c",
     "e": "A MAC address is 48 bits, written as 12 hexadecimal digits; the first 24 bits are the manufacturer's OUI.",
     "r": "4.1"
    },
    {
     "q": "Which protocol finds the MAC address that belongs to a known IPv4 address on the local network?",
     "o": [
      "ICMP",
      "DHCP",
      "DNS",
      "ARP"
     ],
     "a": "d",
     "e": "ARP broadcasts \"who has this IP?\" and the owner replies with its MAC address.",
     "r": "4.1"
    },
    {
     "q": "What is the binary value 11000000 in decimal?",
     "o": [
      "172",
      "192",
      "128",
      "224"
     ],
     "a": "b",
     "e": "128 + 64 = 192.",
     "r": "4.2"
    },
    {
     "q": "What is 172 in binary?",
     "o": [
      "10101010",
      "10101100",
      "10110100",
      "11001010"
     ],
     "a": "b",
     "e": "172 = 128 + 32 + 8 + 4, giving 10101100.",
     "r": "4.2"
    },
    {
     "q": "Which of these is a private (RFC 1918) address?",
     "o": [
      "172.20.5.4",
      "192.169.1.1",
      "172.32.1.1",
      "8.8.8.8"
     ],
     "a": "a",
     "e": "The private range 172.16.0.0/12 runs from 172.16.0.0 to 172.31.255.255, so 172.20.5.4 is private but 172.32.1.1 is not.",
     "r": "4.3.2"
    },
    {
     "q": "A Windows PC shows the address 169.254.33.7. What does this most likely mean?",
     "o": [
      "It is using the loopback address",
      "It has a public address from the ISP",
      "It has a static address set by the administrator",
      "It could not get an address from a DHCP server"
     ],
     "a": "d",
     "e": "169.254.x.x is an APIPA address that a client gives itself when DHCP fails.",
     "r": "4.3.2"
    },
    {
     "q": "Which first-octet range belonged to the historical Class C?",
     "o": [
      "224 to 239",
      "1 to 126",
      "192 to 223",
      "128 to 191"
     ],
     "a": "c",
     "e": "Class A was 1-126, Class B 128-191, Class C 192-223 and Class D (multicast) 224-239.",
     "r": "4.3.1"
    },
    {
     "q": "Which technology lets many devices with private addresses share one public IP address?",
     "o": [
      "NAT with port address translation (PAT)",
      "VLAN tagging",
      "DHCP",
      "ARP"
     ],
     "a": "a",
     "e": "The router rewrites private source addresses and ports to its public address and keeps a translation table for the replies.",
     "r": "4.3.2"
    },
    {
     "q": "What is /26 written as a dotted-decimal mask?",
     "o": [
      "255.255.255.224",
      "255.255.255.128",
      "255.255.255.240",
      "255.255.255.192"
     ],
     "a": "d",
     "e": "26 bits = 24 + 2, and the last octet 11000000 = 192.",
     "r": "4.4"
    },
    {
     "q": "How many usable host addresses are there in a /27 subnet?",
     "o": [
      "32",
      "30",
      "62",
      "14"
     ],
     "a": "b",
     "e": "32 − 27 = 5 host bits; 2^5 − 2 = 30 (the network and broadcast addresses cannot be used).",
     "r": "4.4"
    },
    {
     "q": "What is the network address of 192.168.10.77/26?",
     "o": [
      "192.168.10.76",
      "192.168.10.128",
      "192.168.10.0",
      "192.168.10.64"
     ],
     "a": "d",
     "e": "The block size for /26 is 64, so the subnets start at 0, 64, 128 and 192. 77 falls in the block that starts at 64.",
     "r": "4.5"
    },
    {
     "q": "What is the broadcast address of 10.1.1.100/28?",
     "o": [
      "10.1.1.112",
      "10.1.1.255",
      "10.1.1.127",
      "10.1.1.111"
     ],
     "a": "d",
     "e": "The block size for /28 is 16, so 100 lies in the block 96 to 111, and the last address, .111, is the broadcast.",
     "r": "4.5"
    },
    {
     "q": "Which prefix gives exactly 2 usable host addresses, ideal for a router-to-router link?",
     "o": [
      "/30",
      "/28",
      "/29",
      "/24"
     ],
     "a": "a",
     "e": "/30 leaves 2 host bits: 2^2 − 2 = 2 usable addresses.",
     "r": "4.5.1"
    },
    {
     "q": "In VLSM, why are the largest subnets allocated first?",
     "o": [
      "To create more broadcast addresses",
      "Because small subnets cannot use VLSM",
      "So each block starts on its own boundary, with no overlaps or wasted gaps",
      "Because routers read the largest subnet first"
     ],
     "a": "c",
     "e": "Large blocks must start on large boundaries; placing them first lets the smaller blocks fit neatly into the space that remains.",
     "r": "4.5.1"
    },
    {
     "q": "A PC's default gateway is set incorrectly. What is the most likely symptom?",
     "o": [
      "Its network cable shows no link light",
      "It can reach devices on its own subnet but nothing on other networks",
      "It cannot reach any device, even on its own subnet",
      "It loses its IP address"
     ],
     "a": "b",
     "e": "The gateway is only used for traffic leaving the subnet, so local communication still works.",
     "r": "4.5.1"
    },
    {
     "q": "What is the correct shortened form of 2001:0db8:0000:0000:0000:0000:0000:0001?",
     "o": [
      "2001:db8::0::1",
      "21:db8::1",
      "2001:db8::1",
      "2001:0db8:1"
     ],
     "a": "c",
     "e": "Drop leading zeros in each group and replace one run of all-zero groups with `::` (only once per address).",
     "r": "4.6"
    },
    {
     "q": "How many bits long is an IPv6 address?",
     "o": [
      "32",
      "64",
      "128",
      "48"
     ],
     "a": "c",
     "e": "IPv6 addresses are 128 bits, written as eight groups of four hexadecimal digits.",
     "r": "4.6"
    },
    {
     "q": "Which IPv6 address type begins with fe80 and is valid only on the local link?",
     "o": [
      "Multicast",
      "Loopback",
      "Global unicast",
      "Link-local"
     ],
     "a": "d",
     "e": "Every IPv6 interface automatically has a link-local address in fe80::/10; routers do not forward it.",
     "r": "4.6"
    }
   ]
  },
  {
   "title": "Unit 5: Server Installation, Setting Up and Configuration",
   "items": [
    {
     "q": "Why does a server normally run a server operating system rather than a desktop OS?",
     "o": [
      "It supports many simultaneous users and server roles, with better security, remote management and reliability",
      "It never needs updates",
      "It runs games faster",
      "It has a nicer graphical desktop"
     ],
     "a": "a",
     "e": "Server OSs are built for continuous multi-user service: roles such as DNS and AD, remote administration, RAID support and stability.",
     "r": "5.1"
    },
    {
     "q": "Which server role stores files centrally and shares them over the network?",
     "o": [
      "File server",
      "Web server",
      "Mail server",
      "DNS server"
     ],
     "a": "a",
     "e": "A file server (for example SMB on Windows or Samba on Linux) provides shared folders with permissions.",
     "r": "5.2"
    },
    {
     "q": "One physical machine is divided into isolated virtual machines, each with its own OS and root access, rented to different customers. Which hosting option is this?",
     "o": [
      "Virtual Private Server (VPS)",
      "Colocation",
      "Shared hosting",
      "Dedicated server"
     ],
     "a": "a",
     "e": "A VPS gives each customer a virtual machine with full control at a lower cost than a dedicated server.",
     "r": "5.3"
    },
    {
     "q": "Which RAID level mirrors identical data onto two disks?",
     "o": [
      "RAID 5",
      "RAID 6",
      "RAID 0",
      "RAID 1"
     ],
     "a": "d",
     "e": "RAID 1 is mirroring. RAID 0 stripes with no protection; RAID 5 and 6 use parity.",
     "r": "5.3.1"
    },
    {
     "q": "Which statement about RAID is true?",
     "o": [
      "RAID 5 needs only one disk",
      "RAID 0 survives one disk failing",
      "RAID removes the need for backups",
      "RAID keeps a server running when a disk fails, but it is not a backup"
     ],
     "a": "d",
     "e": "Deleted files, ransomware and fire affect every disk in the array, so separate backups are still needed.",
     "r": "5.3.1"
    },
    {
     "q": "On recent Ubuntu Server versions, where is a static IP address configured?",
     "o": [
      "In a YAML file in `/etc/netplan/`",
      "In `/etc/hostname`",
      "In the Windows registry",
      "In `/etc/hosts`"
     ],
     "a": "a",
     "e": "Netplan reads YAML files from `/etc/netplan/` and configures the network from them.",
     "r": "5.4.2"
    },
    {
     "q": "Why run `sudo netplan try` before `sudo netplan apply`?",
     "o": [
      "It installs Netplan",
      "It makes the network faster",
      "It deletes the old configuration file",
      "It rolls the change back automatically if you lose your connection"
     ],
     "a": "d",
     "e": "If you do not confirm within the timeout, `netplan try` restores the old settings, which protects you when working over SSH.",
     "r": "5.4.2"
    },
    {
     "q": "Which port does SSH use by default?",
     "o": [
      "22",
      "3389",
      "23",
      "443"
     ],
     "a": "a",
     "e": "SSH uses TCP 22. Telnet is 23, RDP is 3389 and HTTPS is 443.",
     "r": "5.5"
    },
    {
     "q": "Which is the most secure way to log in to a Linux server over SSH?",
     "o": [
      "SSH as root with a password",
      "One shared account for all administrators",
      "Telnet with a long password",
      "Key-based authentication, with password and root logins disabled"
     ],
     "a": "d",
     "e": "Keys resist brute-force attacks, and disabling root login means attackers must guess a username as well.",
     "r": "5.5"
    },
    {
     "q": "Which protocol gives remote graphical desktop access to a Windows server on port 3389?",
     "o": [
      "SNMP",
      "SSH",
      "Telnet",
      "RDP"
     ],
     "a": "d",
     "e": "The Remote Desktop Protocol uses TCP 3389; it should be protected by a VPN and Network Level Authentication.",
     "r": "5.5"
    },
    {
     "q": "Which Linux command lists listening TCP and UDP ports and the program that owns each one?",
     "o": [
      "`ls -l`",
      "`df -h`",
      "`ip route`",
      "`ss -tulpn`"
     ],
     "a": "d",
     "e": "`ss -tulpn` shows TCP and UDP listening sockets with process names and numbers.",
     "r": "5.7"
    },
    {
     "q": "Which pair of ports does a web server normally listen on?",
     "o": [
      "25 and 110",
      "21 and 22",
      "80 (HTTP) and 443 (HTTPS)",
      "53 and 67"
     ],
     "a": "c",
     "e": "HTTP uses 80 and HTTPS uses 443.",
     "r": "5.7"
    }
   ]
  },
  {
   "title": "Unit 6: Virtual Private Network",
   "items": [
    {
     "q": "What is the main purpose of a VPN?",
     "o": [
      "To create an encrypted tunnel across an untrusted network such as the Internet",
      "To replace the firewall",
      "To speed up an Internet connection",
      "To give every PC a public IP address"
     ],
     "a": "a",
     "e": "A VPN provides confidentiality, integrity and authentication so remote users and sites can communicate as if on one private network.",
     "r": "6.1"
    },
    {
     "q": "A bank's branch and head office networks are joined permanently by VPN routers. Which VPN type is this?",
     "o": [
      "Clientless SSL VPN portal",
      "Site-to-site VPN",
      "Remote-access VPN",
      "Personal VPN app"
     ],
     "a": "b",
     "e": "Site-to-site VPNs join whole networks through gateways; remote-access VPNs connect individual users.",
     "r": "6.2"
    },
    {
     "q": "In VPN tunnelling, what happens to the original packet?",
     "o": [
      "It is sent unchanged",
      "It is encrypted and wrapped inside a new packet addressed to the VPN endpoint",
      "It is compressed into a smaller frame",
      "Its IP addresses are deleted"
     ],
     "a": "b",
     "e": "Routers on the Internet see only the outer header; the far endpoint decrypts and delivers the inner packet.",
     "r": "6.3"
    },
    {
     "q": "Which VPN protocol is obsolete and should not be used?",
     "o": [
      "OpenVPN",
      "PPTP",
      "IPsec with IKEv2",
      "WireGuard"
     ],
     "a": "b",
     "e": "PPTP's authentication and encryption have well-known weaknesses.",
     "r": "6.4"
    },
    {
     "q": "Which transport protocol and default port does WireGuard use?",
     "o": [
      "TCP 443",
      "UDP 53",
      "UDP 51820",
      "TCP 1723"
     ],
     "a": "c",
     "e": "WireGuard runs over UDP, by default on port 51820, which must be allowed in the firewall.",
     "r": "6.6"
    },
    {
     "q": "In a WireGuard `[Peer]` section, what does `AllowedIPs` control?",
     "o": [
      "Which users may log in to the server",
      "Which websites are blocked",
      "The peer's private key",
      "Which addresses are routed to, and accepted from, that peer"
     ],
     "a": "d",
     "e": "`AllowedIPs` works as both a routing table and an access list for the tunnel.",
     "r": "6.6"
    },
    {
     "q": "Which statement about VPNs is true?",
     "o": [
      "A VPN blocks all phishing emails",
      "A VPN does not protect a computer that is already infected with malware",
      "A VPN removes all latency",
      "A VPN makes a firewall unnecessary"
     ],
     "a": "b",
     "e": "A VPN encrypts traffic in transit; an infected client can even carry a threat inside the network.",
     "r": "6.5"
    }
   ]
  },
  {
   "title": "Unit 7: Domain Name System",
   "items": [
    {
     "q": "What is the main job of DNS?",
     "o": [
      "Encrypting web traffic",
      "Translating domain names into IP addresses",
      "Routing packets between networks",
      "Leasing IP addresses to clients"
     ],
     "a": "b",
     "e": "DNS is a distributed, hierarchical database that maps names to addresses and back.",
     "r": "7.1"
    },
    {
     "q": "In the FQDN `www.example.com.`, what does the final dot represent?",
     "o": [
      "The root of the DNS tree",
      "A typing mistake that should be removed",
      "A subdomain",
      "The top-level domain"
     ],
     "a": "a",
     "e": "The trailing dot is the root; `.com` is the TLD and `example` is the second-level domain.",
     "r": "7.2"
    },
    {
     "q": "Which DNS server finds the complete answer for a client by querying other servers, then caches it?",
     "o": [
      "Secondary authoritative server",
      "TLD server",
      "Root server",
      "Recursive resolver"
     ],
     "a": "d",
     "e": "The recursive resolver (your ISP, 8.8.8.8 or 1.1.1.1) does the work and caches answers for their TTL.",
     "r": "7.3"
    },
    {
     "q": "Which record type maps a name to an IPv4 address?",
     "o": [
      "A",
      "MX",
      "AAAA",
      "PTR"
     ],
     "a": "a",
     "e": "A records hold IPv4 addresses; AAAA records hold IPv6 addresses.",
     "r": "7.4"
    },
    {
     "q": "Which record tells other mail servers where to deliver email for a domain?",
     "o": [
      "NS",
      "MX",
      "CNAME",
      "SOA"
     ],
     "a": "b",
     "e": "The MX record names the mail server, with a priority number (lower values are preferred).",
     "r": "7.4"
    },
    {
     "q": "Which record type is used for a reverse lookup, from an IP address to a name?",
     "o": [
      "A",
      "CNAME",
      "PTR",
      "TXT"
     ],
     "a": "c",
     "e": "PTR records live in reverse zones under in-addr.arpa.",
     "r": "7.5.3"
    },
    {
     "q": "What must you do every time you edit a BIND zone file?",
     "o": [
      "Delete the zone and create it again",
      "Change the TTL to zero",
      "Increase the SOA serial number, then reload or restart the service",
      "Reboot every client"
     ],
     "a": "c",
     "e": "Secondary servers use the serial number to see that the zone has changed.",
     "r": "7.5.1"
    },
    {
     "q": "Which command checks a BIND zone file for errors before it is loaded?",
     "o": [
      "`traceroute`",
      "`named-checkzone`",
      "`netplan apply`",
      "`ipconfig /flushdns`"
     ],
     "a": "b",
     "e": "`named-checkzone zone file` checks a zone file; `named-checkconf` checks the configuration files.",
     "r": "7.5.1"
    },
    {
     "q": "What is the reverse zone name for the 192.168.1.0/24 network?",
     "o": [
      "0.1.168.192.arpa",
      "192.168.1.0.rev",
      "1.168.192.in-addr.arpa",
      "192.168.1.in-addr.arpa"
     ],
     "a": "c",
     "e": "Reverse zones write the network octets backwards under in-addr.arpa.",
     "r": "7.5.3"
    },
    {
     "q": "Which organisation do you buy a domain name from?",
     "o": [
      "A registrar",
      "ICANN directly",
      "Your DHCP server",
      "A root server operator"
     ],
     "a": "a",
     "e": "Registrars sell names on behalf of the registry that runs each TLD; ICANN coordinates the system.",
     "r": "7.6"
    }
   ]
  },
  {
   "title": "Unit 8: Network Security",
   "items": [
    {
     "q": "In the CIA triad, what does Integrity mean?",
     "o": [
      "Systems are available when needed",
      "Data is not changed without authorisation",
      "Only authorised people can read data",
      "Users prove who they are"
     ],
     "a": "b",
     "e": "Integrity means data stays accurate and unaltered; hashes and signatures help to detect changes.",
     "r": "8.1"
    },
    {
     "q": "What is the safest default policy for incoming traffic on a server firewall?",
     "o": [
      "Allow everything, then block known attacks",
      "Turn the firewall off if antivirus is installed",
      "Allow everything from the Internet but log it",
      "Deny everything, then allow only the services that are needed"
     ],
     "a": "d",
     "e": "Default deny means that anything you forgot to allow stays blocked.",
     "r": "8.2.2"
    },
    {
     "q": "Which type of firewall tracks connections so that replies to allowed traffic are let back in automatically?",
     "o": [
      "Stateless packet filter",
      "DNS forwarder",
      "Hub",
      "Stateful firewall"
     ],
     "a": "d",
     "e": "A stateful firewall keeps a connection table; a stateless filter judges every packet on its own.",
     "r": "8.2.1"
    },
    {
     "q": "Where should a public web server be placed in a network that has a DMZ?",
     "o": [
      "In the DMZ, separated from both the Internet and the internal LAN",
      "Outside the firewall with no protection",
      "On the same subnet as the database server",
      "On the internal LAN next to the staff PCs"
     ],
     "a": "a",
     "e": "If the web server is compromised, the firewall still stops the attacker reaching the internal network.",
     "r": "8.2.2"
    },
    {
     "q": "Before running `sudo ufw enable` on a remote server, what must you do first?",
     "o": [
      "Delete the default policies",
      "Stop the SSH service",
      "Reboot the server",
      "Allow SSH, for example with `sudo ufw allow OpenSSH`"
     ],
     "a": "d",
     "e": "Otherwise the default deny policy cuts off your own SSH session.",
     "r": "8.2.3"
    },
    {
     "q": "Which of these is a symmetric encryption algorithm?",
     "o": [
      "AES",
      "RSA",
      "SHA-256",
      "ECDSA"
     ],
     "a": "a",
     "e": "AES uses the same secret key to encrypt and decrypt. RSA and ECDSA are asymmetric; SHA-256 is a hash.",
     "r": "8.3.1"
    },
    {
     "q": "Alice wants to send Bob a secret message using public-key encryption. Which key does she use to encrypt it?",
     "o": [
      "Bob's private key",
      "Alice's public key",
      "Alice's private key",
      "Bob's public key"
     ],
     "a": "d",
     "e": "Only Bob's private key can decrypt something encrypted with Bob's public key.",
     "r": "8.3.2"
    },
    {
     "q": "Why does HTTPS use both asymmetric and symmetric cryptography?",
     "o": [
      "DNS requires both",
      "Asymmetric encryption is faster for large amounts of data",
      "Asymmetric methods agree a session key securely; fast symmetric encryption then protects the data",
      "Symmetric encryption is used only for certificates"
     ],
     "a": "c",
     "e": "This hybrid approach combines safe key exchange with fast bulk encryption.",
     "r": "8.3.3"
    },
    {
     "q": "Which is a property of a cryptographic hash function such as SHA-256?",
     "o": [
      "Its output length depends on the input length",
      "It can be reversed with the right key",
      "It is one-way, and a tiny change to the input gives a completely different hash",
      "Different inputs always produce the same hash"
     ],
     "a": "c",
     "e": "Hashes have a fixed length, cannot be reversed, and change completely when the input changes (the avalanche effect).",
     "r": "8.3.4"
    },
    {
     "q": "Which key is used to create a digital signature?",
     "o": [
      "The sender's private key",
      "A password shared by both people",
      "The receiver's public key",
      "The sender's public key"
     ],
     "a": "a",
     "e": "Only the owner holds the private key, so a valid signature proves who signed; anyone can verify it with the public key.",
     "r": "8.4"
    },
    {
     "q": "What does a Certificate Authority (CA) do?",
     "o": [
      "Signs certificates to confirm that a public key belongs to a named owner",
      "Runs the root DNS servers",
      "Assigns IP addresses to web servers",
      "Encrypts all website traffic itself"
     ],
     "a": "a",
     "e": "Browsers trust a set of root CAs, and a certificate signed through that chain is accepted.",
     "r": "8.5.1"
    },
    {
     "q": "Why does a browser show a warning for a self-signed certificate?",
     "o": [
      "It does not encrypt anything",
      "It is not signed by a CA that the browser trusts",
      "It always expires immediately",
      "It contains no public key"
     ],
     "a": "b",
     "e": "A self-signed certificate still encrypts traffic, but nobody trusted has vouched for its identity.",
     "r": "8.5.3"
    }
   ]
  },
  {
   "title": "Unit 9: Network Troubleshooting",
   "items": [
    {
     "q": "What is the first step of the troubleshooting method?",
     "o": [
      "Document the findings",
      "Establish a theory of probable cause",
      "Identify the problem",
      "Implement the solution"
     ],
     "a": "c",
     "e": "First gather information, ask what changed, reproduce the fault and define its scope.",
     "r": "9.1"
    },
    {
     "q": "A user can ping 8.8.8.8 but cannot open www.google.com. What is the most likely cause?",
     "o": [
      "The network cable is unplugged",
      "The network card has failed",
      "The default gateway is wrong",
      "DNS is not working"
     ],
     "a": "d",
     "e": "Reaching the Internet by IP proves layers 1 to 3 and the gateway work, so name resolution is the fault.",
     "r": "9.4"
    },
    {
     "q": "Which Windows command shows each router (hop) on the path to a destination?",
     "o": [
      "`ipconfig`",
      "`arp -a`",
      "`tracert`",
      "`netstat -ano`"
     ],
     "a": "c",
     "e": "`tracert` (or `traceroute` on Linux) lists the hops and shows where packets stop.",
     "r": "9.3"
    },
    {
     "q": "When nothing works at all, which troubleshooting approach is usually best?",
     "o": [
      "Top-down, starting with the application",
      "Reinstalling the operating system first",
      "Changing several settings at once",
      "Bottom-up, starting with cables, link lights and power"
     ],
     "a": "d",
     "e": "Bottom-up checks the physical layer first, which is the usual cause of a complete failure.",
     "r": "9.1"
    },
    {
     "q": "A Linux web service will not start after a configuration change. What should you check first?",
     "o": [
      "Change the server's IP address",
      "The service logs and the configuration syntax (for example `apache2ctl configtest`)",
      "Reinstall the operating system",
      "Replace the network cable"
     ],
     "a": "b",
     "e": "The exact error message usually points to the cause, and a syntax test finds typing mistakes.",
     "r": "9.6"
    }
   ]
  }
 ],
 "structured": [
  {
   "title": "Unit 1: Data Communication Fundamentals",
   "items": [
    {
     "q": "List the five components of a data communication system and give an example of each when a student sends an email.",
     "m": 5,
     "a": "- **Message:** the email text and any attachment.\n- **Sender:** the student's laptop or phone.\n- **Receiver:** the recipient's mail server and then their device.\n- **Transmission medium:** Wi-Fi, an Ethernet cable, fibre links across the Internet.\n- **Protocol:** the agreed rules, for example SMTP for sending mail, carried over TCP/IP.",
     "r": "1.2"
    },
    {
     "q": "Explain simplex, half-duplex and full-duplex data flow, giving one example of each.",
     "m": 6,
     "a": "- **Simplex:** one direction only, for example a broadcast TV transmitter to a television, or a keyboard to a computer.\n- **Half-duplex:** both directions, but only one at a time, for example a walkie-talkie or an old hub-based Ethernet network.\n- **Full-duplex:** both directions at the same time, for example a telephone call or a switched Ethernet link.",
     "r": "1.3"
    },
    {
     "q": "Compare analog and digital signals, and explain why digital signals are preferred for data communication.",
     "m": 4,
     "a": "An **analog** signal varies continuously (for example a voice on an old telephone line). A **digital** signal has a small number of discrete levels, representing 0 and 1.\n\nDigital signals are preferred because a repeater can decide which level was sent and regenerate a clean signal, so noise does not build up over distance. They are also easy to process, encrypt and error-check with computers.",
     "r": "1.4"
    },
    {
     "q": "Explain the difference between serial and parallel transmission. Why do modern high-speed interfaces use serial transmission?",
     "m": 4,
     "a": "**Serial** sends one bit after another over a single channel; **parallel** sends several bits at once over several wires.\n\nAt high speeds the bits on parallel wires arrive at slightly different times (skew) and interfere with each other (crosstalk). Serial links avoid this, need fewer wires and can be clocked much faster, so USB, SATA, PCIe and Ethernet are all serial.",
     "r": "1.5"
    },
    {
     "q": "Compare UTP, coaxial and fibre optic cable in terms of cost, speed, distance and resistance to interference.",
     "m": 6,
     "a": "| Medium | Cost | Speed | Distance | Interference\n| UTP | Lowest | Up to 10 Gbps (Cat6a) | 100 m | Affected by electrical noise\n| Coaxial | Moderate | Hundreds of Mbps to Gbps (cable broadband) | Hundreds of metres | Shielded, better than UTP\n| Fibre | Highest (cable and optics) | Very high (10 to 400 Gbps) | Kilometres | Immune: carries light",
     "r": "1.6"
    },
    {
     "q": "Define bandwidth, throughput and latency. Then calculate how long a 50 MB file takes to download over a 20 Mbps link, ignoring overheads.",
     "m": 6,
     "a": "- **Bandwidth:** the maximum data rate a link can carry, in bits per second.\n- **Throughput:** the data rate actually achieved, always at or below the bandwidth.\n- **Latency:** the delay for data to travel from source to destination, in milliseconds.\n\nCalculation: 50 MB × 8 = 400 Mb; 400 Mb ÷ 20 Mbps = **20 seconds**.",
     "r": "1.7"
    },
    {
     "q": "Explain how a receiver uses a CRC to detect errors in an Ethernet frame. Can a CRC correct the error?",
     "m": 4,
     "a": "The sender calculates a CRC value from the frame's contents and places it in the frame check sequence at the end. The receiver performs the same calculation on the bits it received. If its result differs from the received CRC, the frame was corrupted and is discarded.\n\nA CRC only **detects** errors; it does not correct them. Recovery is left to higher layers, for example TCP retransmission.",
     "r": "1.8"
    },
    {
     "q": "Explain what multiplexing is and name two types. Then compare circuit switching with packet switching.",
     "m": 6,
     "a": "**Multiplexing** lets several signals share one link. Types include **time-division (TDM)**, where each signal takes turns in time slots, and **frequency-division (FDM)**, where each signal uses its own frequency band (WDM is the light-wavelength version used in fibre).\n\n**Circuit switching** reserves a dedicated path for the whole call (the traditional telephone network): constant quality, but the capacity is wasted when nobody speaks. **Packet switching** splits data into packets that are routed independently over shared links (the Internet): efficient and resilient, but delay can vary.",
     "r": "1.9"
    }
   ]
  },
  {
   "title": "Unit 2: Computer Network Fundamentals",
   "items": [
    {
     "q": "What is a computer network? Give three benefits of networking computers in an organisation.",
     "m": 4,
     "a": "A computer network is two or more devices connected so that they can share data and resources.\n\nBenefits include: sharing files and printers; shared Internet access; central storage and backup; communication by email and messaging; central management and security.",
     "r": "2.1"
    },
    {
     "q": "Distinguish between a PAN, a LAN, a MAN and a WAN, giving an example of each.",
     "m": 6,
     "a": "- **PAN:** a few metres around one person, for example a phone with Bluetooth earbuds.\n- **LAN:** a room, building or campus, for example a school computer lab.\n- **MAN:** a city, for example a university's campuses linked across a city or a city-wide fibre network.\n- **WAN:** countries or the world, for example a bank's branch network or the Internet.",
     "r": "2.2"
    },
    {
     "q": "Compare peer-to-peer and client-server networks. Which suits a school with 40 lab PCs and shared student folders? Give reasons.",
     "m": 6,
     "a": "In **peer-to-peer** networks every computer can share and request resources; it is cheap and simple but hard to secure, back up and manage beyond about 10 computers. In **client-server** networks dedicated servers provide services centrally.\n\nThe school should use **client-server**: student accounts and folders are managed centrally, backups are done in one place, permissions are enforced and any PC can be used by any student.",
     "r": "2.3"
    },
    {
     "q": "Describe the bus, star, ring and mesh topologies, giving one advantage and one disadvantage of each.",
     "m": 8,
     "a": "- **Bus:** every device on one shared cable. Advantage: little cable. Disadvantage: a cable break stops the network, and collisions grow with more devices.\n- **Star:** every device links to a central switch. Advantage: one failed cable affects only one device, and it is easy to add devices. Disadvantage: the switch is a single point of failure.\n- **Ring:** each device links to two neighbours in a loop. Advantage: orderly access, with no collisions. Disadvantage: one break can stop a single ring.\n- **Mesh:** devices have many links to each other. Advantage: high redundancy. Disadvantage: expensive, with many links and ports.",
     "r": "2.4"
    },
    {
     "q": "How many links are needed for a full mesh of 6 devices? Show the formula.",
     "m": 4,
     "a": "Links = n(n − 1) ÷ 2 = 6 × 5 ÷ 2 = **15 links**. Each device needs 5 connections.",
     "r": "2.4"
    },
    {
     "q": "Explain the difference between the Internet, an intranet and an extranet, with an example of each.",
     "m": 6,
     "a": "- **Internet:** the public global network of networks using TCP/IP, for example browsing a news site.\n- **Intranet:** a private network for an organisation's own members, built with Internet technologies, for example a staff portal for HR forms.\n- **Extranet:** part of an intranet opened to selected outside partners under controlled access, for example a supplier portal for checking orders.",
     "r": "2.5"
    },
    {
     "q": "Compare wired Ethernet and Wi-Fi for an office network. Refer to their IEEE standards and access methods.",
     "m": 5,
     "a": "**Ethernet (IEEE 802.3)** uses cables; it is fast (1 to 10 Gbps), reliable and secure, and modern switched full-duplex links have no collisions (old shared Ethernet used CSMA/CD). It needs cabling to every desk.\n\n**Wi-Fi (IEEE 802.11)** uses radio through access points; it gives mobility and easy expansion, but speed varies with distance and interference, and it must be secured with WPA2 or WPA3. It uses **CSMA/CA** because a radio cannot detect collisions while transmitting.\n\nMost offices use both: Ethernet for desktops and servers, Wi-Fi for laptops and phones.",
     "r": "2.6"
    },
    {
     "q": "Explain when straight-through and crossover cables are used, and state the maximum length of a UTP run.",
     "m": 5,
     "a": "- **Straight-through:** the same standard (usually T568B) at both ends; connects unlike devices, such as a PC to a switch or a router to a switch.\n- **Crossover:** T568A at one end and T568B at the other; connects like devices, such as PC to PC or switch to switch. Most modern ports support **Auto-MDIX** and adjust automatically.\n\nThe maximum UTP segment length is **100 metres**.",
     "r": "2.7"
    },
    {
     "q": "Describe the three layers of the hierarchical network design model.",
     "m": 6,
     "a": "- **Access layer:** where end devices (PCs, printers, access points) connect to switches; port security and VLAN assignment happen here.\n- **Distribution layer:** joins access switches, applies policy (ACLs) and routes between VLANs.\n- **Core layer:** a fast, highly reliable backbone that moves traffic between distribution blocks and to the Internet or data centre.\n\nSmall networks often collapse the core and distribution layers into one.",
     "r": "2.8"
    },
    {
     "q": "Name five services a typical LAN provides and state what each one does.",
     "m": 5,
     "a": "- **DHCP:** gives clients IP settings automatically.\n- **DNS:** translates names into IP addresses.\n- **File and print sharing:** central folders and shared printers.\n- **Directory services and authentication:** user accounts and logins, for example Active Directory.\n- **Email and web:** internal mail and intranet sites.\n- **Internet gateway:** a router or firewall that shares Internet access.",
     "r": "2.9"
    }
   ]
  },
  {
   "title": "Unit 3: Network Devices and Protocols",
   "items": [
    {
     "q": "Compare a hub, a switch and a router, stating the OSI layer, the address used and how each forwards traffic.",
     "m": 6,
     "a": "| Device | Layer | Address | Forwarding\n| Hub | 1 Physical | None | Repeats every signal out of all ports (one collision domain)\n| Switch | 2 Data link | MAC | Forwards each frame only to the port of the destination MAC\n| Router | 3 Network | IP | Chooses the best path between networks using its routing table; blocks broadcasts",
     "r": "3.1"
    },
    {
     "q": "Explain how a switch builds its MAC address table and what it does with a frame for an unknown destination.",
     "m": 5,
     "a": "When a frame arrives, the switch reads the **source** MAC address and records it in its MAC table with the port it arrived on. It then looks up the **destination** MAC address:\n\n- If it is known, the frame goes out of that port only.\n- If it is unknown (or the frame is a broadcast), the frame is **flooded** out of every port except the incoming one. When the destination replies, the switch learns its port.\n\nEntries age out after a few minutes if they are not used.",
     "r": "3.1"
    },
    {
     "q": "Explain the difference between a collision domain and a broadcast domain, and state which devices separate each.",
     "m": 4,
     "a": "A **collision domain** is the part of a network where frames can collide; each **switch** port (and router port) is its own collision domain, whereas all ports of a hub share one.\n\nA **broadcast domain** is the set of devices that receive a broadcast frame; switches forward broadcasts, so only **routers** (or VLANs) separate broadcast domains.",
     "r": "3.1"
    },
    {
     "q": "Describe how you connect to a new Cisco switch for its first configuration.",
     "m": 4,
     "a": "Connect the switch's **console** port to the PC with a console cable (a rollover or USB console cable). Open a terminal program such as PuTTY, choose the serial (COM) port, and set **9600 baud**, 8 data bits, no parity and 1 stop bit. Press Enter to get the `Switch>` prompt, then type `enable` and `configure terminal`.\n\nConsole access works before the device has an IP address, which is why it is used for first-time set-up.",
     "r": "3.2.1"
    },
    {
     "q": "Write the Cisco commands to set the hostname SW1, set an encrypted enable password, give VLAN 1 the management address 192.168.1.2/24 with gateway 192.168.1.1, and save the configuration.",
     "m": 8,
     "a": "```cisco\nSwitch> enable\nSwitch# configure terminal\nSwitch(config)# hostname SW1\nSW1(config)# enable secret StrongPass123\nSW1(config)# interface vlan 1\nSW1(config-if)# ip address 192.168.1.2 255.255.255.0\nSW1(config-if)# no shutdown\nSW1(config-if)# exit\nSW1(config)# ip default-gateway 192.168.1.1\nSW1(config)# end\nSW1# copy running-config startup-config\n```",
     "r": "3.2.2"
    },
    {
     "q": "List what must be configured on a Cisco switch to allow SSH management, and explain why `login local` is used.",
     "m": 6,
     "a": "- A hostname and a domain name (`ip domain-name school.lk`), which are needed to create the keys.\n- An RSA key pair: `crypto key generate rsa modulus 2048`.\n- `ip ssh version 2`.\n- A local user: `username admin secret AdminPass123`.\n- On `line vty 0 4`: `login local` and `transport input ssh`.\n- A management IP address and default gateway.\n\n`login local` makes the VTY lines check the username and password against the local user database. SSH needs a username, so a line password alone is not enough.",
     "r": "3.2.2"
    },
    {
     "q": "Write the commands to configure router R1 with G0/0 = 192.168.1.1/24 and G0/1 = 10.0.0.1/30, add a default route via 10.0.0.2, and save.",
     "m": 8,
     "a": "```cisco\nRouter> enable\nRouter# configure terminal\nRouter(config)# hostname R1\nR1(config)# interface gigabitEthernet 0/0\nR1(config-if)# ip address 192.168.1.1 255.255.255.0\nR1(config-if)# no shutdown\nR1(config-if)# exit\nR1(config)# interface gigabitEthernet 0/1\nR1(config-if)# ip address 10.0.0.1 255.255.255.252\nR1(config-if)# no shutdown\nR1(config-if)# exit\nR1(config)# ip route 0.0.0.0 0.0.0.0 10.0.0.2\nR1(config)# end\nR1# copy running-config startup-config\n```",
     "r": "3.2.3"
    },
    {
     "q": "What is a VLAN? Give two benefits, and write the commands to create VLAN 10 named STAFF and place port Fa0/1 in it.",
     "m": 6,
     "a": "A **VLAN** divides one physical switch into separate logical networks (broadcast domains).\n\nBenefits: better security (groups are separated), smaller broadcast domains and easier management, because users are grouped by role rather than by location.\n\n```cisco\nSW1(config)# vlan 10\nSW1(config-vlan)# name STAFF\nSW1(config-vlan)# exit\nSW1(config)# interface fastEthernet 0/1\nSW1(config-if)# switchport mode access\nSW1(config-if)# switchport access vlan 10\n```",
     "r": "3.2.4"
    },
    {
     "q": "List five settings you should change when installing a wireless access point or home router.",
     "m": 5,
     "a": "- Change the default administrator username and password.\n- Set a meaningful SSID.\n- Use **WPA3** (or WPA2-AES) with a strong passphrase; never WEP.\n- Disable WPS and remote administration from the Internet.\n- Update the firmware.\n- Choose a less crowded channel and set the DHCP range.",
     "r": "3.2.5"
    },
    {
     "q": "Name four Cisco verification commands and state what each shows.",
     "m": 4,
     "a": "- `show running-config`: the current configuration in RAM.\n- `show ip interface brief`: each interface with its IP address and up/down status.\n- `show vlan brief`: VLANs and the ports assigned to them.\n- `show mac address-table`: the MAC addresses learned on each port.\n- `show ip route`: the routing table.",
     "r": "3.2.6"
    },
    {
     "q": "Compare TCP and UDP, and give two applications that use each.",
     "m": 6,
     "a": "| | TCP | UDP\n| Connection | Connection-oriented (three-way handshake) | Connectionless\n| Reliability | Acknowledgements, retransmission, ordering | None, best effort\n| Overhead | Higher (20-byte header) | Low (8-byte header)\n| Uses | Web (HTTP/HTTPS), email (SMTP), SSH, file transfer | DNS queries, DHCP, video and voice calls, online games",
     "r": "3.3.1"
    },
    {
     "q": "Explain the four steps of the DHCP DORA process. What happens if no DHCP server answers?",
     "m": 6,
     "a": "1. **Discover:** the client broadcasts to find a DHCP server.\n2. **Offer:** a server offers an address and settings (mask, gateway, DNS, lease time).\n3. **Request:** the client broadcasts that it accepts one offer.\n4. **Acknowledge:** the server confirms the lease.\n\nIf no server answers, a Windows client gives itself an **APIPA** address (169.254.x.x) and can reach only other APIPA devices, with no Internet access.",
     "r": "3.3.2"
    },
    {
     "q": "List the seven OSI layers from top to bottom, giving one function and one example protocol or device for each.",
     "m": 8,
     "a": "| Layer | Function | Example\n| 7 Application | Network services for applications | HTTP, DNS, SMTP\n| 6 Presentation | Format, encryption, compression | TLS, JPEG\n| 5 Session | Start, manage and end sessions | RPC, NetBIOS\n| 4 Transport | End-to-end delivery and ports | TCP, UDP\n| 3 Network | Logical addressing and routing | IP, routers\n| 2 Data link | Framing and MAC addressing | Ethernet, switches\n| 1 Physical | Bits as signals on the medium | Cables, hubs",
     "r": "3.4.1"
    },
    {
     "q": "Explain encapsulation and decapsulation, naming the PDU at each layer.",
     "m": 6,
     "a": "As data goes **down** the sender's stack, each layer adds its own header (and the data link layer adds a trailer): this is **encapsulation**. The receiver reverses this, removing each header as the data goes **up** the stack: **decapsulation**.\n\nPDUs: data (application) → **segment** (transport, TCP/UDP header with ports) → **packet** (network, IP header with addresses) → **frame** (data link, MAC header and FCS trailer) → **bits** (physical).",
     "r": "3.4.3"
    }
   ]
  },
  {
   "title": "Unit 4: Addressing Network Devices",
   "items": [
    {
     "q": "Describe the structure of a MAC address and explain how it differs from an IP address.",
     "m": 4,
     "a": "A MAC address is **48 bits**, written as 12 hexadecimal digits (for example `00-1A-2B-3C-4D-5E`). The first 24 bits are the **OUI** (manufacturer) and the last 24 identify the device.\n\nA MAC address is a physical (layer 2) address burned into the network card and used only on the local network. An IP address is a logical (layer 3) address, assigned by configuration or DHCP, that identifies the network and the host and is used for routing between networks.",
     "r": "4.1"
    },
    {
     "q": "PC A (192.168.1.10) wants to send data to 192.168.1.20 on the same subnet but does not know its MAC address. Explain how ARP solves this.",
     "m": 5,
     "a": "1. PC A checks its ARP cache; there is no entry.\n2. It **broadcasts** an ARP request: \"Who has 192.168.1.20? Tell 192.168.1.10.\"\n3. All hosts receive it; only 192.168.1.20 replies, sending its MAC address directly (unicast) to PC A.\n4. PC A stores the mapping in its ARP cache and sends the frame to that MAC address.\n\nIf the destination were on another subnet, PC A would ARP for the **default gateway's** MAC address instead.",
     "r": "4.1"
    },
    {
     "q": "Convert 192, 168 and 10 to 8-bit binary, and convert 11110000 and 00101101 to decimal.",
     "m": 6,
     "a": "- 192 = 128 + 64 = **11000000**\n- 168 = 128 + 32 + 8 = **10101000**\n- 10 = 8 + 2 = **00001010**\n- 11110000 = 128 + 64 + 32 + 16 = **240**\n- 00101101 = 32 + 8 + 4 + 1 = **45**",
     "r": "4.2"
    },
    {
     "q": "State the first-octet ranges and default masks of Classes A, B and C, and explain why classful addressing was replaced.",
     "m": 5,
     "a": "| Class | First octet | Default mask\n| A | 1 to 126 | 255.0.0.0 (/8)\n| B | 128 to 191 | 255.255.0.0 (/16)\n| C | 192 to 223 | 255.255.255.0 (/24)\n\nFixed class sizes wasted addresses (an organisation needing 500 hosts had to take a Class B with 65,534). **CIDR** (1993) replaced classes with a prefix length of any size, so networks can be sized to need.",
     "r": "4.3.1"
    },
    {
     "q": "List the three private IPv4 address ranges and explain why private addresses need NAT to reach the Internet.",
     "m": 5,
     "a": "- 10.0.0.0/8 (10.0.0.0 to 10.255.255.255)\n- 172.16.0.0/12 (172.16.0.0 to 172.31.255.255)\n- 192.168.0.0/16 (192.168.0.0 to 192.168.255.255)\n\nPrivate addresses are not routed on the Internet, and many organisations reuse the same ranges. **NAT** on the router replaces the private source address (and port) with its public address, so replies can come back, and keeps a translation table to return them to the right inside host.",
     "r": "4.3.2"
    },
    {
     "q": "Explain static and dynamic address assignment, and the difference between unicast, broadcast and multicast.",
     "m": 4,
     "a": "**Static** addresses are set by hand and never change (servers, printers, routers). **Dynamic** addresses are leased by DHCP (client PCs and phones).\n\n- **Unicast:** one sender to one receiver.\n- **Broadcast:** one to all hosts on the subnet (the subnet's broadcast address, or 255.255.255.255).\n- **Multicast:** one to a group of interested hosts (224.0.0.0 to 239.255.255.255).",
     "r": "4.3.3"
    },
    {
     "q": "Convert /20, /25 and /27 to dotted-decimal masks, and convert 255.255.255.248 to a prefix length.",
     "m": 4,
     "a": "- /20 = **255.255.240.0**\n- /25 = **255.255.255.128**\n- /27 = **255.255.255.224**\n- 255.255.255.248 = 24 + 5 bits = **/29**",
     "r": "4.4"
    },
    {
     "q": "For the host 192.168.50.130/26, find the network address, first usable host, last usable host, broadcast address and number of usable hosts.",
     "m": 8,
     "a": "/26 has a mask of 255.255.255.192, so the block size is 256 − 192 = 64. The blocks start at 0, 64, 128 and 192, and 130 lies in the block starting at 128.\n\n- Network: **192.168.50.128**\n- First host: **192.168.50.129**\n- Last host: **192.168.50.190**\n- Broadcast: **192.168.50.191**\n- Usable hosts: 2^6 − 2 = **62**",
     "r": "4.5"
    },
    {
     "q": "Divide 192.168.10.0/24 into four equal subnets. Give the prefix and the network, usable range and broadcast address of each.",
     "m": 8,
     "a": "Four subnets need 2 borrowed bits: **/26** (mask 255.255.255.192), block size 64, 62 hosts each.\n\n| Subnet | Network | Usable range | Broadcast\n| 1 | 192.168.10.0 | .1 to .62 | 192.168.10.63\n| 2 | 192.168.10.64 | .65 to .126 | 192.168.10.127\n| 3 | 192.168.10.128 | .129 to .190 | 192.168.10.191\n| 4 | 192.168.10.192 | .193 to .254 | 192.168.10.255",
     "r": "4.5"
    },
    {
     "q": "A company needs subnets with at least 50 hosts each. What is the smallest suitable prefix, and how many such subnets fit in a /24?",
     "m": 6,
     "a": "2^h − 2 ≥ 50 needs h = 6 host bits (2^6 − 2 = 62; 5 bits would give only 30). The prefix is 32 − 6 = **/26** (255.255.255.192).\n\nA /24 has 8 host bits; borrowing 2 gives 2^2 = **4 subnets** of 62 hosts.",
     "r": "4.5"
    },
    {
     "q": "Using VLSM, allocate 172.16.0.0/24 to: LAN A (100 hosts), LAN B (50 hosts), LAN C (20 hosts) and two router links (2 hosts each). Give the prefix and address range of each.",
     "m": 10,
     "a": "Allocate the largest first:\n\n| Network | Hosts needed | Prefix | Range (network to broadcast)\n| LAN A | 100 | /25 (126 hosts) | 172.16.0.0 to 172.16.0.127\n| LAN B | 50 | /26 (62 hosts) | 172.16.0.128 to 172.16.0.191\n| LAN C | 20 | /27 (30 hosts) | 172.16.0.192 to 172.16.0.223\n| Link 1 | 2 | /30 (2 hosts) | 172.16.0.224 to 172.16.0.227\n| Link 2 | 2 | /30 (2 hosts) | 172.16.0.228 to 172.16.0.231\n\n172.16.0.232 to 172.16.0.255 remains free for growth.",
     "r": "4.5.1"
    },
    {
     "q": "What is a default gateway, and what happens if a host's gateway is set wrongly?",
     "m": 4,
     "a": "The default gateway is the address of the router interface on the host's subnet. The host sends any traffic for other networks to it.\n\nIf the gateway is wrong, the host can still talk to devices on its own subnet but cannot reach other subnets or the Internet.",
     "r": "4.5.1"
    },
    {
     "q": "Shorten 2001:0db8:0000:0042:0000:0000:0000:0100, and expand fe80::1 to its full form.",
     "m": 4,
     "a": "- Shortened: **2001:db8:0:42::100** (drop leading zeros, and replace the longest run of zero groups with `::` once).\n- Expanded: **fe80:0000:0000:0000:0000:0000:0000:0001**",
     "r": "4.6"
    },
    {
     "q": "Give three reasons for adopting IPv6, and describe three IPv6 address types.",
     "m": 6,
     "a": "Reasons: a vast address space (128 bits) that solves IPv4 exhaustion; no need for NAT, so end-to-end connectivity; automatic configuration (SLAAC); a simpler header and built-in multicast.\n\n- **Global unicast** (2000::/3): public, routable addresses.\n- **Link-local** (fe80::/10): automatic on every interface, used only on the local link.\n- **Multicast** (ff00::/8): one to many; IPv6 has no broadcast.\n- **Loopback** (::1): the host itself.",
     "r": "4.6"
    },
    {
     "q": "Explain why a /24 network has 254 usable host addresses rather than 256.",
     "m": 4,
     "a": "A /24 leaves 8 host bits, giving 2^8 = 256 addresses. The first (all host bits 0) is the **network address**, and the last (all host bits 1) is the **broadcast address**. Neither can be given to a host, leaving 256 − 2 = **254**.",
     "r": "4.4"
    },
    {
     "q": "A user's PC shows the address 169.254.10.5 and cannot reach anything. Explain what this means and how you would fix it.",
     "m": 5,
     "a": "169.254.x.x is an **APIPA** address: the PC asked for an address but no DHCP server replied, so it gave itself one.\n\nTo fix it: check the cable or Wi-Fi connection and link lights; check that the DHCP server or router is running and its scope has free addresses; check the switch port and VLAN; then renew with `ipconfig /release` and `ipconfig /renew`.",
     "r": "4.3.2"
    }
   ]
  },
  {
   "title": "Unit 5: Server Installation, Setting Up and Configuration",
   "items": [
    {
     "q": "Give four differences between a server operating system and a desktop operating system.",
     "m": 6,
     "a": "- **Users:** a server OS serves many simultaneous network users; a desktop OS serves one local user.\n- **Roles:** a server OS includes roles such as DNS, DHCP, Active Directory, web and file services.\n- **Hardware:** a server OS supports more CPUs and RAM, RAID and redundant hardware.\n- **Management:** a server OS offers remote administration, often headless or Server Core.\n- **Reliability and security:** a server OS is built for 24/7 uptime, with stronger security policies, auditing and long-term support.",
     "r": "5.1"
    },
    {
     "q": "Describe five types of server by role.",
     "m": 6,
     "a": "- **Web server:** delivers websites (Apache, Nginx, IIS).\n- **File server:** stores and shares files with permissions.\n- **Database server:** stores data for applications (MySQL, SQL Server).\n- **Mail server:** sends and receives email (Postfix, Exchange).\n- **DNS server:** resolves names.\n- **DHCP server:** leases IP settings.\n- **Directory server:** user accounts and logins (Active Directory, LDAP).",
     "r": "5.2"
    },
    {
     "q": "Compare shared hosting, a VPS and an on-premises server.",
     "m": 6,
     "a": "| Option | Advantages | Disadvantages | Suits\n| Shared hosting | Very cheap, no server management | Little control, neighbours can slow you, limited security | Small websites, blogs\n| VPS | Root access and good control at moderate cost, scalable | Shares physical hardware, performance can vary | Small to medium business applications\n| On-premises | Full control of the data and hardware | Capital cost, power, cooling and staff | Sensitive data, local services",
     "r": "5.3"
    },
    {
     "q": "Explain RAID 0, RAID 1, RAID 5 and RAID 10, including the minimum number of disks for each.",
     "m": 6,
     "a": "- **RAID 0 (2 disks):** striping for speed; no protection, so one failure loses everything.\n- **RAID 1 (2 disks):** mirroring; survives one disk failure, but only half the capacity is usable.\n- **RAID 5 (3 disks):** striping with distributed parity; survives one disk failure with good capacity.\n- **RAID 10 (4 disks):** mirrored pairs that are then striped; fast and survives a disk failure in each pair, which makes it popular for databases.\n\nRAID is not a backup.",
     "r": "5.3.1"
    },
    {
     "q": "List six factors to consider when selecting a server for an organisation.",
     "m": 6,
     "a": "- The workload: number of users, transactions and data volume.\n- CPU cores and RAM.\n- Storage type and capacity (SSD or HDD) and the RAID level.\n- Network bandwidth.\n- Availability: redundant power supplies, clustering and backups.\n- Security and compliance requirements.\n- Scalability for future growth.\n- Budget (purchase and running costs), support and warranty, and the skills available.",
     "r": "5.3.1"
    },
    {
     "q": "Describe the main steps in installing a server operating system.",
     "m": 8,
     "a": "1. **Plan:** check the hardware requirements, choose the edition and licence, and plan the hostname, static IP and disk layout.\n2. **Back up** any existing data.\n3. **Prepare the media:** download the ISO, verify its checksum, and write it to USB or attach it to the VM.\n4. **Boot from the media** and choose the language and installation type (minimal or Server Core where no GUI is needed).\n5. **Partition the disks**, considering RAID.\n6. **Create the administrator account** with a strong password.\n7. **Configure the network:** static IP, mask, gateway and DNS.\n8. **First boot tasks:** hostname, time zone and NTP, all updates, the firewall, removing unneeded services and creating a standard user.\n9. **Back up and document** the clean configuration.",
     "r": "5.4.1"
    },
    {
     "q": "Write a Netplan configuration giving interface enp0s3 the static address 192.168.1.20/24, gateway 192.168.1.1 and DNS servers 192.168.1.10 and 8.8.8.8. State the commands to test and apply it.",
     "m": 6,
     "a": "```yaml\nnetwork:\n  version: 2\n  ethernets:\n    enp0s3:\n      dhcp4: false\n      addresses: [192.168.1.20/24]\n      routes:\n        - to: default\n          via: 192.168.1.1\n      nameservers:\n        addresses: [192.168.1.10, 8.8.8.8]\n```\n\nSave it in `/etc/netplan/`, run `sudo netplan try` (it rolls back if the connection is lost), then `sudo netplan apply`, and check with `ip a` and `ip route`.",
     "r": "5.4.2"
    },
    {
     "q": "List the first tasks an administrator performs after installing Windows Server.",
     "m": 5,
     "a": "- Rename the computer to a meaningful hostname.\n- Set a static IP address, mask, gateway and DNS server.\n- Set the time zone and check the time.\n- Run Windows Update.\n- Add the required roles with **Add Roles and Features** in Server Manager (or `Install-WindowsFeature`, for example DNS or DHCP).\n- Check that Windows Defender Firewall is on, then create a standard admin account and document the set-up.",
     "r": "5.4.3"
    },
    {
     "q": "Compare SSH, Telnet and RDP for remote server administration.",
     "m": 6,
     "a": "| Method | Port | Security | Use\n| SSH | 22 | Encrypted; supports key-based login | Command line on Linux and network devices; file transfer with SFTP/SCP\n| Telnet | 23 | No encryption; passwords sent as plain text | Should not be used\n| RDP | 3389 | Encrypted; protect with a VPN, NLA and strong passwords | Graphical desktop on Windows servers",
     "r": "5.5"
    },
    {
     "q": "Explain how to set up key-based SSH login to a Linux server and harden the SSH service.",
     "m": 6,
     "a": "On the client, create a key pair and copy the public key to the server:\n\n```shell\nssh-keygen -t ed25519\nssh-copy-id admin@192.168.1.20\n```\n\nThen edit `/etc/ssh/sshd_config` on the server: set `PasswordAuthentication no` and `PermitRootLogin no` (optionally limit users with `AllowUsers`). Restart the service with `sudo systemctl restart ssh`, and test from a second session before closing the first. Allow port 22 only through the firewall, and consider Fail2ban.",
     "r": "5.5"
    },
    {
     "q": "Name five server applications or tools and state the purpose of each.",
     "m": 5,
     "a": "- **Apache / Nginx:** web server.\n- **MySQL / MariaDB:** database server.\n- **BIND9:** DNS server.\n- **OpenSSH:** secure remote access.\n- **Samba:** Windows-compatible file sharing from Linux.\n- **Postfix:** mail transfer agent.\n- **Server Manager / PowerShell:** Windows Server administration.",
     "r": "5.6"
    },
    {
     "q": "What is a socket? State the three port number ranges.",
     "m": 4,
     "a": "A **socket** is an IP address combined with a port number (for example `192.168.1.20:443`). It identifies one end of a connection, so one server can run many services.\n\n- **0 to 1023:** well-known ports (standard services).\n- **1024 to 49151:** registered ports.\n- **49152 to 65535:** dynamic (ephemeral) ports used temporarily by clients.",
     "r": "5.7"
    },
    {
     "q": "State the default port numbers for HTTP, HTTPS, SSH, DNS, SMTP, RDP, MySQL and DHCP.",
     "m": 6,
     "a": "| Service | Port\n| HTTP | 80\n| HTTPS | 443\n| SSH | 22\n| DNS | 53 (UDP, and TCP)\n| SMTP | 25 (587 for client submission)\n| RDP | 3389\n| MySQL | 3306\n| DHCP | 67 (server) and 68 (client), UDP",
     "r": "5.7"
    },
    {
     "q": "How do you find and close unnecessary open ports on a Linux server?",
     "m": 5,
     "a": "1. List listening ports and their programs with `sudo ss -tulpn`.\n2. Identify services that are not needed.\n3. Stop and disable each one, for example `sudo systemctl disable --now cups`.\n4. Block everything that is not required with a default-deny firewall (`sudo ufw default deny incoming`, then allow only the required ports).\n5. Check again with `ss -tulpn`, or scan from another lab machine with `nmap`.",
     "r": "5.7"
    }
   ]
  },
  {
   "title": "Unit 6: Virtual Private Network",
   "items": [
    {
     "q": "Define a VPN and state its three security benefits.",
     "m": 4,
     "a": "A **Virtual Private Network** creates an encrypted tunnel across an untrusted network (the Internet), so that remote users and sites communicate as if they were on one private network.\n\n- **Confidentiality:** the data is encrypted.\n- **Integrity:** changes to the data are detected.\n- **Authentication:** only authorised users or devices can connect.",
     "r": "6.1"
    },
    {
     "q": "Differentiate between remote-access and site-to-site VPNs, giving an example of each.",
     "m": 6,
     "a": "A **remote-access VPN** connects one user's device to the organisation network through VPN client software (or a browser for SSL VPNs). Example: a staff member working from home.\n\nA **site-to-site VPN** permanently joins two networks through VPN gateways or routers; users need no client software. Example: a bank branch connected to head office.",
     "r": "6.2"
    },
    {
     "q": "Explain tunnelling and encapsulation in a VPN.",
     "m": 5,
     "a": "The VPN endpoint takes the original packet (with its private source and destination addresses), **encrypts** it and **wraps** it inside a new packet whose outer IP header carries the public addresses of the two VPN endpoints.\n\nRouters on the Internet see only the outer header and cannot read the inner packet. The far endpoint removes the outer header, decrypts the original packet and delivers it to the private network.",
     "r": "6.3"
    },
    {
     "q": "Compare IPsec, OpenVPN and WireGuard, and explain why PPTP should not be used.",
     "m": 6,
     "a": "- **IPsec (IKE + ESP):** a network-layer standard, widely supported by routers and firewalls, and common for site-to-site VPNs; it can be complex to configure.\n- **OpenVPN (SSL/TLS):** uses TLS over UDP or TCP (1194 or 443), passes through firewalls easily and is flexible.\n- **WireGuard:** modern, small and fast; uses UDP 51820 and simple key-based configuration.\n\n**PPTP** has well-known weaknesses in its authentication (MS-CHAPv2) and encryption (MPPE), so captured traffic can be cracked. It is obsolete.",
     "r": "6.4"
    },
    {
     "q": "Give two benefits and two limitations of VPNs.",
     "m": 4,
     "a": "Benefits: secure remote working; cheaper than leased lines for connecting branches; protection on public Wi-Fi.\n\nLimitations: extra latency and processing; configuration and key management are needed; it does not protect against malware or phishing; a compromised client can bring a threat inside the network.",
     "r": "6.5"
    },
    {
     "q": "Outline the steps to set up a WireGuard VPN server on Ubuntu.",
     "m": 8,
     "a": "1. Install it with `sudo apt install wireguard`.\n2. Generate keys with `umask 077` and `wg genkey | tee server.key | wg pubkey > server.pub`, and do the same on the client.\n3. Create `/etc/wireguard/wg0.conf` with an `[Interface]` section (server private key, tunnel address 10.8.0.1/24, ListenPort 51820) and a `[Peer]` for each client (public key and AllowedIPs).\n4. Protect the file with `chmod 600`.\n5. Open the port with `sudo ufw allow 51820/udp`, and enable IP forwarding if clients must reach the LAN.\n6. Start it with `sudo wg-quick up wg0` (and `sudo systemctl enable wg-quick@wg0` for boot).\n7. Configure the client, then check with `sudo wg show` and `ping 10.8.0.1`.",
     "r": "6.6"
    },
    {
     "q": "Write a minimal WireGuard server configuration for tunnel address 10.8.0.1/24 on port 51820, with one client at 10.8.0.2.",
     "m": 5,
     "a": "```ini\n[Interface]\nAddress    = 10.8.0.1/24\nListenPort = 51820\nPrivateKey = <server private key>\n\n[Peer]\nPublicKey  = <client public key>\nAllowedIPs = 10.8.0.2/32\n```",
     "r": "6.6"
    },
    {
     "q": "Explain how public and private keys are used in WireGuard, and why the private key must be protected.",
     "m": 4,
     "a": "Each side generates its own key pair. It keeps its **private key** in its own configuration and gives its **public key** to the other side, where it is listed in a `[Peer]` section. The keys are used to authenticate the peers and to agree the encryption keys for the tunnel.\n\nAnyone with the private key could impersonate that server or client and join the VPN. This is why it is created with `umask 077`, the configuration is `chmod 600`, and the key is never shared.",
     "r": "6.6"
    }
   ]
  },
  {
   "title": "Unit 7: Domain Name System",
   "items": [
    {
     "q": "Explain why DNS is needed. What would happen without it?",
     "m": 4,
     "a": "People remember names such as `www.example.com`, but computers route using IP addresses. DNS translates names into addresses (and back), and also stores mail routing information (MX records).\n\nWithout DNS, users would have to remember IP addresses, and websites could not change servers without every user learning the new address.",
     "r": "7.1"
    },
    {
     "q": "Describe the DNS hierarchy using the name `www.school.lk.` as an example.",
     "m": 6,
     "a": "The DNS namespace is an inverted tree:\n\n- **Root (.)**: the trailing dot, served by the 13 logical root server addresses.\n- **Top-level domain:** `lk` (country-code); generic examples are `.com` and `.org`.\n- **Second-level domain:** `school`, the name registered by the organisation.\n- **Host or subdomain:** `www`.\n\nEach level delegates the level below it to that level's name servers. A **zone** is the part of the tree managed by one set of servers.",
     "r": "7.2"
    },
    {
     "q": "Explain the roles of an authoritative server, a recursive resolver, a caching server and a forwarder.",
     "m": 5,
     "a": "- **Authoritative server:** holds the official records for a zone (primary and secondary, synchronised by zone transfer).\n- **Recursive resolver:** finds the complete answer on behalf of a client by querying other servers.\n- **Caching server:** stores answers for their TTL to speed up repeated lookups.\n- **Forwarder:** passes queries it cannot answer to another resolver (for example 8.8.8.8).",
     "r": "7.2"
    },
    {
     "q": "Describe, step by step, how a client resolves `www.example.com` when no cache holds the answer.",
     "m": 8,
     "a": "1. The client checks its own cache and `hosts` file, and finds nothing.\n2. It sends a recursive query to its configured resolver (UDP port 53).\n3. The resolver asks a **root server**, which refers it to the `.com` TLD servers.\n4. The resolver asks a **.com server**, which refers it to the authoritative servers for `example.com`.\n5. The resolver asks the **authoritative server**, which returns the A record (the IP address).\n6. The resolver caches the answer for its TTL and returns it to the client, which also caches it and connects to the address.",
     "r": "7.3"
    },
    {
     "q": "Explain the purpose of the DNS record types A, AAAA, CNAME, MX, NS, PTR, SOA and TXT.",
     "m": 8,
     "a": "| Record | Purpose\n| A | Name to IPv4 address\n| AAAA | Name to IPv6 address\n| CNAME | Alias pointing to another name\n| MX | Mail server for the domain, with a priority\n| NS | Name servers for the zone\n| PTR | IP address to name (reverse lookup)\n| SOA | Start of authority: primary server, admin email, serial number and timers\n| TXT | Text data, for example SPF and domain verification",
     "r": "7.4"
    },
    {
     "q": "Write a BIND forward zone file for `school.lk` with name server ns1 (192.168.1.10), web server www (192.168.1.20) and mail server mail (192.168.1.25) with an MX record.",
     "m": 8,
     "a": "```zone\n$TTL 3600\n@   IN SOA ns1.school.lk. admin.school.lk. (\n        2025010101 ; serial\n        3600       ; refresh\n        900        ; retry\n        604800     ; expire\n        3600 )     ; negative cache TTL\n@     IN NS  ns1.school.lk.\nns1   IN A   192.168.1.10\nwww   IN A   192.168.1.20\nmail  IN A   192.168.1.25\n@     IN MX  10 mail.school.lk.\n```\n\nThe zone must also be declared in `named.conf.local`, checked with `named-checkzone` and loaded by restarting BIND.",
     "r": "7.5.1"
    },
    {
     "q": "What is a reverse lookup zone? Give the zone name for 192.168.1.0/24 and a PTR record for www at 192.168.1.20.",
     "m": 5,
     "a": "A reverse lookup zone maps IP addresses back to names; it is used by tools such as `nslookup 192.168.1.20` and by mail servers checking senders.\n\nThe zone name is **1.168.192.in-addr.arpa** (the network octets reversed). The record is:\n\n```zone\n20  IN PTR www.school.lk.\n```",
     "r": "7.5.3"
    },
    {
     "q": "List the commands you would use to check and test a BIND DNS server.",
     "m": 5,
     "a": "- `sudo named-checkconf`: checks the configuration syntax.\n- `sudo named-checkzone school.lk /etc/bind/db.school.lk`: checks a zone file.\n- `sudo systemctl status bind9`: is the service running?\n- `dig www.school.lk @192.168.1.10` or `nslookup www.school.lk 192.168.1.10`: forward lookup against this server.\n- `dig -x 192.168.1.20 @192.168.1.10`: reverse lookup.\n- `dig MX school.lk`: mail record.",
     "r": "7.5.3"
    },
    {
     "q": "Describe two attacks against DNS and how to protect against them.",
     "m": 5,
     "a": "- **Cache poisoning (spoofing):** fake answers are planted in a resolver's cache, sending users to malicious sites. Protect with **DNSSEC**, patched software and random source ports.\n- **DNS amplification DDoS:** small spoofed queries to open resolvers produce large replies aimed at a victim. Protect by **not running an open resolver** (restrict recursion to your own clients) and by rate limiting.\n- **Domain hijacking:** an attacker takes over the registrar account. Protect with a strong password, MFA and registrar lock.",
     "r": "7.5.4"
    },
    {
     "q": "Describe the steps to register a domain name and make a website reachable with it.",
     "m": 6,
     "a": "1. Choose a name and check that it is available.\n2. Choose the TLD and an accredited registrar.\n3. Register and pay; enable WHOIS privacy, auto-renew, registrar lock and MFA.\n4. Set the name servers (the registrar's, the host's or your own).\n5. Create the A/AAAA record for the website (and MX and TXT records for email).\n6. Wait for propagation, test with `dig`, and upload the site to the server the A record points to.",
     "r": "7.6"
    }
   ]
  },
  {
   "title": "Unit 8: Network Security",
   "items": [
    {
     "q": "Explain the CIA triad, giving one threat to each part.",
     "m": 6,
     "a": "- **Confidentiality:** only authorised people can read data. Threat: eavesdropping on unencrypted traffic, or stolen passwords.\n- **Integrity:** data is not changed without authorisation. Threat: a man-in-the-middle altering data, or malware modifying files.\n- **Availability:** systems are usable when needed. Threat: a DDoS attack, ransomware or hardware failure.",
     "r": "8.1"
    },
    {
     "q": "List six security settings used to harden a new server.",
     "m": 6,
     "a": "- Apply all updates and enable automatic security updates.\n- Remove or disable unused services and close unused ports.\n- Use strong passwords or SSH keys with MFA, and disable direct root login.\n- Enable a host firewall with default deny.\n- Give least-privilege accounts, with separate admin and daily accounts.\n- Turn on logging, monitoring and NTP time.\n- Keep tested backups (the 3-2-1 rule).\n- Separate networks with VLANs and a DMZ.",
     "r": "8.1"
    },
    {
     "q": "Compare packet-filtering, stateful, application (proxy) and next-generation firewalls.",
     "m": 6,
     "a": "- **Packet filter (stateless):** checks each packet's addresses, protocol and ports against rules; fast but simple.\n- **Stateful:** tracks connections and automatically allows the replies to permitted traffic; the standard choice for most firewalls.\n- **Application or proxy firewall:** understands application protocols (such as HTTP) and can inspect content; slower.\n- **Next-generation (NGFW):** stateful filtering plus application awareness, intrusion prevention and user identity in one device.",
     "r": "8.2.1"
    },
    {
     "q": "What is a DMZ? Explain where a public web server and an internal database server should be placed, and why.",
     "m": 6,
     "a": "A **DMZ** (demilitarised zone) is a separate network segment between the Internet and the internal LAN, protected by firewall rules on both sides.\n\nThe **public web server** goes in the DMZ: the Internet may reach only ports 80 and 443 on it. The **database server** stays on the internal network, and only the web server may connect to it on the database port. If the web server is compromised, the attacker still cannot reach the internal network freely.",
     "r": "8.2.2"
    },
    {
     "q": "Write UFW commands that block all incoming traffic by default, allow outgoing traffic, allow SSH, HTTP and HTTPS, enable the firewall and show the rules.",
     "m": 8,
     "a": "```shell\nsudo ufw default deny incoming\nsudo ufw default allow outgoing\nsudo ufw allow OpenSSH          # or: sudo ufw allow 22/tcp\nsudo ufw allow 80/tcp\nsudo ufw allow 443/tcp\nsudo ufw enable\nsudo ufw status verbose\n```\n\nSSH is allowed **before** enabling, so the remote session is not cut off.",
     "r": "8.2.3"
    },
    {
     "q": "An administrator runs `iptables -A INPUT -p tcp --dport 80 -j ACCEPT` and then `iptables -A INPUT -j DROP` on a remote server. Explain the problem and write a safer rule set.",
     "m": 6,
     "a": "The DROP rule blocks everything else, including the administrator's **SSH** session, local (loopback) traffic and the **replies** to the server's own outgoing connections (DNS, updates). The server becomes unreachable remotely.\n\n```shell\nsudo iptables -A INPUT -i lo -j ACCEPT\nsudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT\nsudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT\nsudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT\nsudo iptables -A INPUT -j DROP\n```\n\nRules are lost at reboot unless saved (for example with `iptables-persistent`).",
     "r": "8.2.3"
    },
    {
     "q": "Compare symmetric and asymmetric encryption, giving an example algorithm of each.",
     "m": 6,
     "a": "| | Symmetric | Asymmetric\n| Keys | One shared secret key | A key pair: public and private\n| Speed | Fast, suits bulk data | Slow, suits small data and key exchange\n| Key problem | The key must be shared securely | The public key can be shared openly\n| Examples | AES, ChaCha20 | RSA, ECC (ECDH, ECDSA)",
     "r": "8.3.1"
    },
    {
     "q": "Explain the hybrid approach used by HTTPS.",
     "m": 5,
     "a": "Asymmetric cryptography is too slow for bulk data, and symmetric cryptography has the key-sharing problem. HTTPS combines them:\n\n1. The server proves its identity with its certificate and public key.\n2. The client and server use asymmetric methods (an ECDHE key exchange) to agree a secret **session key**.\n3. All the data is then encrypted quickly with symmetric encryption (for example AES) using that session key.",
     "r": "8.3.3"
    },
    {
     "q": "What is a hash function? Give two uses, and explain how passwords should be stored.",
     "m": 5,
     "a": "A hash function turns any input into a fixed-length value (SHA-256 gives 256 bits). It is one-way, and any change to the input gives a completely different hash.\n\nUses: checking file integrity (comparing a download's checksum), digital signatures, and password storage.\n\nPasswords should be stored as hashes made with a **unique salt** for each user and a **deliberately slow** algorithm such as bcrypt or Argon2, so stolen hashes cannot be cracked quickly or matched against precomputed tables.",
     "r": "8.3.4"
    },
    {
     "q": "Explain how a digital signature is created and verified, and what it proves.",
     "m": 6,
     "a": "**Signing:** the sender hashes the message and uses their **private key** to create the signature from the hash (in RSA, this is encrypting the hash), then sends the message and the signature.\n\n**Verifying:** the receiver hashes the received message and uses the sender's **public key** to check the signature against that hash. If they match, the signature is valid.\n\nIt proves **authenticity** (only the private-key holder could sign), **integrity** (the message has not changed) and **non-repudiation** (the sender cannot deny signing).",
     "r": "8.4"
    },
    {
     "q": "What is a digital certificate? List its main contents and explain the role of the CA chain of trust.",
     "m": 6,
     "a": "A digital certificate (X.509) binds a **public key** to an identity, such as a domain name, and is signed by a Certificate Authority.\n\nContents: subject (domain or owner), public key, issuer (CA), validity dates, serial number, allowed uses and the CA's signature.\n\nBrowsers trust a set of **root CAs**. A root signs an **intermediate CA**, which signs the server certificate. The browser checks each signature up the chain to a trusted root, and checks the name and dates.",
     "r": "8.5"
    },
    {
     "q": "Write the commands to (a) get a free Let's Encrypt certificate for an Apache site and (b) create and inspect a self-signed certificate with OpenSSL.",
     "m": 6,
     "a": "(a) Let's Encrypt (needs a real domain that points to the server):\n\n```shell\nsudo apt install certbot python3-certbot-apache\nsudo certbot --apache -d www.example.com\nsudo certbot renew --dry-run\n```\n\n(b) A self-signed certificate:\n\n```shell\nopenssl req -x509 -newkey rsa:2048 -nodes -keyout key.pem -out cert.pem -days 365 -subj \"/CN=localhost\"\nopenssl x509 -in cert.pem -text -noout\n```",
     "r": "8.5.3"
    }
   ]
  },
  {
   "title": "Unit 9: Network Troubleshooting",
   "items": [
    {
     "q": "List the seven steps of the troubleshooting methodology in order.",
     "m": 7,
     "a": "1. Identify the problem (gather information, ask what changed, reproduce it, define the scope).\n2. Establish a theory of probable cause.\n3. Test the theory to determine the cause.\n4. Establish a plan of action and identify its impact.\n5. Implement the solution, or escalate.\n6. Verify full system functionality and apply preventive measures.\n7. Document the findings, actions and outcomes.",
     "r": "9.1"
    },
    {
     "q": "Explain the top-down, bottom-up and divide-and-conquer troubleshooting approaches, and when each is useful.",
     "m": 6,
     "a": "- **Top-down:** start at the application layer and work down; useful when one application fails but others work.\n- **Bottom-up:** start at the physical layer (cables, lights, power) and work up; best when nothing works.\n- **Divide and conquer:** start in the middle, usually with `ping` at layer 3, then move up or down depending on the result; quickest for experienced technicians.\n\nAlso: follow the path, compare with a working system and substitute known-good parts.",
     "r": "9.1"
    },
    {
     "q": "Give a typical fault and a check for each of layers 1, 2, 3, 4 and 7.",
     "m": 6,
     "a": "| Layer | Typical fault | Check\n| 1 Physical | Unplugged or damaged cable | Link lights, swap the cable\n| 2 Data link | Port in the wrong VLAN | `show vlan brief`, MAC table\n| 3 Network | Wrong IP, mask or gateway | `ipconfig`, `ping` the gateway\n| 4 Transport | Port blocked by a firewall | `ss -tulpn`, `Test-NetConnection -Port`\n| 7 Application | Service stopped or expired certificate | Service status, logs, browser error",
     "r": "9.2"
    },
    {
     "q": "State what each of these commands shows: `ipconfig /all`, `ping`, `tracert`, `nslookup`, `netstat -ano` and `arp -a`.",
     "m": 6,
     "a": "- `ipconfig /all`: IP address, mask, gateway, DNS servers, MAC address and DHCP details.\n- `ping`: whether a host is reachable at layer 3, and the round-trip time.\n- `tracert`: each router on the path, showing where packets stop.\n- `nslookup`: whether a name resolves, and which DNS server answered.\n- `netstat -ano`: connections and listening ports, with process IDs.\n- `arp -a`: the IP-to-MAC mappings in the ARP cache (useful for duplicate IP addresses).",
     "r": "9.3"
    },
    {
     "q": "Explain what each of these ping results means: \"Reply from\", \"Request timed out\", \"Destination host unreachable\" and high or variable times.",
     "m": 6,
     "a": "- **Reply from the address:** the layer 3 path works in both directions.\n- **Request timed out:** the host is down, ICMP is blocked by a firewall, or there is no route back.\n- **Destination host unreachable:** there is no route, or ARP failed; check the IP address, mask and gateway.\n- **High or variable time:** congestion, wireless interference or an overloaded device.",
     "r": "9.3"
    },
    {
     "q": "A user cannot reach the Internet. Describe the standard sequence of tests and what a failure at each step tells you.",
     "m": 8,
     "a": "1. `ping 127.0.0.1`: if it fails, the TCP/IP software on the PC is faulty.\n2. `ipconfig /all`: a 169.254.x.x address means DHCP failed; also check the mask, gateway and DNS settings.\n3. `ping` the default gateway: failure means a local network problem (cable, Wi-Fi, switch port, VLAN).\n4. `ping 8.8.8.8`: failure means a router, WAN or ISP problem.\n5. `ping www.google.com`: failure while step 4 works means a **DNS** fault.\n6. `tracert 8.8.8.8`: shows the hop where packets stop.",
     "r": "9.4"
    },
    {
     "q": "Describe five common network or server faults, with the likely cause and fix of each.",
     "m": 6,
     "a": "| Symptom | Likely cause | Fix\n| 169.254.x.x address | DHCP unreachable | Check the link and DHCP service; renew the lease\n| Can ping an IP but not a name | DNS problem | Check DNS settings; `nslookup`; flush the cache\n| Local hosts work, Internet does not | Wrong gateway or WAN fault | Correct the gateway; check the router\n| IP conflict message | Duplicate static IP | Use DHCP reservations; find the device with `arp -a`\n| Website down but server pings | Web service stopped or port blocked | `systemctl status`; check the firewall for ports 80 and 443\n| Certificate warning | Expired or mismatched certificate, or wrong client clock | Renew the certificate; check the name and time",
     "r": "9.5"
    },
    {
     "q": "Why should faults be documented? List the items a trouble ticket should record.",
     "m": 6,
     "a": "Documentation builds a knowledge base, so repeat faults are fixed faster. It shows patterns, supports handover between staff and gives evidence of the work done.\n\nA ticket records: the date and time, who reported it, the symptom, the affected systems, the tests performed, the root cause, the fix applied, the time to resolve, and any follow-up or preventive action.",
     "r": "9.7"
    }
   ]
  }
 ]
};
