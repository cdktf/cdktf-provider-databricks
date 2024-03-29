# `mwsLogDelivery` Submodule <a name="`mwsLogDelivery` Submodule" id="@cdktf/provider-databricks.mwsLogDelivery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsLogDelivery <a name="MwsLogDelivery" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery databricks_mws_log_delivery}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_log_delivery

mwsLogDelivery.MwsLogDelivery(
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
  credentials_id: str,
  log_type: str,
  output_format: str,
  storage_configuration_id: str,
  config_id: str = None,
  config_name: str = None,
  delivery_path_prefix: str = None,
  delivery_start_time: str = None,
  id: str = None,
  status: str = None,
  workspace_ids_filter: typing.List[typing.Union[int, float]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#account_id MwsLogDelivery#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.credentialsId">credentials_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#credentials_id MwsLogDelivery#credentials_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.logType">log_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#log_type MwsLogDelivery#log_type}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.outputFormat">output_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#output_format MwsLogDelivery#output_format}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.storageConfigurationId">storage_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#storage_configuration_id MwsLogDelivery#storage_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.configId">config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#config_id MwsLogDelivery#config_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.configName">config_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#config_name MwsLogDelivery#config_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.deliveryPathPrefix">delivery_path_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#delivery_path_prefix MwsLogDelivery#delivery_path_prefix}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.deliveryStartTime">delivery_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#delivery_start_time MwsLogDelivery#delivery_start_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#id MwsLogDelivery#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#status MwsLogDelivery#status}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.workspaceIdsFilter">workspace_ids_filter</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#workspace_ids_filter MwsLogDelivery#workspace_ids_filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#account_id MwsLogDelivery#account_id}.

---

##### `credentials_id`<sup>Required</sup> <a name="credentials_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.credentialsId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#credentials_id MwsLogDelivery#credentials_id}.

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.logType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#log_type MwsLogDelivery#log_type}.

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.outputFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#output_format MwsLogDelivery#output_format}.

---

##### `storage_configuration_id`<sup>Required</sup> <a name="storage_configuration_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.storageConfigurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#storage_configuration_id MwsLogDelivery#storage_configuration_id}.

---

##### `config_id`<sup>Optional</sup> <a name="config_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.configId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#config_id MwsLogDelivery#config_id}.

---

##### `config_name`<sup>Optional</sup> <a name="config_name" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.configName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#config_name MwsLogDelivery#config_name}.

---

##### `delivery_path_prefix`<sup>Optional</sup> <a name="delivery_path_prefix" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.deliveryPathPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#delivery_path_prefix MwsLogDelivery#delivery_path_prefix}.

---

##### `delivery_start_time`<sup>Optional</sup> <a name="delivery_start_time" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.deliveryStartTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#delivery_start_time MwsLogDelivery#delivery_start_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#id MwsLogDelivery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#status MwsLogDelivery#status}.

---

##### `workspace_ids_filter`<sup>Optional</sup> <a name="workspace_ids_filter" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.workspaceIdsFilter"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#workspace_ids_filter MwsLogDelivery#workspace_ids_filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetConfigId">reset_config_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetConfigName">reset_config_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetDeliveryPathPrefix">reset_delivery_path_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetDeliveryStartTime">reset_delivery_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetWorkspaceIdsFilter">reset_workspace_ids_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_config_id` <a name="reset_config_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetConfigId"></a>

```python
def reset_config_id() -> None
```

##### `reset_config_name` <a name="reset_config_name" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetConfigName"></a>

```python
def reset_config_name() -> None
```

##### `reset_delivery_path_prefix` <a name="reset_delivery_path_prefix" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetDeliveryPathPrefix"></a>

```python
def reset_delivery_path_prefix() -> None
```

##### `reset_delivery_start_time` <a name="reset_delivery_start_time" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetDeliveryStartTime"></a>

```python
def reset_delivery_start_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_workspace_ids_filter` <a name="reset_workspace_ids_filter" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetWorkspaceIdsFilter"></a>

```python
def reset_workspace_ids_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MwsLogDelivery resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import mws_log_delivery

mwsLogDelivery.MwsLogDelivery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import mws_log_delivery

mwsLogDelivery.MwsLogDelivery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import mws_log_delivery

mwsLogDelivery.MwsLogDelivery.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import mws_log_delivery

mwsLogDelivery.MwsLogDelivery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MwsLogDelivery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MwsLogDelivery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MwsLogDelivery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MwsLogDelivery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configIdInput">config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configNameInput">config_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.credentialsIdInput">credentials_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryPathPrefixInput">delivery_path_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryStartTimeInput">delivery_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.logTypeInput">log_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.outputFormatInput">output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.storageConfigurationIdInput">storage_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.workspaceIdsFilterInput">workspace_ids_filter_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configId">config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configName">config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.credentialsId">credentials_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryPathPrefix">delivery_path_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryStartTime">delivery_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.storageConfigurationId">storage_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.workspaceIdsFilter">workspace_ids_filter</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `config_id_input`<sup>Optional</sup> <a name="config_id_input" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configIdInput"></a>

```python
config_id_input: str
```

- *Type:* str

---

##### `config_name_input`<sup>Optional</sup> <a name="config_name_input" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configNameInput"></a>

```python
config_name_input: str
```

- *Type:* str

---

##### `credentials_id_input`<sup>Optional</sup> <a name="credentials_id_input" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.credentialsIdInput"></a>

```python
credentials_id_input: str
```

- *Type:* str

---

##### `delivery_path_prefix_input`<sup>Optional</sup> <a name="delivery_path_prefix_input" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryPathPrefixInput"></a>

```python
delivery_path_prefix_input: str
```

- *Type:* str

---

##### `delivery_start_time_input`<sup>Optional</sup> <a name="delivery_start_time_input" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryStartTimeInput"></a>

```python
delivery_start_time_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_type_input`<sup>Optional</sup> <a name="log_type_input" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.logTypeInput"></a>

```python
log_type_input: str
```

- *Type:* str

---

##### `output_format_input`<sup>Optional</sup> <a name="output_format_input" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.outputFormatInput"></a>

```python
output_format_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `storage_configuration_id_input`<sup>Optional</sup> <a name="storage_configuration_id_input" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.storageConfigurationIdInput"></a>

```python
storage_configuration_id_input: str
```

- *Type:* str

---

##### `workspace_ids_filter_input`<sup>Optional</sup> <a name="workspace_ids_filter_input" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.workspaceIdsFilterInput"></a>

```python
workspace_ids_filter_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configId"></a>

```python
config_id: str
```

- *Type:* str

---

##### `config_name`<sup>Required</sup> <a name="config_name" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configName"></a>

```python
config_name: str
```

- *Type:* str

---

##### `credentials_id`<sup>Required</sup> <a name="credentials_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.credentialsId"></a>

```python
credentials_id: str
```

- *Type:* str

---

##### `delivery_path_prefix`<sup>Required</sup> <a name="delivery_path_prefix" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryPathPrefix"></a>

```python
delivery_path_prefix: str
```

- *Type:* str

---

##### `delivery_start_time`<sup>Required</sup> <a name="delivery_start_time" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryStartTime"></a>

```python
delivery_start_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `storage_configuration_id`<sup>Required</sup> <a name="storage_configuration_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.storageConfigurationId"></a>

```python
storage_configuration_id: str
```

- *Type:* str

---

##### `workspace_ids_filter`<sup>Required</sup> <a name="workspace_ids_filter" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.workspaceIdsFilter"></a>

```python
workspace_ids_filter: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MwsLogDeliveryConfig <a name="MwsLogDeliveryConfig" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_log_delivery

mwsLogDelivery.MwsLogDeliveryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  credentials_id: str,
  log_type: str,
  output_format: str,
  storage_configuration_id: str,
  config_id: str = None,
  config_name: str = None,
  delivery_path_prefix: str = None,
  delivery_start_time: str = None,
  id: str = None,
  status: str = None,
  workspace_ids_filter: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#account_id MwsLogDelivery#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.credentialsId">credentials_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#credentials_id MwsLogDelivery#credentials_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.logType">log_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#log_type MwsLogDelivery#log_type}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.outputFormat">output_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#output_format MwsLogDelivery#output_format}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.storageConfigurationId">storage_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#storage_configuration_id MwsLogDelivery#storage_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.configId">config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#config_id MwsLogDelivery#config_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.configName">config_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#config_name MwsLogDelivery#config_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.deliveryPathPrefix">delivery_path_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#delivery_path_prefix MwsLogDelivery#delivery_path_prefix}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.deliveryStartTime">delivery_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#delivery_start_time MwsLogDelivery#delivery_start_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#id MwsLogDelivery#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#status MwsLogDelivery#status}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.workspaceIdsFilter">workspace_ids_filter</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#workspace_ids_filter MwsLogDelivery#workspace_ids_filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#account_id MwsLogDelivery#account_id}.

---

##### `credentials_id`<sup>Required</sup> <a name="credentials_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.credentialsId"></a>

```python
credentials_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#credentials_id MwsLogDelivery#credentials_id}.

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.logType"></a>

```python
log_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#log_type MwsLogDelivery#log_type}.

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#output_format MwsLogDelivery#output_format}.

---

##### `storage_configuration_id`<sup>Required</sup> <a name="storage_configuration_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.storageConfigurationId"></a>

```python
storage_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#storage_configuration_id MwsLogDelivery#storage_configuration_id}.

---

##### `config_id`<sup>Optional</sup> <a name="config_id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.configId"></a>

```python
config_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#config_id MwsLogDelivery#config_id}.

---

##### `config_name`<sup>Optional</sup> <a name="config_name" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.configName"></a>

```python
config_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#config_name MwsLogDelivery#config_name}.

---

##### `delivery_path_prefix`<sup>Optional</sup> <a name="delivery_path_prefix" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.deliveryPathPrefix"></a>

```python
delivery_path_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#delivery_path_prefix MwsLogDelivery#delivery_path_prefix}.

---

##### `delivery_start_time`<sup>Optional</sup> <a name="delivery_start_time" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.deliveryStartTime"></a>

```python
delivery_start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#delivery_start_time MwsLogDelivery#delivery_start_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#id MwsLogDelivery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#status MwsLogDelivery#status}.

---

##### `workspace_ids_filter`<sup>Optional</sup> <a name="workspace_ids_filter" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.workspaceIdsFilter"></a>

```python
workspace_ids_filter: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/resources/mws_log_delivery#workspace_ids_filter MwsLogDelivery#workspace_ids_filter}.

---



