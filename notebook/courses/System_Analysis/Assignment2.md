# Assignment 2

## Assignment Description

<b>Assignment 2</b>
Building a Network Diagram for <i>HomeRenew Project</i> 
(*Excel File Submission Only*)

### Context 
You are tasked with creating a Network Diagram for Amanda's <i>HomeRenew Project</i>  project,
focusing on
accurately representing 
&starf; project tasks
&starf; durations
&starf; dependencies
&starf; specifically identifying slack time

### Story
Amanda is an ambitious architect who has recently undertaken a home renovation project. She's determined to transform a vintage house into a modern haven. After analyzing the blueprint and consulting with her team
of engineers and laborers, they have defined a set of tasks and dependencies.

1. Amanda needs to obtain necessary renovation permits from the city council, which will take 2 days.
2. Foundation strengthening comes next, estimated to take 5 days, but it can only start after obtaining the
permits.
1. While the foundation work is ongoing, the electrical team can start rewiring the house, which they
estimate will take 4 days.
1. Once the foundation is ready, the plumbing team will need 3 days to overhaul the home's old plumbing
system.
1. After the electrical rewiring, the insulation team will take 4 days to insulate the house.
2. Only after insulation is the drywall installation, which is estimated at 3 days.

<b>Amanda identifies two crucial milestones</b> Completing all the foundational work and finishing all internal installations.

<b>Objective</b>: Using Microsoft Excel or a similar spreadsheet tool, construct a Network Diagram for the home renovation project.

Your diagram should use standard network diagramming techniques and clearly show slack time for applicable tasks.

### Project Overview
**Leader** Amanda, an architect.
**Project** HomeRenew - Renovation of a vintage house

### Tasks for Network Diagram
1. *Obtain renovation permits* 2 days.
2. *Foundation strengthening* 5 days, starts after obtaining permits.
3. *Electrical rewiring* 4 days, can start concurrently with foundation work.
4. *Plumbing overhaul* 3 days, can only start after foundation strengthening.
5. *Insulation* 4 days, follows the completion of electrical work.
6. *Drywall installation* 3 days, begins after insulation is complete.

### Assignment Instructions

1. <b>Task Representation</b> Use nodes to represent each task, including names and durations
2. <b>Dependency Arrows</b> Utilize arrows to illustrate the dependencies between tasks
3. <b>Concurrent Tasks</b> Indicate tasks that can occur simultaneously and their interdependencies
4. <b>Slack Time Identification</b> Calculate and clearly mark slack time for tasks where applicable


### Submission Guidelines

**Format** Your submission should be an Excel file

**File Review** Double-check that the network diagram is complete and legible in the Excel format.
Submissions that are incomplete or improperly formatted will not be accepted.

**No Re-evaluation** Your work have only one chance to be graded, so review your file carefully before submission

### Evaluation Criteria

<b>Accuracy</b> Adherence to the project details and task durations.

<b>Clarity and Organization</b> The readability and logical layout of the Network Diagram.

<b>Slack Time Analysis</b> Correct identification and representation of slack time.

<b>Technical Proficiency</b> Effective application of network diagramming techniques.

```
[1] --2--> [2] --5--> [4] --3-->
            |
           [3] --4--> [5] --4--> [6] --3-->

```