/*
  Site settings and navigation. Edit this file to change the course name, footer text,
  unit titles or the order of pages; every page reads it when it loads.
  Topic files live in the pages/ folder. "icon" is the inner SVG of a 24x24 line icon.
*/
window.SITE = {
  "title": "Server Administration and Networking",
  "course": "Diploma in Full Stack Software Development",
  "level": "NVQ Level 5",
  "programme": "Diploma programme",
  "tagline": "Student learning material",
  "author": "Jayashan Liyanage",
  "credentials": "Dip. in ICT | B.Tech. in Software Engineering | M.Sc. in Software Engineering (UK)",
  "searchHint": "Search topics, e.g. subnetting, DNS, firewall",
  "counts": {
    "code": 24,
    "figures": 66
  },
  "chapters": [
    {
      "n": 1,
      "kind": "unit",
      "label": "Unit 1",
      "title": "Data Communication Fundamentals",
      "color": "#0891b2",
      "icon": "<path d=\"M2 12h3l3-8 4 16 3-8h7\"/>",
      "file": "u01.html",
      "topics": [
        {
          "num": "1.1",
          "title": "What is data communication?",
          "file": "u01-1.html"
        },
        {
          "num": "1.2",
          "title": "Components of a data communication system",
          "file": "u01-2.html"
        },
        {
          "num": "1.3",
          "title": "Data flow (transmission direction)",
          "file": "u01-3.html"
        },
        {
          "num": "1.4",
          "title": "Analog and digital signals",
          "file": "u01-4.html"
        },
        {
          "num": "1.5",
          "title": "Serial and parallel transmission",
          "file": "u01-5.html"
        },
        {
          "num": "1.6",
          "title": "Transmission media",
          "file": "u01-6.html"
        },
        {
          "num": "1.7",
          "title": "Performance measures",
          "file": "u01-7.html"
        },
        {
          "num": "1.8",
          "title": "Error detection basics",
          "file": "u01-8.html"
        },
        {
          "num": "1.9",
          "title": "Multiplexing and switching",
          "file": "u01-9.html"
        },
        {
          "num": "1.10",
          "title": "Hands-on lab: Measure bandwidth and latency",
          "file": "u01-lab.html"
        },
        {
          "num": "1.11",
          "title": "Review: key terms and self-check",
          "file": "u01-review.html"
        }
      ]
    },
    {
      "n": 2,
      "kind": "unit",
      "label": "Unit 2",
      "title": "Computer Network Fundamentals",
      "color": "#2563eb",
      "icon": "<rect x=\"9\" y=\"2\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"2\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"16\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"/><path d=\"M5 16v-4h14v4M12 12V8\"/>",
      "file": "u02.html",
      "topics": [
        {
          "num": "2.1",
          "title": "What is a computer network?",
          "file": "u02-1.html"
        },
        {
          "num": "2.2",
          "title": "Classification by geographic scale",
          "file": "u02-2.html"
        },
        {
          "num": "2.3",
          "title": "Classification by role",
          "file": "u02-3.html"
        },
        {
          "num": "2.4",
          "title": "Network topologies",
          "file": "u02-4.html"
        },
        {
          "num": "2.5",
          "title": "The Internet, intranet and extranet",
          "file": "u02-5.html"
        },
        {
          "num": "2.6",
          "title": "Ethernet and LAN technologies",
          "file": "u02-6.html"
        },
        {
          "num": "2.7",
          "title": "Cabling",
          "file": "u02-7.html"
        },
        {
          "num": "2.8",
          "title": "Basic network design and structured cabling",
          "file": "u02-8.html"
        },
        {
          "num": "2.9",
          "title": "Network services at a glance",
          "file": "u02-9.html"
        },
        {
          "num": "2.10",
          "title": "Hands-on lab: Build a small star network",
          "file": "u02-lab.html"
        },
        {
          "num": "2.11",
          "title": "Review: key terms and self-check",
          "file": "u02-review.html"
        }
      ]
    },
    {
      "n": 3,
      "kind": "unit",
      "label": "Unit 3",
      "title": "Network Devices and Protocols",
      "color": "#7c3aed",
      "icon": "<path d=\"m12 2 10 5-10 5L2 7z\"/><path d=\"m2 17 10 5 10-5\"/><path d=\"m2 12 10 5 10-5\"/>",
      "file": "u03.html",
      "topics": [
        {
          "num": "3.1",
          "title": "Introduction to network devices",
          "file": "u03-1.html"
        },
        {
          "num": "3.2",
          "title": "Install and configure network devices",
          "file": "u03-2.html"
        },
        {
          "num": "3.2.1",
          "title": "Planning checklist",
          "file": "u03-2-1.html"
        },
        {
          "num": "3.2.2",
          "title": "Basic switch configuration",
          "file": "u03-2-2.html"
        },
        {
          "num": "3.2.3",
          "title": "Basic router configuration",
          "file": "u03-2-3.html"
        },
        {
          "num": "3.2.4",
          "title": "VLANs and trunk ports",
          "file": "u03-2-4.html"
        },
        {
          "num": "3.2.5",
          "title": "Wireless access point and home router",
          "file": "u03-2-5.html"
        },
        {
          "num": "3.2.6",
          "title": "Verification commands",
          "file": "u03-2-6.html"
        },
        {
          "num": "3.3",
          "title": "Network protocols",
          "file": "u03-3.html"
        },
        {
          "num": "3.3.1",
          "title": "TCP and UDP",
          "file": "u03-3-1.html"
        },
        {
          "num": "3.3.2",
          "title": "DHCP and the DORA process",
          "file": "u03-3-2.html"
        },
        {
          "num": "3.4",
          "title": "Reference models",
          "file": "u03-4.html"
        },
        {
          "num": "3.4.1",
          "title": "The OSI model",
          "file": "u03-4-1.html"
        },
        {
          "num": "3.4.2",
          "title": "The TCP/IP model and OSI comparison",
          "file": "u03-4-2.html"
        },
        {
          "num": "3.4.3",
          "title": "Encapsulation",
          "file": "u03-4-3.html"
        },
        {
          "num": "3.5",
          "title": "Hands-on lab: Devices, VLANs and packet capture",
          "file": "u03-lab.html"
        },
        {
          "num": "3.6",
          "title": "Review: key terms and self-check",
          "file": "u03-review.html"
        }
      ]
    },
    {
      "n": 4,
      "kind": "unit",
      "label": "Unit 4",
      "title": "Addressing Network Devices",
      "color": "#059669",
      "icon": "<path d=\"M4 9h16M4 15h16M10 3 8 21M16 3l-2 18\"/>",
      "file": "u04.html",
      "topics": [
        {
          "num": "4.1",
          "title": "MAC address",
          "file": "u04-1.html"
        },
        {
          "num": "4.2",
          "title": "Number systems (needed for IP addressing)",
          "file": "u04-2.html"
        },
        {
          "num": "4.3",
          "title": "IPv4 addressing",
          "file": "u04-3.html"
        },
        {
          "num": "4.3.1",
          "title": "Classful addressing",
          "file": "u04-3-1.html"
        },
        {
          "num": "4.3.2",
          "title": "Private addresses and NAT",
          "file": "u04-3-2.html"
        },
        {
          "num": "4.3.3",
          "title": "Assignment and delivery types",
          "file": "u04-3-3.html"
        },
        {
          "num": "4.4",
          "title": "Subnet masks and CIDR",
          "file": "u04-4.html"
        },
        {
          "num": "4.5",
          "title": "Subnetting step by step",
          "file": "u04-5.html"
        },
        {
          "num": "4.5.1",
          "title": "VLSM and the default gateway",
          "file": "u04-5-1.html"
        },
        {
          "num": "4.6",
          "title": "IPv6 addressing",
          "file": "u04-6.html"
        },
        {
          "num": "4.7",
          "title": "Hands-on lab: Addressing and subnetting",
          "file": "u04-lab.html"
        },
        {
          "num": "4.8",
          "title": "Review: key terms and self-check",
          "file": "u04-review.html"
        }
      ]
    },
    {
      "n": 5,
      "kind": "unit",
      "label": "Unit 5",
      "title": "Server Installation, Setting Up and Configuration",
      "color": "#4f46e5",
      "icon": "<rect x=\"2\" y=\"2\" width=\"20\" height=\"8\" rx=\"2\"/><rect x=\"2\" y=\"14\" width=\"20\" height=\"8\" rx=\"2\"/><path d=\"M6 6h.01M6 18h.01\"/>",
      "file": "u05.html",
      "topics": [
        {
          "num": "5.1",
          "title": "What is a server and why is a server OS required?",
          "file": "u05-1.html"
        },
        {
          "num": "5.2",
          "title": "Types of servers (by role)",
          "file": "u05-2.html"
        },
        {
          "num": "5.3",
          "title": "Server hosting and deployment options",
          "file": "u05-3.html"
        },
        {
          "num": "5.3.1",
          "title": "Selecting a server",
          "file": "u05-3-1.html"
        },
        {
          "num": "5.4",
          "title": "Server operating systems",
          "file": "u05-4.html"
        },
        {
          "num": "5.4.1",
          "title": "Installation procedure",
          "file": "u05-4-1.html"
        },
        {
          "num": "5.4.2",
          "title": "Practical: Ubuntu Server and a static IP",
          "file": "u05-4-2.html"
        },
        {
          "num": "5.4.3",
          "title": "Windows Server first tasks",
          "file": "u05-4-3.html"
        },
        {
          "num": "5.5",
          "title": "Server access methodologies",
          "file": "u05-5.html"
        },
        {
          "num": "5.6",
          "title": "Server applications and tools",
          "file": "u05-6.html"
        },
        {
          "num": "5.7",
          "title": "Ports",
          "file": "u05-7.html"
        },
        {
          "num": "5.8",
          "title": "Hands-on lab: Build a Linux server",
          "file": "u05-lab.html"
        },
        {
          "num": "5.9",
          "title": "Review: key terms and self-check",
          "file": "u05-review.html"
        }
      ]
    },
    {
      "n": 6,
      "kind": "unit",
      "label": "Unit 6",
      "title": "Virtual Private Network (VPN)",
      "color": "#0d9488",
      "icon": "<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/>",
      "file": "u06.html",
      "topics": [
        {
          "num": "6.1",
          "title": "Concept",
          "file": "u06-1.html"
        },
        {
          "num": "6.2",
          "title": "Types of VPN",
          "file": "u06-2.html"
        },
        {
          "num": "6.3",
          "title": "Tunnelling and encapsulation",
          "file": "u06-3.html"
        },
        {
          "num": "6.4",
          "title": "VPN protocols",
          "file": "u06-4.html"
        },
        {
          "num": "6.5",
          "title": "Benefits and limits",
          "file": "u06-5.html"
        },
        {
          "num": "6.6",
          "title": "Quick set-up outline (WireGuard on Ubuntu)",
          "file": "u06-6.html"
        },
        {
          "num": "6.7",
          "title": "Hands-on lab: Build a VPN",
          "file": "u06-lab.html"
        },
        {
          "num": "6.8",
          "title": "Review: key terms and self-check",
          "file": "u06-review.html"
        }
      ]
    },
    {
      "n": 7,
      "kind": "unit",
      "label": "Unit 7",
      "title": "Domain Name System (DNS)",
      "color": "#ea580c",
      "icon": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z\"/>",
      "file": "u07.html",
      "topics": [
        {
          "num": "7.1",
          "title": "Why DNS?",
          "file": "u07-1.html"
        },
        {
          "num": "7.2",
          "title": "DNS architecture",
          "file": "u07-2.html"
        },
        {
          "num": "7.3",
          "title": "Name resolution step by step",
          "file": "u07-3.html"
        },
        {
          "num": "7.4",
          "title": "DNS record types",
          "file": "u07-4.html"
        },
        {
          "num": "7.5",
          "title": "Configuring a DNS server",
          "file": "u07-5.html"
        },
        {
          "num": "7.5.1",
          "title": "BIND9 on Ubuntu",
          "file": "u07-5-1.html"
        },
        {
          "num": "7.5.2",
          "title": "Windows Server DNS",
          "file": "u07-5-2.html"
        },
        {
          "num": "7.5.3",
          "title": "Reverse zones, management and testing",
          "file": "u07-5-3.html"
        },
        {
          "num": "7.5.4",
          "title": "DNS attacks and protection",
          "file": "u07-5-4.html"
        },
        {
          "num": "7.6",
          "title": "Obtaining and registering a domain",
          "file": "u07-6.html"
        },
        {
          "num": "7.7",
          "title": "Hands-on lab: DNS lookups and a DNS server",
          "file": "u07-lab.html"
        },
        {
          "num": "7.8",
          "title": "Review: key terms and self-check",
          "file": "u07-review.html"
        }
      ]
    },
    {
      "n": 8,
      "kind": "unit",
      "label": "Unit 8",
      "title": "Network Security",
      "color": "#dc2626",
      "icon": "<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/>",
      "file": "u08.html",
      "topics": [
        {
          "num": "8.1",
          "title": "Why security settings matter",
          "file": "u08-1.html"
        },
        {
          "num": "8.2",
          "title": "Firewall",
          "file": "u08-2.html"
        },
        {
          "num": "8.2.1",
          "title": "Types of firewall",
          "file": "u08-2-1.html"
        },
        {
          "num": "8.2.2",
          "title": "Rule design, DMZ and ACLs",
          "file": "u08-2-2.html"
        },
        {
          "num": "8.2.3",
          "title": "Configuring firewalls: UFW, Windows and iptables",
          "file": "u08-2-3.html"
        },
        {
          "num": "8.3",
          "title": "Cryptography basics",
          "file": "u08-3.html"
        },
        {
          "num": "8.3.1",
          "title": "Symmetric encryption",
          "file": "u08-3-1.html"
        },
        {
          "num": "8.3.2",
          "title": "Asymmetric (public-key) encryption",
          "file": "u08-3-2.html"
        },
        {
          "num": "8.3.3",
          "title": "Comparison and the hybrid approach",
          "file": "u08-3-3.html"
        },
        {
          "num": "8.3.4",
          "title": "Hashing",
          "file": "u08-3-4.html"
        },
        {
          "num": "8.4",
          "title": "Digital signature",
          "file": "u08-4.html"
        },
        {
          "num": "8.5",
          "title": "Digital certificate",
          "file": "u08-5.html"
        },
        {
          "num": "8.5.1",
          "title": "PKI and certificate types",
          "file": "u08-5-1.html"
        },
        {
          "num": "8.5.2",
          "title": "How a browser trusts an HTTPS site",
          "file": "u08-5-2.html"
        },
        {
          "num": "8.5.3",
          "title": "Practical: HTTPS certificates",
          "file": "u08-5-3.html"
        },
        {
          "num": "8.6",
          "title": "Hands-on lab: Firewalls and cryptography",
          "file": "u08-lab.html"
        },
        {
          "num": "8.7",
          "title": "Review: key terms and self-check",
          "file": "u08-review.html"
        }
      ]
    },
    {
      "n": 9,
      "kind": "unit",
      "label": "Unit 9",
      "title": "Network Troubleshooting",
      "color": "#ca8a04",
      "icon": "<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"/>",
      "file": "u09.html",
      "topics": [
        {
          "num": "9.1",
          "title": "Troubleshooting methodology",
          "file": "u09-1.html"
        },
        {
          "num": "9.2",
          "title": "Layer-by-layer symptoms",
          "file": "u09-2.html"
        },
        {
          "num": "9.3",
          "title": "Command-line tools",
          "file": "u09-3.html"
        },
        {
          "num": "9.4",
          "title": "The \"cannot reach the Internet\" sequence",
          "file": "u09-4.html"
        },
        {
          "num": "9.5",
          "title": "Common faults and fixes",
          "file": "u09-5.html"
        },
        {
          "num": "9.6",
          "title": "Operating system and application troubleshooting",
          "file": "u09-6.html"
        },
        {
          "num": "9.7",
          "title": "Documentation",
          "file": "u09-7.html"
        },
        {
          "num": "9.8",
          "title": "Hands-on lab: Fault-finding exercise",
          "file": "u09-lab.html"
        },
        {
          "num": "9.9",
          "title": "Review: key terms and self-check",
          "file": "u09-review.html"
        }
      ]
    },
    {
      "n": "R",
      "kind": "revision",
      "label": "Final Revision",
      "title": "Final Revision and Self-Assessment",
      "color": "#9333ea",
      "icon": "<path d=\"M9 11l3 3L22 4\"/><path d=\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\"/>",
      "file": "revision.html",
      "topics": [
        {
          "num": "R.1",
          "title": "Multiple-Choice Questions",
          "file": "revision-mcq.html"
        },
        {
          "num": "R.2",
          "title": "Structured Questions",
          "file": "revision-structured.html"
        },
        {
          "num": "R.3",
          "title": "Topic Checklist",
          "file": "revision-checklist.html"
        }
      ],
      "badge": "R"
    },
    {
      "n": "A",
      "kind": "appendix",
      "label": "Appendices",
      "title": "Appendices",
      "color": "#475569",
      "icon": "<path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"/><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\"/>",
      "file": "appendices.html",
      "topics": [
        {
          "num": "Appendix A",
          "title": "Glossary",
          "file": "appendix-a.html"
        },
        {
          "num": "Appendix B",
          "title": "Quick Reference Cards",
          "file": "appendix-b.html"
        },
        {
          "num": "Appendix C",
          "title": "Lab Set-up and Study Plan",
          "file": "appendix-c.html"
        },
        {
          "num": "Appendix D",
          "title": "References and Free Resources",
          "file": "appendix-d.html"
        }
      ],
      "badge": "A"
    }
  ]
};
