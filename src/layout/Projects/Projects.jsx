import "./Projects.css";
import "../../Globalcss.css";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard.jsx";
import { useState } from "react";
import {
  jhuyAdmin,
  jhuyEmployee,
  accInfo,
  addUser,
  jhuyAdmin2,
  changePass,
  editUser,
  exportData,
  newAcc,
} from "../../assets";

export const Projects = () => {
  const myProjects = [
    {
      id: 1,
      title: "JhuyFruit Cargo & Shipment Management System",
      tech: ["PHP", "JAVASCRIPT", "SQL", "CSS"],
      images: [
        {
          url: jhuyAdmin,
          title: "Admin Dashboard",
          desc: "the Admin Dashboard, designed to securely manage large-scale shipping records, I built a highly responsive layout utilizing overflow containers for multi-axis (X/Y) scrolling, ensuring dense datasets remain perfectly readable. This view provides full administrative data manipulation capabilities, allowing users with admin permissions to seamlessly create, update, filter, and delete shipment logs through a single intuitive dashboard interface.",
        },
        {
          url: jhuyAdmin2,
          title: "Admin Dashboard",
          desc: "it has an advanced UX implementation for tracking logistics history. The system supports customized UI state indicators, enabling users to apply custom background and text color mappings to rows according to specific workflow priorities. To keep the UI clean while maintaining data integrity, each table cell features an on-hover tooltip component. This element pulls real-time metadata from the database backend to display a comprehensive audit log—revealing structural data points, initial upload tracking (author, date, time), and historic modifier credentials.",
        },
        {
          url: addUser,
          title: "Add new user",
          desc: "the add new user panel provides administrators with a secure onboarding system to provision account profiles. The data entry form captures essential profile data—including full names, secure authentication credentials, and status settings—while enforcing dynamic access levels via a dropdown role assigner. Once provisioned, the application dictates strict access boundaries: administrators hold global configuration clearance, employees receive contextual write permissions to edit task-specific data modules, and visitors are restricted to read-only views.",
        },
        {
          url: editUser,
          title: "Access Control Manager",
          desc: "the Edit User Access control panel introduces an advanced layout customization matrix for administrators. The system allows admins to granularly toggle column fields per employee profile—distinguishing between fully modifiable fields ('Access To') and read-only locked fields ('Viewable To'). Furthermore, it features a dynamic column-reordering capability via a 'Position Columns' module, giving administrators the power to restructure the layout architecture of any employee's data view based on specific workflow requests.",
        },
        {
          url: exportData,
          title: "Data Export Engine",
          desc: "the Export Data panel provides administrators with a highly granular reporting tool. Instead of dumping raw database tables blindly, the utility allows admins to isolate logistics data by a specific timeline using flexible date range inputs (such as an 'Entire Year' toggle or a 'Specific Month Range'). To ensure clean external files, the interface includes a column selector dropdown, giving users the precise capability to check off only the specific data fields they require before parsing and exporting the records directly into an Excel spreadsheet.",
        },
        {
          url: accInfo,
          title: "Account Information",
          desc: "the client-side profile configuration module. The interface combines personal account details with active user state settings via an interactive switch component. Toggling the notification setting modifies the user's data configuration rules, triggering a backend mail listener that sends out automatic transactional email alerts whenever fresh cargo records are allocated to their unique account ID.",
        },
        {
          url: newAcc,
          title: "Account Registration System",
          desc: "the system implements a strict security posture for newly registered accounts. When a new user logs in before being explicitly provisioned by an administrator, they are met with a locked landing screen restricting data access. The interface instructs the user to submit an authorization request to gain administrative access or view permissions, ensuring that unverified accounts cannot view sensitive internal logistics datasets.",
        },
        {
          url: jhuyEmployee,
          title: "Employee Dashboard",
          desc: "the Employee Dashboard features a tailored data layout environment. The visibility and editability of the displayed shipment rows are completely dynamic, feeding directly from the permissions configured by the administrator for that specific employee. To streamline daily operational workflows, I integrated an interactive search utility for real-time item navigation, along with a 'Hide Completed' toggle switch that lets staff immediately filter out finalized shipments and focus strictly on active, pending cargo.",
        },
        {
          url: changePass,
          title: "Security & Authentication Panel",
          desc: "the system enforces a strict security layer for account authentication updates. When a user requests a credential change, the application triggers an automated email verification engine that dispatches a secure, single-use numeric code directly to the user's registered inbox. The user must provide this verification token within an active countdown window to authenticate their identity before the system grants access to finalize the password reset process.",
        },
      ],
    },

    {
      id: 2,
      title: "Analytics Dashboard",
      tech: ["PHP", "SQL", "JAVASCRIPT"],
      images: [
        {
          url: "https://picsum.photos/300/200?random=11",
          desc: "Analytics dashboard 1",
        },
        {
          url: "https://picsum.photos/300/200?random=12",
          desc: "Analytics dashboard 2",
        },
        {
          url: "https://picsum.photos/300/200?random=13",
          desc: "This is a sample description of the image above test 123 and test 321",
        },
        {
          url: "https://picsum.photos/300/200?random=14",
          desc: "Analytics dashboard 4",
        },
        {
          url: "https://picsum.photos/300/200?random=15",
          desc: "Analytics dashboard 5",
        },
      ],
    },

    {
      id: 3,
      title: "Ghost Crab Sanctuary",
      tech: ["HTML", "CSS"],
      images: [
        {
          url: "https://picsum.photos/300/200?random=11",
          desc: "Main Login Dashboard with biometric authentication.",
        },
        {
          url: "https://picsum.photos/300/200?random=12",
          desc: "Main Login Dashboard with biometric authentication.",
        },
        {
          url: "https://picsum.photos/300/200?random=13",
          desc: "Main Login Dashboard with biometric authentication.",
        },
        {
          url: "https://picsum.photos/300/200?random=14",
          desc: "Weekly schedule view showing employee shifts.",
        },
      ],
    },
  ];

  const [hasInteracted, setHasInteracted] = useState(false);

  return (
    <>
      <div className="project-header">
        <p className="project-heading">MY PROJECTS</p>
        <p className="project-body">
          Here are some of the systems I've build and worked on
        </p>
      </div>
      <div className="projects-wrapper">
        {myProjects.map((item) => (
          <ProjectCard
            isHidden={hasInteracted}
            onSwipe={() => setHasInteracted(true)}
            key={item.id}
            title={item.title}
            techStack={item.tech}
            images={item.images}
          />
        ))}
      </div>
    </>
  );
};
