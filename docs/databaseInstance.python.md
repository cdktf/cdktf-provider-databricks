# `databaseInstance` Submodule <a name="`databaseInstance` Submodule" id="@cdktf/provider-databricks.databaseInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseInstance <a name="DatabaseInstance" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance databricks_database_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_instance

databaseInstance.DatabaseInstance(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  capacity: str = None,
  custom_tags: IResolvable | typing.List[DatabaseInstanceCustomTags] = None,
  enable_pg_native_login: bool | IResolvable = None,
  enable_readable_secondaries: bool | IResolvable = None,
  node_count: typing.Union[int, float] = None,
  parent_instance_ref: DatabaseInstanceParentInstanceRef = None,
  purge_on_delete: bool | IResolvable = None,
  retention_window_in_days: typing.Union[int, float] = None,
  stopped: bool | IResolvable = None,
  usage_policy_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#name DatabaseInstance#name}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.capacity">capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#capacity DatabaseInstance#capacity}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.customTags">custom_tags</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTags">DatabaseInstanceCustomTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#custom_tags DatabaseInstance#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.enablePgNativeLogin">enable_pg_native_login</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#enable_pg_native_login DatabaseInstance#enable_pg_native_login}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.enableReadableSecondaries">enable_readable_secondaries</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#enable_readable_secondaries DatabaseInstance#enable_readable_secondaries}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#node_count DatabaseInstance#node_count}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.parentInstanceRef">parent_instance_ref</a></code> | <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef">DatabaseInstanceParentInstanceRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#parent_instance_ref DatabaseInstance#parent_instance_ref}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.purgeOnDelete">purge_on_delete</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#purge_on_delete DatabaseInstance#purge_on_delete}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.retentionWindowInDays">retention_window_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#retention_window_in_days DatabaseInstance#retention_window_in_days}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.stopped">stopped</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#stopped DatabaseInstance#stopped}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.usagePolicyId">usage_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#usage_policy_id DatabaseInstance#usage_policy_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#name DatabaseInstance#name}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.capacity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#capacity DatabaseInstance#capacity}.

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.customTags"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTags">DatabaseInstanceCustomTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#custom_tags DatabaseInstance#custom_tags}.

---

##### `enable_pg_native_login`<sup>Optional</sup> <a name="enable_pg_native_login" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.enablePgNativeLogin"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#enable_pg_native_login DatabaseInstance#enable_pg_native_login}.

---

##### `enable_readable_secondaries`<sup>Optional</sup> <a name="enable_readable_secondaries" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.enableReadableSecondaries"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#enable_readable_secondaries DatabaseInstance#enable_readable_secondaries}.

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#node_count DatabaseInstance#node_count}.

---

##### `parent_instance_ref`<sup>Optional</sup> <a name="parent_instance_ref" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.parentInstanceRef"></a>

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef">DatabaseInstanceParentInstanceRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#parent_instance_ref DatabaseInstance#parent_instance_ref}.

---

##### `purge_on_delete`<sup>Optional</sup> <a name="purge_on_delete" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.purgeOnDelete"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#purge_on_delete DatabaseInstance#purge_on_delete}.

---

##### `retention_window_in_days`<sup>Optional</sup> <a name="retention_window_in_days" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.retentionWindowInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#retention_window_in_days DatabaseInstance#retention_window_in_days}.

---

##### `stopped`<sup>Optional</sup> <a name="stopped" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.stopped"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#stopped DatabaseInstance#stopped}.

---

##### `usage_policy_id`<sup>Optional</sup> <a name="usage_policy_id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.Initializer.parameter.usagePolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#usage_policy_id DatabaseInstance#usage_policy_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.putCustomTags">put_custom_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.putParentInstanceRef">put_parent_instance_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetCapacity">reset_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetCustomTags">reset_custom_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetEnablePgNativeLogin">reset_enable_pg_native_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetEnableReadableSecondaries">reset_enable_readable_secondaries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetNodeCount">reset_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetParentInstanceRef">reset_parent_instance_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetPurgeOnDelete">reset_purge_on_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetRetentionWindowInDays">reset_retention_window_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetStopped">reset_stopped</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetUsagePolicyId">reset_usage_policy_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_tags` <a name="put_custom_tags" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.putCustomTags"></a>

```python
def put_custom_tags(
  value: IResolvable | typing.List[DatabaseInstanceCustomTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.putCustomTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTags">DatabaseInstanceCustomTags</a>]

---

##### `put_parent_instance_ref` <a name="put_parent_instance_ref" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.putParentInstanceRef"></a>

```python
def put_parent_instance_ref(
  branch_time: str = None,
  lsn: str = None,
  name: str = None
) -> None
```

###### `branch_time`<sup>Optional</sup> <a name="branch_time" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.putParentInstanceRef.parameter.branchTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#branch_time DatabaseInstance#branch_time}.

---

###### `lsn`<sup>Optional</sup> <a name="lsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.putParentInstanceRef.parameter.lsn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#lsn DatabaseInstance#lsn}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.putParentInstanceRef.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#name DatabaseInstance#name}.

---

##### `reset_capacity` <a name="reset_capacity" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetCapacity"></a>

```python
def reset_capacity() -> None
```

##### `reset_custom_tags` <a name="reset_custom_tags" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetCustomTags"></a>

```python
def reset_custom_tags() -> None
```

##### `reset_enable_pg_native_login` <a name="reset_enable_pg_native_login" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetEnablePgNativeLogin"></a>

```python
def reset_enable_pg_native_login() -> None
```

##### `reset_enable_readable_secondaries` <a name="reset_enable_readable_secondaries" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetEnableReadableSecondaries"></a>

```python
def reset_enable_readable_secondaries() -> None
```

##### `reset_node_count` <a name="reset_node_count" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetNodeCount"></a>

```python
def reset_node_count() -> None
```

##### `reset_parent_instance_ref` <a name="reset_parent_instance_ref" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetParentInstanceRef"></a>

```python
def reset_parent_instance_ref() -> None
```

##### `reset_purge_on_delete` <a name="reset_purge_on_delete" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetPurgeOnDelete"></a>

```python
def reset_purge_on_delete() -> None
```

##### `reset_retention_window_in_days` <a name="reset_retention_window_in_days" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetRetentionWindowInDays"></a>

```python
def reset_retention_window_in_days() -> None
```

##### `reset_stopped` <a name="reset_stopped" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetStopped"></a>

```python
def reset_stopped() -> None
```

##### `reset_usage_policy_id` <a name="reset_usage_policy_id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.resetUsagePolicyId"></a>

```python
def reset_usage_policy_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import database_instance

databaseInstance.DatabaseInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import database_instance

databaseInstance.DatabaseInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import database_instance

databaseInstance.DatabaseInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import database_instance

databaseInstance.DatabaseInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.childInstanceRefs">child_instance_refs</a></code> | <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList">DatabaseInstanceChildInstanceRefsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.customTags">custom_tags</a></code> | <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList">DatabaseInstanceCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveCapacity">effective_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveCustomTags">effective_custom_tags</a></code> | <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList">DatabaseInstanceEffectiveCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveEnablePgNativeLogin">effective_enable_pg_native_login</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveEnableReadableSecondaries">effective_enable_readable_secondaries</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveNodeCount">effective_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveRetentionWindowInDays">effective_retention_window_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveStopped">effective_stopped</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveUsagePolicyId">effective_usage_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.parentInstanceRef">parent_instance_ref</a></code> | <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference">DatabaseInstanceParentInstanceRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.pgVersion">pg_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.readOnlyDns">read_only_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.readWriteDns">read_write_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.capacityInput">capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.customTagsInput">custom_tags_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTags">DatabaseInstanceCustomTags</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enablePgNativeLoginInput">enable_pg_native_login_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enableReadableSecondariesInput">enable_readable_secondaries_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.parentInstanceRefInput">parent_instance_ref_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef">DatabaseInstanceParentInstanceRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.purgeOnDeleteInput">purge_on_delete_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.retentionWindowInDaysInput">retention_window_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.stoppedInput">stopped_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.usagePolicyIdInput">usage_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.capacity">capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enablePgNativeLogin">enable_pg_native_login</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enableReadableSecondaries">enable_readable_secondaries</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.purgeOnDelete">purge_on_delete</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.retentionWindowInDays">retention_window_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.stopped">stopped</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.usagePolicyId">usage_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `child_instance_refs`<sup>Required</sup> <a name="child_instance_refs" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.childInstanceRefs"></a>

```python
child_instance_refs: DatabaseInstanceChildInstanceRefsList
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList">DatabaseInstanceChildInstanceRefsList</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `custom_tags`<sup>Required</sup> <a name="custom_tags" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.customTags"></a>

```python
custom_tags: DatabaseInstanceCustomTagsList
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList">DatabaseInstanceCustomTagsList</a>

---

##### `effective_capacity`<sup>Required</sup> <a name="effective_capacity" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveCapacity"></a>

```python
effective_capacity: str
```

- *Type:* str

---

##### `effective_custom_tags`<sup>Required</sup> <a name="effective_custom_tags" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveCustomTags"></a>

```python
effective_custom_tags: DatabaseInstanceEffectiveCustomTagsList
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList">DatabaseInstanceEffectiveCustomTagsList</a>

---

##### `effective_enable_pg_native_login`<sup>Required</sup> <a name="effective_enable_pg_native_login" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveEnablePgNativeLogin"></a>

```python
effective_enable_pg_native_login: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `effective_enable_readable_secondaries`<sup>Required</sup> <a name="effective_enable_readable_secondaries" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveEnableReadableSecondaries"></a>

```python
effective_enable_readable_secondaries: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `effective_node_count`<sup>Required</sup> <a name="effective_node_count" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveNodeCount"></a>

```python
effective_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `effective_retention_window_in_days`<sup>Required</sup> <a name="effective_retention_window_in_days" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveRetentionWindowInDays"></a>

```python
effective_retention_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `effective_stopped`<sup>Required</sup> <a name="effective_stopped" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveStopped"></a>

```python
effective_stopped: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `effective_usage_policy_id`<sup>Required</sup> <a name="effective_usage_policy_id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.effectiveUsagePolicyId"></a>

```python
effective_usage_policy_id: str
```

- *Type:* str

---

##### `parent_instance_ref`<sup>Required</sup> <a name="parent_instance_ref" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.parentInstanceRef"></a>

```python
parent_instance_ref: DatabaseInstanceParentInstanceRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference">DatabaseInstanceParentInstanceRefOutputReference</a>

---

##### `pg_version`<sup>Required</sup> <a name="pg_version" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.pgVersion"></a>

```python
pg_version: str
```

- *Type:* str

---

##### `read_only_dns`<sup>Required</sup> <a name="read_only_dns" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.readOnlyDns"></a>

```python
read_only_dns: str
```

- *Type:* str

---

##### `read_write_dns`<sup>Required</sup> <a name="read_write_dns" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.readWriteDns"></a>

```python
read_write_dns: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.capacityInput"></a>

```python
capacity_input: str
```

- *Type:* str

---

##### `custom_tags_input`<sup>Optional</sup> <a name="custom_tags_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.customTagsInput"></a>

```python
custom_tags_input: IResolvable | typing.List[DatabaseInstanceCustomTags]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTags">DatabaseInstanceCustomTags</a>]

---

##### `enable_pg_native_login_input`<sup>Optional</sup> <a name="enable_pg_native_login_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enablePgNativeLoginInput"></a>

```python
enable_pg_native_login_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enable_readable_secondaries_input`<sup>Optional</sup> <a name="enable_readable_secondaries_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enableReadableSecondariesInput"></a>

```python
enable_readable_secondaries_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_instance_ref_input`<sup>Optional</sup> <a name="parent_instance_ref_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.parentInstanceRefInput"></a>

```python
parent_instance_ref_input: IResolvable | DatabaseInstanceParentInstanceRef
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef">DatabaseInstanceParentInstanceRef</a>

---

##### `purge_on_delete_input`<sup>Optional</sup> <a name="purge_on_delete_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.purgeOnDeleteInput"></a>

```python
purge_on_delete_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `retention_window_in_days_input`<sup>Optional</sup> <a name="retention_window_in_days_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.retentionWindowInDaysInput"></a>

```python
retention_window_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stopped_input`<sup>Optional</sup> <a name="stopped_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.stoppedInput"></a>

```python
stopped_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `usage_policy_id_input`<sup>Optional</sup> <a name="usage_policy_id_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.usagePolicyIdInput"></a>

```python
usage_policy_id_input: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.capacity"></a>

```python
capacity: str
```

- *Type:* str

---

##### `enable_pg_native_login`<sup>Required</sup> <a name="enable_pg_native_login" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enablePgNativeLogin"></a>

```python
enable_pg_native_login: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enable_readable_secondaries`<sup>Required</sup> <a name="enable_readable_secondaries" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.enableReadableSecondaries"></a>

```python
enable_readable_secondaries: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `purge_on_delete`<sup>Required</sup> <a name="purge_on_delete" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.purgeOnDelete"></a>

```python
purge_on_delete: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `retention_window_in_days`<sup>Required</sup> <a name="retention_window_in_days" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.retentionWindowInDays"></a>

```python
retention_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stopped`<sup>Required</sup> <a name="stopped" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.stopped"></a>

```python
stopped: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `usage_policy_id`<sup>Required</sup> <a name="usage_policy_id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.usagePolicyId"></a>

```python
usage_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseInstanceChildInstanceRefs <a name="DatabaseInstanceChildInstanceRefs" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_instance

databaseInstance.DatabaseInstanceChildInstanceRefs(
  branch_time: str = None,
  lsn: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.property.branchTime">branch_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#branch_time DatabaseInstance#branch_time}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.property.lsn">lsn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#lsn DatabaseInstance#lsn}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#name DatabaseInstance#name}. |

---

##### `branch_time`<sup>Optional</sup> <a name="branch_time" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.property.branchTime"></a>

```python
branch_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#branch_time DatabaseInstance#branch_time}.

---

##### `lsn`<sup>Optional</sup> <a name="lsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.property.lsn"></a>

```python
lsn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#lsn DatabaseInstance#lsn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#name DatabaseInstance#name}.

---

### DatabaseInstanceConfig <a name="DatabaseInstanceConfig" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_instance

databaseInstance.DatabaseInstanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  capacity: str = None,
  custom_tags: IResolvable | typing.List[DatabaseInstanceCustomTags] = None,
  enable_pg_native_login: bool | IResolvable = None,
  enable_readable_secondaries: bool | IResolvable = None,
  node_count: typing.Union[int, float] = None,
  parent_instance_ref: DatabaseInstanceParentInstanceRef = None,
  purge_on_delete: bool | IResolvable = None,
  retention_window_in_days: typing.Union[int, float] = None,
  stopped: bool | IResolvable = None,
  usage_policy_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#name DatabaseInstance#name}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.capacity">capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#capacity DatabaseInstance#capacity}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.customTags">custom_tags</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTags">DatabaseInstanceCustomTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#custom_tags DatabaseInstance#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.enablePgNativeLogin">enable_pg_native_login</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#enable_pg_native_login DatabaseInstance#enable_pg_native_login}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.enableReadableSecondaries">enable_readable_secondaries</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#enable_readable_secondaries DatabaseInstance#enable_readable_secondaries}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#node_count DatabaseInstance#node_count}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.parentInstanceRef">parent_instance_ref</a></code> | <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef">DatabaseInstanceParentInstanceRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#parent_instance_ref DatabaseInstance#parent_instance_ref}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.purgeOnDelete">purge_on_delete</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#purge_on_delete DatabaseInstance#purge_on_delete}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.retentionWindowInDays">retention_window_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#retention_window_in_days DatabaseInstance#retention_window_in_days}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.stopped">stopped</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#stopped DatabaseInstance#stopped}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.usagePolicyId">usage_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#usage_policy_id DatabaseInstance#usage_policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#name DatabaseInstance#name}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.capacity"></a>

```python
capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#capacity DatabaseInstance#capacity}.

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.customTags"></a>

```python
custom_tags: IResolvable | typing.List[DatabaseInstanceCustomTags]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTags">DatabaseInstanceCustomTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#custom_tags DatabaseInstance#custom_tags}.

---

##### `enable_pg_native_login`<sup>Optional</sup> <a name="enable_pg_native_login" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.enablePgNativeLogin"></a>

```python
enable_pg_native_login: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#enable_pg_native_login DatabaseInstance#enable_pg_native_login}.

---

##### `enable_readable_secondaries`<sup>Optional</sup> <a name="enable_readable_secondaries" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.enableReadableSecondaries"></a>

```python
enable_readable_secondaries: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#enable_readable_secondaries DatabaseInstance#enable_readable_secondaries}.

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#node_count DatabaseInstance#node_count}.

---

##### `parent_instance_ref`<sup>Optional</sup> <a name="parent_instance_ref" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.parentInstanceRef"></a>

```python
parent_instance_ref: DatabaseInstanceParentInstanceRef
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef">DatabaseInstanceParentInstanceRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#parent_instance_ref DatabaseInstance#parent_instance_ref}.

---

##### `purge_on_delete`<sup>Optional</sup> <a name="purge_on_delete" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.purgeOnDelete"></a>

```python
purge_on_delete: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#purge_on_delete DatabaseInstance#purge_on_delete}.

---

##### `retention_window_in_days`<sup>Optional</sup> <a name="retention_window_in_days" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.retentionWindowInDays"></a>

```python
retention_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#retention_window_in_days DatabaseInstance#retention_window_in_days}.

---

##### `stopped`<sup>Optional</sup> <a name="stopped" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.stopped"></a>

```python
stopped: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#stopped DatabaseInstance#stopped}.

---

##### `usage_policy_id`<sup>Optional</sup> <a name="usage_policy_id" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceConfig.property.usagePolicyId"></a>

```python
usage_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#usage_policy_id DatabaseInstance#usage_policy_id}.

---

### DatabaseInstanceCustomTags <a name="DatabaseInstanceCustomTags" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTags.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_instance

databaseInstance.DatabaseInstanceCustomTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#key DatabaseInstance#key}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#value DatabaseInstance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#key DatabaseInstance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#value DatabaseInstance#value}.

---

### DatabaseInstanceEffectiveCustomTags <a name="DatabaseInstanceEffectiveCustomTags" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTags.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_instance

databaseInstance.DatabaseInstanceEffectiveCustomTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#key DatabaseInstance#key}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#value DatabaseInstance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#key DatabaseInstance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#value DatabaseInstance#value}.

---

### DatabaseInstanceParentInstanceRef <a name="DatabaseInstanceParentInstanceRef" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_instance

databaseInstance.DatabaseInstanceParentInstanceRef(
  branch_time: str = None,
  lsn: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.property.branchTime">branch_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#branch_time DatabaseInstance#branch_time}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.property.lsn">lsn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#lsn DatabaseInstance#lsn}. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#name DatabaseInstance#name}. |

---

##### `branch_time`<sup>Optional</sup> <a name="branch_time" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.property.branchTime"></a>

```python
branch_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#branch_time DatabaseInstance#branch_time}.

---

##### `lsn`<sup>Optional</sup> <a name="lsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.property.lsn"></a>

```python
lsn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#lsn DatabaseInstance#lsn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/database_instance#name DatabaseInstance#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseInstanceChildInstanceRefsList <a name="DatabaseInstanceChildInstanceRefsList" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_instance

databaseInstance.DatabaseInstanceChildInstanceRefsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseInstanceChildInstanceRefsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs">DatabaseInstanceChildInstanceRefs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatabaseInstanceChildInstanceRefs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs">DatabaseInstanceChildInstanceRefs</a>]

---


### DatabaseInstanceChildInstanceRefsOutputReference <a name="DatabaseInstanceChildInstanceRefsOutputReference" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_instance

databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resetBranchTime">reset_branch_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resetLsn">reset_lsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch_time` <a name="reset_branch_time" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resetBranchTime"></a>

```python
def reset_branch_time() -> None
```

##### `reset_lsn` <a name="reset_lsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resetLsn"></a>

```python
def reset_lsn() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.effectiveLsn">effective_lsn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.branchTimeInput">branch_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.lsnInput">lsn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.branchTime">branch_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.lsn">lsn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs">DatabaseInstanceChildInstanceRefs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_lsn`<sup>Required</sup> <a name="effective_lsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.effectiveLsn"></a>

```python
effective_lsn: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `branch_time_input`<sup>Optional</sup> <a name="branch_time_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.branchTimeInput"></a>

```python
branch_time_input: str
```

- *Type:* str

---

##### `lsn_input`<sup>Optional</sup> <a name="lsn_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.lsnInput"></a>

```python
lsn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `branch_time`<sup>Required</sup> <a name="branch_time" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.branchTime"></a>

```python
branch_time: str
```

- *Type:* str

---

##### `lsn`<sup>Required</sup> <a name="lsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.lsn"></a>

```python
lsn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseInstanceChildInstanceRefs
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceChildInstanceRefs">DatabaseInstanceChildInstanceRefs</a>

---


### DatabaseInstanceCustomTagsList <a name="DatabaseInstanceCustomTagsList" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_instance

databaseInstance.DatabaseInstanceCustomTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseInstanceCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTags">DatabaseInstanceCustomTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatabaseInstanceCustomTags]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTags">DatabaseInstanceCustomTags</a>]

---


### DatabaseInstanceCustomTagsOutputReference <a name="DatabaseInstanceCustomTagsOutputReference" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_instance

databaseInstance.DatabaseInstanceCustomTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTags">DatabaseInstanceCustomTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabaseInstanceCustomTags
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceCustomTags">DatabaseInstanceCustomTags</a>

---


### DatabaseInstanceEffectiveCustomTagsList <a name="DatabaseInstanceEffectiveCustomTagsList" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_instance

databaseInstance.DatabaseInstanceEffectiveCustomTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseInstanceEffectiveCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTags">DatabaseInstanceEffectiveCustomTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatabaseInstanceEffectiveCustomTags]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTags">DatabaseInstanceEffectiveCustomTags</a>]

---


### DatabaseInstanceEffectiveCustomTagsOutputReference <a name="DatabaseInstanceEffectiveCustomTagsOutputReference" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_instance

databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTags">DatabaseInstanceEffectiveCustomTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTagsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseInstanceEffectiveCustomTags
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceEffectiveCustomTags">DatabaseInstanceEffectiveCustomTags</a>

---


### DatabaseInstanceParentInstanceRefOutputReference <a name="DatabaseInstanceParentInstanceRefOutputReference" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_instance

databaseInstance.DatabaseInstanceParentInstanceRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resetBranchTime">reset_branch_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resetLsn">reset_lsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch_time` <a name="reset_branch_time" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resetBranchTime"></a>

```python
def reset_branch_time() -> None
```

##### `reset_lsn` <a name="reset_lsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resetLsn"></a>

```python
def reset_lsn() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.effectiveLsn">effective_lsn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.branchTimeInput">branch_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.lsnInput">lsn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.branchTime">branch_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.lsn">lsn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef">DatabaseInstanceParentInstanceRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_lsn`<sup>Required</sup> <a name="effective_lsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.effectiveLsn"></a>

```python
effective_lsn: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `branch_time_input`<sup>Optional</sup> <a name="branch_time_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.branchTimeInput"></a>

```python
branch_time_input: str
```

- *Type:* str

---

##### `lsn_input`<sup>Optional</sup> <a name="lsn_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.lsnInput"></a>

```python
lsn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `branch_time`<sup>Required</sup> <a name="branch_time" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.branchTime"></a>

```python
branch_time: str
```

- *Type:* str

---

##### `lsn`<sup>Required</sup> <a name="lsn" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.lsn"></a>

```python
lsn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRefOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabaseInstanceParentInstanceRef
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.databaseInstance.DatabaseInstanceParentInstanceRef">DatabaseInstanceParentInstanceRef</a>

---



