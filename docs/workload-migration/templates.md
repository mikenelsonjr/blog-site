---
id: template-deployments
title: Template Deployments
sidebar_label: Template Deployments
---

## Deploying and Configuring from a Template
Templates provides the ability to deploy known configurations to new or existing Workspace One UEM environments. 
The templates are json files that have been exported from a UEM server. Generally, these are pull from this tool 
via the Export Meta Data functionality that is available for Profiles and Applications.

In the below example the "Configuration Folder" can contain only the configurations. If directories/folders other than macOS, windows10, etc exist then the tool will fail. The Top Parent folder must be a newly created project folder that only contains the platforms supported by the tool.

**Usage:**

* Create the correct folder structure based on the below example
   * Configuration Folder
     * macOS
       * applications
       * profiles
    * windows10
       * applications
       * profiles
               
For each profile: 
* Export the meta data as JSON. This can be done with the export button on the profile details tab in this tool.
* Save the JSON file to profiles folder to the appropriate platform
          
For each application:
* Create a folder for the application name, e.g. "7zip x64".
* Copy/Put the application installer (MSI, EXE, IPA, APK, ZIP, DMG, etc) into the newly created folder.
* For iOS, Android, and Windows 10 apps: 
    * Create a JSON file for the app meta data. This can be done via the migraiton tool if needed.
    * Copy the json file to the application folder.
* For macOS apps, copy the output from VMware Admin Assistant to the newly created folder.