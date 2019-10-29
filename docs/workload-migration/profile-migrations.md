---
id: profile-migrations
title: Profile Migrations
sidebar_label: Profile Migrations
---

## Migrating Profiles from one UEM environment to another.

### Profile List
On the Profile List, you can view the migration status of profiles, click to view the details of a profile and bulk migrate them if needed.

#### Bulk Migration
Bulk migration is straight forward using this tool. Simply select each profile for migration. The UI will highlight the selections and show a **Migrate** button. Once all the desired profiles have been migrated, clicking the button will begin the migration process. Each row will display the status and a progress indicator as needed. Once the process is finished, success or error messages will display where appropriate.

### Profile Details
The details of a profile can be view on the details screen. This can be navigated to by click on the **View Details** button on the table of profiles. From this screen Profile migration can occur and also exporting of the profile information to a json file.

#### Migration
Profiles that have not been migrated previously will show the migration button. If a profile has been previously migrated then the migration button will not be available.

To migrate, simply click the migration button and monitor the status. A green checkmark will display once migration has been completed.

**Note:** The current check is against the profile name in the destination environment.

#### Export Meta Data
For templates and other use cases, the profile information needs to be saved to a json file. This can be done on the details screen. Simply click the **Export Meta Data** button and a json file will be created with the profile information and saved to the downloads folder of the device.