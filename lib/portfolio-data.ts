export const profile = {
  name: 'Nadia Aarab',
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

export const experience = {
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
}

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
]
