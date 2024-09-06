# Are_You_Alive
This site is a fake AI that you press a button and tells you if you are alive. The answer is always no, so you have the change to object and then argue why are you alive. After you submit the answer it is store and you are shown all the answers from other real users, and your answer is sheen by the next user.

This React component creates a web application with the following features:
	1	A purple gradient background using Tailwind CSS classes.
	2	A button to initiate the "Are You Alive?" check.
	3	An alert dialog that always determines the user is not alive, with options to accept or object.
	4	If the user objects, they can submit their reason for being alive (limited to 300 characters).
	5	After submitting, the user sees a list of all previous responses, including their own.
	6	Responses are stored in localStorage (as a simple demonstration of persistence).
To use this component:
	1	Set up a React project with Tailwind CSS and shadcn/ui components.
	2	Copy this component into your project.
	3	Ensure you have the necessary imports from shadcn/ui.
For a production version, consider these enhancements:
	1	Replace localStorage with a proper backend service for data persistence.
	2	Implement user authentication to prevent spam or abuse.
	3	Add moderation features to filter inappropriate content.
	4	Improve accessibility and add proper error handling.
	5	Optimize performance for large numbers of responses.
This implementation provides a starting point for your interactive "Are You Alive?" concept. You can further customize the styling, add animations, or extend the functionality as needed.
