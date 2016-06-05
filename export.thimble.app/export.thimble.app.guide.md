# Publish [Thimble](https://thimble.mozilla.org/en-US/ "thimble online code editor") project and hosted by GitHub (desktop installation) #

*(NB: Github web hosting supports client side webpages eg. HTML, CSS, Javascript (including Jquery) and does not support server side webpages eg. PHP)*

*A beginner's guide from a beginner's view:*<br> 
(descriptions are written before screenshots)

----------
 
<br> 
<br>
#### [Section One](#sectionOne): Publish thimble project folder to Github for hosting
#### [Section Two](#sectionTwo): Cloning repo (including thimble project) from Github to pc
(make changes to webpages on local pc)
#### [Section Three](#sectionThree): Ways to host website's images 
#### [Section Four](#sectionFour): using [Firebase](https://www.firebase.com) Export and Import JSON button to change data entries
####  [Section Five](#sectionFive): Links to Setting up custom domain name and other publishing options    ####
<br><a name="sectionOne"></a>
***Section 1:***
----------------



- Let's begin!<br>
Export Thimble project.zip file to your PC and rename folder name if you like.  My exported file has been renamed as **export.thimble.app**
 
![](http://i.imgur.com/bL0Mqxq.png)


----------
<br><br>

- Next let's navigate to GitHub and [sign up](https://github.com/join?source=header-home) for a **GitHub account**.  <br> Choose **Unlimited public repositories for free**, disregard **Help me set up an organization next**. We will need to verify our email address with GitHub. 
<br><br>
![](http://i.imgur.com/m70KASy.png)

<center>![](http://i.imgur.com/5j9zZ01.png)</center>

----------

<br><br>


- Now move to [GitHub desktop software](https://desktop.github.com/) and download it (Available for Windows / Mac). Execute downloaded file: **GitHubSetup.exe** and start the installation process . <br> Worth noting is without software preinstalled in pc, we can create repository but cannnot upload thimble folder to GitHub's repo , and GitHub UPLOAD interface will not appear on web browser.<br>In another words, software is the bridge between local pc and GitHub. Repository (repo) is a storage place we use to store the thimble project, the use of repo will be described later in this guide. Installed software will now prompt us to clone a repo, I will just cancel this pop up alert but configure Account Settings under OPTIONS Tab. (software's account settings using created Github account's username and password)  <br> After finishing this, we can leave this software open or close and move back to [GitHub](https://github.com/) website. 

<br>
![](http://i.imgur.com/OJAYHN5.png)
<center>![](http://i.imgur.com/g0AxnxJ.png)</center>


----------
<br><br>


- Going back to Github website, after signing into pre-created Github account, press New repository to create a repo to store the thimble project folder. 
Next give Repo a name with below format, the **username** have to be your own [GitHub username](https://help.github.com/articles/user-organization-and-project-pages/) or GitHub webpages will not be built. User webpages can be built by any user account with a verified email address. Tick the box `Initialize this repo with a README`
README file is used to give readers a snapshot about what's going on in a project. 

<br> 


    yourusername.github.io 

![](http://i.imgur.com/VfDd5SW.png)
![](http://i.imgur.com/1ZJ3Mxf.png)

<br>

<a name="sectionOne"></a>
- Press **upload** under newly created repo, <br> `yourusername/yourusername.github.io`  and drag the thimble project folder there.
Commit directly to the ***master*** branch. <br>Press 
**Commit Change**. eg; thimble project: *`export.thimble.app`* is now under repo, make sure `index.html` file is present, otherwise, webpages will not be built and appear on web browser. Image files eg. jpeg, png files also included.  eg:***yourlogo.png*** <br>
Images that hosted externally comes with an URL link, begins with 
`Http://` <br>
More details about image hosting please refer to **Section 2.** 


![](http://i.imgur.com/CeWNJHh.png)

----------


- All uploaded file will be located inside in my case: export.thimble.app folder. <br>And my webpages are now published publicly and hosted by Github.<br>
To browse website hosted by Github, type below URL in browser address bar:

>Your website: http://yourusername.github.io/yourprojectfolder
><br>My published website: [http://yauque.github.io/export.thimble.app](http://yauque.github.io/export.thimble.app)

<br>
![](http://i.imgur.com/pbpTOBA.png)
<br><br>

----------










- Below table to recap the steps from creating a repo to publishing site on the web: 
<table>
	<tr>
		<th id="c1">Inside 'yourusername'</th>
		<th id="c2">Inside 'repository'</th>
		<th id="c3">Inside thimble project folder</th>
        <th id="c4">Visit http:// yourusername.github.io/thimbleprojectfolder</th>
	<tr>
		<td headers="c1">repository</td>
		<td headers="c2">thimble project folder</td>
		<td headers="c3">project files including index.html</td>
        <td headers="c4">see your built website online :)</td>
	</tr>
</table>

<br> **Website is now published and is publicly seen !**  <br> <br>Next Section we will move on to clone repo to pc, cloning is necessary if need to make changes to webpages in future, so that we can synchronise webpages or other relevant files between our pc with Github website using GitHub software client.<br>

Section 3 and 4 will move on to image hosting and changing images' links on webpages and (Firebase data changes - if Firebase database is used along with website) 


Section 5 include links to assign custom domain name to GitHub hosted site ,other options to publish website without GitHub.

<br><br>
<a name="sectionTwo"></a>
***Section 2:***
----------------
### Cloning repo (including thimble project) from Github to your pc
#### **Make changes on webpages on local pc** ####





- We do this by cloning repo `yourusername/yourusername.github.io` using [Github software client](https://desktop.github.com). <br>




- Open software, go to **Clone** and start cloning (copying) repo,  **yourusername.github.io** to pc and save it to a folder you like. Software will start prompting you to log in if you have not done it yet. <br>
Log in with same username and password created for Github account. <br>
After cloning we will see the thimble project folder and we can modify the contents inside these files before syncing them with the thimble project folder located on Github's website. <br>
There are many synchronisations we may already be using, to name one, eg; <br> Syncing emails between our tablets, mobile phones and laptops. <br> 

![](http://i.imgur.com/qloJIYX.png)    

----------

![](http://i.imgur.com/9RRE3FK.png)
 

----------
<br><br>
<a name="sectionThree"></a>
*Section 3:*
------------

### Ways to host our website images ###

----------



- We can include images (eg jpeg, png files) inside our uploaded thimble project folder. We may also have other images with URL links embedded inside our web scripts that are hosted externally by others but we do not own the images. 


- We can also use external image hosting service to host images.
eg: [imgur](http://imgur.com) <br>
Any changes to image paths will need to be changed on web scripts or firebase database when required. <br>

----------

<br>
<a name="sectionFour"></a>
*Section 4:* using Firebase Import and Import JSON button to change data
----------
***(this section is for Website with a Firebase database)***<br><br>

Data added in Firebase database is named as JSON Object.


 When we only have a few data entries inside our Firebase database, we can manually amend them 1 by 1 using **+ and X button** inside our firebase interface on web browser. <br>
![](http://i.imgur.com/Y43QCx9.png)




 But if we have many data entries, this can be a tedious task, we can make use **Export as JSON and Import as JSON button** to help us make these changes a lot quicker.  We are not adding new data entries but changing existing data entries.

![](http://i.imgur.com/1LO4J1p.png)



 After signing into Firebase, opens the app database,  **Export Data as JSON** and save it to pc, modify data with a text editor, save it and **Import Data as JSON** back to Firebase database.And it's done.<br>

  Exported JSON files can be opened with 
 **text editor** that supports **.JSON extension file**. 
Eg. [Brackets](http://brackets.io) (Windows and Mac supported), [Notepad++](https://notepad-plus-plus.org) (Windows only)
<br> Alternatively, we can also use a JSON online text editor to open the file, modify data and download it back to our pc.
eg. [Json editor online](http://www.jsoneditoronline.org)

With this free Json online editor, individual data entries under each JSON object can be amended on left or right hand column. Eg On LHS, for TRUE or FALSE entry, I can type FALSE to replace TRUE. On RHS, I can simply tick for True and untick the box to make it False. 

![](http://i.imgur.com/GtU1bZr.png)

----------

<a name="sectionFive"></a>
Section 5: More links
-----------------------------------
<br><br>



#### Setting up custom domain name to Github pages:  ####

[https://help.github.com/articles/using-a-custom-domain-with-github-pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/)<br>
[https://help.github.com/articles/custom-domain-redirects-for-github-pages-sites/](https://help.github.com/articles/custom-domain-redirects-for-github-pages-sites/)





**More other options to publish website without GitHub:**


[https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Publishing_your_website](https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Publishing_your_website)











