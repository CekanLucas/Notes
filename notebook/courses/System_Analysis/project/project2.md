# Academic Course Adviser Chrome Extension
## Interface Creation and Functionality Specification
**This is part 2** <font color="orange">Interface Creation and Functionality</font>{class="flex justify-between"}

!!! Author
    Dr. Randy Lin

!!! TODO Project
    <b>Academic Course Adviser Chrome Extension</b>

### Overview

> This part focuses on bringing the envisioned functionalities and interface design to life <br>
> Students are expected to engage in a hands-on approach by 
> &starf; defining key functionalities for the extension
> &starf; designing a user interface to support these functionalities
> &starf; utilizing AI technology, specifically <b>ChatGPT</b>, to generate the foundational code for their design
> This process will involve iterative design and development,
> where students will refine their interface based on <i>testing, feedback, and further research</i>
> <br>
> The iterative process aims to simulate real-world software development practices,
> emphasizing the importance of 
> &rect; adaptability, 
> &rect; user-centered design, 
> &rect; and the integration of AI tools in coding.
> By the end of this assignment, students will have a non-functional prototype of their Chrome Extension's interface,
> ready for further development and testing in subsequent project phases.

### Objectives

1. **Define key Functionalities**
   Identify and describe 3 key functionalities that the Academic
Course Adviser Chrome Extension will offer. These functionalities should be chosen based
on their potential impact on the user experience and the core objectives of the extension.

2. **Design User Interface**
   Create a detailed design for the extension's user interface,
incorporating at least 5 different elements (e.g., buttons, text fields, navigation bars) that support the defined functionalities. The design should prioritize ease of use, aesthetic
appeal, and functionality.
3. **Generate Code with ChatGPT**
   Utilize ChatGPT to generate the initial code for the
interface. Students should explore different programming languages (e.g., HTML, CSS,
JavaScript) and select the one that best suits their design and functionality needs. The
process will include drafting specific prompts for ChatGPT, making adjustments to the
generated code, and documenting the interaction and modifications for reflection.
4. **Iterate on Design**
   Develop multiple iterations of the interface, each improving upon the last
based on specific criteria such as user feedback, design principles, and technical feasibility.
This objective emphasizes the iterative nature of software development, encouraging
students to refine their work continuously.
5. **Document the Process**
   Create a comprehensive report detailing the design process, key
functionalities, code generation with ChatGPT, iterations of the interface, and reflections on
the use of AI for code generation. This documentation will serve as a critical reflection of the
learning process and the decisions made throughout the development of the interface

### Submission Requirements

<b>Format </b>PDF
<b>Length </b>1500-2000 words
<b>Naming Convention </b>*`[StudentLastName]_[StudentFirstName]_InterfaceFunctionalityDevelopment.pdf`*

### Content Outline & Submission

1. #### Introduction
> Brief introduction to the objectives of the interface design and the functionalities it aims to support

In this design document we aim to design a interface that is user-friendly, well organized and intuitive that even I would find useful as a Algoma University Student. As a academic Chrome extension; students are of course, the target audience.  The interface should provide guide an easy pathway to navigate the application. To this end it has to be convenient to find highlighted key information that can help in academic course selection.

Most of the application can be condensed into three key features which a well designed user interface should deliver.

**1.** <b>Should offer personalized course recommendations</b>
**2.** <b>Should track the academic progress of the user in question</b>
**3.** <b>Useful insights should be conferred to the user based on their academic performance </b>

If these functionalities are delivered with a well designed user interface then this application would be value proposition for students. In the next section we will go deeper into the three key functionalities. 

2. #### Key Functionalities Defined

> <b>Functionality 1</b>
> Define the first key functionality, including its purpose and how it addresses user needs

<b>Functionality 1</b> *Should offer personalized course recommendations*
A user of the extension should have courses recommended to them based on their academic standings and meeting all the course's prerequisites and conditions. The courses should logically also be the courses that will meet the user's academic pathway and should be the courses they need as prerequisites for desirable future courses. 

> <b>Functionality 2</b>
> Define the second key functionality, detailing its significance for enhancing user experience

<b>Functionality 2</b> *Should track the academic progress of the user in question*
The extension the moment it is opened should display prominently the users academic progress. The extension should indicate wether the user is on track or not on their academic journey.

> <b>Functionality 3</b>
> Define the third key functionality, explaining its role in the overall utility of the extension

<b>Functionality 3</b> *Useful insights should be conferred to the user based on their academic performance*
The academic performance is the basis for the utility of this extension the insights. For example the overall GPA and grade trends of the student could be provided as insights. If the student is at risk due to the performance the extension should prompt the user until the risk has subsided.

3. #### Initial Interface Design

> Describe the initial interface design, focusing on how it plans to accommodate the defined functionalities

The initial design is very basic at this stage, it is simply to display the contents to meet the function requirements.

<b>Functionality 1</b> *Should offer personalized course recommendations*
Accomplished with course cards, listing the course title with a description and prerequisites

<b>Functionality 2</b> *Should track the academic progress of the user in question*
Academic progress is shows as a progress bar, which is a nice way to visualize it.

<b>Functionality 3</b> *Useful insights should be conferred to the user based on their academic performance*
GPA us shows as well as a grade trend as well as any risk indicators

Overall despite the basic layout this is a minimum viable product and the interface meets the functionalities specified.

> &bull; <b>Layout Screenshot</b> Provide a screenshot of the layout of the tool

![alt text](<../../../../../Algoma/System Analysis and Analytics for Project Management/sc-1.png>){width=50%}


> &bull; <b>Interface Elements</b> Highlight at least 5 different interface elements 
> &nbsp;&nbsp; <i>eg buttons, dropdown menus, text fields</i> in the interface
> <br>
> &bull; <b>Functionality Accommodation</b>
> &nbsp;&nbsp; Provide step by step explanation on how each functionality can be achieved by interacting with the elements

   1. **Academic Progress Bar** This is the most visually best way in my opinion to show quickly and clearly how far the user is in their academic journey. In my experience calculating the credits myself would be very annoying and at the end of the day a percentage of the entire program load is what a user really needs. I envision that the calculation is not based on credits themselves but also how long along the semester is which means that if courses are failed the progress bar will go backwards. If a user interacts with the progress bar I would also design it so that it gives more information such as percentage through the current semester and current credits / total credits. This element really accomplishes the functionality of tracking academic progress.

Note the other elements are not displayed in the screenshot as this is just the first iteration 

   2. **Search Bar** I assume the user would like to list courses, so a search functionality probably after the Personalized Course Recommendations section so that the user could be aware of the courses on offer outside those courses explicitly recommended. Sometimes the user could make better choices for their courses and sometimes they may be curious about the courses that are not recommended so providing this can alleviate user frustration and will prevent the extension from completely constraining the user.
   
   3. **Prerequisites link** The prerequisites listed in their respective course cards should act as a link to the listed courses. Users need to know if they agree with the course recommendation, then it makes sense that they would like to know what prerequisites are needed and what do they need to do to clear those prerequisites.

   4. **Reject course recommendation button** On each course card in the Personalized Course Recommendations there should be a button to reject the recommendation so as to free the feed so that the user could review other course recommendation otherwise the user will have to scroll past the recommendations that the user had already reviewed. This would help the recommendation functionality by preventing user frustration and keeping a clean recommendations that are actually useful for the user.
   
   5. **Overall GPA** This displays the overall GPA the user has achieved. If the user hovers or interacts with this element a quick definition of GPA, what it stands for and grades of passed courses should pop up temporary so the user can get the desired information quickly and concisely. This information that comes from interactions should clearly meet the goal of allowing the user to track their academic performance above not just the overall GPA alone.


4. #### Code Generation Process

> Detail the specific prompts (*at least three*) given to ChatGPT (*as screenshots*) for code generation
> and any modifications made to the generated code to fit project requirements

> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png" style="float:inline-start;margin-right:1em;height:4em"> Your introduction effectively highlights the need for the Chrome Extension by addressing common student challenges and the convenience that such a tool could provide. It sets a clear context for the project by explaining why this extension is necessary and the problems it aims to solve.

5. #### Interface Iterations

> <b>Iteration 1</b>
> &cir; Present the first iteration of the interface

![alt text](<../../../../../Algoma/System Analysis and Analytics for Project Management/sc2.png>){width=50%}


> &cir; <b>Step-by-Step Explanation</b> Describe how the interface accomplishes each defined functionality

<b>Functionality 1</b> *Should offer personalized course recommendations*
Accomplished with course cards, listing the course title with a description and prerequisites, the cards now have a x on the top right hand corner if the user wants to clear the clutter of courses they do not want.

<b>Functionality 2</b> *Should track the academic progress of the user in question*
Academic progress is shows as a progress bar, which is a nice way to visualize it.

The progress bar has not changed except for its position close to the top for quick review before the user looks into the Personalized Course Recommendations feed.

<b>Functionality 3</b> *Useful insights should be conferred to the user based on their academic performance*
GPA us shows in the header section with a icon next to it displaying grade trends in this case a green up arrow also the risk indicators show the happy green color indicating that there are no risks. Overall insights are color coded to quickly inform the user making a good user experience.


> &cir; <b>Improvements</b> Discuss the rational behind any changes made for this iteration

I decided to remove all labels such as name, program, etc. This is because either it is too obvious what the field is so what is the point in displaying it as well as this and more information could be displayed in a tooltip or popup when the user interacts with the element in question

> <b>Iteration 2</b>
> &cir; Present the second iteration of the interface, focusing on refinements & additional features
> &cir; <b>Step-by-Step Explanation</b> Update on how the interface now accomplishes the functionalities,
> &nbsp;&nbsp;&nbsp; especially any enhanced user experience
> &cir; <b>Improvements</b> Detail changes made from the first to the second iteration and why

1. #### Final Interface Design

> Summarize the final design, highlighting its alignment with the functionalities and user experience enhancements

7. #### Reflections on Using ChatGPT for Code Generation

!!!  Link to the Chat for this Project with ChatGPT
    https://chat.openai.com/share/7de1cda5-f273-4be1-9c4f-45f1bc904a8a

> Discuss the specific aspects of code generation with CharGPT, including:
> &cir; <b>Effectiveness</b> How well did the generated code meet the project requirements?

How well did the code generated by CHatGPT meet the various project requirements? Initially not very, but with some human input and iterations the code does start to meet the project requirements. That said I don't think LLMs are really good at achieving functionality in a creative way and these functions need to be specified on the onset and in detail as the LLM is very primitive in how it understands functionality.

> &cir; <b>Challenges</b> Detail any challenges encountered while using ChatGPT for code generation, 
> &nbsp;&nbsp;&nbsp; such as misunderstandings, limitations of the generated code, or integration issues

There was a lot of challenges in the iterations, I did most of the code only asking questions of facts that I could not be bothered to look up. The LLM for specific like what is a good color for my theme when it comes to hyperlinks and what is the html entity codes for various icons.

The implementation in terms of layout was off as I had to move all the information to the top of the page with the main content of this extension going to be the course recommendations feed.

> &cir; <b>Modifications</b> Describe specific modifications made to the ChatGPT-generated code 
> &nbsp;&nbsp;&nbsp; to better align with project goals, including reasons for these changes
> &cir; <b>Learning Points</b> Share insights gained from the process,
> &nbsp;&nbsp;&nbsp; such as understanding code generation capabilities of AI,
> &nbsp;&nbsp;&nbsp; adapting AI-generated code to a real project,
> &nbsp;&nbsp;&nbsp; and any strategies developed for better interaction with ChatGPT

Pretty much everything was modified, there was errors in layout, spaces, luckily for some css properties it gave a comment saying you can modify it, and a human in my opinion is better at tinkering with the design elements.

My strategy for using the AI is to lean as much to asking for factual statements such as "make a search bar and style it" which would save me time in looking for these facts quickly online and coding this tedium.

1. #### Conclusion

> Conclude with a summary of the development process,
> key learnings & potential future improvements for the interface and functionalities

The development process was very fast with the LLM being able to code a basic outline, quickly. This "boilerplate" code would have been very tedious to code by hand and it was good that the LLM could generate this type of code so that the human developer can focus on the fun part of development in my opinion which is the design and creative solutions that a application is meant to solve. In other words it allows the developer to focus on the problem domain rather than the technical implementation.