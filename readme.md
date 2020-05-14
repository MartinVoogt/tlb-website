# The last broadcast - website
This are the files for the website of The Last Broadcast, feel free to update the files, if you have any questions about doing this. Contact us on [Discord](https://www.dayz-tlb.com/discord/)

### Requirements 

+ Nodejs
+ A good editor, like Sublime, VS-Code or Notepad++
+ Some html knowhow

### Where and how
If you want to edit any files, you need to that in the "src" folder, this is a resource folder, this contains all the css, scripts and images etc...
After you run the installation below,and edited some files, all your changes will be compiled to the "dist" folder. So if you want to see your changes, you need to load the dist/index.html file, in your browser. 

### Installation

After you put the files on your machine, navigate with your console (CLI) to the directory, make sure nodejs is working. 
When your in the root of the project, you first need to install al the dependency, by typing `npm install` very important step.

### Editing 

Before you do any changes, type this is your console `npm run watch` This will watch all the file changes in the "src" folder. If you save your file, its getting compiled to the "dist" folder. 
If your happy about the changes you made, break the watch process in your console `CTRL + ALT + BREAK`. Next your need to run the following `npm run production`, this will optimize the files in the "dist" folder for deployment.
After that you can upload all files from the dist folder to the root of the webserver.

Any questions feel free to ask [Discord](https://www.dayz-tlb.com/discord/)