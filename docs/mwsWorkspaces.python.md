# `mwsWorkspaces` Submodule <a name="`mwsWorkspaces` Submodule" id="@cdktf/provider-databricks.mwsWorkspaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsWorkspaces <a name="MwsWorkspaces" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces databricks_mws_workspaces}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspaces(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  workspace_name: str,
  aws_region: str = None,
  cloud: str = None,
  cloud_resource_container: MwsWorkspacesCloudResourceContainer = None,
  compute_mode: str = None,
  creation_time: typing.Union[int, float] = None,
  credentials_id: str = None,
  customer_managed_key_id: str = None,
  custom_tags: typing.Mapping[str] = None,
  deployment_name: str = None,
  external_customer_info: MwsWorkspacesExternalCustomerInfo = None,
  gcp_managed_network_config: MwsWorkspacesGcpManagedNetworkConfig = None,
  gke_config: MwsWorkspacesGkeConfig = None,
  id: str = None,
  is_no_public_ip_enabled: typing.Union[bool, IResolvable] = None,
  location: str = None,
  managed_services_customer_managed_key_id: str = None,
  network_id: str = None,
  pricing_tier: str = None,
  private_access_settings_id: str = None,
  storage_configuration_id: str = None,
  storage_customer_managed_key_id: str = None,
  timeouts: MwsWorkspacesTimeouts = None,
  token: MwsWorkspacesToken = None,
  workspace_id: typing.Union[int, float] = None,
  workspace_status: str = None,
  workspace_status_message: str = None,
  workspace_url: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#account_id MwsWorkspaces#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceName">workspace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_name MwsWorkspaces#workspace_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.awsRegion">aws_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#aws_region MwsWorkspaces#aws_region}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.cloud">cloud</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#cloud MwsWorkspaces#cloud}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.cloudResourceContainer">cloud_resource_container</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a></code> | cloud_resource_container block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.computeMode">compute_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#compute_mode MwsWorkspaces#compute_mode}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#creation_time MwsWorkspaces#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.credentialsId">credentials_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#credentials_id MwsWorkspaces#credentials_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.customerManagedKeyId">customer_managed_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#customer_managed_key_id MwsWorkspaces#customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#custom_tags MwsWorkspaces#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.deploymentName">deployment_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#deployment_name MwsWorkspaces#deployment_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.externalCustomerInfo">external_customer_info</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a></code> | external_customer_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.gcpManagedNetworkConfig">gcp_managed_network_config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a></code> | gcp_managed_network_config block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.gkeConfig">gke_config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a></code> | gke_config block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#id MwsWorkspaces#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.isNoPublicIpEnabled">is_no_public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#is_no_public_ip_enabled MwsWorkspaces#is_no_public_ip_enabled}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#location MwsWorkspaces#location}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.managedServicesCustomerManagedKeyId">managed_services_customer_managed_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#managed_services_customer_managed_key_id MwsWorkspaces#managed_services_customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.networkId">network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#network_id MwsWorkspaces#network_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.pricingTier">pricing_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#pricing_tier MwsWorkspaces#pricing_tier}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.privateAccessSettingsId">private_access_settings_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#private_access_settings_id MwsWorkspaces#private_access_settings_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.storageConfigurationId">storage_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#storage_configuration_id MwsWorkspaces#storage_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.storageCustomerManagedKeyId">storage_customer_managed_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#storage_customer_managed_key_id MwsWorkspaces#storage_customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.token">token</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a></code> | token block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_id MwsWorkspaces#workspace_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceStatus">workspace_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_status MwsWorkspaces#workspace_status}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceStatusMessage">workspace_status_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_status_message MwsWorkspaces#workspace_status_message}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceUrl">workspace_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_url MwsWorkspaces#workspace_url}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#account_id MwsWorkspaces#account_id}.

---

##### `workspace_name`<sup>Required</sup> <a name="workspace_name" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_name MwsWorkspaces#workspace_name}.

---

##### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.awsRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#aws_region MwsWorkspaces#aws_region}.

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.cloud"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#cloud MwsWorkspaces#cloud}.

---

##### `cloud_resource_container`<sup>Optional</sup> <a name="cloud_resource_container" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.cloudResourceContainer"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

cloud_resource_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#cloud_resource_container MwsWorkspaces#cloud_resource_container}

---

##### `compute_mode`<sup>Optional</sup> <a name="compute_mode" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.computeMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#compute_mode MwsWorkspaces#compute_mode}.

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.creationTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#creation_time MwsWorkspaces#creation_time}.

---

##### `credentials_id`<sup>Optional</sup> <a name="credentials_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.credentialsId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#credentials_id MwsWorkspaces#credentials_id}.

---

##### `customer_managed_key_id`<sup>Optional</sup> <a name="customer_managed_key_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.customerManagedKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#customer_managed_key_id MwsWorkspaces#customer_managed_key_id}.

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.customTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#custom_tags MwsWorkspaces#custom_tags}.

---

##### `deployment_name`<sup>Optional</sup> <a name="deployment_name" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.deploymentName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#deployment_name MwsWorkspaces#deployment_name}.

---

##### `external_customer_info`<sup>Optional</sup> <a name="external_customer_info" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.externalCustomerInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

external_customer_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#external_customer_info MwsWorkspaces#external_customer_info}

---

##### `gcp_managed_network_config`<sup>Optional</sup> <a name="gcp_managed_network_config" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.gcpManagedNetworkConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

gcp_managed_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#gcp_managed_network_config MwsWorkspaces#gcp_managed_network_config}

---

##### `gke_config`<sup>Optional</sup> <a name="gke_config" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.gkeConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

gke_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#gke_config MwsWorkspaces#gke_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#id MwsWorkspaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_no_public_ip_enabled`<sup>Optional</sup> <a name="is_no_public_ip_enabled" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.isNoPublicIpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#is_no_public_ip_enabled MwsWorkspaces#is_no_public_ip_enabled}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#location MwsWorkspaces#location}.

---

##### `managed_services_customer_managed_key_id`<sup>Optional</sup> <a name="managed_services_customer_managed_key_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.managedServicesCustomerManagedKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#managed_services_customer_managed_key_id MwsWorkspaces#managed_services_customer_managed_key_id}.

---

##### `network_id`<sup>Optional</sup> <a name="network_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.networkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#network_id MwsWorkspaces#network_id}.

---

##### `pricing_tier`<sup>Optional</sup> <a name="pricing_tier" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.pricingTier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#pricing_tier MwsWorkspaces#pricing_tier}.

---

##### `private_access_settings_id`<sup>Optional</sup> <a name="private_access_settings_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.privateAccessSettingsId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#private_access_settings_id MwsWorkspaces#private_access_settings_id}.

---

##### `storage_configuration_id`<sup>Optional</sup> <a name="storage_configuration_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.storageConfigurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#storage_configuration_id MwsWorkspaces#storage_configuration_id}.

---

##### `storage_customer_managed_key_id`<sup>Optional</sup> <a name="storage_customer_managed_key_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.storageCustomerManagedKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#storage_customer_managed_key_id MwsWorkspaces#storage_customer_managed_key_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#timeouts MwsWorkspaces#timeouts}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.token"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#token MwsWorkspaces#token}

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_id MwsWorkspaces#workspace_id}.

---

##### `workspace_status`<sup>Optional</sup> <a name="workspace_status" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_status MwsWorkspaces#workspace_status}.

---

##### `workspace_status_message`<sup>Optional</sup> <a name="workspace_status_message" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceStatusMessage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_status_message MwsWorkspaces#workspace_status_message}.

---

##### `workspace_url`<sup>Optional</sup> <a name="workspace_url" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.Initializer.parameter.workspaceUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_url MwsWorkspaces#workspace_url}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putCloudResourceContainer">put_cloud_resource_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putExternalCustomerInfo">put_external_customer_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGcpManagedNetworkConfig">put_gcp_managed_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGkeConfig">put_gke_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putToken">put_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetAwsRegion">reset_aws_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCloud">reset_cloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCloudResourceContainer">reset_cloud_resource_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetComputeMode">reset_compute_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCreationTime">reset_creation_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCredentialsId">reset_credentials_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCustomerManagedKeyId">reset_customer_managed_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCustomTags">reset_custom_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetDeploymentName">reset_deployment_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetExternalCustomerInfo">reset_external_customer_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetGcpManagedNetworkConfig">reset_gcp_managed_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetGkeConfig">reset_gke_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetIsNoPublicIpEnabled">reset_is_no_public_ip_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetManagedServicesCustomerManagedKeyId">reset_managed_services_customer_managed_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetNetworkId">reset_network_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetPricingTier">reset_pricing_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetPrivateAccessSettingsId">reset_private_access_settings_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetStorageConfigurationId">reset_storage_configuration_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetStorageCustomerManagedKeyId">reset_storage_customer_managed_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceStatus">reset_workspace_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceStatusMessage">reset_workspace_status_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceUrl">reset_workspace_url</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cloud_resource_container` <a name="put_cloud_resource_container" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putCloudResourceContainer"></a>

```python
def put_cloud_resource_container(
  gcp: MwsWorkspacesCloudResourceContainerGcp
) -> None
```

###### `gcp`<sup>Required</sup> <a name="gcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putCloudResourceContainer.parameter.gcp"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#gcp MwsWorkspaces#gcp}

---

##### `put_external_customer_info` <a name="put_external_customer_info" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putExternalCustomerInfo"></a>

```python
def put_external_customer_info(
  authoritative_user_email: str,
  authoritative_user_full_name: str,
  customer_name: str
) -> None
```

###### `authoritative_user_email`<sup>Required</sup> <a name="authoritative_user_email" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putExternalCustomerInfo.parameter.authoritativeUserEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#authoritative_user_email MwsWorkspaces#authoritative_user_email}.

---

###### `authoritative_user_full_name`<sup>Required</sup> <a name="authoritative_user_full_name" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putExternalCustomerInfo.parameter.authoritativeUserFullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#authoritative_user_full_name MwsWorkspaces#authoritative_user_full_name}.

---

###### `customer_name`<sup>Required</sup> <a name="customer_name" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putExternalCustomerInfo.parameter.customerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#customer_name MwsWorkspaces#customer_name}.

---

##### `put_gcp_managed_network_config` <a name="put_gcp_managed_network_config" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGcpManagedNetworkConfig"></a>

```python
def put_gcp_managed_network_config(
  subnet_cidr: str,
  gke_cluster_pod_ip_range: str = None,
  gke_cluster_service_ip_range: str = None
) -> None
```

###### `subnet_cidr`<sup>Required</sup> <a name="subnet_cidr" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGcpManagedNetworkConfig.parameter.subnetCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#subnet_cidr MwsWorkspaces#subnet_cidr}.

---

###### `gke_cluster_pod_ip_range`<sup>Optional</sup> <a name="gke_cluster_pod_ip_range" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGcpManagedNetworkConfig.parameter.gkeClusterPodIpRange"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#gke_cluster_pod_ip_range MwsWorkspaces#gke_cluster_pod_ip_range}.

---

###### `gke_cluster_service_ip_range`<sup>Optional</sup> <a name="gke_cluster_service_ip_range" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGcpManagedNetworkConfig.parameter.gkeClusterServiceIpRange"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#gke_cluster_service_ip_range MwsWorkspaces#gke_cluster_service_ip_range}.

---

##### `put_gke_config` <a name="put_gke_config" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGkeConfig"></a>

```python
def put_gke_config(
  connectivity_type: str = None,
  master_ip_range: str = None
) -> None
```

###### `connectivity_type`<sup>Optional</sup> <a name="connectivity_type" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGkeConfig.parameter.connectivityType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#connectivity_type MwsWorkspaces#connectivity_type}.

---

###### `master_ip_range`<sup>Optional</sup> <a name="master_ip_range" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putGkeConfig.parameter.masterIpRange"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#master_ip_range MwsWorkspaces#master_ip_range}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#create MwsWorkspaces#create}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#read MwsWorkspaces#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#update MwsWorkspaces#update}.

---

##### `put_token` <a name="put_token" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putToken"></a>

```python
def put_token(
  comment: str = None,
  lifetime_seconds: typing.Union[int, float] = None,
  token_id: str = None,
  token_value: str = None
) -> None
```

###### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putToken.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#comment MwsWorkspaces#comment}.

---

###### `lifetime_seconds`<sup>Optional</sup> <a name="lifetime_seconds" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putToken.parameter.lifetimeSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#lifetime_seconds MwsWorkspaces#lifetime_seconds}.

---

###### `token_id`<sup>Optional</sup> <a name="token_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putToken.parameter.tokenId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#token_id MwsWorkspaces#token_id}.

---

###### `token_value`<sup>Optional</sup> <a name="token_value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.putToken.parameter.tokenValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#token_value MwsWorkspaces#token_value}.

---

##### `reset_aws_region` <a name="reset_aws_region" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetAwsRegion"></a>

```python
def reset_aws_region() -> None
```

##### `reset_cloud` <a name="reset_cloud" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCloud"></a>

```python
def reset_cloud() -> None
```

##### `reset_cloud_resource_container` <a name="reset_cloud_resource_container" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCloudResourceContainer"></a>

```python
def reset_cloud_resource_container() -> None
```

##### `reset_compute_mode` <a name="reset_compute_mode" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetComputeMode"></a>

```python
def reset_compute_mode() -> None
```

##### `reset_creation_time` <a name="reset_creation_time" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCreationTime"></a>

```python
def reset_creation_time() -> None
```

##### `reset_credentials_id` <a name="reset_credentials_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCredentialsId"></a>

```python
def reset_credentials_id() -> None
```

##### `reset_customer_managed_key_id` <a name="reset_customer_managed_key_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCustomerManagedKeyId"></a>

```python
def reset_customer_managed_key_id() -> None
```

##### `reset_custom_tags` <a name="reset_custom_tags" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetCustomTags"></a>

```python
def reset_custom_tags() -> None
```

##### `reset_deployment_name` <a name="reset_deployment_name" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetDeploymentName"></a>

```python
def reset_deployment_name() -> None
```

##### `reset_external_customer_info` <a name="reset_external_customer_info" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetExternalCustomerInfo"></a>

```python
def reset_external_customer_info() -> None
```

##### `reset_gcp_managed_network_config` <a name="reset_gcp_managed_network_config" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetGcpManagedNetworkConfig"></a>

```python
def reset_gcp_managed_network_config() -> None
```

##### `reset_gke_config` <a name="reset_gke_config" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetGkeConfig"></a>

```python
def reset_gke_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_no_public_ip_enabled` <a name="reset_is_no_public_ip_enabled" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetIsNoPublicIpEnabled"></a>

```python
def reset_is_no_public_ip_enabled() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_managed_services_customer_managed_key_id` <a name="reset_managed_services_customer_managed_key_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetManagedServicesCustomerManagedKeyId"></a>

```python
def reset_managed_services_customer_managed_key_id() -> None
```

##### `reset_network_id` <a name="reset_network_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetNetworkId"></a>

```python
def reset_network_id() -> None
```

##### `reset_pricing_tier` <a name="reset_pricing_tier" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetPricingTier"></a>

```python
def reset_pricing_tier() -> None
```

##### `reset_private_access_settings_id` <a name="reset_private_access_settings_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetPrivateAccessSettingsId"></a>

```python
def reset_private_access_settings_id() -> None
```

##### `reset_storage_configuration_id` <a name="reset_storage_configuration_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetStorageConfigurationId"></a>

```python
def reset_storage_configuration_id() -> None
```

##### `reset_storage_customer_managed_key_id` <a name="reset_storage_customer_managed_key_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetStorageCustomerManagedKeyId"></a>

```python
def reset_storage_customer_managed_key_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```

##### `reset_workspace_status` <a name="reset_workspace_status" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceStatus"></a>

```python
def reset_workspace_status() -> None
```

##### `reset_workspace_status_message` <a name="reset_workspace_status_message" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceStatusMessage"></a>

```python
def reset_workspace_status_message() -> None
```

##### `reset_workspace_url` <a name="reset_workspace_url" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.resetWorkspaceUrl"></a>

```python
def reset_workspace_url() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MwsWorkspaces resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspaces.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspaces.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspaces.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspaces.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MwsWorkspaces resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MwsWorkspaces to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MwsWorkspaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MwsWorkspaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainer">cloud_resource_container</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference">MwsWorkspacesCloudResourceContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.effectiveComputeMode">effective_compute_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfo">external_customer_info</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference">MwsWorkspacesExternalCustomerInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfig">gcp_managed_network_config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference">MwsWorkspacesGcpManagedNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpWorkspaceSa">gcp_workspace_sa</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfig">gke_config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference">MwsWorkspacesGkeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference">MwsWorkspacesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.token">token</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference">MwsWorkspacesTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudInput">cloud_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainerInput">cloud_resource_container_input</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.computeModeInput">compute_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTimeInput">creation_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsIdInput">credentials_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyIdInput">customer_managed_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customTagsInput">custom_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentNameInput">deployment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfoInput">external_customer_info_input</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfigInput">gcp_managed_network_config_input</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfigInput">gke_config_input</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabledInput">is_no_public_ip_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyIdInput">managed_services_customer_managed_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkIdInput">network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTierInput">pricing_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsIdInput">private_access_settings_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationIdInput">storage_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyIdInput">storage_customer_managed_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tokenInput">token_input</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceIdInput">workspace_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceNameInput">workspace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusInput">workspace_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessageInput">workspace_status_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrlInput">workspace_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloud">cloud</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.computeMode">compute_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsId">credentials_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyId">customer_managed_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentName">deployment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabled">is_no_public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyId">managed_services_customer_managed_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkId">network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTier">pricing_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsId">private_access_settings_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationId">storage_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyId">storage_customer_managed_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceId">workspace_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceName">workspace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatus">workspace_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessage">workspace_status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrl">workspace_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_resource_container`<sup>Required</sup> <a name="cloud_resource_container" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainer"></a>

```python
cloud_resource_container: MwsWorkspacesCloudResourceContainerOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference">MwsWorkspacesCloudResourceContainerOutputReference</a>

---

##### `effective_compute_mode`<sup>Required</sup> <a name="effective_compute_mode" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.effectiveComputeMode"></a>

```python
effective_compute_mode: str
```

- *Type:* str

---

##### `external_customer_info`<sup>Required</sup> <a name="external_customer_info" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfo"></a>

```python
external_customer_info: MwsWorkspacesExternalCustomerInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference">MwsWorkspacesExternalCustomerInfoOutputReference</a>

---

##### `gcp_managed_network_config`<sup>Required</sup> <a name="gcp_managed_network_config" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfig"></a>

```python
gcp_managed_network_config: MwsWorkspacesGcpManagedNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference">MwsWorkspacesGcpManagedNetworkConfigOutputReference</a>

---

##### `gcp_workspace_sa`<sup>Required</sup> <a name="gcp_workspace_sa" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpWorkspaceSa"></a>

```python
gcp_workspace_sa: str
```

- *Type:* str

---

##### `gke_config`<sup>Required</sup> <a name="gke_config" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfig"></a>

```python
gke_config: MwsWorkspacesGkeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference">MwsWorkspacesGkeConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeouts"></a>

```python
timeouts: MwsWorkspacesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference">MwsWorkspacesTimeoutsOutputReference</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.token"></a>

```python
token: MwsWorkspacesTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference">MwsWorkspacesTokenOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `cloud_input`<sup>Optional</sup> <a name="cloud_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudInput"></a>

```python
cloud_input: str
```

- *Type:* str

---

##### `cloud_resource_container_input`<sup>Optional</sup> <a name="cloud_resource_container_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloudResourceContainerInput"></a>

```python
cloud_resource_container_input: MwsWorkspacesCloudResourceContainer
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

---

##### `compute_mode_input`<sup>Optional</sup> <a name="compute_mode_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.computeModeInput"></a>

```python
compute_mode_input: str
```

- *Type:* str

---

##### `creation_time_input`<sup>Optional</sup> <a name="creation_time_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTimeInput"></a>

```python
creation_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `credentials_id_input`<sup>Optional</sup> <a name="credentials_id_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsIdInput"></a>

```python
credentials_id_input: str
```

- *Type:* str

---

##### `customer_managed_key_id_input`<sup>Optional</sup> <a name="customer_managed_key_id_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyIdInput"></a>

```python
customer_managed_key_id_input: str
```

- *Type:* str

---

##### `custom_tags_input`<sup>Optional</sup> <a name="custom_tags_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customTagsInput"></a>

```python
custom_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deployment_name_input`<sup>Optional</sup> <a name="deployment_name_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentNameInput"></a>

```python
deployment_name_input: str
```

- *Type:* str

---

##### `external_customer_info_input`<sup>Optional</sup> <a name="external_customer_info_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.externalCustomerInfoInput"></a>

```python
external_customer_info_input: MwsWorkspacesExternalCustomerInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

---

##### `gcp_managed_network_config_input`<sup>Optional</sup> <a name="gcp_managed_network_config_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gcpManagedNetworkConfigInput"></a>

```python
gcp_managed_network_config_input: MwsWorkspacesGcpManagedNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

---

##### `gke_config_input`<sup>Optional</sup> <a name="gke_config_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.gkeConfigInput"></a>

```python
gke_config_input: MwsWorkspacesGkeConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_no_public_ip_enabled_input`<sup>Optional</sup> <a name="is_no_public_ip_enabled_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabledInput"></a>

```python
is_no_public_ip_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `managed_services_customer_managed_key_id_input`<sup>Optional</sup> <a name="managed_services_customer_managed_key_id_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyIdInput"></a>

```python
managed_services_customer_managed_key_id_input: str
```

- *Type:* str

---

##### `network_id_input`<sup>Optional</sup> <a name="network_id_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkIdInput"></a>

```python
network_id_input: str
```

- *Type:* str

---

##### `pricing_tier_input`<sup>Optional</sup> <a name="pricing_tier_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTierInput"></a>

```python
pricing_tier_input: str
```

- *Type:* str

---

##### `private_access_settings_id_input`<sup>Optional</sup> <a name="private_access_settings_id_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsIdInput"></a>

```python
private_access_settings_id_input: str
```

- *Type:* str

---

##### `storage_configuration_id_input`<sup>Optional</sup> <a name="storage_configuration_id_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationIdInput"></a>

```python
storage_configuration_id_input: str
```

- *Type:* str

---

##### `storage_customer_managed_key_id_input`<sup>Optional</sup> <a name="storage_customer_managed_key_id_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyIdInput"></a>

```python
storage_customer_managed_key_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MwsWorkspacesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a>]

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tokenInput"></a>

```python
token_input: MwsWorkspacesToken
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceIdInput"></a>

```python
workspace_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `workspace_name_input`<sup>Optional</sup> <a name="workspace_name_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceNameInput"></a>

```python
workspace_name_input: str
```

- *Type:* str

---

##### `workspace_status_input`<sup>Optional</sup> <a name="workspace_status_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusInput"></a>

```python
workspace_status_input: str
```

- *Type:* str

---

##### `workspace_status_message_input`<sup>Optional</sup> <a name="workspace_status_message_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessageInput"></a>

```python
workspace_status_message_input: str
```

- *Type:* str

---

##### `workspace_url_input`<sup>Optional</sup> <a name="workspace_url_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrlInput"></a>

```python
workspace_url_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.cloud"></a>

```python
cloud: str
```

- *Type:* str

---

##### `compute_mode`<sup>Required</sup> <a name="compute_mode" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.computeMode"></a>

```python
compute_mode: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `credentials_id`<sup>Required</sup> <a name="credentials_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.credentialsId"></a>

```python
credentials_id: str
```

- *Type:* str

---

##### `customer_managed_key_id`<sup>Required</sup> <a name="customer_managed_key_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customerManagedKeyId"></a>

```python
customer_managed_key_id: str
```

- *Type:* str

---

##### `custom_tags`<sup>Required</sup> <a name="custom_tags" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.customTags"></a>

```python
custom_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deployment_name`<sup>Required</sup> <a name="deployment_name" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.deploymentName"></a>

```python
deployment_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_no_public_ip_enabled`<sup>Required</sup> <a name="is_no_public_ip_enabled" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.isNoPublicIpEnabled"></a>

```python
is_no_public_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `managed_services_customer_managed_key_id`<sup>Required</sup> <a name="managed_services_customer_managed_key_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.managedServicesCustomerManagedKeyId"></a>

```python
managed_services_customer_managed_key_id: str
```

- *Type:* str

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

---

##### `pricing_tier`<sup>Required</sup> <a name="pricing_tier" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.pricingTier"></a>

```python
pricing_tier: str
```

- *Type:* str

---

##### `private_access_settings_id`<sup>Required</sup> <a name="private_access_settings_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.privateAccessSettingsId"></a>

```python
private_access_settings_id: str
```

- *Type:* str

---

##### `storage_configuration_id`<sup>Required</sup> <a name="storage_configuration_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageConfigurationId"></a>

```python
storage_configuration_id: str
```

- *Type:* str

---

##### `storage_customer_managed_key_id`<sup>Required</sup> <a name="storage_customer_managed_key_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.storageCustomerManagedKeyId"></a>

```python
storage_customer_managed_key_id: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceId"></a>

```python
workspace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `workspace_name`<sup>Required</sup> <a name="workspace_name" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceName"></a>

```python
workspace_name: str
```

- *Type:* str

---

##### `workspace_status`<sup>Required</sup> <a name="workspace_status" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatus"></a>

```python
workspace_status: str
```

- *Type:* str

---

##### `workspace_status_message`<sup>Required</sup> <a name="workspace_status_message" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceStatusMessage"></a>

```python
workspace_status_message: str
```

- *Type:* str

---

##### `workspace_url`<sup>Required</sup> <a name="workspace_url" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.workspaceUrl"></a>

```python
workspace_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspaces.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MwsWorkspacesCloudResourceContainer <a name="MwsWorkspacesCloudResourceContainer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspacesCloudResourceContainer(
  gcp: MwsWorkspacesCloudResourceContainerGcp
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer.property.gcp">gcp</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a></code> | gcp block. |

---

##### `gcp`<sup>Required</sup> <a name="gcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer.property.gcp"></a>

```python
gcp: MwsWorkspacesCloudResourceContainerGcp
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#gcp MwsWorkspaces#gcp}

---

### MwsWorkspacesCloudResourceContainerGcp <a name="MwsWorkspacesCloudResourceContainerGcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp(
  project_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#project_id MwsWorkspaces#project_id}. |

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#project_id MwsWorkspaces#project_id}.

---

### MwsWorkspacesConfig <a name="MwsWorkspacesConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspacesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  workspace_name: str,
  aws_region: str = None,
  cloud: str = None,
  cloud_resource_container: MwsWorkspacesCloudResourceContainer = None,
  compute_mode: str = None,
  creation_time: typing.Union[int, float] = None,
  credentials_id: str = None,
  customer_managed_key_id: str = None,
  custom_tags: typing.Mapping[str] = None,
  deployment_name: str = None,
  external_customer_info: MwsWorkspacesExternalCustomerInfo = None,
  gcp_managed_network_config: MwsWorkspacesGcpManagedNetworkConfig = None,
  gke_config: MwsWorkspacesGkeConfig = None,
  id: str = None,
  is_no_public_ip_enabled: typing.Union[bool, IResolvable] = None,
  location: str = None,
  managed_services_customer_managed_key_id: str = None,
  network_id: str = None,
  pricing_tier: str = None,
  private_access_settings_id: str = None,
  storage_configuration_id: str = None,
  storage_customer_managed_key_id: str = None,
  timeouts: MwsWorkspacesTimeouts = None,
  token: MwsWorkspacesToken = None,
  workspace_id: typing.Union[int, float] = None,
  workspace_status: str = None,
  workspace_status_message: str = None,
  workspace_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#account_id MwsWorkspaces#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceName">workspace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_name MwsWorkspaces#workspace_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.awsRegion">aws_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#aws_region MwsWorkspaces#aws_region}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloud">cloud</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#cloud MwsWorkspaces#cloud}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloudResourceContainer">cloud_resource_container</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a></code> | cloud_resource_container block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.computeMode">compute_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#compute_mode MwsWorkspaces#compute_mode}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#creation_time MwsWorkspaces#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.credentialsId">credentials_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#credentials_id MwsWorkspaces#credentials_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.customerManagedKeyId">customer_managed_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#customer_managed_key_id MwsWorkspaces#customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#custom_tags MwsWorkspaces#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.deploymentName">deployment_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#deployment_name MwsWorkspaces#deployment_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.externalCustomerInfo">external_customer_info</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a></code> | external_customer_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gcpManagedNetworkConfig">gcp_managed_network_config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a></code> | gcp_managed_network_config block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gkeConfig">gke_config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a></code> | gke_config block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#id MwsWorkspaces#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.isNoPublicIpEnabled">is_no_public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#is_no_public_ip_enabled MwsWorkspaces#is_no_public_ip_enabled}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#location MwsWorkspaces#location}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.managedServicesCustomerManagedKeyId">managed_services_customer_managed_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#managed_services_customer_managed_key_id MwsWorkspaces#managed_services_customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.networkId">network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#network_id MwsWorkspaces#network_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.pricingTier">pricing_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#pricing_tier MwsWorkspaces#pricing_tier}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.privateAccessSettingsId">private_access_settings_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#private_access_settings_id MwsWorkspaces#private_access_settings_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageConfigurationId">storage_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#storage_configuration_id MwsWorkspaces#storage_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageCustomerManagedKeyId">storage_customer_managed_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#storage_customer_managed_key_id MwsWorkspaces#storage_customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.token">token</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a></code> | token block. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceId">workspace_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_id MwsWorkspaces#workspace_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatus">workspace_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_status MwsWorkspaces#workspace_status}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatusMessage">workspace_status_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_status_message MwsWorkspaces#workspace_status_message}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceUrl">workspace_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_url MwsWorkspaces#workspace_url}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#account_id MwsWorkspaces#account_id}.

---

##### `workspace_name`<sup>Required</sup> <a name="workspace_name" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceName"></a>

```python
workspace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_name MwsWorkspaces#workspace_name}.

---

##### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#aws_region MwsWorkspaces#aws_region}.

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloud"></a>

```python
cloud: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#cloud MwsWorkspaces#cloud}.

---

##### `cloud_resource_container`<sup>Optional</sup> <a name="cloud_resource_container" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.cloudResourceContainer"></a>

```python
cloud_resource_container: MwsWorkspacesCloudResourceContainer
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

cloud_resource_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#cloud_resource_container MwsWorkspaces#cloud_resource_container}

---

##### `compute_mode`<sup>Optional</sup> <a name="compute_mode" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.computeMode"></a>

```python
compute_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#compute_mode MwsWorkspaces#compute_mode}.

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#creation_time MwsWorkspaces#creation_time}.

---

##### `credentials_id`<sup>Optional</sup> <a name="credentials_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.credentialsId"></a>

```python
credentials_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#credentials_id MwsWorkspaces#credentials_id}.

---

##### `customer_managed_key_id`<sup>Optional</sup> <a name="customer_managed_key_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.customerManagedKeyId"></a>

```python
customer_managed_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#customer_managed_key_id MwsWorkspaces#customer_managed_key_id}.

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.customTags"></a>

```python
custom_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#custom_tags MwsWorkspaces#custom_tags}.

---

##### `deployment_name`<sup>Optional</sup> <a name="deployment_name" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.deploymentName"></a>

```python
deployment_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#deployment_name MwsWorkspaces#deployment_name}.

---

##### `external_customer_info`<sup>Optional</sup> <a name="external_customer_info" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.externalCustomerInfo"></a>

```python
external_customer_info: MwsWorkspacesExternalCustomerInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

external_customer_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#external_customer_info MwsWorkspaces#external_customer_info}

---

##### `gcp_managed_network_config`<sup>Optional</sup> <a name="gcp_managed_network_config" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gcpManagedNetworkConfig"></a>

```python
gcp_managed_network_config: MwsWorkspacesGcpManagedNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

gcp_managed_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#gcp_managed_network_config MwsWorkspaces#gcp_managed_network_config}

---

##### `gke_config`<sup>Optional</sup> <a name="gke_config" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.gkeConfig"></a>

```python
gke_config: MwsWorkspacesGkeConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

gke_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#gke_config MwsWorkspaces#gke_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#id MwsWorkspaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_no_public_ip_enabled`<sup>Optional</sup> <a name="is_no_public_ip_enabled" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.isNoPublicIpEnabled"></a>

```python
is_no_public_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#is_no_public_ip_enabled MwsWorkspaces#is_no_public_ip_enabled}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#location MwsWorkspaces#location}.

---

##### `managed_services_customer_managed_key_id`<sup>Optional</sup> <a name="managed_services_customer_managed_key_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.managedServicesCustomerManagedKeyId"></a>

```python
managed_services_customer_managed_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#managed_services_customer_managed_key_id MwsWorkspaces#managed_services_customer_managed_key_id}.

---

##### `network_id`<sup>Optional</sup> <a name="network_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#network_id MwsWorkspaces#network_id}.

---

##### `pricing_tier`<sup>Optional</sup> <a name="pricing_tier" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.pricingTier"></a>

```python
pricing_tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#pricing_tier MwsWorkspaces#pricing_tier}.

---

##### `private_access_settings_id`<sup>Optional</sup> <a name="private_access_settings_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.privateAccessSettingsId"></a>

```python
private_access_settings_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#private_access_settings_id MwsWorkspaces#private_access_settings_id}.

---

##### `storage_configuration_id`<sup>Optional</sup> <a name="storage_configuration_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageConfigurationId"></a>

```python
storage_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#storage_configuration_id MwsWorkspaces#storage_configuration_id}.

---

##### `storage_customer_managed_key_id`<sup>Optional</sup> <a name="storage_customer_managed_key_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.storageCustomerManagedKeyId"></a>

```python
storage_customer_managed_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#storage_customer_managed_key_id MwsWorkspaces#storage_customer_managed_key_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.timeouts"></a>

```python
timeouts: MwsWorkspacesTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#timeouts MwsWorkspaces#timeouts}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.token"></a>

```python
token: MwsWorkspacesToken
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#token MwsWorkspaces#token}

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceId"></a>

```python
workspace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_id MwsWorkspaces#workspace_id}.

---

##### `workspace_status`<sup>Optional</sup> <a name="workspace_status" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatus"></a>

```python
workspace_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_status MwsWorkspaces#workspace_status}.

---

##### `workspace_status_message`<sup>Optional</sup> <a name="workspace_status_message" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceStatusMessage"></a>

```python
workspace_status_message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_status_message MwsWorkspaces#workspace_status_message}.

---

##### `workspace_url`<sup>Optional</sup> <a name="workspace_url" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesConfig.property.workspaceUrl"></a>

```python
workspace_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#workspace_url MwsWorkspaces#workspace_url}.

---

### MwsWorkspacesExternalCustomerInfo <a name="MwsWorkspacesExternalCustomerInfo" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspacesExternalCustomerInfo(
  authoritative_user_email: str,
  authoritative_user_full_name: str,
  customer_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserEmail">authoritative_user_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#authoritative_user_email MwsWorkspaces#authoritative_user_email}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserFullName">authoritative_user_full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#authoritative_user_full_name MwsWorkspaces#authoritative_user_full_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.customerName">customer_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#customer_name MwsWorkspaces#customer_name}. |

---

##### `authoritative_user_email`<sup>Required</sup> <a name="authoritative_user_email" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserEmail"></a>

```python
authoritative_user_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#authoritative_user_email MwsWorkspaces#authoritative_user_email}.

---

##### `authoritative_user_full_name`<sup>Required</sup> <a name="authoritative_user_full_name" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.authoritativeUserFullName"></a>

```python
authoritative_user_full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#authoritative_user_full_name MwsWorkspaces#authoritative_user_full_name}.

---

##### `customer_name`<sup>Required</sup> <a name="customer_name" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo.property.customerName"></a>

```python
customer_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#customer_name MwsWorkspaces#customer_name}.

---

### MwsWorkspacesGcpManagedNetworkConfig <a name="MwsWorkspacesGcpManagedNetworkConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig(
  subnet_cidr: str,
  gke_cluster_pod_ip_range: str = None,
  gke_cluster_service_ip_range: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.subnetCidr">subnet_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#subnet_cidr MwsWorkspaces#subnet_cidr}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterPodIpRange">gke_cluster_pod_ip_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#gke_cluster_pod_ip_range MwsWorkspaces#gke_cluster_pod_ip_range}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterServiceIpRange">gke_cluster_service_ip_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#gke_cluster_service_ip_range MwsWorkspaces#gke_cluster_service_ip_range}. |

---

##### `subnet_cidr`<sup>Required</sup> <a name="subnet_cidr" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.subnetCidr"></a>

```python
subnet_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#subnet_cidr MwsWorkspaces#subnet_cidr}.

---

##### `gke_cluster_pod_ip_range`<sup>Optional</sup> <a name="gke_cluster_pod_ip_range" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterPodIpRange"></a>

```python
gke_cluster_pod_ip_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#gke_cluster_pod_ip_range MwsWorkspaces#gke_cluster_pod_ip_range}.

---

##### `gke_cluster_service_ip_range`<sup>Optional</sup> <a name="gke_cluster_service_ip_range" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig.property.gkeClusterServiceIpRange"></a>

```python
gke_cluster_service_ip_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#gke_cluster_service_ip_range MwsWorkspaces#gke_cluster_service_ip_range}.

---

### MwsWorkspacesGkeConfig <a name="MwsWorkspacesGkeConfig" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspacesGkeConfig(
  connectivity_type: str = None,
  master_ip_range: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.connectivityType">connectivity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#connectivity_type MwsWorkspaces#connectivity_type}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.masterIpRange">master_ip_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#master_ip_range MwsWorkspaces#master_ip_range}. |

---

##### `connectivity_type`<sup>Optional</sup> <a name="connectivity_type" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.connectivityType"></a>

```python
connectivity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#connectivity_type MwsWorkspaces#connectivity_type}.

---

##### `master_ip_range`<sup>Optional</sup> <a name="master_ip_range" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig.property.masterIpRange"></a>

```python
master_ip_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#master_ip_range MwsWorkspaces#master_ip_range}.

---

### MwsWorkspacesTimeouts <a name="MwsWorkspacesTimeouts" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspacesTimeouts(
  create: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#create MwsWorkspaces#create}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#read MwsWorkspaces#read}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#update MwsWorkspaces#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#create MwsWorkspaces#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#read MwsWorkspaces#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#update MwsWorkspaces#update}.

---

### MwsWorkspacesToken <a name="MwsWorkspacesToken" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspacesToken(
  comment: str = None,
  lifetime_seconds: typing.Union[int, float] = None,
  token_id: str = None,
  token_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#comment MwsWorkspaces#comment}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.lifetimeSeconds">lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#lifetime_seconds MwsWorkspaces#lifetime_seconds}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenId">token_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#token_id MwsWorkspaces#token_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenValue">token_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#token_value MwsWorkspaces#token_value}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#comment MwsWorkspaces#comment}.

---

##### `lifetime_seconds`<sup>Optional</sup> <a name="lifetime_seconds" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.lifetimeSeconds"></a>

```python
lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#lifetime_seconds MwsWorkspaces#lifetime_seconds}.

---

##### `token_id`<sup>Optional</sup> <a name="token_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenId"></a>

```python
token_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#token_id MwsWorkspaces#token_id}.

---

##### `token_value`<sup>Optional</sup> <a name="token_value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken.property.tokenValue"></a>

```python
token_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#token_value MwsWorkspaces#token_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsWorkspacesCloudResourceContainerGcpOutputReference <a name="MwsWorkspacesCloudResourceContainerGcpOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference.property.internalValue"></a>

```python
internal_value: MwsWorkspacesCloudResourceContainerGcp
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

---


### MwsWorkspacesCloudResourceContainerOutputReference <a name="MwsWorkspacesCloudResourceContainerOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.putGcp">put_gcp</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gcp` <a name="put_gcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.putGcp"></a>

```python
def put_gcp(
  project_id: str
) -> None
```

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.putGcp.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/mws_workspaces#project_id MwsWorkspaces#project_id}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcp">gcp</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference">MwsWorkspacesCloudResourceContainerGcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcpInput">gcp_input</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcp`<sup>Required</sup> <a name="gcp" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcp"></a>

```python
gcp: MwsWorkspacesCloudResourceContainerGcpOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcpOutputReference">MwsWorkspacesCloudResourceContainerGcpOutputReference</a>

---

##### `gcp_input`<sup>Optional</sup> <a name="gcp_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.gcpInput"></a>

```python
gcp_input: MwsWorkspacesCloudResourceContainerGcp
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerGcp">MwsWorkspacesCloudResourceContainerGcp</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainerOutputReference.property.internalValue"></a>

```python
internal_value: MwsWorkspacesCloudResourceContainer
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesCloudResourceContainer">MwsWorkspacesCloudResourceContainer</a>

---


### MwsWorkspacesExternalCustomerInfoOutputReference <a name="MwsWorkspacesExternalCustomerInfoOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmailInput">authoritative_user_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullNameInput">authoritative_user_full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerNameInput">customer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmail">authoritative_user_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullName">authoritative_user_full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerName">customer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authoritative_user_email_input`<sup>Optional</sup> <a name="authoritative_user_email_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmailInput"></a>

```python
authoritative_user_email_input: str
```

- *Type:* str

---

##### `authoritative_user_full_name_input`<sup>Optional</sup> <a name="authoritative_user_full_name_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullNameInput"></a>

```python
authoritative_user_full_name_input: str
```

- *Type:* str

---

##### `customer_name_input`<sup>Optional</sup> <a name="customer_name_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerNameInput"></a>

```python
customer_name_input: str
```

- *Type:* str

---

##### `authoritative_user_email`<sup>Required</sup> <a name="authoritative_user_email" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserEmail"></a>

```python
authoritative_user_email: str
```

- *Type:* str

---

##### `authoritative_user_full_name`<sup>Required</sup> <a name="authoritative_user_full_name" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.authoritativeUserFullName"></a>

```python
authoritative_user_full_name: str
```

- *Type:* str

---

##### `customer_name`<sup>Required</sup> <a name="customer_name" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.customerName"></a>

```python
customer_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfoOutputReference.property.internalValue"></a>

```python
internal_value: MwsWorkspacesExternalCustomerInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesExternalCustomerInfo">MwsWorkspacesExternalCustomerInfo</a>

---


### MwsWorkspacesGcpManagedNetworkConfigOutputReference <a name="MwsWorkspacesGcpManagedNetworkConfigOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resetGkeClusterPodIpRange">reset_gke_cluster_pod_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resetGkeClusterServiceIpRange">reset_gke_cluster_service_ip_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gke_cluster_pod_ip_range` <a name="reset_gke_cluster_pod_ip_range" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resetGkeClusterPodIpRange"></a>

```python
def reset_gke_cluster_pod_ip_range() -> None
```

##### `reset_gke_cluster_service_ip_range` <a name="reset_gke_cluster_service_ip_range" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.resetGkeClusterServiceIpRange"></a>

```python
def reset_gke_cluster_service_ip_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRangeInput">gke_cluster_pod_ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRangeInput">gke_cluster_service_ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidrInput">subnet_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRange">gke_cluster_pod_ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRange">gke_cluster_service_ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidr">subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gke_cluster_pod_ip_range_input`<sup>Optional</sup> <a name="gke_cluster_pod_ip_range_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRangeInput"></a>

```python
gke_cluster_pod_ip_range_input: str
```

- *Type:* str

---

##### `gke_cluster_service_ip_range_input`<sup>Optional</sup> <a name="gke_cluster_service_ip_range_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRangeInput"></a>

```python
gke_cluster_service_ip_range_input: str
```

- *Type:* str

---

##### `subnet_cidr_input`<sup>Optional</sup> <a name="subnet_cidr_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidrInput"></a>

```python
subnet_cidr_input: str
```

- *Type:* str

---

##### `gke_cluster_pod_ip_range`<sup>Required</sup> <a name="gke_cluster_pod_ip_range" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterPodIpRange"></a>

```python
gke_cluster_pod_ip_range: str
```

- *Type:* str

---

##### `gke_cluster_service_ip_range`<sup>Required</sup> <a name="gke_cluster_service_ip_range" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.gkeClusterServiceIpRange"></a>

```python
gke_cluster_service_ip_range: str
```

- *Type:* str

---

##### `subnet_cidr`<sup>Required</sup> <a name="subnet_cidr" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.subnetCidr"></a>

```python
subnet_cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: MwsWorkspacesGcpManagedNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGcpManagedNetworkConfig">MwsWorkspacesGcpManagedNetworkConfig</a>

---


### MwsWorkspacesGkeConfigOutputReference <a name="MwsWorkspacesGkeConfigOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resetConnectivityType">reset_connectivity_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resetMasterIpRange">reset_master_ip_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connectivity_type` <a name="reset_connectivity_type" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resetConnectivityType"></a>

```python
def reset_connectivity_type() -> None
```

##### `reset_master_ip_range` <a name="reset_master_ip_range" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.resetMasterIpRange"></a>

```python
def reset_master_ip_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityTypeInput">connectivity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRangeInput">master_ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityType">connectivity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRange">master_ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connectivity_type_input`<sup>Optional</sup> <a name="connectivity_type_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityTypeInput"></a>

```python
connectivity_type_input: str
```

- *Type:* str

---

##### `master_ip_range_input`<sup>Optional</sup> <a name="master_ip_range_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRangeInput"></a>

```python
master_ip_range_input: str
```

- *Type:* str

---

##### `connectivity_type`<sup>Required</sup> <a name="connectivity_type" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.connectivityType"></a>

```python
connectivity_type: str
```

- *Type:* str

---

##### `master_ip_range`<sup>Required</sup> <a name="master_ip_range" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.masterIpRange"></a>

```python
master_ip_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfigOutputReference.property.internalValue"></a>

```python
internal_value: MwsWorkspacesGkeConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesGkeConfig">MwsWorkspacesGkeConfig</a>

---


### MwsWorkspacesTimeoutsOutputReference <a name="MwsWorkspacesTimeoutsOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MwsWorkspacesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTimeouts">MwsWorkspacesTimeouts</a>]

---


### MwsWorkspacesTokenOutputReference <a name="MwsWorkspacesTokenOutputReference" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_workspaces

mwsWorkspaces.MwsWorkspacesTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetLifetimeSeconds">reset_lifetime_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetTokenId">reset_token_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetTokenValue">reset_token_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_lifetime_seconds` <a name="reset_lifetime_seconds" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetLifetimeSeconds"></a>

```python
def reset_lifetime_seconds() -> None
```

##### `reset_token_id` <a name="reset_token_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetTokenId"></a>

```python
def reset_token_id() -> None
```

##### `reset_token_value` <a name="reset_token_value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.resetTokenValue"></a>

```python
def reset_token_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSecondsInput">lifetime_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenIdInput">token_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValueInput">token_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSeconds">lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenId">token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValue">token_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `lifetime_seconds_input`<sup>Optional</sup> <a name="lifetime_seconds_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSecondsInput"></a>

```python
lifetime_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_id_input`<sup>Optional</sup> <a name="token_id_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenIdInput"></a>

```python
token_id_input: str
```

- *Type:* str

---

##### `token_value_input`<sup>Optional</sup> <a name="token_value_input" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValueInput"></a>

```python
token_value_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `lifetime_seconds`<sup>Required</sup> <a name="lifetime_seconds" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.lifetimeSeconds"></a>

```python
lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_id`<sup>Required</sup> <a name="token_id" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenId"></a>

```python
token_id: str
```

- *Type:* str

---

##### `token_value`<sup>Required</sup> <a name="token_value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.tokenValue"></a>

```python
token_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesTokenOutputReference.property.internalValue"></a>

```python
internal_value: MwsWorkspacesToken
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsWorkspaces.MwsWorkspacesToken">MwsWorkspacesToken</a>

---



