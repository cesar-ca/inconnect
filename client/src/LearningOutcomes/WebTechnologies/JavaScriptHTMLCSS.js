import { useEffect, useState } from "react";
import { SectionTitleQuiz } from "../../SectionTitleLeft";
import { Link } from "react-router-dom";

import Api from "../../Api";

import {useAuthContext} from '../../AuthContext';

function JavaScriptHTMLCSS() {

  const {user} = useAuthContext();
    const [skills, setSkills] = useState([]);

    // UseEffect calls the API when it loads
    useEffect(function() {
      Api.skills.index().then(response => setSkills(response.data));
    }, []);

    return (

        <main className="myContainer">
        <div className="row">
          <SectionTitleQuiz sectionTitle={"JavaScript, HTML, CSS"} quizSectionValue={"/javascript_html_css_quiz"}/>
          <div className="col-md-6" id="leftRegister">
          <h1 className="text-center">Fundamentals</h1>

            <p>JavaScript is a programming language that allows you to implement complex things in
websites. Every time a website does more than just sit there and show
static information for you to view - displaying content updates, maps
interactive, animated graphics.

<br></br> <br></br>

HTML provides the basic tools necessary to structure the content of a web site. CSS helps to design the content so that the user sees it the way it is intended.

<br></br>
<br></br>
JavaScript is a logic-based programming language that can be used to
modify the content of a website and make it behave in different ways in
response to a user's actions. Common uses of JavaScript include
confirmation boxes, calls to action, and adding new identities to existing information.
Using JavaScript, HTML, and CSS as tools is a skill required for job roles such as Web
Development.
<br></br>
<br></br>
HTML is made up of the following features:

<br></br><br></br>
<ul>
- Elements
</ul>

<ul>
- Labels
</ul>

<ul>
- Attributes
</ul>

<ul>
- Links
</ul>

<ul>
- Lists
</ul>

<ul>
- Images
</ul>

<br></br>
CSS handles the look and feel part of a web page. Using CSS, you can control the
<br></br><br></br>

<ul>
- color of the text,
</ul>

<ul>
- the style of fonts,
</ul>

<ul>
- the spacing between paragraphs,
</ul>

<ul>
- how columns are sized and laid out,
</ul>

<ul>
- what background images or colors are used,
</ul>

<ul>
- layout designs,
</ul>

<ul>
- variations in display for different devices and screen sizes
</ul>


</p>

  
          </div>
        </div>
      </main> 
    )
}

export default JavaScriptHTMLCSS;