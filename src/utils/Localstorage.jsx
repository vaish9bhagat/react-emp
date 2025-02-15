const employees = [
    {
      id: 1,
      name: "Arjun",
      email: "e1@e.com",
      password: "123",
      taskCount: {
        newTask: 2,
        failedTask: 1,
        completed: 0,
        accepted: 3
      },
      tasks: [
        {
          active: true,
          newTask: false,
          failedTask: false,
          completed: false,
          taskTitle: "Design UI Mockups",
          taskDescription: "Create high-fidelity UI mockups for the new feature.",
          category: "Design",
          taskDate: "2025-02-14"
        },
        {
          active: false,
          newTask: false,
          failedTask: true,
          completed: false,
          taskTitle: "Fix Layout Issue",
          taskDescription: "Resolve layout issue on the home page for mobile view.",
          category: "Bug Fix",
          taskDate: "2025-02-12"
        },
        {
          active: false,
          newTask:true,
          failedTask: false,
          completed: false,
          taskTitle: "Prepare Marketing Plan",
          taskDescription: "Create a marketing strategy document for the upcoming launch.",
          category: "Marketing",
          taskDate: "2025-02-18"
        }
      ]
    },
    {
      id: 2,
      name: "Priya",
      email: "emp2@e.com",
      password: "123",
      taskCount: {
        newTask: 1,
        failedTask: 0,
        completed: 1,
        accepted: 2
      },
      tasks: [
        {
          active: false,
          newTask: true,
          failedTask: false,
          completed: true,
          taskTitle: "Develop API Endpoint",
          taskDescription: "Develop an API endpoint to handle user authentication.",
          category: "Development",
          taskDate: "2025-02-15"
        },
        {
          active: true,
          newTask: false,
          failedTask: false,
          completed: true,
          taskTitle: "Write Unit Tests",
          taskDescription: "Write unit tests for the authentication API.",
          category: "Testing",
          taskDate: "2025-02-10"
        }
      ]
    },
    {
      id: 3,
      name: "Suresh",
      email: "employee3@example.com",
      password: "123",
      taskCount: {
        newTask: 2,
        failedTask: 0,
        completed: 1,
        accepted: 3
      },
      tasks: [
        {
          active: true,
          newTask: true,
          failedTask: false,
          completed: false,
          taskTitle: "Write Unit Tests",
          taskDescription: "Write unit tests for newly developed features.",
          category: "Testing",
          taskDate: "2025-02-12"
        },
        {
          active: false,
          newTask: false,
          failedTask: false,
          completed: true,
          taskTitle: "API Documentation",
          taskDescription: "Document the newly created API endpoints.",
          category: "Documentation",
          taskDate: "2025-02-05"
        },
        {
          active: true,
          newTask: true,
          failedTask: false,
          completed: false,
          taskTitle: "Code Review",
          taskDescription: "Review code for the latest pull request in the repository.",
          category: "Code Review",
          taskDate: "2025-02-16"
        }
      ]
    },
    {
      id: 4,
      name: "Ravi",
      email: "employee4@example.com",
      password: "123",
      taskCount: {
        newTask: 3,
        failedTask: 0,
        completed: 1,
        accepted: 4
      },
      tasks: [
        {
          active: true,
          newTask: true,
          failedTask: false,
          completed: false,
          taskTitle: "Implement Feature X",
          taskDescription: "Implement the functionality for Feature X based on the provided spec.",
          category: "Development",
          taskDate: "2025-02-16"
        },
        {
          active: true,
          newTask: true,
          failedTask: false,
          completed: false,
          taskTitle: "Fix Bug #42",
          taskDescription: "Fix the bug causing issues on the payment page.",
          category: "Bug Fix",
          taskDate: "2025-02-20"
        },
        {
          active: false,
          newTask: false,
          failedTask: false,
          completed: true,
          taskTitle: "Refactor Authentication Module",
          taskDescription: "Refactor the authentication module for improved performance.",
          category: "Refactoring",
          taskDate: "2025-01-30"
        },
        {
          active: true,
          newTask: true,
          failedTask: false,
          completed: false,
          taskTitle: "Update User Profile Page",
          taskDescription: "Update the user profile page with new fields and features.",
          category: "UI Update",
          taskDate: "2025-02-22"
        }
      ]
    },
    {
      id: 5,
      name: "Neha",
      email: "employee5@example.com",
      password: "123",
      taskCount: {
        newTask: 2,
        failedTask: 0,
        completed: 1,
        accepted: 3
      },
      tasks: [
        {
          active: true,
          newTask: true,
          failedTask: false,
          completed: false,
          taskTitle: "Fix Bug #42",
          taskDescription: "Fix the issue causing the login page to fail under certain conditions.",
          category: "Bug Fix",
          taskDate: "2025-02-18"
        },
        {
          active: true,
          newTask: true,
          failedTask: false,
          completed: false,
          taskTitle: "Implement User Settings",
          taskDescription: "Implement the user settings page with editable preferences.",
          category: "Development",
          taskDate: "2025-02-25"
        },
        {
          active: false,
          newTask: false,
          failedTask: false,
          completed: true,
          taskTitle: "Conduct User Research",
          taskDescription: "Conduct user interviews and collect feedback for upcoming features.",
          category: "Research",
          taskDate: "2025-02-01"
        }
      ]
    }
  ];
  

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123",
  },
];

export const setLocaltStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
