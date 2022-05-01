import { SectionTitleQuiz } from "../../SectionTitleLeft";

function NetworkSecurity() {

    return (
      <main className="myContainer">
      <div className="row">
        <SectionTitleQuiz sectionTitle={"Network Security"} quizSectionValue={"/network_security_quiz"}/>
        <div className="col-md-6" id="leftRegister">
        <h1 className="text-center">Fundamentals</h1>

            <p>
            Network security is vital to protect customer data and information,
keep shared data safe and ensure reliable access and
network performance as well as threat protection.

<br></br> <br></br>

Knowing about network security software is an important skill for Network security
engineers. Organizations maintain a vigilant approach to protecting systems
and data, security engineers play a key role in this process. The
Security engineers are responsible for a number of functions associated with the
security, from ensuring software security to selecting, building and
implement broader network security systems.

<br></br>
<br></br>
Types of Network Security approaches


<br></br>
<br></br>

<ul>
- Firewall: Firewall, firewalls control incoming and outgoing traffic in
networks, with predetermined security rules.

</ul>
<ul>- VPN: The remote access VPN provides remote and secure access to the network of
a company to individual clients. Each client has loaded a software of
VPN client or use a web-based client.
</ul>
<ul>
- Cloud network security: applications are no longer exclusively hosted
in the facilities of a data center. Data center protection
modern technology requires greater flexibility and innovation to keep pace with
migration of application workloads to the cloud.
</ul>

<br></br>
Network security protects against:

<br></br><br></br>
<ul>

- Virus: A virus is a malicious downloadable file that can remain
idle and replicated by changing other computer programs.
</ul>

<ul>

- Trojan: A backdoor program that creates a gateway for
malicious users to access the system using what appears to be an
actual program.
</ul>

<ul>
- Worms: they can slow down computer networks by consuming bandwidth and
decrease the efficiency of your computer to process data.
</ul>

Network security is a high priority for organizations that work with data
and network systems. In addition to protecting the assets and data integrity of the
external vulnerabilities, network security can also manage traffic
more efficiently, improve network performance and ensure the
secure data exchange between data sources.
</p>
  
          </div>
        </div>
      </main> 
    )
}

export default NetworkSecurity;