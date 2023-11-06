
My API Documentation
This is the documentation for the API that provides various endpoints for managing student and employee information, internships, jobs, and resume details. The API is built using Node.js and Express.

Student Routes
Homepage
GET /

Get the homepage of the API.

Current Employee
POST /current

Get information about the currently authenticated employee.

Employee Signup
POST /signup

Create a new employee account.

Employee Login
POST /signin

Authenticate an employee's login.

Employee Logout
GET /signout

Log out the currently authenticated employee.

Send Mail
POST /send-mail

Send an email to the employee.

Forgot Password Link
GET /forget-link/:id

Get the forgot password link for an employee by their ID.

Reset Password
POST /reset-password/:id

Reset the password for an employee.

Update Employee
POST /update/:id

Update the employee's information.

Delete Employee
POST /delete/:id

Delete an employee account.

Update Employee Avatar
POST /avatar/:id

Update the employee's avatar.

Internship Routes
Create Internship
POST /internship/create

Create an internship opportunity.

Read Internship
POST /internship/read

Read all available internship opportunities.

Read Single Internship
POST /internship/read/:id

Read a specific internship opportunity by ID.

Job Routes
Create Job
POST /job/create

Create a job opportunity.

Read Job
POST /job/read

Read all available job opportunities.

Read Single Job
POST /job/read/:id

Read a specific job opportunity by ID.

Resume Routes
Resume
GET /

Get the resume of the currently authenticated user.

Education
POST /add-edu

Add education details to the resume.

POST /edit-edu/:eduid

Edit an education entry by its ID.

POST /delete-edu/:eduid

Delete an education entry by its ID.

Job Experience
POST /add-job

Add job experience details to the resume.

POST /edit-job/:jobid

Edit a job experience entry by its ID.

POST /delete-job/:jobid

Delete a job experience entry by its ID.

Internship Experience
POST /add-internship

Add internship experience details to the resume.

POST /edit-internship/:internshipid

Edit an internship experience entry by its ID.

POST /delete-internship/:internshipid

Delete an internship experience entry by its ID.

Responsibilities
POST /add-responsibilities

Add responsibilities to a job or internship experience.

POST /edit-responsibilities/:responsibilitieid

Edit responsibilities by their ID.

POST /delete-responsibilities/:responsibilitieid

Delete responsibilities by their ID.

Courses
POST /add-courses

Add courses to the resume.

POST /edit-courses/:coursesid

Edit courses by their ID.

POST /delete-courses/:coursesid

Delete courses by their ID.

Projects
POST /add-projects

Add projects to the resume.

POST /edit-projects/:projectsid

Edit projects by their ID.

POST /delete-projects/:projectsid

Delete projects by their ID.

Skills
POST /add-skills

Add skills to the resume.

POST /edit-skills/:skillsid

Edit skills by their ID.

POST /delete-skills/:skillsid

Delete skills by their ID.

Accomplishments
POST /add-accomplishments

Add accomplishments to the resume.

POST /edit-accomplishments/:accomplishmentsid

Edit accomplishments by their ID.

POST /delete-accomplishments/:accomplishmentsid

Delete accomplishments by their ID.

Authentication
To access protected routes (e.g., updating a student's profile, adding education details to a resume), you need to be authenticated. Use the appropriate login route (student or employee) to obtain an authentication token and attach it to your requests.

Getting Started
Clone this repository to your local machine.

Install the required dependencies:

Copy code
npm install
Start the API server:

sql
Copy code
npm start
Access the API using the specified endpoints.

Dependencies
Express: Node.js web application framework
Other dependencies as required by the application
Author
Ashish Chakravarti

