This backend application is create using Node.js, Express.js, MongoDB. This application server is tested running in `http://localhost:8080` with below routes categories:
- Route for Admin: `/api/v1/admin`
- Route for User: `/api/v1/user`
- Route for Dentist: `/api/v1/dentist`

### Register Endpoint
Any one can register to the application in `http://localhost:8080/api/v1/user/register` endpoint providing name, email and password.
### Login Endpoint
The registered user can then login to the application with email and password to `http://localhost:8080/api/v1/user/login` endpoint. The jwt token is provide for the user which then needs to be passed as **Authorization** value for all the enpoint calls and the result is provided according to the user authorization.
### Admin Endpoint
The admin user of the application has authorization to handle all users and dentists accounts and their appointment details. The following are the endpoint that admin has access to.
The admin is able to check following with endpoint prefix of `http://localhost:8080/api/v1/admin`:
- `/getAllUsers` - gets all the registered users as customers
- `/getAllDentists` - gets all users as dentist
- `/getAllAppointments` - gets all the appointments that has been made.
- `/createUser` - create user account
- `/createDentist` - create dentist account
- `/bookAppointment` - create appointment
- `/getUserById/:userId` - gets the user by its Id
- `/getDentistById/:dentistId` - gets the dentist by its Id
- `/getAppointmentById/:appointmentId` - gets the appointment by its Id
- `/updateUserProfile/:userId` - updates the user details by its Id
- `/updateDentistProfile/:dentistId` - updates the dentist details by its Id
- `/updateAppointmentProfile/:appointmentId` - updates the appointment details by its Id
- `/deleteUserById/:userId` - delete user by its Id
- `/deleteDentistById/:dentistId` - delete user by its Id
- `/deleteAppointment/:appointmentId` - delete appointment by its Id
- `/changeAccountStatus` - approves the requested dentist account from registered users.

### User Endpoint
User is anyone who is using the application. This can also be of dentist designation or be a customer who is looking for the dental service.
The user is able to perform following endpoint calls with prefix of `http://localhost:8080/api/v1/user`:
- `/createDentist` - create dentist account or request admin to approve the user as dentist
- `/getAllDentists` - gets all dentists
- `/bookAppointment` - book for a new appointment
- `/checkAvailability` - check for the appointment availability
- `/getDentistById/:dentistId` - gets the dentist by its Id
- `/userAppointments` - gets all appointment made by the logged in user
- `/updateUserProfile/:userId` - updates the own details
- `/deleteUserById/:userId` - delete own account
- `/updateAppointmentProfile/:appointmentId` - updates the logged in user's appointment details by its Id
- `/deleteAppointment/:appointmentId` - delete the logged in user's appointment by its Id
### Dentist Endpoint
A user applies for the dentist account to the admin with their hours availability, fee and their expertise. The dentist account is create to that user after admin has approved for the account.
The user is able to perform following endpoint calls with prefix of `http://localhost:8080/api/v1/dentist`:
- `/getAllDentists` - gets all dentists
- `/getDentistById/:dentistId` - gets the dentist by its Id
- `/dentistAppointments` - gets all appointment for the logged in dentist
- `/updateDentistProfile/:dentistId` - updates the own details
- `/deleteDentistById/:dentistId` - delete own account as dentist

![Dental Clinic Application Architecture](/images/dental-clinic-architech.drawio.png "Dental Clinic Reservation App")

![Logical Diagram of Dental Clinic Reservation Application](/images/LDM_Dental_Reservation.png "Logical Diagram of Dental Clinic Reservation App")

## Work logs
- 11th and 12th March: 6 hours - research and material readings
- 18th and 19th March: 6 hours - material reading and research with initial data modelling and code dev
- 25th and 26th March: 8 hours - register, login, jwt and basic get requests code dev
- 1st and 2nd April: 6 hours - create and post request code dev
- 7th, 8th, 9th and 10th April: 24 hours - update and delete request 
- 15th and 16th April: 6 hours - code improvements and research
- 22nd and 23rd April: 6 hours - overall project improvements and manual testing
- 27th April: 3 hours - api documentation 
- 28th April: 8 hours - documentation, repository creation, finalization and project submit

## My Thoughts on building project
The overall building backend project using Node.js, Express.js and MongoDB was full of learning and fun. Node.js is an easy programming language. npm provides a good packaging controls to the app. The server set up was short and easy. The endpoint division among the admin, normal user and dentist was little bit confusing to manage. The greatest learning experience for me was to be able to create a restful api from data modelling and designing to finishing up with a full working project with user authentication using json web token (jwt). I have fulfilled the both core and extra requirement of the assginment as a new user, dentist and appointment can be created, modified and deleted. User can book new appointment with dentist and they can see thier own appointments and also edit and delete them. Multiple reservation can be make by different user in same time. Admin can see all users, dentists, appointments and can also modify and delete them. JWT is implemented. Since I have full all the requirements of the assignment, I propose full grade of 5 for this assignment.

### Notes 
The code in this project are all written by me referring the course materials and node.js documentaion pages. There might me minor response messages copy paste but not a full code from stackoverflow but mostly are from course materials and node documentations.

### Demo video link
https://youtu.be/rgAKkRRqCjg
