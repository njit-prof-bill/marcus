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
