# `mwsNetworks` Submodule <a name="`mwsNetworks` Submodule" id="@cdktf/provider-databricks.mwsNetworks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsNetworks <a name="MwsNetworks" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks databricks_mws_networks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_networks

mwsNetworks.MwsNetworks(
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
  network_name: str,
  creation_time: typing.Union[int, float] = None,
  error_messages: typing.Union[IResolvable, typing.List[MwsNetworksErrorMessages]] = None,
  gcp_network_info: MwsNetworksGcpNetworkInfo = None,
  id: str = None,
  network_id: str = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None,
  vpc_endpoints: MwsNetworksVpcEndpoints = None,
  vpc_id: str = None,
  vpc_status: str = None,
  workspace_id: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#account_id MwsNetworks#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.networkName">network_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#network_name MwsNetworks#network_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#creation_time MwsNetworks#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.errorMessages">error_messages</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>]]</code> | error_messages block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.gcpNetworkInfo">gcp_network_info</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a></code> | gcp_network_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#id MwsNetworks#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.networkId">network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#network_id MwsNetworks#network_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#security_group_ids MwsNetworks#security_group_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#subnet_ids MwsNetworks#subnet_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.vpcEndpoints">vpc_endpoints</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a></code> | vpc_endpoints block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.vpcStatus">vpc_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#vpc_status MwsNetworks#vpc_status}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#workspace_id MwsNetworks#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#account_id MwsNetworks#account_id}.

---

##### `network_name`<sup>Required</sup> <a name="network_name" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.networkName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#network_name MwsNetworks#network_name}.

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.creationTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#creation_time MwsNetworks#creation_time}.

---

##### `error_messages`<sup>Optional</sup> <a name="error_messages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.errorMessages"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>]]

error_messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#error_messages MwsNetworks#error_messages}

---

##### `gcp_network_info`<sup>Optional</sup> <a name="gcp_network_info" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.gcpNetworkInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

gcp_network_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#gcp_network_info MwsNetworks#gcp_network_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#id MwsNetworks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_id`<sup>Optional</sup> <a name="network_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.networkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#network_id MwsNetworks#network_id}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#security_group_ids MwsNetworks#security_group_ids}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#subnet_ids MwsNetworks#subnet_ids}.

---

##### `vpc_endpoints`<sup>Optional</sup> <a name="vpc_endpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.vpcEndpoints"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

vpc_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#vpc_endpoints MwsNetworks#vpc_endpoints}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}.

---

##### `vpc_status`<sup>Optional</sup> <a name="vpc_status" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.vpcStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#vpc_status MwsNetworks#vpc_status}.

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.workspaceId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#workspace_id MwsNetworks#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putErrorMessages">put_error_messages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putGcpNetworkInfo">put_gcp_network_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putVpcEndpoints">put_vpc_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetCreationTime">reset_creation_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetErrorMessages">reset_error_messages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetGcpNetworkInfo">reset_gcp_network_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetNetworkId">reset_network_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcEndpoints">reset_vpc_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcId">reset_vpc_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcStatus">reset_vpc_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_error_messages` <a name="put_error_messages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putErrorMessages"></a>

```python
def put_error_messages(
  value: typing.Union[IResolvable, typing.List[MwsNetworksErrorMessages]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putErrorMessages.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>]]

---

##### `put_gcp_network_info` <a name="put_gcp_network_info" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putGcpNetworkInfo"></a>

```python
def put_gcp_network_info(
  network_project_id: str,
  pod_ip_range_name: str,
  service_ip_range_name: str,
  subnet_id: str,
  subnet_region: str,
  vpc_id: str
) -> None
```

###### `network_project_id`<sup>Required</sup> <a name="network_project_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putGcpNetworkInfo.parameter.networkProjectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#network_project_id MwsNetworks#network_project_id}.

---

###### `pod_ip_range_name`<sup>Required</sup> <a name="pod_ip_range_name" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putGcpNetworkInfo.parameter.podIpRangeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#pod_ip_range_name MwsNetworks#pod_ip_range_name}.

---

###### `service_ip_range_name`<sup>Required</sup> <a name="service_ip_range_name" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putGcpNetworkInfo.parameter.serviceIpRangeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#service_ip_range_name MwsNetworks#service_ip_range_name}.

---

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putGcpNetworkInfo.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#subnet_id MwsNetworks#subnet_id}.

---

###### `subnet_region`<sup>Required</sup> <a name="subnet_region" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putGcpNetworkInfo.parameter.subnetRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#subnet_region MwsNetworks#subnet_region}.

---

###### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putGcpNetworkInfo.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}.

---

##### `put_vpc_endpoints` <a name="put_vpc_endpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putVpcEndpoints"></a>

```python
def put_vpc_endpoints(
  dataplane_relay: typing.List[str],
  rest_api: typing.List[str]
) -> None
```

###### `dataplane_relay`<sup>Required</sup> <a name="dataplane_relay" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putVpcEndpoints.parameter.dataplaneRelay"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#dataplane_relay MwsNetworks#dataplane_relay}.

---

###### `rest_api`<sup>Required</sup> <a name="rest_api" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putVpcEndpoints.parameter.restApi"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#rest_api MwsNetworks#rest_api}.

---

##### `reset_creation_time` <a name="reset_creation_time" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetCreationTime"></a>

```python
def reset_creation_time() -> None
```

##### `reset_error_messages` <a name="reset_error_messages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetErrorMessages"></a>

```python
def reset_error_messages() -> None
```

##### `reset_gcp_network_info` <a name="reset_gcp_network_info" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetGcpNetworkInfo"></a>

```python
def reset_gcp_network_info() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network_id` <a name="reset_network_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetNetworkId"></a>

```python
def reset_network_id() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_vpc_endpoints` <a name="reset_vpc_endpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcEndpoints"></a>

```python
def reset_vpc_endpoints() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

##### `reset_vpc_status` <a name="reset_vpc_status" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcStatus"></a>

```python
def reset_vpc_status() -> None
```

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MwsNetworks resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import mws_networks

mwsNetworks.MwsNetworks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import mws_networks

mwsNetworks.MwsNetworks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import mws_networks

mwsNetworks.MwsNetworks.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import mws_networks

mwsNetworks.MwsNetworks.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MwsNetworks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MwsNetworks to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MwsNetworks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MwsNetworks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessages">error_messages</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList">MwsNetworksErrorMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfo">gcp_network_info</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference">MwsNetworksGcpNetworkInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpoints">vpc_endpoints</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference">MwsNetworksVpcEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTimeInput">creation_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessagesInput">error_messages_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfoInput">gcp_network_info_input</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkIdInput">network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkNameInput">network_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpointsInput">vpc_endpoints_input</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatusInput">vpc_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceIdInput">workspace_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkId">network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkName">network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatus">vpc_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceId">workspace_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `error_messages`<sup>Required</sup> <a name="error_messages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessages"></a>

```python
error_messages: MwsNetworksErrorMessagesList
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList">MwsNetworksErrorMessagesList</a>

---

##### `gcp_network_info`<sup>Required</sup> <a name="gcp_network_info" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfo"></a>

```python
gcp_network_info: MwsNetworksGcpNetworkInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference">MwsNetworksGcpNetworkInfoOutputReference</a>

---

##### `vpc_endpoints`<sup>Required</sup> <a name="vpc_endpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpoints"></a>

```python
vpc_endpoints: MwsNetworksVpcEndpointsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference">MwsNetworksVpcEndpointsOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `creation_time_input`<sup>Optional</sup> <a name="creation_time_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTimeInput"></a>

```python
creation_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_messages_input`<sup>Optional</sup> <a name="error_messages_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessagesInput"></a>

```python
error_messages_input: typing.Union[IResolvable, typing.List[MwsNetworksErrorMessages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>]]

---

##### `gcp_network_info_input`<sup>Optional</sup> <a name="gcp_network_info_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfoInput"></a>

```python
gcp_network_info_input: MwsNetworksGcpNetworkInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_id_input`<sup>Optional</sup> <a name="network_id_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkIdInput"></a>

```python
network_id_input: str
```

- *Type:* str

---

##### `network_name_input`<sup>Optional</sup> <a name="network_name_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkNameInput"></a>

```python
network_name_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_endpoints_input`<sup>Optional</sup> <a name="vpc_endpoints_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpointsInput"></a>

```python
vpc_endpoints_input: MwsNetworksVpcEndpoints
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `vpc_status_input`<sup>Optional</sup> <a name="vpc_status_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatusInput"></a>

```python
vpc_status_input: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceIdInput"></a>

```python
workspace_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

---

##### `network_name`<sup>Required</sup> <a name="network_name" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkName"></a>

```python
network_name: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `vpc_status`<sup>Required</sup> <a name="vpc_status" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatus"></a>

```python
vpc_status: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceId"></a>

```python
workspace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MwsNetworksConfig <a name="MwsNetworksConfig" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_networks

mwsNetworks.MwsNetworksConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  network_name: str,
  creation_time: typing.Union[int, float] = None,
  error_messages: typing.Union[IResolvable, typing.List[MwsNetworksErrorMessages]] = None,
  gcp_network_info: MwsNetworksGcpNetworkInfo = None,
  id: str = None,
  network_id: str = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None,
  vpc_endpoints: MwsNetworksVpcEndpoints = None,
  vpc_id: str = None,
  vpc_status: str = None,
  workspace_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#account_id MwsNetworks#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkName">network_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#network_name MwsNetworks#network_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#creation_time MwsNetworks#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.errorMessages">error_messages</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>]]</code> | error_messages block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.gcpNetworkInfo">gcp_network_info</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a></code> | gcp_network_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#id MwsNetworks#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkId">network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#network_id MwsNetworks#network_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#security_group_ids MwsNetworks#security_group_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#subnet_ids MwsNetworks#subnet_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcEndpoints">vpc_endpoints</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a></code> | vpc_endpoints block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcStatus">vpc_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#vpc_status MwsNetworks#vpc_status}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.workspaceId">workspace_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#workspace_id MwsNetworks#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#account_id MwsNetworks#account_id}.

---

##### `network_name`<sup>Required</sup> <a name="network_name" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkName"></a>

```python
network_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#network_name MwsNetworks#network_name}.

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#creation_time MwsNetworks#creation_time}.

---

##### `error_messages`<sup>Optional</sup> <a name="error_messages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.errorMessages"></a>

```python
error_messages: typing.Union[IResolvable, typing.List[MwsNetworksErrorMessages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>]]

error_messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#error_messages MwsNetworks#error_messages}

---

##### `gcp_network_info`<sup>Optional</sup> <a name="gcp_network_info" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.gcpNetworkInfo"></a>

```python
gcp_network_info: MwsNetworksGcpNetworkInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

gcp_network_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#gcp_network_info MwsNetworks#gcp_network_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#id MwsNetworks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_id`<sup>Optional</sup> <a name="network_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#network_id MwsNetworks#network_id}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#security_group_ids MwsNetworks#security_group_ids}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#subnet_ids MwsNetworks#subnet_ids}.

---

##### `vpc_endpoints`<sup>Optional</sup> <a name="vpc_endpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcEndpoints"></a>

```python
vpc_endpoints: MwsNetworksVpcEndpoints
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

vpc_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#vpc_endpoints MwsNetworks#vpc_endpoints}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}.

---

##### `vpc_status`<sup>Optional</sup> <a name="vpc_status" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcStatus"></a>

```python
vpc_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#vpc_status MwsNetworks#vpc_status}.

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.workspaceId"></a>

```python
workspace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#workspace_id MwsNetworks#workspace_id}.

---

### MwsNetworksErrorMessages <a name="MwsNetworksErrorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_networks

mwsNetworks.MwsNetworksErrorMessages(
  error_message: str = None,
  error_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorMessage">error_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#error_message MwsNetworks#error_message}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorType">error_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#error_type MwsNetworks#error_type}. |

---

##### `error_message`<sup>Optional</sup> <a name="error_message" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#error_message MwsNetworks#error_message}.

---

##### `error_type`<sup>Optional</sup> <a name="error_type" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorType"></a>

```python
error_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#error_type MwsNetworks#error_type}.

---

### MwsNetworksGcpNetworkInfo <a name="MwsNetworksGcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_networks

mwsNetworks.MwsNetworksGcpNetworkInfo(
  network_project_id: str,
  pod_ip_range_name: str,
  service_ip_range_name: str,
  subnet_id: str,
  subnet_region: str,
  vpc_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.networkProjectId">network_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#network_project_id MwsNetworks#network_project_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.podIpRangeName">pod_ip_range_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#pod_ip_range_name MwsNetworks#pod_ip_range_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.serviceIpRangeName">service_ip_range_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#service_ip_range_name MwsNetworks#service_ip_range_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#subnet_id MwsNetworks#subnet_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetRegion">subnet_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#subnet_region MwsNetworks#subnet_region}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}. |

---

##### `network_project_id`<sup>Required</sup> <a name="network_project_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.networkProjectId"></a>

```python
network_project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#network_project_id MwsNetworks#network_project_id}.

---

##### `pod_ip_range_name`<sup>Required</sup> <a name="pod_ip_range_name" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.podIpRangeName"></a>

```python
pod_ip_range_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#pod_ip_range_name MwsNetworks#pod_ip_range_name}.

---

##### `service_ip_range_name`<sup>Required</sup> <a name="service_ip_range_name" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.serviceIpRangeName"></a>

```python
service_ip_range_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#service_ip_range_name MwsNetworks#service_ip_range_name}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#subnet_id MwsNetworks#subnet_id}.

---

##### `subnet_region`<sup>Required</sup> <a name="subnet_region" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetRegion"></a>

```python
subnet_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#subnet_region MwsNetworks#subnet_region}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}.

---

### MwsNetworksVpcEndpoints <a name="MwsNetworksVpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_networks

mwsNetworks.MwsNetworksVpcEndpoints(
  dataplane_relay: typing.List[str],
  rest_api: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.dataplaneRelay">dataplane_relay</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#dataplane_relay MwsNetworks#dataplane_relay}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.restApi">rest_api</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#rest_api MwsNetworks#rest_api}. |

---

##### `dataplane_relay`<sup>Required</sup> <a name="dataplane_relay" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.dataplaneRelay"></a>

```python
dataplane_relay: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#dataplane_relay MwsNetworks#dataplane_relay}.

---

##### `rest_api`<sup>Required</sup> <a name="rest_api" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.restApi"></a>

```python
rest_api: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.38.0/docs/resources/mws_networks#rest_api MwsNetworks#rest_api}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsNetworksErrorMessagesList <a name="MwsNetworksErrorMessagesList" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_networks

mwsNetworks.MwsNetworksErrorMessagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MwsNetworksErrorMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MwsNetworksErrorMessages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>]]

---


### MwsNetworksErrorMessagesOutputReference <a name="MwsNetworksErrorMessagesOutputReference" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_networks

mwsNetworks.MwsNetworksErrorMessagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resetErrorMessage">reset_error_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resetErrorType">reset_error_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_error_message` <a name="reset_error_message" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resetErrorMessage"></a>

```python
def reset_error_message() -> None
```

##### `reset_error_type` <a name="reset_error_type" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resetErrorType"></a>

```python
def reset_error_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessageInput">error_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorTypeInput">error_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorType">error_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_message_input`<sup>Optional</sup> <a name="error_message_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessageInput"></a>

```python
error_message_input: str
```

- *Type:* str

---

##### `error_type_input`<sup>Optional</sup> <a name="error_type_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorTypeInput"></a>

```python
error_type_input: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `error_type`<sup>Required</sup> <a name="error_type" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorType"></a>

```python
error_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MwsNetworksErrorMessages]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>]

---


### MwsNetworksGcpNetworkInfoOutputReference <a name="MwsNetworksGcpNetworkInfoOutputReference" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_networks

mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectIdInput">network_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeNameInput">pod_ip_range_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeNameInput">service_ip_range_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegionInput">subnet_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectId">network_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeName">pod_ip_range_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeName">service_ip_range_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegion">subnet_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_project_id_input`<sup>Optional</sup> <a name="network_project_id_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectIdInput"></a>

```python
network_project_id_input: str
```

- *Type:* str

---

##### `pod_ip_range_name_input`<sup>Optional</sup> <a name="pod_ip_range_name_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeNameInput"></a>

```python
pod_ip_range_name_input: str
```

- *Type:* str

---

##### `service_ip_range_name_input`<sup>Optional</sup> <a name="service_ip_range_name_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeNameInput"></a>

```python
service_ip_range_name_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `subnet_region_input`<sup>Optional</sup> <a name="subnet_region_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegionInput"></a>

```python
subnet_region_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `network_project_id`<sup>Required</sup> <a name="network_project_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectId"></a>

```python
network_project_id: str
```

- *Type:* str

---

##### `pod_ip_range_name`<sup>Required</sup> <a name="pod_ip_range_name" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeName"></a>

```python
pod_ip_range_name: str
```

- *Type:* str

---

##### `service_ip_range_name`<sup>Required</sup> <a name="service_ip_range_name" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeName"></a>

```python
service_ip_range_name: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `subnet_region`<sup>Required</sup> <a name="subnet_region" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegion"></a>

```python
subnet_region: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.internalValue"></a>

```python
internal_value: MwsNetworksGcpNetworkInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

---


### MwsNetworksVpcEndpointsOutputReference <a name="MwsNetworksVpcEndpointsOutputReference" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_networks

mwsNetworks.MwsNetworksVpcEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelayInput">dataplane_relay_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApiInput">rest_api_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelay">dataplane_relay</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApi">rest_api</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataplane_relay_input`<sup>Optional</sup> <a name="dataplane_relay_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelayInput"></a>

```python
dataplane_relay_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rest_api_input`<sup>Optional</sup> <a name="rest_api_input" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApiInput"></a>

```python
rest_api_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dataplane_relay`<sup>Required</sup> <a name="dataplane_relay" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelay"></a>

```python
dataplane_relay: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rest_api`<sup>Required</sup> <a name="rest_api" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApi"></a>

```python
rest_api: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: MwsNetworksVpcEndpoints
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

---



