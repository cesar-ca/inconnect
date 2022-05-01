import { SectionTitleQuiz } from "../../SectionTitleLeft";

function ServersStorage() {

    return (<main className="myContainer">
    <div className="row">
      <SectionTitleQuiz sectionTitle={"Servers and Storage"} quizSectionValue={"/servers_storage_quiz"}/>
      <div className="col-md-6" id="leftRegister">
      <h1 className="text-center">Fundamentals</h1>

            <p>A server is a software or hardware device that provides services to
other devices on the network. The other devices are also known as clients.
Clients get services from the server. A single server can provide
simultaneous service to several clients. The server and client can be in the 
same device or the server can be a separate physical device. What's more,
there can be multiple servers on one machine serving different clients.
When the server receives a request, it responds to the client with the requested service.
Storage refers to secondary memory that stores data in a non-uniform way.
This allows the processor or CPU to transfer its data to the
memory (RAM) to access data in the short term. Servers and storage in data centers need
maintenance, so these skills are required primarily for System Administrators. Other roles are
Server Engineer, Data Center Technician, Server Administrator, Network Administrator.
<br></br> <br></br>

There are several types of servers. For example, file servers, 
mail servers and application servers. Web servers provide
websites. Database servers run data management systems
databases (DBMS) for creating and managing databases. 

<br></br>
<br></br>
Application servers provide facilities to create
web applications and a server environment.
Data can be stored in memory or storage. Memory is the component 
that stores short-term data. Memory refers to
random access memory (RAM). It is volatile memory, so the data is
temporarily saved. Storage refers to a component of the
computer that allows long-term data access. The hard disk and
solid state drives (SSD) are storage components. The data in the
storage are permanent and is non-volatile memory. The storage
provides long-term data access.
<br></br>
<br></br>
The responsibilities of System Administrators include: 
<br></br>
<br></br>
<ul>
- Install, configure, and manage server hardware and systems
</ul>
<ul>
- Implement adequate server security and enforcement controls
</ul>
<ul>
- Fix common server problems   
</ul>
<ul>
- Demonstrate an understanding of key recovery concepts from
disasters
</ul>

<br></br>



<br></br><br></br>



</p>
  
          </div>
        </div>
      </main> 
    )
}

export default ServersStorage;