# `dataDatabricksDatabaseSyncedDatabaseTable` Submodule <a name="`dataDatabricksDatabaseSyncedDatabaseTable` Submodule" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDatabaseSyncedDatabaseTable <a name="DataDatabricksDatabaseSyncedDatabaseTable" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table databricks_database_synced_database_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  database_instance_name: str = None,
  logical_database_name: str = None,
  spec: DataDatabricksDatabaseSyncedDatabaseTableSpec = None,
  workspace_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#name DataDatabricksDatabaseSyncedDatabaseTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.databaseInstanceName">database_instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#database_instance_name DataDatabricksDatabaseSyncedDatabaseTable#database_instance_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.logicalDatabaseName">logical_database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#logical_database_name DataDatabricksDatabaseSyncedDatabaseTable#logical_database_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec">DataDatabricksDatabaseSyncedDatabaseTableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#spec DataDatabricksDatabaseSyncedDatabaseTable#spec}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#workspace_id DataDatabricksDatabaseSyncedDatabaseTable#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#name DataDatabricksDatabaseSyncedDatabaseTable#name}.

---

##### `database_instance_name`<sup>Optional</sup> <a name="database_instance_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.databaseInstanceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#database_instance_name DataDatabricksDatabaseSyncedDatabaseTable#database_instance_name}.

---

##### `logical_database_name`<sup>Optional</sup> <a name="logical_database_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.logicalDatabaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#logical_database_name DataDatabricksDatabaseSyncedDatabaseTable#logical_database_name}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec">DataDatabricksDatabaseSyncedDatabaseTableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#spec DataDatabricksDatabaseSyncedDatabaseTable#spec}.

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#workspace_id DataDatabricksDatabaseSyncedDatabaseTable#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetDatabaseInstanceName">reset_database_instance_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetLogicalDatabaseName">reset_logical_database_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetSpec">reset_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.putSpec"></a>

```python
def put_spec(
  create_database_objects_if_missing: typing.Union[bool, IResolvable] = None,
  existing_pipeline_id: str = None,
  new_pipeline_spec: DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec = None,
  primary_key_columns: typing.List[str] = None,
  scheduling_policy: str = None,
  source_table_full_name: str = None,
  timeseries_key: str = None
) -> None
```

###### `create_database_objects_if_missing`<sup>Optional</sup> <a name="create_database_objects_if_missing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.putSpec.parameter.createDatabaseObjectsIfMissing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#create_database_objects_if_missing DataDatabricksDatabaseSyncedDatabaseTable#create_database_objects_if_missing}.

---

###### `existing_pipeline_id`<sup>Optional</sup> <a name="existing_pipeline_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.putSpec.parameter.existingPipelineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#existing_pipeline_id DataDatabricksDatabaseSyncedDatabaseTable#existing_pipeline_id}.

---

###### `new_pipeline_spec`<sup>Optional</sup> <a name="new_pipeline_spec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.putSpec.parameter.newPipelineSpec"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#new_pipeline_spec DataDatabricksDatabaseSyncedDatabaseTable#new_pipeline_spec}.

---

###### `primary_key_columns`<sup>Optional</sup> <a name="primary_key_columns" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.putSpec.parameter.primaryKeyColumns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#primary_key_columns DataDatabricksDatabaseSyncedDatabaseTable#primary_key_columns}.

---

###### `scheduling_policy`<sup>Optional</sup> <a name="scheduling_policy" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.putSpec.parameter.schedulingPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#scheduling_policy DataDatabricksDatabaseSyncedDatabaseTable#scheduling_policy}.

---

###### `source_table_full_name`<sup>Optional</sup> <a name="source_table_full_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.putSpec.parameter.sourceTableFullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#source_table_full_name DataDatabricksDatabaseSyncedDatabaseTable#source_table_full_name}.

---

###### `timeseries_key`<sup>Optional</sup> <a name="timeseries_key" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.putSpec.parameter.timeseriesKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#timeseries_key DataDatabricksDatabaseSyncedDatabaseTable#timeseries_key}.

---

##### `reset_database_instance_name` <a name="reset_database_instance_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetDatabaseInstanceName"></a>

```python
def reset_database_instance_name() -> None
```

##### `reset_logical_database_name` <a name="reset_logical_database_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetLogicalDatabaseName"></a>

```python
def reset_logical_database_name() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetSpec"></a>

```python
def reset_spec() -> None
```

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksDatabaseSyncedDatabaseTable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksDatabaseSyncedDatabaseTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksDatabaseSyncedDatabaseTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksDatabaseSyncedDatabaseTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDatabaseSyncedDatabaseTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.dataSynchronizationStatus">data_synchronization_status</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.effectiveDatabaseInstanceName">effective_database_instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.effectiveLogicalDatabaseName">effective_logical_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.unityCatalogProvisioningState">unity_catalog_provisioning_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.databaseInstanceNameInput">database_instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.logicalDatabaseNameInput">logical_database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.specInput">spec_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec">DataDatabricksDatabaseSyncedDatabaseTableSpec</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.databaseInstanceName">database_instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.logicalDatabaseName">logical_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `data_synchronization_status`<sup>Required</sup> <a name="data_synchronization_status" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.dataSynchronizationStatus"></a>

```python
data_synchronization_status: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference</a>

---

##### `effective_database_instance_name`<sup>Required</sup> <a name="effective_database_instance_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.effectiveDatabaseInstanceName"></a>

```python
effective_database_instance_name: str
```

- *Type:* str

---

##### `effective_logical_database_name`<sup>Required</sup> <a name="effective_logical_database_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.effectiveLogicalDatabaseName"></a>

```python
effective_logical_database_name: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.spec"></a>

```python
spec: DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference</a>

---

##### `unity_catalog_provisioning_state`<sup>Required</sup> <a name="unity_catalog_provisioning_state" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.unityCatalogProvisioningState"></a>

```python
unity_catalog_provisioning_state: str
```

- *Type:* str

---

##### `database_instance_name_input`<sup>Optional</sup> <a name="database_instance_name_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.databaseInstanceNameInput"></a>

```python
database_instance_name_input: str
```

- *Type:* str

---

##### `logical_database_name_input`<sup>Optional</sup> <a name="logical_database_name_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.logicalDatabaseNameInput"></a>

```python
logical_database_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.specInput"></a>

```python
spec_input: typing.Union[IResolvable, DataDatabricksDatabaseSyncedDatabaseTableSpec]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec">DataDatabricksDatabaseSyncedDatabaseTableSpec</a>]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `database_instance_name`<sup>Required</sup> <a name="database_instance_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.databaseInstanceName"></a>

```python
database_instance_name: str
```

- *Type:* str

---

##### `logical_database_name`<sup>Required</sup> <a name="logical_database_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.logicalDatabaseName"></a>

```python
logical_database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDatabaseSyncedDatabaseTableConfig <a name="DataDatabricksDatabaseSyncedDatabaseTableConfig" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  database_instance_name: str = None,
  logical_database_name: str = None,
  spec: DataDatabricksDatabaseSyncedDatabaseTableSpec = None,
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#name DataDatabricksDatabaseSyncedDatabaseTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.databaseInstanceName">database_instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#database_instance_name DataDatabricksDatabaseSyncedDatabaseTable#database_instance_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.logicalDatabaseName">logical_database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#logical_database_name DataDatabricksDatabaseSyncedDatabaseTable#logical_database_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec">DataDatabricksDatabaseSyncedDatabaseTableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#spec DataDatabricksDatabaseSyncedDatabaseTable#spec}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#workspace_id DataDatabricksDatabaseSyncedDatabaseTable#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#name DataDatabricksDatabaseSyncedDatabaseTable#name}.

---

##### `database_instance_name`<sup>Optional</sup> <a name="database_instance_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.databaseInstanceName"></a>

```python
database_instance_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#database_instance_name DataDatabricksDatabaseSyncedDatabaseTable#database_instance_name}.

---

##### `logical_database_name`<sup>Optional</sup> <a name="logical_database_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.logicalDatabaseName"></a>

```python
logical_database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#logical_database_name DataDatabricksDatabaseSyncedDatabaseTable#logical_database_name}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.spec"></a>

```python
spec: DataDatabricksDatabaseSyncedDatabaseTableSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec">DataDatabricksDatabaseSyncedDatabaseTableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#spec DataDatabricksDatabaseSyncedDatabaseTable#spec}.

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#workspace_id DataDatabricksDatabaseSyncedDatabaseTable#workspace_id}.

---

### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus(
  continuous_update_status: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus = None,
  failed_status: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus = None,
  provisioning_status: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus = None,
  triggered_update_status: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.continuousUpdateStatus">continuous_update_status</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#continuous_update_status DataDatabricksDatabaseSyncedDatabaseTable#continuous_update_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.failedStatus">failed_status</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#failed_status DataDatabricksDatabaseSyncedDatabaseTable#failed_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.provisioningStatus">provisioning_status</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#provisioning_status DataDatabricksDatabaseSyncedDatabaseTable#provisioning_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.triggeredUpdateStatus">triggered_update_status</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#triggered_update_status DataDatabricksDatabaseSyncedDatabaseTable#triggered_update_status}. |

---

##### `continuous_update_status`<sup>Optional</sup> <a name="continuous_update_status" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.continuousUpdateStatus"></a>

```python
continuous_update_status: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#continuous_update_status DataDatabricksDatabaseSyncedDatabaseTable#continuous_update_status}.

---

##### `failed_status`<sup>Optional</sup> <a name="failed_status" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.failedStatus"></a>

```python
failed_status: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#failed_status DataDatabricksDatabaseSyncedDatabaseTable#failed_status}.

---

##### `provisioning_status`<sup>Optional</sup> <a name="provisioning_status" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.provisioningStatus"></a>

```python
provisioning_status: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#provisioning_status DataDatabricksDatabaseSyncedDatabaseTable#provisioning_status}.

---

##### `triggered_update_status`<sup>Optional</sup> <a name="triggered_update_status" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.triggeredUpdateStatus"></a>

```python
triggered_update_status: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#triggered_update_status DataDatabricksDatabaseSyncedDatabaseTable#triggered_update_status}.

---

### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus()
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress()
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus()
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync()
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo()
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus()
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress()
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus()
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress()
```


### DataDatabricksDatabaseSyncedDatabaseTableSpec <a name="DataDatabricksDatabaseSyncedDatabaseTableSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec(
  create_database_objects_if_missing: typing.Union[bool, IResolvable] = None,
  existing_pipeline_id: str = None,
  new_pipeline_spec: DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec = None,
  primary_key_columns: typing.List[str] = None,
  scheduling_policy: str = None,
  source_table_full_name: str = None,
  timeseries_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.createDatabaseObjectsIfMissing">create_database_objects_if_missing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#create_database_objects_if_missing DataDatabricksDatabaseSyncedDatabaseTable#create_database_objects_if_missing}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.existingPipelineId">existing_pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#existing_pipeline_id DataDatabricksDatabaseSyncedDatabaseTable#existing_pipeline_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.newPipelineSpec">new_pipeline_spec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#new_pipeline_spec DataDatabricksDatabaseSyncedDatabaseTable#new_pipeline_spec}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.primaryKeyColumns">primary_key_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#primary_key_columns DataDatabricksDatabaseSyncedDatabaseTable#primary_key_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.schedulingPolicy">scheduling_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#scheduling_policy DataDatabricksDatabaseSyncedDatabaseTable#scheduling_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.sourceTableFullName">source_table_full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#source_table_full_name DataDatabricksDatabaseSyncedDatabaseTable#source_table_full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.timeseriesKey">timeseries_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#timeseries_key DataDatabricksDatabaseSyncedDatabaseTable#timeseries_key}. |

---

##### `create_database_objects_if_missing`<sup>Optional</sup> <a name="create_database_objects_if_missing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.createDatabaseObjectsIfMissing"></a>

```python
create_database_objects_if_missing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#create_database_objects_if_missing DataDatabricksDatabaseSyncedDatabaseTable#create_database_objects_if_missing}.

---

##### `existing_pipeline_id`<sup>Optional</sup> <a name="existing_pipeline_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.existingPipelineId"></a>

```python
existing_pipeline_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#existing_pipeline_id DataDatabricksDatabaseSyncedDatabaseTable#existing_pipeline_id}.

---

##### `new_pipeline_spec`<sup>Optional</sup> <a name="new_pipeline_spec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.newPipelineSpec"></a>

```python
new_pipeline_spec: DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#new_pipeline_spec DataDatabricksDatabaseSyncedDatabaseTable#new_pipeline_spec}.

---

##### `primary_key_columns`<sup>Optional</sup> <a name="primary_key_columns" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.primaryKeyColumns"></a>

```python
primary_key_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#primary_key_columns DataDatabricksDatabaseSyncedDatabaseTable#primary_key_columns}.

---

##### `scheduling_policy`<sup>Optional</sup> <a name="scheduling_policy" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.schedulingPolicy"></a>

```python
scheduling_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#scheduling_policy DataDatabricksDatabaseSyncedDatabaseTable#scheduling_policy}.

---

##### `source_table_full_name`<sup>Optional</sup> <a name="source_table_full_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.sourceTableFullName"></a>

```python
source_table_full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#source_table_full_name DataDatabricksDatabaseSyncedDatabaseTable#source_table_full_name}.

---

##### `timeseries_key`<sup>Optional</sup> <a name="timeseries_key" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.timeseriesKey"></a>

```python
timeseries_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#timeseries_key DataDatabricksDatabaseSyncedDatabaseTable#timeseries_key}.

---

### DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec <a name="DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec(
  storage_catalog: str = None,
  storage_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageCatalog">storage_catalog</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#storage_catalog DataDatabricksDatabaseSyncedDatabaseTable#storage_catalog}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageSchema">storage_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#storage_schema DataDatabricksDatabaseSyncedDatabaseTable#storage_schema}. |

---

##### `storage_catalog`<sup>Optional</sup> <a name="storage_catalog" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageCatalog"></a>

```python
storage_catalog: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#storage_catalog DataDatabricksDatabaseSyncedDatabaseTable#storage_catalog}.

---

##### `storage_schema`<sup>Optional</sup> <a name="storage_schema" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageSchema"></a>

```python
storage_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#storage_schema DataDatabricksDatabaseSyncedDatabaseTable#storage_schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">estimated_completion_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">latest_version_currently_processing</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase">provisioning_phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">synced_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">sync_progress_completion</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">total_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimated_completion_time_seconds`<sup>Required</sup> <a name="estimated_completion_time_seconds" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```python
estimated_completion_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `latest_version_currently_processing`<sup>Required</sup> <a name="latest_version_currently_processing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```python
latest_version_currently_processing: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioning_phase`<sup>Required</sup> <a name="provisioning_phase" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase"></a>

```python
provisioning_phase: str
```

- *Type:* str

---

##### `synced_row_count`<sup>Required</sup> <a name="synced_row_count" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```python
synced_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sync_progress_completion`<sup>Required</sup> <a name="sync_progress_completion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```python
sync_progress_completion: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_row_count`<sup>Required</sup> <a name="total_row_count" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```python
total_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress">initial_pipeline_sync_progress</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion">last_processed_commit_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `initial_pipeline_sync_progress`<sup>Required</sup> <a name="initial_pipeline_sync_progress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress"></a>

```python
initial_pipeline_sync_progress: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference</a>

---

##### `last_processed_commit_version`<sup>Required</sup> <a name="last_processed_commit_version" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```python
last_processed_commit_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>]

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.lastProcessedCommitVersion">last_processed_commit_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_processed_commit_version`<sup>Required</sup> <a name="last_processed_commit_version" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.lastProcessedCommitVersion"></a>

```python
last_processed_commit_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>]

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTimestamp">delta_commit_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion">delta_commit_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_commit_timestamp`<sup>Required</sup> <a name="delta_commit_timestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTimestamp"></a>

```python
delta_commit_timestamp: str
```

- *Type:* str

---

##### `delta_commit_version`<sup>Required</sup> <a name="delta_commit_version" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion"></a>

```python
delta_commit_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.deltaTableSyncInfo">delta_table_sync_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncEndTimestamp">sync_end_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncStartTimestamp">sync_start_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_table_sync_info`<sup>Required</sup> <a name="delta_table_sync_info" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.deltaTableSyncInfo"></a>

```python
delta_table_sync_info: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference</a>

---

##### `sync_end_timestamp`<sup>Required</sup> <a name="sync_end_timestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncEndTimestamp"></a>

```python
sync_end_timestamp: str
```

- *Type:* str

---

##### `sync_start_timestamp`<sup>Required</sup> <a name="sync_start_timestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncStartTimestamp"></a>

```python
sync_start_timestamp: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putContinuousUpdateStatus">put_continuous_update_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putFailedStatus">put_failed_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putProvisioningStatus">put_provisioning_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus">put_triggered_update_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetContinuousUpdateStatus">reset_continuous_update_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetFailedStatus">reset_failed_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetProvisioningStatus">reset_provisioning_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetTriggeredUpdateStatus">reset_triggered_update_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_continuous_update_status` <a name="put_continuous_update_status" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putContinuousUpdateStatus"></a>

```python
def put_continuous_update_status() -> None
```

##### `put_failed_status` <a name="put_failed_status" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putFailedStatus"></a>

```python
def put_failed_status() -> None
```

##### `put_provisioning_status` <a name="put_provisioning_status" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putProvisioningStatus"></a>

```python
def put_provisioning_status() -> None
```

##### `put_triggered_update_status` <a name="put_triggered_update_status" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus"></a>

```python
def put_triggered_update_status() -> None
```

##### `reset_continuous_update_status` <a name="reset_continuous_update_status" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetContinuousUpdateStatus"></a>

```python
def reset_continuous_update_status() -> None
```

##### `reset_failed_status` <a name="reset_failed_status" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetFailedStatus"></a>

```python
def reset_failed_status() -> None
```

##### `reset_provisioning_status` <a name="reset_provisioning_status" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetProvisioningStatus"></a>

```python
def reset_provisioning_status() -> None
```

##### `reset_triggered_update_status` <a name="reset_triggered_update_status" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetTriggeredUpdateStatus"></a>

```python
def reset_triggered_update_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatus">continuous_update_status</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.detailedState">detailed_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatus">failed_status</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.lastSync">last_sync</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatus">provisioning_status</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatus">triggered_update_status</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatusInput">continuous_update_status_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatusInput">failed_status_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatusInput">provisioning_status_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatusInput">triggered_update_status_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `continuous_update_status`<sup>Required</sup> <a name="continuous_update_status" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatus"></a>

```python
continuous_update_status: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference</a>

---

##### `detailed_state`<sup>Required</sup> <a name="detailed_state" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.detailedState"></a>

```python
detailed_state: str
```

- *Type:* str

---

##### `failed_status`<sup>Required</sup> <a name="failed_status" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatus"></a>

```python
failed_status: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference</a>

---

##### `last_sync`<sup>Required</sup> <a name="last_sync" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.lastSync"></a>

```python
last_sync: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `provisioning_status`<sup>Required</sup> <a name="provisioning_status" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatus"></a>

```python
provisioning_status: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference</a>

---

##### `triggered_update_status`<sup>Required</sup> <a name="triggered_update_status" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatus"></a>

```python
triggered_update_status: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference</a>

---

##### `continuous_update_status_input`<sup>Optional</sup> <a name="continuous_update_status_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatusInput"></a>

```python
continuous_update_status_input: typing.Union[IResolvable, DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>]

---

##### `failed_status_input`<sup>Optional</sup> <a name="failed_status_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatusInput"></a>

```python
failed_status_input: typing.Union[IResolvable, DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>]

---

##### `provisioning_status_input`<sup>Optional</sup> <a name="provisioning_status_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatusInput"></a>

```python
provisioning_status_input: typing.Union[IResolvable, DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>]

---

##### `triggered_update_status_input`<sup>Optional</sup> <a name="triggered_update_status_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatusInput"></a>

```python
triggered_update_status_input: typing.Union[IResolvable, DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">estimated_completion_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">latest_version_currently_processing</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase">provisioning_phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">synced_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">sync_progress_completion</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">total_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimated_completion_time_seconds`<sup>Required</sup> <a name="estimated_completion_time_seconds" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```python
estimated_completion_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `latest_version_currently_processing`<sup>Required</sup> <a name="latest_version_currently_processing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```python
latest_version_currently_processing: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioning_phase`<sup>Required</sup> <a name="provisioning_phase" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase"></a>

```python
provisioning_phase: str
```

- *Type:* str

---

##### `synced_row_count`<sup>Required</sup> <a name="synced_row_count" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```python
synced_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sync_progress_completion`<sup>Required</sup> <a name="sync_progress_completion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```python
sync_progress_completion: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_row_count`<sup>Required</sup> <a name="total_row_count" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```python
total_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress">initial_pipeline_sync_progress</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `initial_pipeline_sync_progress`<sup>Required</sup> <a name="initial_pipeline_sync_progress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress"></a>

```python
initial_pipeline_sync_progress: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>]

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion">last_processed_commit_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress">triggered_update_progress</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_processed_commit_version`<sup>Required</sup> <a name="last_processed_commit_version" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```python
last_processed_commit_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `triggered_update_progress`<sup>Required</sup> <a name="triggered_update_progress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress"></a>

```python
triggered_update_progress: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>]

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds">estimated_completion_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing">latest_version_currently_processing</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.provisioningPhase">provisioning_phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount">synced_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion">sync_progress_completion</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount">total_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimated_completion_time_seconds`<sup>Required</sup> <a name="estimated_completion_time_seconds" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```python
estimated_completion_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `latest_version_currently_processing`<sup>Required</sup> <a name="latest_version_currently_processing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```python
latest_version_currently_processing: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioning_phase`<sup>Required</sup> <a name="provisioning_phase" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.provisioningPhase"></a>

```python
provisioning_phase: str
```

- *Type:* str

---

##### `synced_row_count`<sup>Required</sup> <a name="synced_row_count" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount"></a>

```python
synced_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sync_progress_completion`<sup>Required</sup> <a name="sync_progress_completion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion"></a>

```python
sync_progress_completion: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_row_count`<sup>Required</sup> <a name="total_row_count" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount"></a>

```python
total_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageCatalog">reset_storage_catalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageSchema">reset_storage_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_storage_catalog` <a name="reset_storage_catalog" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageCatalog"></a>

```python
def reset_storage_catalog() -> None
```

##### `reset_storage_schema` <a name="reset_storage_schema" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageSchema"></a>

```python
def reset_storage_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput">storage_catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput">storage_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalog">storage_catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchema">storage_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_catalog_input`<sup>Optional</sup> <a name="storage_catalog_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput"></a>

```python
storage_catalog_input: str
```

- *Type:* str

---

##### `storage_schema_input`<sup>Optional</sup> <a name="storage_schema_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput"></a>

```python
storage_schema_input: str
```

- *Type:* str

---

##### `storage_catalog`<sup>Required</sup> <a name="storage_catalog" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalog"></a>

```python
storage_catalog: str
```

- *Type:* str

---

##### `storage_schema`<sup>Required</sup> <a name="storage_schema" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchema"></a>

```python
storage_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>]

---


### DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_synced_database_table

dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec">put_new_pipeline_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing">reset_create_database_objects_if_missing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetExistingPipelineId">reset_existing_pipeline_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetNewPipelineSpec">reset_new_pipeline_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetPrimaryKeyColumns">reset_primary_key_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetSchedulingPolicy">reset_scheduling_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetSourceTableFullName">reset_source_table_full_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetTimeseriesKey">reset_timeseries_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_new_pipeline_spec` <a name="put_new_pipeline_spec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec"></a>

```python
def put_new_pipeline_spec(
  storage_catalog: str = None,
  storage_schema: str = None
) -> None
```

###### `storage_catalog`<sup>Optional</sup> <a name="storage_catalog" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec.parameter.storageCatalog"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#storage_catalog DataDatabricksDatabaseSyncedDatabaseTable#storage_catalog}.

---

###### `storage_schema`<sup>Optional</sup> <a name="storage_schema" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec.parameter.storageSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/database_synced_database_table#storage_schema DataDatabricksDatabaseSyncedDatabaseTable#storage_schema}.

---

##### `reset_create_database_objects_if_missing` <a name="reset_create_database_objects_if_missing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing"></a>

```python
def reset_create_database_objects_if_missing() -> None
```

##### `reset_existing_pipeline_id` <a name="reset_existing_pipeline_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetExistingPipelineId"></a>

```python
def reset_existing_pipeline_id() -> None
```

##### `reset_new_pipeline_spec` <a name="reset_new_pipeline_spec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetNewPipelineSpec"></a>

```python
def reset_new_pipeline_spec() -> None
```

##### `reset_primary_key_columns` <a name="reset_primary_key_columns" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetPrimaryKeyColumns"></a>

```python
def reset_primary_key_columns() -> None
```

##### `reset_scheduling_policy` <a name="reset_scheduling_policy" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetSchedulingPolicy"></a>

```python
def reset_scheduling_policy() -> None
```

##### `reset_source_table_full_name` <a name="reset_source_table_full_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetSourceTableFullName"></a>

```python
def reset_source_table_full_name() -> None
```

##### `reset_timeseries_key` <a name="reset_timeseries_key" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetTimeseriesKey"></a>

```python
def reset_timeseries_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpec">new_pipeline_spec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput">create_database_objects_if_missing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineIdInput">existing_pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpecInput">new_pipeline_spec_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumnsInput">primary_key_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicyInput">scheduling_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullNameInput">source_table_full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKeyInput">timeseries_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissing">create_database_objects_if_missing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineId">existing_pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumns">primary_key_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicy">scheduling_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullName">source_table_full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKey">timeseries_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec">DataDatabricksDatabaseSyncedDatabaseTableSpec</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `new_pipeline_spec`<sup>Required</sup> <a name="new_pipeline_spec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpec"></a>

```python
new_pipeline_spec: DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference</a>

---

##### `create_database_objects_if_missing_input`<sup>Optional</sup> <a name="create_database_objects_if_missing_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput"></a>

```python
create_database_objects_if_missing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `existing_pipeline_id_input`<sup>Optional</sup> <a name="existing_pipeline_id_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineIdInput"></a>

```python
existing_pipeline_id_input: str
```

- *Type:* str

---

##### `new_pipeline_spec_input`<sup>Optional</sup> <a name="new_pipeline_spec_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpecInput"></a>

```python
new_pipeline_spec_input: typing.Union[IResolvable, DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>]

---

##### `primary_key_columns_input`<sup>Optional</sup> <a name="primary_key_columns_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumnsInput"></a>

```python
primary_key_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduling_policy_input`<sup>Optional</sup> <a name="scheduling_policy_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicyInput"></a>

```python
scheduling_policy_input: str
```

- *Type:* str

---

##### `source_table_full_name_input`<sup>Optional</sup> <a name="source_table_full_name_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullNameInput"></a>

```python
source_table_full_name_input: str
```

- *Type:* str

---

##### `timeseries_key_input`<sup>Optional</sup> <a name="timeseries_key_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKeyInput"></a>

```python
timeseries_key_input: str
```

- *Type:* str

---

##### `create_database_objects_if_missing`<sup>Required</sup> <a name="create_database_objects_if_missing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissing"></a>

```python
create_database_objects_if_missing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `existing_pipeline_id`<sup>Required</sup> <a name="existing_pipeline_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineId"></a>

```python
existing_pipeline_id: str
```

- *Type:* str

---

##### `primary_key_columns`<sup>Required</sup> <a name="primary_key_columns" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumns"></a>

```python
primary_key_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduling_policy`<sup>Required</sup> <a name="scheduling_policy" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicy"></a>

```python
scheduling_policy: str
```

- *Type:* str

---

##### `source_table_full_name`<sup>Required</sup> <a name="source_table_full_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullName"></a>

```python
source_table_full_name: str
```

- *Type:* str

---

##### `timeseries_key`<sup>Required</sup> <a name="timeseries_key" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKey"></a>

```python
timeseries_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksDatabaseSyncedDatabaseTableSpec]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec">DataDatabricksDatabaseSyncedDatabaseTableSpec</a>]

---



