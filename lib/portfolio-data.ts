export const profile = {
  name: 'Nadia Kamel',
  title: 'Cybersecurity & IT Professional',
  intro:
    'Cybersecurity graduate interested in IT Support, Help Desk, SOC Analyst, and entry-level cybersecurity opportunities.',
}

export const contactLinks = {
  linkedin: 'https://www.linkedin.com/in/your-profile',
  github: 'https://github.com/your-username',
  email: 'mailto:your.email@example.com',
}

export const certifications = [
  { name: 'CompTIA A+', issuer: 'CompTIA' },
  { name: 'CompTIA Network+', issuer: 'CompTIA' },
  { name: 'CompTIA Security+', issuer: 'CompTIA' },
  { name: 'Cisco CyberOps Associate', issuer: 'Cisco' },
  { name: 'Cisco Certified Support Technician (CCST) – Cybersecurity', issuer: 'Cisco' },
  { name: 'CWNA', issuer: 'Certified Wireless Network Administrator' },
  { name: 'CCNA Introduction to Networks', issuer: 'Cisco' },
]

export const skillGroups = [
  { label: 'Operating Systems & Identity', skills: ['Windows', 'Linux', 'Active Directory'] },
  { label: 'Networking', skills: ['Networking', 'TCP/IP', 'DNS', 'DHCP'] },
  {
    label: 'Security Tools',
    skills: ['Wireshark', 'Splunk', 'Sysmon', 'ELK/Kibana', 'Suricata', 'Nessus'],
  },
  { label: 'Cloud & Virtualization', skills: ['AWS EC2', 'Azure', 'VirtualBox', 'Docker'] },
  { label: 'Scripting', skills: ['PowerShell', 'Python'] },
]

type ExperienceEntry = {
  role: string
  organization: string
  location?: string
  period?: string
  description?: string
  highlights?: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Cybersecurity Support Consultant',
    organization: 'Ekkor',
    location: 'Remote',
    period: 'September 2025 – July 2026',
    description:
      'Reviewed security alerts and system logs, supported endpoint and network security, performed vulnerability scans and security checks, documented findings, and escalated suspicious activity.',
  },
  {
    role: 'Network & Endpoint Security Consultant',
    organization: 'Cerebro Technologie',
    location: 'Remote',
    period: 'March 2024 – July 2025',
    description:
      'Supported endpoint protection, user access, VPNs, secure connectivity, and troubleshooting of TCP/IP, DNS, DHCP, and firewall issues.',
  },
  {
    role: 'SOC Analyst Intern',
    organization: 'Carolina Cybersecurity Operations Center',
    highlights: [
      'Security monitoring',
      'Splunk dashboards',
      'Phishing and brute-force analysis',
      'Wireshark network analysis',
      'Incident response',
      'AWS security',
    ],
  },
]

export const projects = [
  {
    title: 'Home SOC Lab',
    description: 'A home security operations lab built with Splunk, Sysmon, and ELK.',
    tools: ['Splunk', 'Sysmon', 'ELK'],
  },
  {
    title: 'SOC Incident Alert Lab',
    description: 'A lab focused on SOC incident alerts.',
    tools: ['SOC', 'Incident Alerts'],
  },
  {
    title: 'Kali Linux & Metasploit Lab',
    description: 'A cybersecurity lab using Kali Linux and Metasploit.',
    tools: ['Kali Linux', 'Metasploit'],
  },
  {
    title: 'Detection Engineering',
    description:
      'Developed Suricata IDS rules for simulated command-and-control traffic and YARA rules to identify malicious files.',
    tools: ['Suricata', 'YARA'],
  },
  {
    title: 'Digital Forensics',
    description:
      'Analyzed forensic artifacts to identify suspicious domains, URLs, email addresses, and search activity.',
    tools: ['Forensic Artifacts'],
  },
]
