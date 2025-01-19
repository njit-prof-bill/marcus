This project is a proto-type for a resume writing application. The application is unique because:

- It uses past resumes or CVs to build a career history
- It uses AI to write resume text
- It creates a custom resume for specific job descriptions

This proto-type will use a micro-services architecture based on the RedwoodJS api framework. The micro-services will be built around the primary features of the system. These features are:

- User Management
- Template Management
- Resume Creation
- Job History

## Platform APIs
The following are the APIs that are the microservices of the platform. These are grouped according the primary feature areas.
### User Management
- authentication TBD
- **getUserProfile** obtain an object of the user's settings
- **createUserProfile** add a new object of user settings
- **updateUserProfile** update the user settings
### Template Management
- **getTemplateList** obtain a list of resume templates
### Resume Creation
- **uploadResume** upload a prior resume or CVs
- **uploadJobDescription** upload a job description
- **getNewResume** create and retrieve a resume
### Job History
= **getJobHistory** obtain a list of resumes created
- **getJobDetail** obtain the details of a job and resume

## Processing Notes and Latex
These are thoughts regarding how to process resumes with AI, Latex, and templates. This is based on my initial conversation with Joe and may influence the list of Platform APIs.

Latex will have to be configured to run in a Docker container. Latex will run as an OS command, so the API will have to have access to commands on the container. That should be interesting when working with Redwood and may mean calling an API from an API.

The text for the resume will be generated separately. Joe suggested that each section of the resume be generated separately, then put together by Latex. If this is the case, then the resume template shall have specific required sections. In this way, the AI generated text will map to sections in the template.

The API will receive the text, probably in a list object where each item is a section on the resume. The API will also receive the name of the template. With these things, Latex is called and a PDF is generated. The PDF is returned to the caller.

I need to determine what the sections that we will support are.
