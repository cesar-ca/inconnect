import { useEffect, useState } from "react";
import { SectionTitleQuiz } from "../../SectionTitleLeft";
import { Link } from "react-router-dom";
import './StylesQuiz.scss';

import Api from "../../Api";

import {useAuthContext} from '../../AuthContext';

function ComProtocols() {

  const {user} = useAuthContext();
    const [skills, setSkills] = useState([]);

    // UseEffect calls the API when it loads
    useEffect(function() {
      Api.skills.index().then(response => setSkills(response.data));
    }, []);


    return (

        <main className="myContainer">
        <div className="row">
          <SectionTitleQuiz sectionTitle={"Communication Protocols"} quizSectionValue={"/com_protocols_quiz"}/>
          <div className="col-md-6" id="leftRegister">
          <h1 className="text-center">Fundamentals</h1>

            <p>A network protocol is an established set of rules that determine how data is transmitted between
different devices in the same network. Essentially, it allows connected devices to communicate with
each other, regardless of any differences in their internal processes, structure or design. 

<br></br> <br></br>

A web browser is a software that allows users to retrieve, present and navigate resources from the
world wide web. The web communication protocols allow the transfer of the
information via the Internet. Web browsers use the protocols to request
information from a web server, which is then displayed on the browser screen in the form of
text and images. Communication network protocol Skills are required in different types of roles, such as Network
Protocols Engineer which is a specialized type of Software Engineer. Among other roles,
knowledge in network communication protocols can come in handy in roles such as Computer
Network Analyst, Computer Network Engineer.

<br></br>
<br></br>
Common types of communication protocols include the following:

<br></br>
<br></br>

<ul>
- Automation: These protocols are used to automate different processes in both commercial
and personal settings, such as in smart buildings, cloud technology or self-driving
vehicles.
</ul>
<ul>
    
- Routing: Routing protocols permit communication between routers and other network
devices. There are also routing protocols specifically for ad hoc networks.
</ul>
<ul>
- File transfer: If you have ever moved files from one device to another, either via a
physical or digital medium, you've used file transfer protocols (FTP).
</ul>
<ul>
- Internet Protocol: Internet Protocol (IP) allows data to be sent between devices via the
internet. The internet could not operate as it currently does without IP.
</ul>

<br></br>
Here are a few examples of the most commonly used network protocols:



<br></br><br></br>
<ul>
- Hypertext Transfer Protocol (HTTP): This Internet Protocol defines how data is
transmitted over the internet and determines how web servers and browsers should
respond to commands. This protocol (or its secure counterpart, HTTPS) appears at the
beginning of various URLs or web addresses online.
</ul>

<ul>
- Secure Socket Shell (SSH): This protocol provides secure access to a computer, even if
it's on an unsecured network. SSH is particularly useful for network administrators who
need to manage different systems remotely.
</ul>

<ul>
- Short Message Service (SMS): This communications protocol was created to send and
receive text messages over cellular networks. SMS refers exclusively to text-based
messages. Pictures, videos or other media require Multimedia Messaging Service
(MMS), an extension of the SMS protocol.
</ul>

</p>
  
          </div>
        </div>
      </main> 
    )
}

export default ComProtocols;