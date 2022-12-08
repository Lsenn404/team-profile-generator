
# <Team Profile Generator>

## Description
This application allows for the user to generate an html page that lists information about employees. The user can choose between adding Interns, Engineers, and Managers. The user can enter information for as many employees as they desire, and once finished, the program will generate an html file with every profile listed and styled.


## Usage
Enter node index in the terminal to star the application
Inquirer will prompt you with 3 options for the type of employee you would like to list
You can select the options by scrolling using your arrow keys
Once your desired employee type is selected, press enter. Every option will asking you for the employes Name, Email, and ID
Once you have typed in the information, press enter, if the employee is a manager, it will ask if you for their office number last
Interns will prompt you to answer what school they went to, Engineers will be prompted for their github
When entering in the engineers github, only enter the username, not the link to their github, or else it will break the link when the script is generating the html doc.

After the 4 pieces of information are entered, you will be prompted if you would like to create a new employee, entering 'Y' or 'yes' will prompt the creation of another employee, entering 'n' or 'no' will prompt the program to generate an html doc will all employees that have been entered so far. entering nothing in the last prompt will be seen as a yes, and entering something other than y or n will be seen as a no, the final prompt is not case sensitive. If you have previously created an html document, rerunning the program will overwrite the previous file upon completeing the prompts.

Link to youtube demo https://youtu.be/m21U42rJjnk