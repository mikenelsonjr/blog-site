---
id: policy-enforcer
title: VMware Policy Enforcer
sidebar_label: Policy Enforcer
---

## VMware Policy Enforcer

### Overview
Policy Enforcer is used to check and remediate restriction policies on a Workspace ONE Managed Windows 10 machine. If a user were to try to override configured Policy CSP settings by attempting to edit the Windows Registry, Policy Enforcer will compare the current value with the MDM configured value and reset the registry if the values differ.

The policy enforcer service runs every 5 minutes in order to correct any policy drift that may occur.

### Setup
Policy Enforcer can be implemented by uploading the MSI installer to the WS1 UEM console and deploying as an internal app via Apps & Books.

1. Download Policy Enforcer from the VMware Flings page at [download](https://flings.vmware.com/policy-enforcer)
1. Upload to the Workspace ONE UEM console.
   1. Login to the Workspace ONE UEM Console.
   1. Navigate to Apps & Books.
   1. Click **Add Application** to upload the application.
   1. Once the app is uploaded, ensure that **Admin Privileges** is set to **YES**.
   ![](assets/policy-enforcer-console.png)
1. Once uploaded Assign to devices.
1. Verify installation on a device by checking for the **WS1PolicyEnforcerService**
![](assets/policy-enforcer-service.png)