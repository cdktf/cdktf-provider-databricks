# `mwsWorkspaces` Submodule <a name="`mwsWorkspaces` Submodule" id="@cdktf/provider-databricks.mwsWorkspaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsWorkspaces <a name="MwsWorkspaces" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces databricks_mws_workspaces}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspaces;

MwsWorkspaces.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .workspaceName(java.lang.String)
//  .awsRegion(java.lang.String)
//  .cloud(java.lang.String)
//  .cloudResourceContainer(MwsWorkspacesCloudResourceContainer)
//  .creationTime(java.lang.Number)
//  .credentialsId(java.lang.String)
//  .customerManagedKeyId(java.lang.String)
//  .customTags(java.util.Map<java.lang.String, java.lang.String>)
//  .deploymentName(java.lang.String)
//  .externalCustomerInfo(MwsWorkspacesExternalCustomerInfo)
//  .gcpManagedNetworkConfig(MwsWorkspacesGcpManagedNetworkConfig)
//  .gkeConfig(MwsWorkspacesGkeConfig)
//  .id(java.lang.String)
//  .isNoPublicIpEnabled(java.lang.Boolean)
//  .isNoPublicIpEnabled(IResolvable)
//  .location(java.lang.String)
//  .managedServicesCustomerManagedKeyId(java.lang.String)
//  .networkId(java.lang.String)
//  .pricingTier(java.lang.String)
//  .privateAccessSettingsId(java.lang.String)
//  .storageConfigurationId(java.lang.String)
//  .storageCustomerManagedKeyId(java.lang.String)
//  .timeouts(MwsWorkspacesTimeouts)
//  .token(MwsWorkspacesToken)
//  .workspaceId(java.lang.Number)
//  .workspaceStatus(java.lang.String)
//  .workspaceStatusMessage(java.lang.String)
//  .workspaceUrl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#account_id MwsWorkspaces#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceName">workspaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_name MwsWorkspaces#workspace_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#aws_region MwsWorkspaces#aws_region}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.cloud">cloud</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#cloud MwsWorkspaces#cloud}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.cloudResourceContainer">cloudResourceContainer</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a></code> | cloud_resource_container block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#creation_time MwsWorkspaces#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.credentialsId">credentialsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#credentials_id MwsWorkspaces#credentials_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.customerManagedKeyId">customerManagedKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#customer_managed_key_id MwsWorkspaces#customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#custom_tags MwsWorkspaces#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.deploymentName">deploymentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#deployment_name MwsWorkspaces#deployment_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.externalCustomerInfo">externalCustomerInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a></code> | external_customer_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.gcpManagedNetworkConfig">gcpManagedNetworkConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a></code> | gcp_managed_network_config block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.gkeConfig">gkeConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a></code> | gke_config block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#id MwsWorkspaces#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.isNoPublicIpEnabled">isNoPublicIpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#is_no_public_ip_enabled MwsWorkspaces#is_no_public_ip_enabled}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#location MwsWorkspaces#location}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.managedServicesCustomerManagedKeyId">managedServicesCustomerManagedKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#managed_services_customer_managed_key_id MwsWorkspaces#managed_services_customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.networkId">networkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#network_id MwsWorkspaces#network_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.pricingTier">pricingTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#pricing_tier MwsWorkspaces#pricing_tier}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.privateAccessSettingsId">privateAccessSettingsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#private_access_settings_id MwsWorkspaces#private_access_settings_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.storageConfigurationId">storageConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#storage_configuration_id MwsWorkspaces#storage_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.storageCustomerManagedKeyId">storageCustomerManagedKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#storage_customer_managed_key_id MwsWorkspaces#storage_customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.token">token</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a></code> | token block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_id MwsWorkspaces#workspace_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceStatus">workspaceStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_status MwsWorkspaces#workspace_status}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceStatusMessage">workspaceStatusMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_status_message MwsWorkspaces#workspace_status_message}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceUrl">workspaceUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_url MwsWorkspaces#workspace_url}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#account_id MwsWorkspaces#account_id}.

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_name MwsWorkspaces#workspace_name}.

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.awsRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#aws_region MwsWorkspaces#aws_region}.

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.cloud"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#cloud MwsWorkspaces#cloud}.

---

##### `cloudResourceContainer`<sup>Optional</sup> <a name="cloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.cloudResourceContainer"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

cloud_resource_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#cloud_resource_container MwsWorkspaces#cloud_resource_container}

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.creationTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#creation_time MwsWorkspaces#creation_time}.

---

##### `credentialsId`<sup>Optional</sup> <a name="credentialsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.credentialsId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#credentials_id MwsWorkspaces#credentials_id}.

---

##### `customerManagedKeyId`<sup>Optional</sup> <a name="customerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.customerManagedKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#customer_managed_key_id MwsWorkspaces#customer_managed_key_id}.

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.customTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#custom_tags MwsWorkspaces#custom_tags}.

---

##### `deploymentName`<sup>Optional</sup> <a name="deploymentName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.deploymentName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#deployment_name MwsWorkspaces#deployment_name}.

---

##### `externalCustomerInfo`<sup>Optional</sup> <a name="externalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.externalCustomerInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

external_customer_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#external_customer_info MwsWorkspaces#external_customer_info}

---

##### `gcpManagedNetworkConfig`<sup>Optional</sup> <a name="gcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.gcpManagedNetworkConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

gcp_managed_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#gcp_managed_network_config MwsWorkspaces#gcp_managed_network_config}

---

##### `gkeConfig`<sup>Optional</sup> <a name="gkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.gkeConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

gke_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#gke_config MwsWorkspaces#gke_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#id MwsWorkspaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isNoPublicIpEnabled`<sup>Optional</sup> <a name="isNoPublicIpEnabled" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.isNoPublicIpEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#is_no_public_ip_enabled MwsWorkspaces#is_no_public_ip_enabled}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#location MwsWorkspaces#location}.

---

##### `managedServicesCustomerManagedKeyId`<sup>Optional</sup> <a name="managedServicesCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.managedServicesCustomerManagedKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#managed_services_customer_managed_key_id MwsWorkspaces#managed_services_customer_managed_key_id}.

---

##### `networkId`<sup>Optional</sup> <a name="networkId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.networkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#network_id MwsWorkspaces#network_id}.

---

##### `pricingTier`<sup>Optional</sup> <a name="pricingTier" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.pricingTier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#pricing_tier MwsWorkspaces#pricing_tier}.

---

##### `privateAccessSettingsId`<sup>Optional</sup> <a name="privateAccessSettingsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.privateAccessSettingsId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#private_access_settings_id MwsWorkspaces#private_access_settings_id}.

---

##### `storageConfigurationId`<sup>Optional</sup> <a name="storageConfigurationId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.storageConfigurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#storage_configuration_id MwsWorkspaces#storage_configuration_id}.

---

##### `storageCustomerManagedKeyId`<sup>Optional</sup> <a name="storageCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.storageCustomerManagedKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#storage_customer_managed_key_id MwsWorkspaces#storage_customer_managed_key_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#timeouts MwsWorkspaces#timeouts}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.token"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#token MwsWorkspaces#token}

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_id MwsWorkspaces#workspace_id}.

---

##### `workspaceStatus`<sup>Optional</sup> <a name="workspaceStatus" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_status MwsWorkspaces#workspace_status}.

---

##### `workspaceStatusMessage`<sup>Optional</sup> <a name="workspaceStatusMessage" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceStatusMessage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_status_message MwsWorkspaces#workspace_status_message}.

---

##### `workspaceUrl`<sup>Optional</sup> <a name="workspaceUrl" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_url MwsWorkspaces#workspace_url}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putCloudResourceContainer">putCloudResourceContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putExternalCustomerInfo">putExternalCustomerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGcpManagedNetworkConfig">putGcpManagedNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGkeConfig">putGkeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putToken">putToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCloud">resetCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCloudResourceContainer">resetCloudResourceContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCreationTime">resetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCredentialsId">resetCredentialsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCustomerManagedKeyId">resetCustomerManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetDeploymentName">resetDeploymentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetExternalCustomerInfo">resetExternalCustomerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetGcpManagedNetworkConfig">resetGcpManagedNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetGkeConfig">resetGkeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetIsNoPublicIpEnabled">resetIsNoPublicIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetManagedServicesCustomerManagedKeyId">resetManagedServicesCustomerManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetNetworkId">resetNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetPricingTier">resetPricingTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetPrivateAccessSettingsId">resetPrivateAccessSettingsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetStorageConfigurationId">resetStorageConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetStorageCustomerManagedKeyId">resetStorageCustomerManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceStatus">resetWorkspaceStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceStatusMessage">resetWorkspaceStatusMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceUrl">resetWorkspaceUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudResourceContainer` <a name="putCloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putCloudResourceContainer"></a>

```java
public void putCloudResourceContainer(MwsWorkspacesCloudResourceContainer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putCloudResourceContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

---

##### `putExternalCustomerInfo` <a name="putExternalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putExternalCustomerInfo"></a>

```java
public void putExternalCustomerInfo(MwsWorkspacesExternalCustomerInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putExternalCustomerInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

---

##### `putGcpManagedNetworkConfig` <a name="putGcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGcpManagedNetworkConfig"></a>

```java
public void putGcpManagedNetworkConfig(MwsWorkspacesGcpManagedNetworkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGcpManagedNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

---

##### `putGkeConfig` <a name="putGkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGkeConfig"></a>

```java
public void putGkeConfig(MwsWorkspacesGkeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGkeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putTimeouts"></a>

```java
public void putTimeouts(MwsWorkspacesTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a>

---

##### `putToken` <a name="putToken" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putToken"></a>

```java
public void putToken(MwsWorkspacesToken value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

---

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetAwsRegion"></a>

```java
public void resetAwsRegion()
```

##### `resetCloud` <a name="resetCloud" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCloud"></a>

```java
public void resetCloud()
```

##### `resetCloudResourceContainer` <a name="resetCloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCloudResourceContainer"></a>

```java
public void resetCloudResourceContainer()
```

##### `resetCreationTime` <a name="resetCreationTime" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCreationTime"></a>

```java
public void resetCreationTime()
```

##### `resetCredentialsId` <a name="resetCredentialsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCredentialsId"></a>

```java
public void resetCredentialsId()
```

##### `resetCustomerManagedKeyId` <a name="resetCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCustomerManagedKeyId"></a>

```java
public void resetCustomerManagedKeyId()
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCustomTags"></a>

```java
public void resetCustomTags()
```

##### `resetDeploymentName` <a name="resetDeploymentName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetDeploymentName"></a>

```java
public void resetDeploymentName()
```

##### `resetExternalCustomerInfo` <a name="resetExternalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetExternalCustomerInfo"></a>

```java
public void resetExternalCustomerInfo()
```

##### `resetGcpManagedNetworkConfig` <a name="resetGcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetGcpManagedNetworkConfig"></a>

```java
public void resetGcpManagedNetworkConfig()
```

##### `resetGkeConfig` <a name="resetGkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetGkeConfig"></a>

```java
public void resetGkeConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetId"></a>

```java
public void resetId()
```

##### `resetIsNoPublicIpEnabled` <a name="resetIsNoPublicIpEnabled" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetIsNoPublicIpEnabled"></a>

```java
public void resetIsNoPublicIpEnabled()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetManagedServicesCustomerManagedKeyId` <a name="resetManagedServicesCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetManagedServicesCustomerManagedKeyId"></a>

```java
public void resetManagedServicesCustomerManagedKeyId()
```

##### `resetNetworkId` <a name="resetNetworkId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetNetworkId"></a>

```java
public void resetNetworkId()
```

##### `resetPricingTier` <a name="resetPricingTier" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetPricingTier"></a>

```java
public void resetPricingTier()
```

##### `resetPrivateAccessSettingsId` <a name="resetPrivateAccessSettingsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetPrivateAccessSettingsId"></a>

```java
public void resetPrivateAccessSettingsId()
```

##### `resetStorageConfigurationId` <a name="resetStorageConfigurationId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetStorageConfigurationId"></a>

```java
public void resetStorageConfigurationId()
```

##### `resetStorageCustomerManagedKeyId` <a name="resetStorageCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetStorageCustomerManagedKeyId"></a>

```java
public void resetStorageCustomerManagedKeyId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetToken"></a>

```java
public void resetToken()
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```

##### `resetWorkspaceStatus` <a name="resetWorkspaceStatus" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceStatus"></a>

```java
public void resetWorkspaceStatus()
```

##### `resetWorkspaceStatusMessage` <a name="resetWorkspaceStatusMessage" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceStatusMessage"></a>

```java
public void resetWorkspaceStatusMessage()
```

##### `resetWorkspaceUrl` <a name="resetWorkspaceUrl" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceUrl"></a>

```java
public void resetWorkspaceUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MwsWorkspaces resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspaces;

MwsWorkspaces.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspaces;

MwsWorkspaces.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspaces;

MwsWorkspaces.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspaces;

MwsWorkspaces.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MwsWorkspaces.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MwsWorkspaces resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MwsWorkspaces to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MwsWorkspaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MwsWorkspaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainer">cloudResourceContainer</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference">MwsWorkspacesCloudResourceContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfo">externalCustomerInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference">MwsWorkspacesExternalCustomerInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfig">gcpManagedNetworkConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference">MwsWorkspacesGcpManagedNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpWorkspaceSa">gcpWorkspaceSa</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfig">gkeConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference">MwsWorkspacesGkeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference">MwsWorkspacesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.token">token</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference">MwsWorkspacesTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegionInput">awsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudInput">cloudInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainerInput">cloudResourceContainerInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTimeInput">creationTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsIdInput">credentialsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyIdInput">customerManagedKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customTagsInput">customTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentNameInput">deploymentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfoInput">externalCustomerInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfigInput">gcpManagedNetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfigInput">gkeConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabledInput">isNoPublicIpEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyIdInput">managedServicesCustomerManagedKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkIdInput">networkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTierInput">pricingTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsIdInput">privateAccessSettingsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationIdInput">storageConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyIdInput">storageCustomerManagedKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tokenInput">tokenInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceNameInput">workspaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusInput">workspaceStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessageInput">workspaceStatusMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrlInput">workspaceUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloud">cloud</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsId">credentialsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyId">customerManagedKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentName">deploymentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabled">isNoPublicIpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyId">managedServicesCustomerManagedKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkId">networkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTier">pricingTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsId">privateAccessSettingsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationId">storageConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyId">storageCustomerManagedKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceId">workspaceId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceName">workspaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatus">workspaceStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessage">workspaceStatusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrl">workspaceUrl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudResourceContainer`<sup>Required</sup> <a name="cloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainer"></a>

```java
public MwsWorkspacesCloudResourceContainerOutputReference getCloudResourceContainer();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference">MwsWorkspacesCloudResourceContainerOutputReference</a>

---

##### `externalCustomerInfo`<sup>Required</sup> <a name="externalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfo"></a>

```java
public MwsWorkspacesExternalCustomerInfoOutputReference getExternalCustomerInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference">MwsWorkspacesExternalCustomerInfoOutputReference</a>

---

##### `gcpManagedNetworkConfig`<sup>Required</sup> <a name="gcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfig"></a>

```java
public MwsWorkspacesGcpManagedNetworkConfigOutputReference getGcpManagedNetworkConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference">MwsWorkspacesGcpManagedNetworkConfigOutputReference</a>

---

##### `gcpWorkspaceSa`<sup>Required</sup> <a name="gcpWorkspaceSa" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpWorkspaceSa"></a>

```java
public java.lang.String getGcpWorkspaceSa();
```

- *Type:* java.lang.String

---

##### `gkeConfig`<sup>Required</sup> <a name="gkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfig"></a>

```java
public MwsWorkspacesGkeConfigOutputReference getGkeConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference">MwsWorkspacesGkeConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeouts"></a>

```java
public MwsWorkspacesTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference">MwsWorkspacesTimeoutsOutputReference</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.token"></a>

```java
public MwsWorkspacesTokenOutputReference getToken();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference">MwsWorkspacesTokenOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegionInput"></a>

```java
public java.lang.String getAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `cloudInput`<sup>Optional</sup> <a name="cloudInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudInput"></a>

```java
public java.lang.String getCloudInput();
```

- *Type:* java.lang.String

---

##### `cloudResourceContainerInput`<sup>Optional</sup> <a name="cloudResourceContainerInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainerInput"></a>

```java
public MwsWorkspacesCloudResourceContainer getCloudResourceContainerInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

---

##### `creationTimeInput`<sup>Optional</sup> <a name="creationTimeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTimeInput"></a>

```java
public java.lang.Number getCreationTimeInput();
```

- *Type:* java.lang.Number

---

##### `credentialsIdInput`<sup>Optional</sup> <a name="credentialsIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsIdInput"></a>

```java
public java.lang.String getCredentialsIdInput();
```

- *Type:* java.lang.String

---

##### `customerManagedKeyIdInput`<sup>Optional</sup> <a name="customerManagedKeyIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyIdInput"></a>

```java
public java.lang.String getCustomerManagedKeyIdInput();
```

- *Type:* java.lang.String

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deploymentNameInput`<sup>Optional</sup> <a name="deploymentNameInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentNameInput"></a>

```java
public java.lang.String getDeploymentNameInput();
```

- *Type:* java.lang.String

---

##### `externalCustomerInfoInput`<sup>Optional</sup> <a name="externalCustomerInfoInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfoInput"></a>

```java
public MwsWorkspacesExternalCustomerInfo getExternalCustomerInfoInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

---

##### `gcpManagedNetworkConfigInput`<sup>Optional</sup> <a name="gcpManagedNetworkConfigInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfigInput"></a>

```java
public MwsWorkspacesGcpManagedNetworkConfig getGcpManagedNetworkConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

---

##### `gkeConfigInput`<sup>Optional</sup> <a name="gkeConfigInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfigInput"></a>

```java
public MwsWorkspacesGkeConfig getGkeConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isNoPublicIpEnabledInput`<sup>Optional</sup> <a name="isNoPublicIpEnabledInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabledInput"></a>

```java
public java.lang.Object getIsNoPublicIpEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `managedServicesCustomerManagedKeyIdInput`<sup>Optional</sup> <a name="managedServicesCustomerManagedKeyIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyIdInput"></a>

```java
public java.lang.String getManagedServicesCustomerManagedKeyIdInput();
```

- *Type:* java.lang.String

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkIdInput"></a>

```java
public java.lang.String getNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `pricingTierInput`<sup>Optional</sup> <a name="pricingTierInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTierInput"></a>

```java
public java.lang.String getPricingTierInput();
```

- *Type:* java.lang.String

---

##### `privateAccessSettingsIdInput`<sup>Optional</sup> <a name="privateAccessSettingsIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsIdInput"></a>

```java
public java.lang.String getPrivateAccessSettingsIdInput();
```

- *Type:* java.lang.String

---

##### `storageConfigurationIdInput`<sup>Optional</sup> <a name="storageConfigurationIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationIdInput"></a>

```java
public java.lang.String getStorageConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `storageCustomerManagedKeyIdInput`<sup>Optional</sup> <a name="storageCustomerManagedKeyIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyIdInput"></a>

```java
public java.lang.String getStorageCustomerManagedKeyIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a>

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tokenInput"></a>

```java
public MwsWorkspacesToken getTokenInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceIdInput"></a>

```java
public java.lang.Number getWorkspaceIdInput();
```

- *Type:* java.lang.Number

---

##### `workspaceNameInput`<sup>Optional</sup> <a name="workspaceNameInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceNameInput"></a>

```java
public java.lang.String getWorkspaceNameInput();
```

- *Type:* java.lang.String

---

##### `workspaceStatusInput`<sup>Optional</sup> <a name="workspaceStatusInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusInput"></a>

```java
public java.lang.String getWorkspaceStatusInput();
```

- *Type:* java.lang.String

---

##### `workspaceStatusMessageInput`<sup>Optional</sup> <a name="workspaceStatusMessageInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessageInput"></a>

```java
public java.lang.String getWorkspaceStatusMessageInput();
```

- *Type:* java.lang.String

---

##### `workspaceUrlInput`<sup>Optional</sup> <a name="workspaceUrlInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrlInput"></a>

```java
public java.lang.String getWorkspaceUrlInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloud"></a>

```java
public java.lang.String getCloud();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTime"></a>

```java
public java.lang.Number getCreationTime();
```

- *Type:* java.lang.Number

---

##### `credentialsId`<sup>Required</sup> <a name="credentialsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsId"></a>

```java
public java.lang.String getCredentialsId();
```

- *Type:* java.lang.String

---

##### `customerManagedKeyId`<sup>Required</sup> <a name="customerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyId"></a>

```java
public java.lang.String getCustomerManagedKeyId();
```

- *Type:* java.lang.String

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deploymentName`<sup>Required</sup> <a name="deploymentName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentName"></a>

```java
public java.lang.String getDeploymentName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isNoPublicIpEnabled`<sup>Required</sup> <a name="isNoPublicIpEnabled" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabled"></a>

```java
public java.lang.Object getIsNoPublicIpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `managedServicesCustomerManagedKeyId`<sup>Required</sup> <a name="managedServicesCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyId"></a>

```java
public java.lang.String getManagedServicesCustomerManagedKeyId();
```

- *Type:* java.lang.String

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

---

##### `pricingTier`<sup>Required</sup> <a name="pricingTier" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTier"></a>

```java
public java.lang.String getPricingTier();
```

- *Type:* java.lang.String

---

##### `privateAccessSettingsId`<sup>Required</sup> <a name="privateAccessSettingsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsId"></a>

```java
public java.lang.String getPrivateAccessSettingsId();
```

- *Type:* java.lang.String

---

##### `storageConfigurationId`<sup>Required</sup> <a name="storageConfigurationId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationId"></a>

```java
public java.lang.String getStorageConfigurationId();
```

- *Type:* java.lang.String

---

##### `storageCustomerManagedKeyId`<sup>Required</sup> <a name="storageCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyId"></a>

```java
public java.lang.String getStorageCustomerManagedKeyId();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceId"></a>

```java
public java.lang.Number getWorkspaceId();
```

- *Type:* java.lang.Number

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceName"></a>

```java
public java.lang.String getWorkspaceName();
```

- *Type:* java.lang.String

---

##### `workspaceStatus`<sup>Required</sup> <a name="workspaceStatus" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatus"></a>

```java
public java.lang.String getWorkspaceStatus();
```

- *Type:* java.lang.String

---

##### `workspaceStatusMessage`<sup>Required</sup> <a name="workspaceStatusMessage" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessage"></a>

```java
public java.lang.String getWorkspaceStatusMessage();
```

- *Type:* java.lang.String

---

##### `workspaceUrl`<sup>Required</sup> <a name="workspaceUrl" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrl"></a>

```java
public java.lang.String getWorkspaceUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MwsWorkspacesCloudResourceContainer <a name="MwsWorkspacesCloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspacesCloudResourceContainer;

MwsWorkspacesCloudResourceContainer.builder()
    .gcp(MwsWorkspacesCloudResourceContainerGcp)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer.property.gcp">gcp</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a></code> | gcp block. |

---

##### `gcp`<sup>Required</sup> <a name="gcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer.property.gcp"></a>

```java
public MwsWorkspacesCloudResourceContainerGcp getGcp();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#gcp MwsWorkspaces#gcp}

---

### MwsWorkspacesCloudResourceContainerGcp <a name="MwsWorkspacesCloudResourceContainerGcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspacesCloudResourceContainerGcp;

MwsWorkspacesCloudResourceContainerGcp.builder()
    .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#project_id MwsWorkspaces#project_id}. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#project_id MwsWorkspaces#project_id}.

---

### MwsWorkspacesConfig <a name="MwsWorkspacesConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspacesConfig;

MwsWorkspacesConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .workspaceName(java.lang.String)
//  .awsRegion(java.lang.String)
//  .cloud(java.lang.String)
//  .cloudResourceContainer(MwsWorkspacesCloudResourceContainer)
//  .creationTime(java.lang.Number)
//  .credentialsId(java.lang.String)
//  .customerManagedKeyId(java.lang.String)
//  .customTags(java.util.Map<java.lang.String, java.lang.String>)
//  .deploymentName(java.lang.String)
//  .externalCustomerInfo(MwsWorkspacesExternalCustomerInfo)
//  .gcpManagedNetworkConfig(MwsWorkspacesGcpManagedNetworkConfig)
//  .gkeConfig(MwsWorkspacesGkeConfig)
//  .id(java.lang.String)
//  .isNoPublicIpEnabled(java.lang.Boolean)
//  .isNoPublicIpEnabled(IResolvable)
//  .location(java.lang.String)
//  .managedServicesCustomerManagedKeyId(java.lang.String)
//  .networkId(java.lang.String)
//  .pricingTier(java.lang.String)
//  .privateAccessSettingsId(java.lang.String)
//  .storageConfigurationId(java.lang.String)
//  .storageCustomerManagedKeyId(java.lang.String)
//  .timeouts(MwsWorkspacesTimeouts)
//  .token(MwsWorkspacesToken)
//  .workspaceId(java.lang.Number)
//  .workspaceStatus(java.lang.String)
//  .workspaceStatusMessage(java.lang.String)
//  .workspaceUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#account_id MwsWorkspaces#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceName">workspaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_name MwsWorkspaces#workspace_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#aws_region MwsWorkspaces#aws_region}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloud">cloud</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#cloud MwsWorkspaces#cloud}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloudResourceContainer">cloudResourceContainer</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a></code> | cloud_resource_container block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#creation_time MwsWorkspaces#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.credentialsId">credentialsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#credentials_id MwsWorkspaces#credentials_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.customerManagedKeyId">customerManagedKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#customer_managed_key_id MwsWorkspaces#customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#custom_tags MwsWorkspaces#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.deploymentName">deploymentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#deployment_name MwsWorkspaces#deployment_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.externalCustomerInfo">externalCustomerInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a></code> | external_customer_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gcpManagedNetworkConfig">gcpManagedNetworkConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a></code> | gcp_managed_network_config block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gkeConfig">gkeConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a></code> | gke_config block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#id MwsWorkspaces#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.isNoPublicIpEnabled">isNoPublicIpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#is_no_public_ip_enabled MwsWorkspaces#is_no_public_ip_enabled}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#location MwsWorkspaces#location}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.managedServicesCustomerManagedKeyId">managedServicesCustomerManagedKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#managed_services_customer_managed_key_id MwsWorkspaces#managed_services_customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.networkId">networkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#network_id MwsWorkspaces#network_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.pricingTier">pricingTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#pricing_tier MwsWorkspaces#pricing_tier}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.privateAccessSettingsId">privateAccessSettingsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#private_access_settings_id MwsWorkspaces#private_access_settings_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageConfigurationId">storageConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#storage_configuration_id MwsWorkspaces#storage_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageCustomerManagedKeyId">storageCustomerManagedKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#storage_customer_managed_key_id MwsWorkspaces#storage_customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.token">token</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a></code> | token block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_id MwsWorkspaces#workspace_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatus">workspaceStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_status MwsWorkspaces#workspace_status}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatusMessage">workspaceStatusMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_status_message MwsWorkspaces#workspace_status_message}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceUrl">workspaceUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_url MwsWorkspaces#workspace_url}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#account_id MwsWorkspaces#account_id}.

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceName"></a>

```java
public java.lang.String getWorkspaceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_name MwsWorkspaces#workspace_name}.

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#aws_region MwsWorkspaces#aws_region}.

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloud"></a>

```java
public java.lang.String getCloud();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#cloud MwsWorkspaces#cloud}.

---

##### `cloudResourceContainer`<sup>Optional</sup> <a name="cloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloudResourceContainer"></a>

```java
public MwsWorkspacesCloudResourceContainer getCloudResourceContainer();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

cloud_resource_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#cloud_resource_container MwsWorkspaces#cloud_resource_container}

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.creationTime"></a>

```java
public java.lang.Number getCreationTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#creation_time MwsWorkspaces#creation_time}.

---

##### `credentialsId`<sup>Optional</sup> <a name="credentialsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.credentialsId"></a>

```java
public java.lang.String getCredentialsId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#credentials_id MwsWorkspaces#credentials_id}.

---

##### `customerManagedKeyId`<sup>Optional</sup> <a name="customerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.customerManagedKeyId"></a>

```java
public java.lang.String getCustomerManagedKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#customer_managed_key_id MwsWorkspaces#customer_managed_key_id}.

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.customTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#custom_tags MwsWorkspaces#custom_tags}.

---

##### `deploymentName`<sup>Optional</sup> <a name="deploymentName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.deploymentName"></a>

```java
public java.lang.String getDeploymentName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#deployment_name MwsWorkspaces#deployment_name}.

---

##### `externalCustomerInfo`<sup>Optional</sup> <a name="externalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.externalCustomerInfo"></a>

```java
public MwsWorkspacesExternalCustomerInfo getExternalCustomerInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

external_customer_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#external_customer_info MwsWorkspaces#external_customer_info}

---

##### `gcpManagedNetworkConfig`<sup>Optional</sup> <a name="gcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gcpManagedNetworkConfig"></a>

```java
public MwsWorkspacesGcpManagedNetworkConfig getGcpManagedNetworkConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

gcp_managed_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#gcp_managed_network_config MwsWorkspaces#gcp_managed_network_config}

---

##### `gkeConfig`<sup>Optional</sup> <a name="gkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gkeConfig"></a>

```java
public MwsWorkspacesGkeConfig getGkeConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

gke_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#gke_config MwsWorkspaces#gke_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#id MwsWorkspaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isNoPublicIpEnabled`<sup>Optional</sup> <a name="isNoPublicIpEnabled" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.isNoPublicIpEnabled"></a>

```java
public java.lang.Object getIsNoPublicIpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#is_no_public_ip_enabled MwsWorkspaces#is_no_public_ip_enabled}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#location MwsWorkspaces#location}.

---

##### `managedServicesCustomerManagedKeyId`<sup>Optional</sup> <a name="managedServicesCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.managedServicesCustomerManagedKeyId"></a>

```java
public java.lang.String getManagedServicesCustomerManagedKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#managed_services_customer_managed_key_id MwsWorkspaces#managed_services_customer_managed_key_id}.

---

##### `networkId`<sup>Optional</sup> <a name="networkId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#network_id MwsWorkspaces#network_id}.

---

##### `pricingTier`<sup>Optional</sup> <a name="pricingTier" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.pricingTier"></a>

```java
public java.lang.String getPricingTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#pricing_tier MwsWorkspaces#pricing_tier}.

---

##### `privateAccessSettingsId`<sup>Optional</sup> <a name="privateAccessSettingsId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.privateAccessSettingsId"></a>

```java
public java.lang.String getPrivateAccessSettingsId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#private_access_settings_id MwsWorkspaces#private_access_settings_id}.

---

##### `storageConfigurationId`<sup>Optional</sup> <a name="storageConfigurationId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageConfigurationId"></a>

```java
public java.lang.String getStorageConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#storage_configuration_id MwsWorkspaces#storage_configuration_id}.

---

##### `storageCustomerManagedKeyId`<sup>Optional</sup> <a name="storageCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageCustomerManagedKeyId"></a>

```java
public java.lang.String getStorageCustomerManagedKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#storage_customer_managed_key_id MwsWorkspaces#storage_customer_managed_key_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.timeouts"></a>

```java
public MwsWorkspacesTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#timeouts MwsWorkspaces#timeouts}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.token"></a>

```java
public MwsWorkspacesToken getToken();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#token MwsWorkspaces#token}

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceId"></a>

```java
public java.lang.Number getWorkspaceId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_id MwsWorkspaces#workspace_id}.

---

##### `workspaceStatus`<sup>Optional</sup> <a name="workspaceStatus" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatus"></a>

```java
public java.lang.String getWorkspaceStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_status MwsWorkspaces#workspace_status}.

---

##### `workspaceStatusMessage`<sup>Optional</sup> <a name="workspaceStatusMessage" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatusMessage"></a>

```java
public java.lang.String getWorkspaceStatusMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_status_message MwsWorkspaces#workspace_status_message}.

---

##### `workspaceUrl`<sup>Optional</sup> <a name="workspaceUrl" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceUrl"></a>

```java
public java.lang.String getWorkspaceUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#workspace_url MwsWorkspaces#workspace_url}.

---

### MwsWorkspacesExternalCustomerInfo <a name="MwsWorkspacesExternalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspacesExternalCustomerInfo;

MwsWorkspacesExternalCustomerInfo.builder()
    .authoritativeUserEmail(java.lang.String)
    .authoritativeUserFullName(java.lang.String)
    .customerName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserEmail">authoritativeUserEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#authoritative_user_email MwsWorkspaces#authoritative_user_email}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserFullName">authoritativeUserFullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#authoritative_user_full_name MwsWorkspaces#authoritative_user_full_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.customerName">customerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#customer_name MwsWorkspaces#customer_name}. |

---

##### `authoritativeUserEmail`<sup>Required</sup> <a name="authoritativeUserEmail" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserEmail"></a>

```java
public java.lang.String getAuthoritativeUserEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#authoritative_user_email MwsWorkspaces#authoritative_user_email}.

---

##### `authoritativeUserFullName`<sup>Required</sup> <a name="authoritativeUserFullName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserFullName"></a>

```java
public java.lang.String getAuthoritativeUserFullName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#authoritative_user_full_name MwsWorkspaces#authoritative_user_full_name}.

---

##### `customerName`<sup>Required</sup> <a name="customerName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.customerName"></a>

```java
public java.lang.String getCustomerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#customer_name MwsWorkspaces#customer_name}.

---

### MwsWorkspacesGcpManagedNetworkConfig <a name="MwsWorkspacesGcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspacesGcpManagedNetworkConfig;

MwsWorkspacesGcpManagedNetworkConfig.builder()
    .gkeClusterPodIpRange(java.lang.String)
    .gkeClusterServiceIpRange(java.lang.String)
    .subnetCidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterPodIpRange">gkeClusterPodIpRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#gke_cluster_pod_ip_range MwsWorkspaces#gke_cluster_pod_ip_range}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterServiceIpRange">gkeClusterServiceIpRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#gke_cluster_service_ip_range MwsWorkspaces#gke_cluster_service_ip_range}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.subnetCidr">subnetCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#subnet_cidr MwsWorkspaces#subnet_cidr}. |

---

##### `gkeClusterPodIpRange`<sup>Required</sup> <a name="gkeClusterPodIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterPodIpRange"></a>

```java
public java.lang.String getGkeClusterPodIpRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#gke_cluster_pod_ip_range MwsWorkspaces#gke_cluster_pod_ip_range}.

---

##### `gkeClusterServiceIpRange`<sup>Required</sup> <a name="gkeClusterServiceIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterServiceIpRange"></a>

```java
public java.lang.String getGkeClusterServiceIpRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#gke_cluster_service_ip_range MwsWorkspaces#gke_cluster_service_ip_range}.

---

##### `subnetCidr`<sup>Required</sup> <a name="subnetCidr" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.subnetCidr"></a>

```java
public java.lang.String getSubnetCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#subnet_cidr MwsWorkspaces#subnet_cidr}.

---

### MwsWorkspacesGkeConfig <a name="MwsWorkspacesGkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspacesGkeConfig;

MwsWorkspacesGkeConfig.builder()
    .connectivityType(java.lang.String)
    .masterIpRange(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.connectivityType">connectivityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#connectivity_type MwsWorkspaces#connectivity_type}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.masterIpRange">masterIpRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#master_ip_range MwsWorkspaces#master_ip_range}. |

---

##### `connectivityType`<sup>Required</sup> <a name="connectivityType" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.connectivityType"></a>

```java
public java.lang.String getConnectivityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#connectivity_type MwsWorkspaces#connectivity_type}.

---

##### `masterIpRange`<sup>Required</sup> <a name="masterIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.masterIpRange"></a>

```java
public java.lang.String getMasterIpRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#master_ip_range MwsWorkspaces#master_ip_range}.

---

### MwsWorkspacesTimeouts <a name="MwsWorkspacesTimeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspacesTimeouts;

MwsWorkspacesTimeouts.builder()
//  .create(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#create MwsWorkspaces#create}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#read MwsWorkspaces#read}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#update MwsWorkspaces#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#create MwsWorkspaces#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#read MwsWorkspaces#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#update MwsWorkspaces#update}.

---

### MwsWorkspacesToken <a name="MwsWorkspacesToken" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspacesToken;

MwsWorkspacesToken.builder()
//  .comment(java.lang.String)
//  .lifetimeSeconds(java.lang.Number)
//  .tokenId(java.lang.String)
//  .tokenValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#comment MwsWorkspaces#comment}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.lifetimeSeconds">lifetimeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#lifetime_seconds MwsWorkspaces#lifetime_seconds}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenId">tokenId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#token_id MwsWorkspaces#token_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenValue">tokenValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#token_value MwsWorkspaces#token_value}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#comment MwsWorkspaces#comment}.

---

##### `lifetimeSeconds`<sup>Optional</sup> <a name="lifetimeSeconds" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.lifetimeSeconds"></a>

```java
public java.lang.Number getLifetimeSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#lifetime_seconds MwsWorkspaces#lifetime_seconds}.

---

##### `tokenId`<sup>Optional</sup> <a name="tokenId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenId"></a>

```java
public java.lang.String getTokenId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#token_id MwsWorkspaces#token_id}.

---

##### `tokenValue`<sup>Optional</sup> <a name="tokenValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenValue"></a>

```java
public java.lang.String getTokenValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/mws_workspaces#token_value MwsWorkspaces#token_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsWorkspacesCloudResourceContainerGcpOutputReference <a name="MwsWorkspacesCloudResourceContainerGcpOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference;

new MwsWorkspacesCloudResourceContainerGcpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.internalValue"></a>

```java
public MwsWorkspacesCloudResourceContainerGcp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

---


### MwsWorkspacesCloudResourceContainerOutputReference <a name="MwsWorkspacesCloudResourceContainerOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspacesCloudResourceContainerOutputReference;

new MwsWorkspacesCloudResourceContainerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.putGcp">putGcp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGcp` <a name="putGcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.putGcp"></a>

```java
public void putGcp(MwsWorkspacesCloudResourceContainerGcp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.putGcp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcp">gcp</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference">MwsWorkspacesCloudResourceContainerGcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcpInput">gcpInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gcp`<sup>Required</sup> <a name="gcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcp"></a>

```java
public MwsWorkspacesCloudResourceContainerGcpOutputReference getGcp();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference">MwsWorkspacesCloudResourceContainerGcpOutputReference</a>

---

##### `gcpInput`<sup>Optional</sup> <a name="gcpInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcpInput"></a>

```java
public MwsWorkspacesCloudResourceContainerGcp getGcpInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.internalValue"></a>

```java
public MwsWorkspacesCloudResourceContainer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

---


### MwsWorkspacesExternalCustomerInfoOutputReference <a name="MwsWorkspacesExternalCustomerInfoOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspacesExternalCustomerInfoOutputReference;

new MwsWorkspacesExternalCustomerInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmailInput">authoritativeUserEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullNameInput">authoritativeUserFullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerNameInput">customerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmail">authoritativeUserEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullName">authoritativeUserFullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerName">customerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authoritativeUserEmailInput`<sup>Optional</sup> <a name="authoritativeUserEmailInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmailInput"></a>

```java
public java.lang.String getAuthoritativeUserEmailInput();
```

- *Type:* java.lang.String

---

##### `authoritativeUserFullNameInput`<sup>Optional</sup> <a name="authoritativeUserFullNameInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullNameInput"></a>

```java
public java.lang.String getAuthoritativeUserFullNameInput();
```

- *Type:* java.lang.String

---

##### `customerNameInput`<sup>Optional</sup> <a name="customerNameInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerNameInput"></a>

```java
public java.lang.String getCustomerNameInput();
```

- *Type:* java.lang.String

---

##### `authoritativeUserEmail`<sup>Required</sup> <a name="authoritativeUserEmail" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmail"></a>

```java
public java.lang.String getAuthoritativeUserEmail();
```

- *Type:* java.lang.String

---

##### `authoritativeUserFullName`<sup>Required</sup> <a name="authoritativeUserFullName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullName"></a>

```java
public java.lang.String getAuthoritativeUserFullName();
```

- *Type:* java.lang.String

---

##### `customerName`<sup>Required</sup> <a name="customerName" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerName"></a>

```java
public java.lang.String getCustomerName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.internalValue"></a>

```java
public MwsWorkspacesExternalCustomerInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

---


### MwsWorkspacesGcpManagedNetworkConfigOutputReference <a name="MwsWorkspacesGcpManagedNetworkConfigOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference;

new MwsWorkspacesGcpManagedNetworkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRangeInput">gkeClusterPodIpRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRangeInput">gkeClusterServiceIpRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidrInput">subnetCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRange">gkeClusterPodIpRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRange">gkeClusterServiceIpRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidr">subnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gkeClusterPodIpRangeInput`<sup>Optional</sup> <a name="gkeClusterPodIpRangeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRangeInput"></a>

```java
public java.lang.String getGkeClusterPodIpRangeInput();
```

- *Type:* java.lang.String

---

##### `gkeClusterServiceIpRangeInput`<sup>Optional</sup> <a name="gkeClusterServiceIpRangeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRangeInput"></a>

```java
public java.lang.String getGkeClusterServiceIpRangeInput();
```

- *Type:* java.lang.String

---

##### `subnetCidrInput`<sup>Optional</sup> <a name="subnetCidrInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidrInput"></a>

```java
public java.lang.String getSubnetCidrInput();
```

- *Type:* java.lang.String

---

##### `gkeClusterPodIpRange`<sup>Required</sup> <a name="gkeClusterPodIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRange"></a>

```java
public java.lang.String getGkeClusterPodIpRange();
```

- *Type:* java.lang.String

---

##### `gkeClusterServiceIpRange`<sup>Required</sup> <a name="gkeClusterServiceIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRange"></a>

```java
public java.lang.String getGkeClusterServiceIpRange();
```

- *Type:* java.lang.String

---

##### `subnetCidr`<sup>Required</sup> <a name="subnetCidr" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidr"></a>

```java
public java.lang.String getSubnetCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.internalValue"></a>

```java
public MwsWorkspacesGcpManagedNetworkConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

---


### MwsWorkspacesGkeConfigOutputReference <a name="MwsWorkspacesGkeConfigOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspacesGkeConfigOutputReference;

new MwsWorkspacesGkeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityTypeInput">connectivityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRangeInput">masterIpRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityType">connectivityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRange">masterIpRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectivityTypeInput`<sup>Optional</sup> <a name="connectivityTypeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityTypeInput"></a>

```java
public java.lang.String getConnectivityTypeInput();
```

- *Type:* java.lang.String

---

##### `masterIpRangeInput`<sup>Optional</sup> <a name="masterIpRangeInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRangeInput"></a>

```java
public java.lang.String getMasterIpRangeInput();
```

- *Type:* java.lang.String

---

##### `connectivityType`<sup>Required</sup> <a name="connectivityType" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityType"></a>

```java
public java.lang.String getConnectivityType();
```

- *Type:* java.lang.String

---

##### `masterIpRange`<sup>Required</sup> <a name="masterIpRange" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRange"></a>

```java
public java.lang.String getMasterIpRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.internalValue"></a>

```java
public MwsWorkspacesGkeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

---


### MwsWorkspacesTimeoutsOutputReference <a name="MwsWorkspacesTimeoutsOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspacesTimeoutsOutputReference;

new MwsWorkspacesTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a>

---


### MwsWorkspacesTokenOutputReference <a name="MwsWorkspacesTokenOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_workspaces.MwsWorkspacesTokenOutputReference;

new MwsWorkspacesTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetLifetimeSeconds">resetLifetimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetTokenId">resetTokenId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetTokenValue">resetTokenValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetLifetimeSeconds` <a name="resetLifetimeSeconds" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetLifetimeSeconds"></a>

```java
public void resetLifetimeSeconds()
```

##### `resetTokenId` <a name="resetTokenId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetTokenId"></a>

```java
public void resetTokenId()
```

##### `resetTokenValue` <a name="resetTokenValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetTokenValue"></a>

```java
public void resetTokenValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSecondsInput">lifetimeSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenIdInput">tokenIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValueInput">tokenValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSeconds">lifetimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenId">tokenId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValue">tokenValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `lifetimeSecondsInput`<sup>Optional</sup> <a name="lifetimeSecondsInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSecondsInput"></a>

```java
public java.lang.Number getLifetimeSecondsInput();
```

- *Type:* java.lang.Number

---

##### `tokenIdInput`<sup>Optional</sup> <a name="tokenIdInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenIdInput"></a>

```java
public java.lang.String getTokenIdInput();
```

- *Type:* java.lang.String

---

##### `tokenValueInput`<sup>Optional</sup> <a name="tokenValueInput" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValueInput"></a>

```java
public java.lang.String getTokenValueInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `lifetimeSeconds`<sup>Required</sup> <a name="lifetimeSeconds" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSeconds"></a>

```java
public java.lang.Number getLifetimeSeconds();
```

- *Type:* java.lang.Number

---

##### `tokenId`<sup>Required</sup> <a name="tokenId" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenId"></a>

```java
public java.lang.String getTokenId();
```

- *Type:* java.lang.String

---

##### `tokenValue`<sup>Required</sup> <a name="tokenValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValue"></a>

```java
public java.lang.String getTokenValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.internalValue"></a>

```java
public MwsWorkspacesToken getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

---



