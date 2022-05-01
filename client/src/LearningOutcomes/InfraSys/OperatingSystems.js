import { SectionTitleQuiz } from "../../SectionTitleLeft";

function OperatingSystems() {

    return (<main className="myContainer">
    <div className="row">
      <SectionTitleQuiz sectionTitle={"Operating Systems"} quizSectionValue={"/operating_systems_quiz"}/>
      <div className="col-md-6" id="leftRegister">
      <h1 className="text-center">Fundamentals</h1>

            <p>
            An operating system is software that manages the computer hardware and
system resources and provides the tools to operate. The birth of operating systems 
meant that programs no longer
had to be written to control the entire scope of the operation of the
computer.
<br></br> <br></br>

An operating system allows users to run crucial applications on his/her
computing device. It helps to manage a computer's hardware resources. It helps
to support basic functions like scheduling tasks, and controlling peripherals. Knowing about 
operating systems is a skill required primarily for systems developers. A
system developer implements applications for the backend processing systems used in
their organization. Backend processing systems are the behind-the-scenes parts of
software that don't have a user interface. These are used commonly in banking and HR systems.

<br></br>
<br></br>
Operating systems are able to:


<br></br><br></br>
<ul>
- Run critical computing applications.
</ul>

<ul>
- Manage software and hardware.
</ul>

<ul>

- Connect with the CPU for memory and storage allocation.
</ul>
The main operating systems in use are Windows, Linux, Mac OS

<br></br><br></br>
<ul>
Windows has been the go-to operating software that fuels the computing systems
worldwide. It is user-friendly, and starts up and resumes operations fast. The latest
versions have more built-in security to keep the user and data safe.


</ul>

<ul>
Ubuntu is a Linux based OS that comes with applications for organizations, schools,
and home use. Ubuntu is an Open Source software, which allows it to be freely
downloaded, used and shared by its users. It comes with a built-in firewall and virus
protection software.

</ul>

<ul>
macOS is a proprietary graphical operating system developed by Apple. It is the primary
operating system for Apple's Mac computers. Within the market of desktop and laptop
computers it is the second most widely used OS, after Microsoft Windows.
</ul>


</p>
  
          </div>
        </div>
      </main> 
    )
}

export default OperatingSystems;