import { SectionTitleQuiz } from "../../SectionTitleLeft";

function SwitchesRouters() {

    return (<main className="myContainer">
    <div className="row">
      <SectionTitleQuiz sectionTitle={"Switches and Routers"} quizSectionValue={"/switches_routers_quiz"}/>
      <div className="col-md-6" id="leftRegister">
      <h1 className="text-center">Fundamentals</h1>

            <p>The switch and router are the two essential components of a network. They both
connect devices in a network but do it with different purposes.


<br></br> <br></br>
A switch is a networking device which provides the facility to share the information and
resources by connecting different network devices such as computers, printers, and
servers within a network.

<br></br>
<br></br>
A router is a networking device that forwards data packets between computer networks.
Data sent through the internet, such as a web page or email, is in the form of data
packets. A packet is typically forwarded from one router to another router through the
networks that constitute an internetwork until it reaches its destination node.

<br></br>
<br></br>

A network engineer is primarily focused on using the necessary skills and knowledge
about switches and routers to implement and oversee computer networks.

<br></br>
<br></br>There are two main types of switches:
<br></br><br></br>
<ul>
- Unmanaged switches: Mostly used in small networks or wherever just a few ports
are required. In unmanaged switches, there is no requirement for any
configuration which means that just by plugging in they will work.8

</ul>

<ul>
- Managed switches: More secured than unmanaged switch and provide other
features and flexibility because you can configure them to custom-fit the network.
There is greater control and can better protect the network and improve service
quality for those who access the network.
</ul>


There are two main types of routers:
<br></br><br></br>
<ul>
- Wireless router: most commonly used routers as they don't need wire to connect
with networking devices. It provides a secure connection.
</ul>

<ul>
- Wired Router: tends to have more management functions and requires a wire to
connect to the network devices.
</ul>

</p>
  
          </div>
        </div>
      </main> 
    )
}

export default SwitchesRouters;