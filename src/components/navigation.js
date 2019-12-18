import React from "react"


const Navigation = () => (
<nav
  style={{
      width: 145,
      textAlign: "left",
      backgroundColor: "lightgray",
      right: 30,
      textDecoration: "none",
      textTransform: "capitalize",
      position: "fixed",
      borderRadius: 10,
      top: 10,
    }}>
    <ul>
      <li><a href="#summary">Summary</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="education">Education</a></li>
      <li><a href="contact">Contact</a></li>
    </ul>
</nav>
)

export default Navigation
