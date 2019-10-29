---
id: workload-mig-env-setup
title: Overview and Environment Setup
sidebar_label: Overview & Setup
---

## Overview
The Workspace ONE UEM Workload Migration Tool is designed to move Endpoint Configurations and Workloads between UEM Tenants. These tenants can be two completely different servers, e.g. two dedicated Saas Instances, or two Organization Groups (OGs) in the same tenant.

Supported Workloads and Configurations currently include:
* Windows 10, iOS, Android, and macOS Device/User profiles
* Windows 10, iOS, Android, and macOS public and internal applications
* Windows 10 Baselines

## Environment Configuration and Setup
To perform Server to Server migrations, two tenants **must** be configured, a Source and Destination Environment. Most pages will throw an error if one or more environments are missing from the configuration.

### Configure Source Environment
1. Navigate to the WS1 Environments page in the tool. This is usually the landing page but can be found in the Side Navigation.
1. Click the **Add Source Environment** button.
1. Enter the Workspace ONE server information making sure to include *https*.
1. Enter the API user's username.
1. Enter the API user's password.
1. Enter the REST API Key.
1. Specify the Organization Group name for the tenant, e.g. 'win10Test', 'production', etc
1. Click Save.

The environment should now show up with some basic information. Once setup you can **Edit** environment details as need or test the connection to the environment.

### Configure the Destination Environment
1. Navigate to the WS1 Environments page in the tool. This is usually the landing page but can be found in the Side Navigation.
1. Click the **Add Destination Environment** button.
1. Enter the Workspace ONE server information making sure to include *https*.
1. Enter the API user's username.
1. Enter the API user's password.
1. Enter the REST API Key.
1. Specify the Organization Group name for the tenant, e.g. 'win10Test', 'production', etc
1. Click Save.