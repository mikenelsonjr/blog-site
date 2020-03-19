---
title: How to set Registry values using the Custom Settings profile in Workspace ONE UEM
author: Mike Nelson
---

## Overview
As a Workspace ONE UEM administrator, there are times when you may need to set a registry key manually. This could be so that an application has a specific setting or maybe a security setting that is not yet available via Windows 10 MDM. In this post, we will walk through how to configure a registry setting and also how to clean up that setting when the profile is removed via the Workspace ONE UEM console (UEM Console).

<!--truncate-->

## Guide
In general the following process will get the profile created and deployed via the UEM Console. A quick overview of the different values in the xml settings is provided below. Each setting contains a brief explanation of it's purpose and what can/should be modified is below.

1. Configure the [Install Settings](#install-settings)
1. Configure the [Remove Settings](#remove-settings)
1. Create a new Windows 10 Profile in the [UEM Console](#uem-console-steps)
1. Assign the profile to targeted devices via Smart Groups
1. Monitor and [confirm](#confirm-settings) installation status

### XML Settings Overview
The below sample is a template of the settings that will be configured for the install and remove settings of the custom settings profile. Note that this is targeted specifically at the Registry operation. The Intelligent Hub App can accept other operations as well but this guide is only focusing on Registry operations.

The xml is wrapped with the **wap-provisioningdoc** tags. Please note the following key values:

```xml
<wap-provisioningdoc id="1164DF07-F217-449B-95F8-FB85A34D3CA5" name="customprofile">/
    <characteristic type="com.airwatch.winrt.registryoperation" uuid="4fa91319-eac0-4a16-9d10-093ba845b698">
        <parm RegistryPath="HKLM\PATH\To\Desired\Registry\Hive" Action="DesiredAction">
            <Value Name="Value/Key Name" Data="Data to Insert/Replace/Remove" Type="Value Type" />
        </parm>
    </characteristic>
</wap-provisioningdoc>
```
1. wap-provisioningdoc items
    1. *id* for wap-provisioningdoc - This value needs to be unique for the profile commands. The UEM Console and associated services use Universally Unique IDs or UUIDs.
    1. *customprofile* - This tells hub that this is a custom profile so that the appropriate action can be taken.
1. characteristic items
    1. "id" for the characteristic tag - This value needs to be unique as well. 
1. param items
    1. Registrypath - Path to the Registry Key/Hive
    1. Action - Target Action for the registry action. Supported Values are **Replace** and **Remove**
1. Value items
    1. Name - Key/Value Name
    1. Data - Values to be inserted
    1. Type - Data type to be inserted. This must be the supported types of the Windows Registry, e.g. String, DWORD, etc.

### Install Settings
For the install settings, a fictitious application will be used so that we can use fictional values for demonstration purposes. This fictitious app will be referred to as FakeApp and is published by MikeNelson Co. FakeApp has a few configuration values to set that make the end user and IT's life much simpler.
1. SetupURL - String data type
1. FakeAppFeatureFlag - DWORD data type

Knowing that these two settings will be configured, the install settings will resemble the below xml.

```xml
<wap-provisioningdoc id="1164DF07-F217-449B-95F8-FB85A34D3CA5" name="customprofile">/
    <characteristic type="com.airwatch.winrt.registryoperation" uuid="4fa91319-eac0-4a16-9d10-093ba845b698">
        <parm RegistryPath="HKLM\SOFTWARE\MikeNelson\FakeApp" Action="Replace">
            <Value Name="SetupURL" Data="fakeapp.com" Type="String" />
            <Value Name="FakeAppFeatureFlag" Data="1" Type="DWORD" />
        </parm>
    </characteristic>
</wap-provisioningdoc>
```

### Remove Settings
To configure the remove settings, one change needs to be made to the install settings; otherwise, keep the settings more or less the same. The only change is to modify the Action of the *<param>* tag to "Remove". After making that change the remove settings will resemble the below xml.

```xml
<wap-provisioningdoc id="1164DF07-F217-449B-95F8-FB85A34D3CA5" name="customprofile">/
    <characteristic type="com.airwatch.winrt.registryoperation" uuid="4fa91319-eac0-4a16-9d10-093ba845b698">
        <parm RegistryPath="HKLM\SOFTWARE\MikeNelson\FakeApp" Action="Remove">
            <Value Name="SetupURL" Data="fakeapp.com" Type="String" />
            <Value Name="FakeAppFeatureFlag" Data="1" Type="DWORD" />
        </parm>
    </characteristic>
</wap-provisioningdoc>
```

### UEM Console steps
The next set of steps focus on creating the new Windows 10 profile and deploying to targeted devices.

1. In the UEM Console, add a new Windows Desktop profile.
    1. Select Device Profile for machine wide settings and User Profile for settings specific to a user.
1. Configure the General Profile section
    1. Give the Profile a name, in this instance *Fake App Settings*
    1. Set the profile assignement type. "Auto" will deploy the profile automatically and "Manual" makes the profile an on demand setting
    1. Assign the profile to the desired Smart Group.

    ![img](/img/blogimages/2020-03-20/GeneralProfileSettings.png)
    

1. Configure Custom Settings
    1. Set the target of the profile to "Workspace ONE Intelligent Hub"
    1. Uncheck "Make Commands Atomic"
    1. Paste the Install Settings in the Install Settings text box
    1. Paste the Remove Settings in the Remove Settings text box

    ![img](/img/blogimages/2020-03-20/CustomSettings.png)

1. Save and Publish the profile
1. Verify the device list is correct and click Publish

### Confirm Settings
For one of the target devices, the profile has reported back that it is installed. 

![img](/img/blogimages/2020-03-20/ConsoleInstalled.png)

On the device, RegistryEditor will verify if the settings applied successfully.
1. Open RegEdit.exe
1. Expand the HKEY_LOCAL_MACHINE Hive.
1. Keep expanding the Hives until HKLM\SOFTWARE\MikeNelson is expanded.
1. Click on "FakeApp"
1. Notice in the window that there are now two settings applied. These settings match what was installed.

![img](/img/blogimages/2020-03-20/InstalledRegistrySettings.png)

### Verify Removal
Now that install is working, check that the removal of these settings is working as desired. 

1. In the console, click Remove to initiate the Remove profile command.
1. Once the device checks in, it will process the command and indicate that the profile is removed.

![img](/img/blogimages/2020-03-20/ConsoleRemoved.png)

1. On the device, refresh the registry. Notice that while the hive/key are present still, the values themselves have been removed correctly.

![img](/img/blogimages/2020-03-20/RemovedRegistrySettings.png)

## Wrap Up
In this How To post, a Custom Settings profile was configured in the UEM console and pushed to a device. These settings configured a fictitiousicous application in the registry. A similar process can be used to configure the registry in many ways that a use case may dictate for your deployment. 

Thanks for reading.