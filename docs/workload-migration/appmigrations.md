---
id: app-migrations
title: Applications and Migration
sidebar_label: Applications
---

## Migrating Apps from one UEM environment to another.

### Application List View
On the application list view all of the apps in the configured tenant will display. Several filters exist on these view to make it easier to find the targeted application.

Available Filters:
* Device Platform
* Application Type
* Status

Once the targetted application has been found in the listview, click **Migrate App** to navigate to the details page for that Application

### Application Detail View
On the details view, you'll see information about the application, such as the app version, id, etc. Additionally, the destination tenant ID will display just under the App name.

Additionally, on this page, the app meta data can be exported and used in a Template and the application can be migrated to the Destination Environment.

### Migrating the Application
To migrate an application perform the following:

#### Internal Applications
1. Click on **Choose File** and select the app file for the application from your file system.
1. Click the **Migrate** Button.
1. Monitor the status on the screen just above the details table.

Once the migrate button has been clicked, the Tool will upload the application file to the new environment and once that upload is complete, it will save the meta data for that application.

**Note:** The application file needs to be supplied to this tool. There is no way for the tool to retrieve the file from the source environment via the Workspace ONE UEM API at this time.

#### Public Applications
1. Click on the migrate button.
1. Monitor the status on the screen just above the details table.

### Exporting the Meta Data
To add this applicaiton to a template, we'll need to application meta data. To retrieve the meta data, click on the **Export Meta Data** button. This will save a json file to the downloads folder that can be added to a template or used for another api script or tool if desired.