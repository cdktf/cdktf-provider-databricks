# `databaseSyncedDatabaseTable` Submodule <a name="`databaseSyncedDatabaseTable` Submodule" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseSyncedDatabaseTable <a name="DatabaseSyncedDatabaseTable" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table databricks_database_synced_database_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable(
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
  database_instance_name: str = None,
  logical_database_name: str = None,
  spec: DatabaseSyncedDatabaseTableSpec = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#name DatabaseSyncedDatabaseTable#name}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.databaseInstanceName">database_instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#database_instance_name DatabaseSyncedDatabaseTable#database_instance_name}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.logicalDatabaseName">logical_database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#logical_database_name DatabaseSyncedDatabaseTable#logical_database_name}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#spec DatabaseSyncedDatabaseTable#spec}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#name DatabaseSyncedDatabaseTable#name}.

---

##### `database_instance_name`<sup>Optional</sup> <a name="database_instance_name" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.databaseInstanceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#database_instance_name DatabaseSyncedDatabaseTable#database_instance_name}.

---

##### `logical_database_name`<sup>Optional</sup> <a name="logical_database_name" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.logicalDatabaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#logical_database_name DatabaseSyncedDatabaseTable#logical_database_name}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#spec DatabaseSyncedDatabaseTable#spec}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetDatabaseInstanceName">reset_database_instance_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetLogicalDatabaseName">reset_logical_database_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetSpec">reset_spec</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.putSpec"></a>

```python
def put_spec(
  create_database_objects_if_missing: bool | IResolvable = None,
  existing_pipeline_id: str = None,
  new_pipeline_spec: DatabaseSyncedDatabaseTableSpecNewPipelineSpec = None,
  primary_key_columns: typing.List[str] = None,
  scheduling_policy: str = None,
  source_table_full_name: str = None,
  timeseries_key: str = None
) -> None
```

###### `create_database_objects_if_missing`<sup>Optional</sup> <a name="create_database_objects_if_missing" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.putSpec.parameter.createDatabaseObjectsIfMissing"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#create_database_objects_if_missing DatabaseSyncedDatabaseTable#create_database_objects_if_missing}.

---

###### `existing_pipeline_id`<sup>Optional</sup> <a name="existing_pipeline_id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.putSpec.parameter.existingPipelineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#existing_pipeline_id DatabaseSyncedDatabaseTable#existing_pipeline_id}.

---

###### `new_pipeline_spec`<sup>Optional</sup> <a name="new_pipeline_spec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.putSpec.parameter.newPipelineSpec"></a>

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#new_pipeline_spec DatabaseSyncedDatabaseTable#new_pipeline_spec}.

---

###### `primary_key_columns`<sup>Optional</sup> <a name="primary_key_columns" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.putSpec.parameter.primaryKeyColumns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#primary_key_columns DatabaseSyncedDatabaseTable#primary_key_columns}.

---

###### `scheduling_policy`<sup>Optional</sup> <a name="scheduling_policy" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.putSpec.parameter.schedulingPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#scheduling_policy DatabaseSyncedDatabaseTable#scheduling_policy}.

---

###### `source_table_full_name`<sup>Optional</sup> <a name="source_table_full_name" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.putSpec.parameter.sourceTableFullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#source_table_full_name DatabaseSyncedDatabaseTable#source_table_full_name}.

---

###### `timeseries_key`<sup>Optional</sup> <a name="timeseries_key" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.putSpec.parameter.timeseriesKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#timeseries_key DatabaseSyncedDatabaseTable#timeseries_key}.

---

##### `reset_database_instance_name` <a name="reset_database_instance_name" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetDatabaseInstanceName"></a>

```python
def reset_database_instance_name() -> None
```

##### `reset_logical_database_name` <a name="reset_logical_database_name" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetLogicalDatabaseName"></a>

```python
def reset_logical_database_name() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetSpec"></a>

```python
def reset_spec() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseSyncedDatabaseTable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseSyncedDatabaseTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseSyncedDatabaseTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseSyncedDatabaseTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseSyncedDatabaseTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.dataSynchronizationStatus">data_synchronization_status</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.effectiveDatabaseInstanceName">effective_database_instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.effectiveLogicalDatabaseName">effective_logical_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference">DatabaseSyncedDatabaseTableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.unityCatalogProvisioningState">unity_catalog_provisioning_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.databaseInstanceNameInput">database_instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.logicalDatabaseNameInput">logical_database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.specInput">spec_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.databaseInstanceName">database_instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.logicalDatabaseName">logical_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `data_synchronization_status`<sup>Required</sup> <a name="data_synchronization_status" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.dataSynchronizationStatus"></a>

```python
data_synchronization_status: DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference</a>

---

##### `effective_database_instance_name`<sup>Required</sup> <a name="effective_database_instance_name" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.effectiveDatabaseInstanceName"></a>

```python
effective_database_instance_name: str
```

- *Type:* str

---

##### `effective_logical_database_name`<sup>Required</sup> <a name="effective_logical_database_name" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.effectiveLogicalDatabaseName"></a>

```python
effective_logical_database_name: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.spec"></a>

```python
spec: DatabaseSyncedDatabaseTableSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference">DatabaseSyncedDatabaseTableSpecOutputReference</a>

---

##### `unity_catalog_provisioning_state`<sup>Required</sup> <a name="unity_catalog_provisioning_state" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.unityCatalogProvisioningState"></a>

```python
unity_catalog_provisioning_state: str
```

- *Type:* str

---

##### `database_instance_name_input`<sup>Optional</sup> <a name="database_instance_name_input" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.databaseInstanceNameInput"></a>

```python
database_instance_name_input: str
```

- *Type:* str

---

##### `logical_database_name_input`<sup>Optional</sup> <a name="logical_database_name_input" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.logicalDatabaseNameInput"></a>

```python
logical_database_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.specInput"></a>

```python
spec_input: IResolvable | DatabaseSyncedDatabaseTableSpec
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a>

---

##### `database_instance_name`<sup>Required</sup> <a name="database_instance_name" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.databaseInstanceName"></a>

```python
database_instance_name: str
```

- *Type:* str

---

##### `logical_database_name`<sup>Required</sup> <a name="logical_database_name" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.logicalDatabaseName"></a>

```python
logical_database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseSyncedDatabaseTableConfig <a name="DatabaseSyncedDatabaseTableConfig" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  database_instance_name: str = None,
  logical_database_name: str = None,
  spec: DatabaseSyncedDatabaseTableSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#name DatabaseSyncedDatabaseTable#name}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.databaseInstanceName">database_instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#database_instance_name DatabaseSyncedDatabaseTable#database_instance_name}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.logicalDatabaseName">logical_database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#logical_database_name DatabaseSyncedDatabaseTable#logical_database_name}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#spec DatabaseSyncedDatabaseTable#spec}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#name DatabaseSyncedDatabaseTable#name}.

---

##### `database_instance_name`<sup>Optional</sup> <a name="database_instance_name" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.databaseInstanceName"></a>

```python
database_instance_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#database_instance_name DatabaseSyncedDatabaseTable#database_instance_name}.

---

##### `logical_database_name`<sup>Optional</sup> <a name="logical_database_name" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.logicalDatabaseName"></a>

```python
logical_database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#logical_database_name DatabaseSyncedDatabaseTable#logical_database_name}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.spec"></a>

```python
spec: DatabaseSyncedDatabaseTableSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#spec DatabaseSyncedDatabaseTable#spec}.

---

### DatabaseSyncedDatabaseTableDataSynchronizationStatus <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus(
  continuous_update_status: DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus = None,
  failed_status: DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus = None,
  provisioning_status: DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus = None,
  triggered_update_status: DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.continuousUpdateStatus">continuous_update_status</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#continuous_update_status DatabaseSyncedDatabaseTable#continuous_update_status}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.failedStatus">failed_status</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#failed_status DatabaseSyncedDatabaseTable#failed_status}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.provisioningStatus">provisioning_status</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#provisioning_status DatabaseSyncedDatabaseTable#provisioning_status}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.triggeredUpdateStatus">triggered_update_status</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#triggered_update_status DatabaseSyncedDatabaseTable#triggered_update_status}. |

---

##### `continuous_update_status`<sup>Optional</sup> <a name="continuous_update_status" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.continuousUpdateStatus"></a>

```python
continuous_update_status: DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#continuous_update_status DatabaseSyncedDatabaseTable#continuous_update_status}.

---

##### `failed_status`<sup>Optional</sup> <a name="failed_status" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.failedStatus"></a>

```python
failed_status: DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#failed_status DatabaseSyncedDatabaseTable#failed_status}.

---

##### `provisioning_status`<sup>Optional</sup> <a name="provisioning_status" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.provisioningStatus"></a>

```python
provisioning_status: DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#provisioning_status DatabaseSyncedDatabaseTable#provisioning_status}.

---

##### `triggered_update_status`<sup>Optional</sup> <a name="triggered_update_status" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.triggeredUpdateStatus"></a>

```python
triggered_update_status: DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#triggered_update_status DatabaseSyncedDatabaseTable#triggered_update_status}.

---

### DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus()
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress()
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus()
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync()
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo()
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus()
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress()
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus()
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress()
```


### DatabaseSyncedDatabaseTableSpec <a name="DatabaseSyncedDatabaseTableSpec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec(
  create_database_objects_if_missing: bool | IResolvable = None,
  existing_pipeline_id: str = None,
  new_pipeline_spec: DatabaseSyncedDatabaseTableSpecNewPipelineSpec = None,
  primary_key_columns: typing.List[str] = None,
  scheduling_policy: str = None,
  source_table_full_name: str = None,
  timeseries_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.createDatabaseObjectsIfMissing">create_database_objects_if_missing</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#create_database_objects_if_missing DatabaseSyncedDatabaseTable#create_database_objects_if_missing}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.existingPipelineId">existing_pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#existing_pipeline_id DatabaseSyncedDatabaseTable#existing_pipeline_id}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.newPipelineSpec">new_pipeline_spec</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#new_pipeline_spec DatabaseSyncedDatabaseTable#new_pipeline_spec}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.primaryKeyColumns">primary_key_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#primary_key_columns DatabaseSyncedDatabaseTable#primary_key_columns}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.schedulingPolicy">scheduling_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#scheduling_policy DatabaseSyncedDatabaseTable#scheduling_policy}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.sourceTableFullName">source_table_full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#source_table_full_name DatabaseSyncedDatabaseTable#source_table_full_name}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.timeseriesKey">timeseries_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#timeseries_key DatabaseSyncedDatabaseTable#timeseries_key}. |

---

##### `create_database_objects_if_missing`<sup>Optional</sup> <a name="create_database_objects_if_missing" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.createDatabaseObjectsIfMissing"></a>

```python
create_database_objects_if_missing: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#create_database_objects_if_missing DatabaseSyncedDatabaseTable#create_database_objects_if_missing}.

---

##### `existing_pipeline_id`<sup>Optional</sup> <a name="existing_pipeline_id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.existingPipelineId"></a>

```python
existing_pipeline_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#existing_pipeline_id DatabaseSyncedDatabaseTable#existing_pipeline_id}.

---

##### `new_pipeline_spec`<sup>Optional</sup> <a name="new_pipeline_spec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.newPipelineSpec"></a>

```python
new_pipeline_spec: DatabaseSyncedDatabaseTableSpecNewPipelineSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#new_pipeline_spec DatabaseSyncedDatabaseTable#new_pipeline_spec}.

---

##### `primary_key_columns`<sup>Optional</sup> <a name="primary_key_columns" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.primaryKeyColumns"></a>

```python
primary_key_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#primary_key_columns DatabaseSyncedDatabaseTable#primary_key_columns}.

---

##### `scheduling_policy`<sup>Optional</sup> <a name="scheduling_policy" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.schedulingPolicy"></a>

```python
scheduling_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#scheduling_policy DatabaseSyncedDatabaseTable#scheduling_policy}.

---

##### `source_table_full_name`<sup>Optional</sup> <a name="source_table_full_name" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.sourceTableFullName"></a>

```python
source_table_full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#source_table_full_name DatabaseSyncedDatabaseTable#source_table_full_name}.

---

##### `timeseries_key`<sup>Optional</sup> <a name="timeseries_key" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.timeseriesKey"></a>

```python
timeseries_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#timeseries_key DatabaseSyncedDatabaseTable#timeseries_key}.

---

### DatabaseSyncedDatabaseTableSpecNewPipelineSpec <a name="DatabaseSyncedDatabaseTableSpecNewPipelineSpec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec(
  storage_catalog: str = None,
  storage_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageCatalog">storage_catalog</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#storage_catalog DatabaseSyncedDatabaseTable#storage_catalog}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageSchema">storage_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#storage_schema DatabaseSyncedDatabaseTable#storage_schema}. |

---

##### `storage_catalog`<sup>Optional</sup> <a name="storage_catalog" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageCatalog"></a>

```python
storage_catalog: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#storage_catalog DatabaseSyncedDatabaseTable#storage_catalog}.

---

##### `storage_schema`<sup>Optional</sup> <a name="storage_schema" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageSchema"></a>

```python
storage_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#storage_schema DatabaseSyncedDatabaseTable#storage_schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">estimated_completion_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">latest_version_currently_processing</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase">provisioning_phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">synced_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">sync_progress_completion</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">total_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimated_completion_time_seconds`<sup>Required</sup> <a name="estimated_completion_time_seconds" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```python
estimated_completion_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `latest_version_currently_processing`<sup>Required</sup> <a name="latest_version_currently_processing" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```python
latest_version_currently_processing: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioning_phase`<sup>Required</sup> <a name="provisioning_phase" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase"></a>

```python
provisioning_phase: str
```

- *Type:* str

---

##### `synced_row_count`<sup>Required</sup> <a name="synced_row_count" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```python
synced_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sync_progress_completion`<sup>Required</sup> <a name="sync_progress_completion" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```python
sync_progress_completion: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_row_count`<sup>Required</sup> <a name="total_row_count" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```python
total_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress">initial_pipeline_sync_progress</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion">last_processed_commit_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `initial_pipeline_sync_progress`<sup>Required</sup> <a name="initial_pipeline_sync_progress" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress"></a>

```python
initial_pipeline_sync_progress: DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference</a>

---

##### `last_processed_commit_version`<sup>Required</sup> <a name="last_processed_commit_version" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```python
last_processed_commit_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.lastProcessedCommitVersion">last_processed_commit_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_processed_commit_version`<sup>Required</sup> <a name="last_processed_commit_version" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.lastProcessedCommitVersion"></a>

```python
last_processed_commit_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTimestamp">delta_commit_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion">delta_commit_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_commit_timestamp`<sup>Required</sup> <a name="delta_commit_timestamp" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTimestamp"></a>

```python
delta_commit_timestamp: str
```

- *Type:* str

---

##### `delta_commit_version`<sup>Required</sup> <a name="delta_commit_version" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion"></a>

```python
delta_commit_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.deltaTableSyncInfo">delta_table_sync_info</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncEndTimestamp">sync_end_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncStartTimestamp">sync_start_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_table_sync_info`<sup>Required</sup> <a name="delta_table_sync_info" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.deltaTableSyncInfo"></a>

```python
delta_table_sync_info: DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference</a>

---

##### `sync_end_timestamp`<sup>Required</sup> <a name="sync_end_timestamp" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncEndTimestamp"></a>

```python
sync_end_timestamp: str
```

- *Type:* str

---

##### `sync_start_timestamp`<sup>Required</sup> <a name="sync_start_timestamp" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncStartTimestamp"></a>

```python
sync_start_timestamp: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putContinuousUpdateStatus">put_continuous_update_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putFailedStatus">put_failed_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putProvisioningStatus">put_provisioning_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus">put_triggered_update_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetContinuousUpdateStatus">reset_continuous_update_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetFailedStatus">reset_failed_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetProvisioningStatus">reset_provisioning_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetTriggeredUpdateStatus">reset_triggered_update_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_continuous_update_status` <a name="put_continuous_update_status" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putContinuousUpdateStatus"></a>

```python
def put_continuous_update_status() -> None
```

##### `put_failed_status` <a name="put_failed_status" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putFailedStatus"></a>

```python
def put_failed_status() -> None
```

##### `put_provisioning_status` <a name="put_provisioning_status" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putProvisioningStatus"></a>

```python
def put_provisioning_status() -> None
```

##### `put_triggered_update_status` <a name="put_triggered_update_status" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus"></a>

```python
def put_triggered_update_status() -> None
```

##### `reset_continuous_update_status` <a name="reset_continuous_update_status" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetContinuousUpdateStatus"></a>

```python
def reset_continuous_update_status() -> None
```

##### `reset_failed_status` <a name="reset_failed_status" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetFailedStatus"></a>

```python
def reset_failed_status() -> None
```

##### `reset_provisioning_status` <a name="reset_provisioning_status" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetProvisioningStatus"></a>

```python
def reset_provisioning_status() -> None
```

##### `reset_triggered_update_status` <a name="reset_triggered_update_status" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetTriggeredUpdateStatus"></a>

```python
def reset_triggered_update_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatus">continuous_update_status</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.detailedState">detailed_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatus">failed_status</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.lastSync">last_sync</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatus">provisioning_status</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatus">triggered_update_status</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatusInput">continuous_update_status_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatusInput">failed_status_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatusInput">provisioning_status_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatusInput">triggered_update_status_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `continuous_update_status`<sup>Required</sup> <a name="continuous_update_status" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatus"></a>

```python
continuous_update_status: DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference</a>

---

##### `detailed_state`<sup>Required</sup> <a name="detailed_state" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.detailedState"></a>

```python
detailed_state: str
```

- *Type:* str

---

##### `failed_status`<sup>Required</sup> <a name="failed_status" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatus"></a>

```python
failed_status: DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference</a>

---

##### `last_sync`<sup>Required</sup> <a name="last_sync" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.lastSync"></a>

```python
last_sync: DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `provisioning_status`<sup>Required</sup> <a name="provisioning_status" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatus"></a>

```python
provisioning_status: DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference</a>

---

##### `triggered_update_status`<sup>Required</sup> <a name="triggered_update_status" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatus"></a>

```python
triggered_update_status: DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference</a>

---

##### `continuous_update_status_input`<sup>Optional</sup> <a name="continuous_update_status_input" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatusInput"></a>

```python
continuous_update_status_input: IResolvable | DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>

---

##### `failed_status_input`<sup>Optional</sup> <a name="failed_status_input" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatusInput"></a>

```python
failed_status_input: IResolvable | DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>

---

##### `provisioning_status_input`<sup>Optional</sup> <a name="provisioning_status_input" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatusInput"></a>

```python
provisioning_status_input: IResolvable | DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>

---

##### `triggered_update_status_input`<sup>Optional</sup> <a name="triggered_update_status_input" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatusInput"></a>

```python
triggered_update_status_input: IResolvable | DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSyncedDatabaseTableDataSynchronizationStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatus</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">estimated_completion_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">latest_version_currently_processing</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase">provisioning_phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">synced_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">sync_progress_completion</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">total_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimated_completion_time_seconds`<sup>Required</sup> <a name="estimated_completion_time_seconds" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```python
estimated_completion_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `latest_version_currently_processing`<sup>Required</sup> <a name="latest_version_currently_processing" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```python
latest_version_currently_processing: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioning_phase`<sup>Required</sup> <a name="provisioning_phase" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase"></a>

```python
provisioning_phase: str
```

- *Type:* str

---

##### `synced_row_count`<sup>Required</sup> <a name="synced_row_count" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```python
synced_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sync_progress_completion`<sup>Required</sup> <a name="sync_progress_completion" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```python
sync_progress_completion: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_row_count`<sup>Required</sup> <a name="total_row_count" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```python
total_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress">initial_pipeline_sync_progress</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `initial_pipeline_sync_progress`<sup>Required</sup> <a name="initial_pipeline_sync_progress" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress"></a>

```python
initial_pipeline_sync_progress: DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion">last_processed_commit_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress">triggered_update_progress</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_processed_commit_version`<sup>Required</sup> <a name="last_processed_commit_version" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```python
last_processed_commit_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `triggered_update_progress`<sup>Required</sup> <a name="triggered_update_progress" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress"></a>

```python
triggered_update_progress: DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds">estimated_completion_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing">latest_version_currently_processing</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.provisioningPhase">provisioning_phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount">synced_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion">sync_progress_completion</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount">total_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimated_completion_time_seconds`<sup>Required</sup> <a name="estimated_completion_time_seconds" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```python
estimated_completion_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `latest_version_currently_processing`<sup>Required</sup> <a name="latest_version_currently_processing" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```python
latest_version_currently_processing: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioning_phase`<sup>Required</sup> <a name="provisioning_phase" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.provisioningPhase"></a>

```python
provisioning_phase: str
```

- *Type:* str

---

##### `synced_row_count`<sup>Required</sup> <a name="synced_row_count" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount"></a>

```python
synced_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sync_progress_completion`<sup>Required</sup> <a name="sync_progress_completion" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion"></a>

```python
sync_progress_completion: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_row_count`<sup>Required</sup> <a name="total_row_count" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount"></a>

```python
total_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress</a>

---


### DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference <a name="DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageCatalog">reset_storage_catalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageSchema">reset_storage_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_storage_catalog` <a name="reset_storage_catalog" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageCatalog"></a>

```python
def reset_storage_catalog() -> None
```

##### `reset_storage_schema` <a name="reset_storage_schema" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageSchema"></a>

```python
def reset_storage_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput">storage_catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput">storage_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalog">storage_catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchema">storage_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_catalog_input`<sup>Optional</sup> <a name="storage_catalog_input" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput"></a>

```python
storage_catalog_input: str
```

- *Type:* str

---

##### `storage_schema_input`<sup>Optional</sup> <a name="storage_schema_input" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput"></a>

```python
storage_schema_input: str
```

- *Type:* str

---

##### `storage_catalog`<sup>Required</sup> <a name="storage_catalog" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalog"></a>

```python
storage_catalog: str
```

- *Type:* str

---

##### `storage_schema`<sup>Required</sup> <a name="storage_schema" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchema"></a>

```python
storage_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabaseSyncedDatabaseTableSpecNewPipelineSpec
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

---


### DatabaseSyncedDatabaseTableSpecOutputReference <a name="DatabaseSyncedDatabaseTableSpecOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import database_synced_database_table

databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec">put_new_pipeline_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing">reset_create_database_objects_if_missing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetExistingPipelineId">reset_existing_pipeline_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetNewPipelineSpec">reset_new_pipeline_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetPrimaryKeyColumns">reset_primary_key_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetSchedulingPolicy">reset_scheduling_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetSourceTableFullName">reset_source_table_full_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetTimeseriesKey">reset_timeseries_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_new_pipeline_spec` <a name="put_new_pipeline_spec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec"></a>

```python
def put_new_pipeline_spec(
  storage_catalog: str = None,
  storage_schema: str = None
) -> None
```

###### `storage_catalog`<sup>Optional</sup> <a name="storage_catalog" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec.parameter.storageCatalog"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#storage_catalog DatabaseSyncedDatabaseTable#storage_catalog}.

---

###### `storage_schema`<sup>Optional</sup> <a name="storage_schema" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec.parameter.storageSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#storage_schema DatabaseSyncedDatabaseTable#storage_schema}.

---

##### `reset_create_database_objects_if_missing` <a name="reset_create_database_objects_if_missing" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing"></a>

```python
def reset_create_database_objects_if_missing() -> None
```

##### `reset_existing_pipeline_id` <a name="reset_existing_pipeline_id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetExistingPipelineId"></a>

```python
def reset_existing_pipeline_id() -> None
```

##### `reset_new_pipeline_spec` <a name="reset_new_pipeline_spec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetNewPipelineSpec"></a>

```python
def reset_new_pipeline_spec() -> None
```

##### `reset_primary_key_columns` <a name="reset_primary_key_columns" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetPrimaryKeyColumns"></a>

```python
def reset_primary_key_columns() -> None
```

##### `reset_scheduling_policy` <a name="reset_scheduling_policy" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetSchedulingPolicy"></a>

```python
def reset_scheduling_policy() -> None
```

##### `reset_source_table_full_name` <a name="reset_source_table_full_name" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetSourceTableFullName"></a>

```python
def reset_source_table_full_name() -> None
```

##### `reset_timeseries_key` <a name="reset_timeseries_key" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetTimeseriesKey"></a>

```python
def reset_timeseries_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpec">new_pipeline_spec</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference">DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput">create_database_objects_if_missing_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineIdInput">existing_pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpecInput">new_pipeline_spec_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumnsInput">primary_key_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicyInput">scheduling_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullNameInput">source_table_full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKeyInput">timeseries_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissing">create_database_objects_if_missing</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineId">existing_pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumns">primary_key_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicy">scheduling_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullName">source_table_full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKey">timeseries_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `new_pipeline_spec`<sup>Required</sup> <a name="new_pipeline_spec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpec"></a>

```python
new_pipeline_spec: DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference">DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference</a>

---

##### `create_database_objects_if_missing_input`<sup>Optional</sup> <a name="create_database_objects_if_missing_input" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput"></a>

```python
create_database_objects_if_missing_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `existing_pipeline_id_input`<sup>Optional</sup> <a name="existing_pipeline_id_input" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineIdInput"></a>

```python
existing_pipeline_id_input: str
```

- *Type:* str

---

##### `new_pipeline_spec_input`<sup>Optional</sup> <a name="new_pipeline_spec_input" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpecInput"></a>

```python
new_pipeline_spec_input: IResolvable | DatabaseSyncedDatabaseTableSpecNewPipelineSpec
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

---

##### `primary_key_columns_input`<sup>Optional</sup> <a name="primary_key_columns_input" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumnsInput"></a>

```python
primary_key_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduling_policy_input`<sup>Optional</sup> <a name="scheduling_policy_input" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicyInput"></a>

```python
scheduling_policy_input: str
```

- *Type:* str

---

##### `source_table_full_name_input`<sup>Optional</sup> <a name="source_table_full_name_input" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullNameInput"></a>

```python
source_table_full_name_input: str
```

- *Type:* str

---

##### `timeseries_key_input`<sup>Optional</sup> <a name="timeseries_key_input" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKeyInput"></a>

```python
timeseries_key_input: str
```

- *Type:* str

---

##### `create_database_objects_if_missing`<sup>Required</sup> <a name="create_database_objects_if_missing" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissing"></a>

```python
create_database_objects_if_missing: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `existing_pipeline_id`<sup>Required</sup> <a name="existing_pipeline_id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineId"></a>

```python
existing_pipeline_id: str
```

- *Type:* str

---

##### `primary_key_columns`<sup>Required</sup> <a name="primary_key_columns" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumns"></a>

```python
primary_key_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduling_policy`<sup>Required</sup> <a name="scheduling_policy" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicy"></a>

```python
scheduling_policy: str
```

- *Type:* str

---

##### `source_table_full_name`<sup>Required</sup> <a name="source_table_full_name" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullName"></a>

```python
source_table_full_name: str
```

- *Type:* str

---

##### `timeseries_key`<sup>Required</sup> <a name="timeseries_key" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKey"></a>

```python
timeseries_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatabaseSyncedDatabaseTableSpec
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a>

---



