---
id: supply-drop-setup
title: Overview, Setup, and Usage
sidebar_label: Overview, Setup & Usage
---

## Overview
Workspace ONE Supply Drop is a tool that allows an Admin to quickly package and deploy Widnows 10 scripts and applications via the Workspace ONE UEM console and Intelligent Hub on end user devices. Supply Drop contains two components, the Designer tool and the Run Time tool. The Designer tool is used to build the packages and the Run time is use to install the package on a device via Workspace ONE UEM.


## Installation
1. Download the installer from the VMware Flings site.
1. Run the Installer MSI with Admin privileges.
1. Once the installer is finished, the designer is ready to be launched and used.

![](assets/supplydrop/supply-drop-installed.png)

**Note:** When the designer is launch it will ask for Admin permissions.



## Create a Package (Quick start)
1. From the Designer's main view, click *Create New Project*
    * The Package Project view will now display.

### Create the Package Manifest
1. Fill in the package name. 
    * This name is used to identify the package on the device and in the console.
1. Fill in the package version to be used.
    * The Version is used to reference an install and to provide a level of versioning to builds
1. Select the Source Files for the package. This will be the root folder of the package containing any needed contents for it to be run.
1. Once the source files are selected, a dialog will appear. The dialog presents an option to *Cache Package Contents* and a list of files in the root of the source files. Select the desired run/install command of the package.
    * Generally, this will be the install script or executable of the package.
    * If a powershell script is selected then the designer will autofill information needed for the package to install via Workspace ONE UEM.
    * Cache Package Contents will store the files on the file system for later use.
    * A custom command can be leveraged as well by selecting the appropriate option.

![img](assets/supplydrop/supply-drop-run-script.png)

1. With the install command selected/configured, the designer will show the Manifest information configured and also the Contents of the Package that will be built.
1. Click **Build Package** in order to build the package.
1. Once the package is built, a dialog will show to view the output of the build process.
![img](assets/supplydrop/supply-drop-build-settings.png)
Output Folder
![img](assets/supplydrop/supply-drop-package-output.png)

## Upload to Workspace ONE UEM
After logging into the Workspace ONE UEM console, perform the following actions:

1. Add a new Internal Application
1. Edit the Details as needed. Such as Name and Version
![img](assets/supplydrop/supply-drop-console-details.png)
1. On the *Files* tab, scroll down to the uninstall command and enter *uninstall*
1. On the Deployment Options tab, fill out the following items:
    * Install Context - this can be either Device or User. For an interactive package, select User
    * Install Command - ```WorkspaceONESupplyDrop.exe```
    * Admin Privileges - Set to **YES**
    ![img](assets/supplydrop/supply-drop-deployment-options.png)
    * When to Call install Complete
        * Click Add to set the defining criteria
        * Select Registry Exists
        * Path: HKLM\SOFTWARE\WOW6432Node\WorkspaceONESupplyDrop\ **Package Name from the Manifest**
        * Value Name: **Version**
        * Value Type: **String**
        * Value Data: **Version from the Manifest**
    ![img](assets/supplydrop/supply-drop-registry-criteria.png)
1. Click Save & Assign
1. Configure the Assignment Groups and Package installation behavior.

The Package is now ready to deploy to end user devices.


<!-- ## Configure API Connection 
This step is optional. If the API connection is not configured then the designer will not be able to upload the package to the Workspace ONE UEM console.

To configure the API Connection follow the following steps:
1. From the settings menu, click on the API Settings menu option
![](assets/supplydrop/supply-drop-apisettings-one.png)
1. In the dialog fill in the required information.
    1. Server URL
    1. API Key
    1. API Username
    1. Password
    1. Org Group ID

![](assets/supplydrop/supply-drop-apisettings-two.png)

-->