# `sqlQuery` Submodule <a name="`sqlQuery` Submodule" id="@cdktf/provider-databricks.sqlQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlQuery <a name="SqlQuery" id="@cdktf/provider-databricks.sqlQuery.SqlQuery"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query databricks_sql_query}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQuery(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_source_id: str,
  name: str,
  query: str,
  created_at: str = None,
  description: str = None,
  id: str = None,
  parameter: typing.Union[IResolvable, typing.List[SqlQueryParameter]] = None,
  parent: str = None,
  run_as_role: str = None,
  schedule: SqlQuerySchedule = None,
  tags: typing.List[str] = None,
  updated_at: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.dataSourceId">data_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#data_source_id SqlQuery#data_source_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#name SqlQuery#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#query SqlQuery#query}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.createdAt">created_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#created_at SqlQuery#created_at}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#description SqlQuery#description}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#id SqlQuery#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>]]</code> | parameter block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#parent SqlQuery#parent}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.runAsRole">run_as_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#run_as_role SqlQuery#run_as_role}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#tags SqlQuery#tags}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.updatedAt">updated_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#updated_at SqlQuery#updated_at}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.dataSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#data_source_id SqlQuery#data_source_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#name SqlQuery#name}.

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.query"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#query SqlQuery#query}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.createdAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#created_at SqlQuery#created_at}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#description SqlQuery#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#id SqlQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.parameter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#parameter SqlQuery#parameter}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#parent SqlQuery#parent}.

---

##### `run_as_role`<sup>Optional</sup> <a name="run_as_role" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.runAsRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#run_as_role SqlQuery#run_as_role}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#schedule SqlQuery#schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#tags SqlQuery#tags}.

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.updatedAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#updated_at SqlQuery#updated_at}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.putParameter">put_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetCreatedAt">reset_created_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParameter">reset_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetRunAsRole">reset_run_as_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetUpdatedAt">reset_updated_at</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_parameter` <a name="put_parameter" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putParameter"></a>

```python
def put_parameter(
  value: typing.Union[IResolvable, typing.List[SqlQueryParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>]]

---

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putSchedule"></a>

```python
def put_schedule(
  continuous: SqlQueryScheduleContinuous = None,
  daily: SqlQueryScheduleDaily = None,
  weekly: SqlQueryScheduleWeekly = None
) -> None
```

###### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putSchedule.parameter.continuous"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

continuous block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#continuous SqlQuery#continuous}

---

###### `daily`<sup>Optional</sup> <a name="daily" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putSchedule.parameter.daily"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#daily SqlQuery#daily}

---

###### `weekly`<sup>Optional</sup> <a name="weekly" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putSchedule.parameter.weekly"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#weekly SqlQuery#weekly}

---

##### `reset_created_at` <a name="reset_created_at" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetCreatedAt"></a>

```python
def reset_created_at() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameter` <a name="reset_parameter" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParameter"></a>

```python
def reset_parameter() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_run_as_role` <a name="reset_run_as_role" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetRunAsRole"></a>

```python
def reset_run_as_role() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_updated_at` <a name="reset_updated_at" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetUpdatedAt"></a>

```python
def reset_updated_at() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SqlQuery resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQuery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQuery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQuery.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQuery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SqlQuery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SqlQuery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SqlQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SqlQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList">SqlQueryParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference">SqlQueryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.createdAtInput">created_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceIdInput">data_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameterInput">parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRoleInput">run_as_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.scheduleInput">schedule_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.updatedAtInput">updated_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRole">run_as_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameter"></a>

```python
parameter: SqlQueryParameterList
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList">SqlQueryParameterList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.schedule"></a>

```python
schedule: SqlQueryScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference">SqlQueryScheduleOutputReference</a>

---

##### `created_at_input`<sup>Optional</sup> <a name="created_at_input" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.createdAtInput"></a>

```python
created_at_input: str
```

- *Type:* str

---

##### `data_source_id_input`<sup>Optional</sup> <a name="data_source_id_input" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceIdInput"></a>

```python
data_source_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameterInput"></a>

```python
parameter_input: typing.Union[IResolvable, typing.List[SqlQueryParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>]]

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `run_as_role_input`<sup>Optional</sup> <a name="run_as_role_input" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRoleInput"></a>

```python
run_as_role_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.scheduleInput"></a>

```python
schedule_input: SqlQuerySchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `updated_at_input`<sup>Optional</sup> <a name="updated_at_input" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.updatedAtInput"></a>

```python
updated_at_input: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `run_as_role`<sup>Required</sup> <a name="run_as_role" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRole"></a>

```python
run_as_role: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SqlQueryConfig <a name="SqlQueryConfig" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_source_id: str,
  name: str,
  query: str,
  created_at: str = None,
  description: str = None,
  id: str = None,
  parameter: typing.Union[IResolvable, typing.List[SqlQueryParameter]] = None,
  parent: str = None,
  run_as_role: str = None,
  schedule: SqlQuerySchedule = None,
  tags: typing.List[str] = None,
  updated_at: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dataSourceId">data_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#data_source_id SqlQuery#data_source_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#name SqlQuery#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#query SqlQuery#query}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.createdAt">created_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#created_at SqlQuery#created_at}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#description SqlQuery#description}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#id SqlQuery#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>]]</code> | parameter block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#parent SqlQuery#parent}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.runAsRole">run_as_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#run_as_role SqlQuery#run_as_role}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#tags SqlQuery#tags}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.updatedAt">updated_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#updated_at SqlQuery#updated_at}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#data_source_id SqlQuery#data_source_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#name SqlQuery#name}.

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#query SqlQuery#query}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#created_at SqlQuery#created_at}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#description SqlQuery#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#id SqlQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parameter"></a>

```python
parameter: typing.Union[IResolvable, typing.List[SqlQueryParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#parameter SqlQuery#parameter}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#parent SqlQuery#parent}.

---

##### `run_as_role`<sup>Optional</sup> <a name="run_as_role" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.runAsRole"></a>

```python
run_as_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#run_as_role SqlQuery#run_as_role}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.schedule"></a>

```python
schedule: SqlQuerySchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#schedule SqlQuery#schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#tags SqlQuery#tags}.

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#updated_at SqlQuery#updated_at}.

---

### SqlQueryParameter <a name="SqlQueryParameter" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameter(
  name: str,
  date: SqlQueryParameterDate = None,
  date_range: SqlQueryParameterDateRange = None,
  datetime: SqlQueryParameterDatetime = None,
  datetime_range: SqlQueryParameterDatetimeRange = None,
  datetimesec: SqlQueryParameterDatetimesec = None,
  datetimesec_range: SqlQueryParameterDatetimesecRange = None,
  enum: SqlQueryParameterEnum = None,
  number: SqlQueryParameterNumber = None,
  query: SqlQueryParameterQuery = None,
  text: SqlQueryParameterText = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#name SqlQuery#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.date">date</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a></code> | date block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.dateRange">date_range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a></code> | date_range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetime">datetime</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a></code> | datetime block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimeRange">datetime_range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a></code> | datetime_range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesec">datetimesec</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a></code> | datetimesec block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesecRange">datetimesec_range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a></code> | datetimesec_range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.enum">enum</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a></code> | enum block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.number">number</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a></code> | number block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.query">query</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.text">text</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a></code> | text block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#title SqlQuery#title}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#name SqlQuery#name}.

---

##### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.date"></a>

```python
date: SqlQueryParameterDate
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a>

date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#date SqlQuery#date}

---

##### `date_range`<sup>Optional</sup> <a name="date_range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.dateRange"></a>

```python
date_range: SqlQueryParameterDateRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a>

date_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#date_range SqlQuery#date_range}

---

##### `datetime`<sup>Optional</sup> <a name="datetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetime"></a>

```python
datetime: SqlQueryParameterDatetime
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a>

datetime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#datetime SqlQuery#datetime}

---

##### `datetime_range`<sup>Optional</sup> <a name="datetime_range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimeRange"></a>

```python
datetime_range: SqlQueryParameterDatetimeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a>

datetime_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#datetime_range SqlQuery#datetime_range}

---

##### `datetimesec`<sup>Optional</sup> <a name="datetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesec"></a>

```python
datetimesec: SqlQueryParameterDatetimesec
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a>

datetimesec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#datetimesec SqlQuery#datetimesec}

---

##### `datetimesec_range`<sup>Optional</sup> <a name="datetimesec_range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesecRange"></a>

```python
datetimesec_range: SqlQueryParameterDatetimesecRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a>

datetimesec_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#datetimesec_range SqlQuery#datetimesec_range}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.enum"></a>

```python
enum: SqlQueryParameterEnum
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a>

enum block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#enum SqlQuery#enum}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.number"></a>

```python
number: SqlQueryParameterNumber
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a>

number block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#number SqlQuery#number}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.query"></a>

```python
query: SqlQueryParameterQuery
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#query SqlQuery#query}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.text"></a>

```python
text: SqlQueryParameterText
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#text SqlQuery#text}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#title SqlQuery#title}.

---

### SqlQueryParameterDate <a name="SqlQueryParameterDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterDate(
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDateRange <a name="SqlQueryParameterDateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterDateRange(
  range: SqlQueryParameterDateRangeRange = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.range">range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.range"></a>

```python
range: SqlQueryParameterDateRangeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#range SqlQuery#range}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDateRangeRange <a name="SqlQueryParameterDateRangeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterDateRangeRange(
  end: str,
  start: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.end">end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#end SqlQuery#end}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#start SqlQuery#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.end"></a>

```python
end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#end SqlQuery#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.start"></a>

```python
start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#start SqlQuery#start}.

---

### SqlQueryParameterDatetime <a name="SqlQueryParameterDatetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterDatetime(
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimeRange <a name="SqlQueryParameterDatetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterDatetimeRange(
  range: SqlQueryParameterDatetimeRangeRange = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.range">range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.range"></a>

```python
range: SqlQueryParameterDatetimeRangeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#range SqlQuery#range}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimeRangeRange <a name="SqlQueryParameterDatetimeRangeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterDatetimeRangeRange(
  end: str,
  start: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.end">end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#end SqlQuery#end}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#start SqlQuery#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.end"></a>

```python
end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#end SqlQuery#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.start"></a>

```python
start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#start SqlQuery#start}.

---

### SqlQueryParameterDatetimesec <a name="SqlQueryParameterDatetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterDatetimesec(
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimesecRange <a name="SqlQueryParameterDatetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterDatetimesecRange(
  range: SqlQueryParameterDatetimesecRangeRange = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.range">range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.range"></a>

```python
range: SqlQueryParameterDatetimesecRangeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#range SqlQuery#range}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimesecRangeRange <a name="SqlQueryParameterDatetimesecRangeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterDatetimesecRangeRange(
  end: str,
  start: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.end">end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#end SqlQuery#end}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#start SqlQuery#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.end"></a>

```python
end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#end SqlQuery#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.start"></a>

```python
start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#start SqlQuery#start}.

---

### SqlQueryParameterEnum <a name="SqlQueryParameterEnum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterEnum(
  options: typing.List[str],
  multiple: SqlQueryParameterEnumMultiple = None,
  value: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.options">options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#options SqlQuery#options}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.multiple">multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a></code> | multiple block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#values SqlQuery#values}. |

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#options SqlQuery#options}.

---

##### `multiple`<sup>Optional</sup> <a name="multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.multiple"></a>

```python
multiple: SqlQueryParameterEnumMultiple
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

multiple block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#multiple SqlQuery#multiple}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#values SqlQuery#values}.

---

### SqlQueryParameterEnumMultiple <a name="SqlQueryParameterEnumMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterEnumMultiple(
  separator: str,
  prefix: str = None,
  suffix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.separator">separator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#separator SqlQuery#separator}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#prefix SqlQuery#prefix}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.suffix">suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#suffix SqlQuery#suffix}. |

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.separator"></a>

```python
separator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#separator SqlQuery#separator}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#prefix SqlQuery#prefix}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#suffix SqlQuery#suffix}.

---

### SqlQueryParameterNumber <a name="SqlQueryParameterNumber" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterNumber(
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterQuery <a name="SqlQueryParameterQuery" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterQuery(
  query_id: str,
  multiple: SqlQueryParameterQueryMultiple = None,
  value: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.queryId">query_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#query_id SqlQuery#query_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.multiple">multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a></code> | multiple block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#values SqlQuery#values}. |

---

##### `query_id`<sup>Required</sup> <a name="query_id" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.queryId"></a>

```python
query_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#query_id SqlQuery#query_id}.

---

##### `multiple`<sup>Optional</sup> <a name="multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.multiple"></a>

```python
multiple: SqlQueryParameterQueryMultiple
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

multiple block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#multiple SqlQuery#multiple}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#values SqlQuery#values}.

---

### SqlQueryParameterQueryMultiple <a name="SqlQueryParameterQueryMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterQueryMultiple(
  separator: str,
  prefix: str = None,
  suffix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.separator">separator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#separator SqlQuery#separator}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#prefix SqlQuery#prefix}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.suffix">suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#suffix SqlQuery#suffix}. |

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.separator"></a>

```python
separator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#separator SqlQuery#separator}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#prefix SqlQuery#prefix}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#suffix SqlQuery#suffix}.

---

### SqlQueryParameterText <a name="SqlQueryParameterText" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterText(
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQuerySchedule <a name="SqlQuerySchedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQuerySchedule(
  continuous: SqlQueryScheduleContinuous = None,
  daily: SqlQueryScheduleDaily = None,
  weekly: SqlQueryScheduleWeekly = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.continuous">continuous</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a></code> | continuous block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.daily">daily</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a></code> | daily block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.weekly">weekly</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a></code> | weekly block. |

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.continuous"></a>

```python
continuous: SqlQueryScheduleContinuous
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

continuous block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#continuous SqlQuery#continuous}

---

##### `daily`<sup>Optional</sup> <a name="daily" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.daily"></a>

```python
daily: SqlQueryScheduleDaily
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#daily SqlQuery#daily}

---

##### `weekly`<sup>Optional</sup> <a name="weekly" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.weekly"></a>

```python
weekly: SqlQueryScheduleWeekly
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#weekly SqlQuery#weekly}

---

### SqlQueryScheduleContinuous <a name="SqlQueryScheduleContinuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryScheduleContinuous(
  interval_seconds: typing.Union[int, float],
  until_date: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#interval_seconds SqlQuery#interval_seconds}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.untilDate">until_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#until_date SqlQuery#until_date}. |

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#interval_seconds SqlQuery#interval_seconds}.

---

##### `until_date`<sup>Optional</sup> <a name="until_date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.untilDate"></a>

```python
until_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#until_date SqlQuery#until_date}.

---

### SqlQueryScheduleDaily <a name="SqlQueryScheduleDaily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryScheduleDaily(
  interval_days: typing.Union[int, float],
  time_of_day: str,
  until_date: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.intervalDays">interval_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#interval_days SqlQuery#interval_days}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.timeOfDay">time_of_day</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.untilDate">until_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#until_date SqlQuery#until_date}. |

---

##### `interval_days`<sup>Required</sup> <a name="interval_days" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.intervalDays"></a>

```python
interval_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#interval_days SqlQuery#interval_days}.

---

##### `time_of_day`<sup>Required</sup> <a name="time_of_day" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.timeOfDay"></a>

```python
time_of_day: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}.

---

##### `until_date`<sup>Optional</sup> <a name="until_date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.untilDate"></a>

```python
until_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#until_date SqlQuery#until_date}.

---

### SqlQueryScheduleWeekly <a name="SqlQueryScheduleWeekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryScheduleWeekly(
  day_of_week: str,
  interval_weeks: typing.Union[int, float],
  time_of_day: str,
  until_date: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#day_of_week SqlQuery#day_of_week}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.intervalWeeks">interval_weeks</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#interval_weeks SqlQuery#interval_weeks}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.timeOfDay">time_of_day</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.untilDate">until_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#until_date SqlQuery#until_date}. |

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#day_of_week SqlQuery#day_of_week}.

---

##### `interval_weeks`<sup>Required</sup> <a name="interval_weeks" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.intervalWeeks"></a>

```python
interval_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#interval_weeks SqlQuery#interval_weeks}.

---

##### `time_of_day`<sup>Required</sup> <a name="time_of_day" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.timeOfDay"></a>

```python
time_of_day: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}.

---

##### `until_date`<sup>Optional</sup> <a name="until_date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.untilDate"></a>

```python
until_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#until_date SqlQuery#until_date}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlQueryParameterDateOutputReference <a name="SqlQueryParameterDateOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.internalValue"></a>

```python
internal_value: SqlQueryParameterDate
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a>

---


### SqlQueryParameterDateRangeOutputReference <a name="SqlQueryParameterDateRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterDateRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.putRange">put_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetRange">reset_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.putRange"></a>

```python
def put_range(
  end: str,
  start: str
) -> None
```

###### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.putRange.parameter.end"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#end SqlQuery#end}.

---

###### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.putRange.parameter.start"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#start SqlQuery#start}.

---

##### `reset_range` <a name="reset_range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetRange"></a>

```python
def reset_range() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference">SqlQueryParameterDateRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.rangeInput">range_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.range"></a>

```python
range: SqlQueryParameterDateRangeRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference">SqlQueryParameterDateRangeRangeOutputReference</a>

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.rangeInput"></a>

```python
range_input: SqlQueryParameterDateRangeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.internalValue"></a>

```python
internal_value: SqlQueryParameterDateRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a>

---


### SqlQueryParameterDateRangeRangeOutputReference <a name="SqlQueryParameterDateRangeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterDateRangeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.endInput">end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.endInput"></a>

```python
end_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.internalValue"></a>

```python
internal_value: SqlQueryParameterDateRangeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

---


### SqlQueryParameterDatetimeOutputReference <a name="SqlQueryParameterDatetimeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterDatetimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.internalValue"></a>

```python
internal_value: SqlQueryParameterDatetime
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a>

---


### SqlQueryParameterDatetimeRangeOutputReference <a name="SqlQueryParameterDatetimeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterDatetimeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.putRange">put_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetRange">reset_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.putRange"></a>

```python
def put_range(
  end: str,
  start: str
) -> None
```

###### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.putRange.parameter.end"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#end SqlQuery#end}.

---

###### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.putRange.parameter.start"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#start SqlQuery#start}.

---

##### `reset_range` <a name="reset_range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetRange"></a>

```python
def reset_range() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference">SqlQueryParameterDatetimeRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.rangeInput">range_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.range"></a>

```python
range: SqlQueryParameterDatetimeRangeRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference">SqlQueryParameterDatetimeRangeRangeOutputReference</a>

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.rangeInput"></a>

```python
range_input: SqlQueryParameterDatetimeRangeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.internalValue"></a>

```python
internal_value: SqlQueryParameterDatetimeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a>

---


### SqlQueryParameterDatetimeRangeRangeOutputReference <a name="SqlQueryParameterDatetimeRangeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.endInput">end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.endInput"></a>

```python
end_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.internalValue"></a>

```python
internal_value: SqlQueryParameterDatetimeRangeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

---


### SqlQueryParameterDatetimesecOutputReference <a name="SqlQueryParameterDatetimesecOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterDatetimesecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.internalValue"></a>

```python
internal_value: SqlQueryParameterDatetimesec
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a>

---


### SqlQueryParameterDatetimesecRangeOutputReference <a name="SqlQueryParameterDatetimesecRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.putRange">put_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetRange">reset_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.putRange"></a>

```python
def put_range(
  end: str,
  start: str
) -> None
```

###### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.putRange.parameter.end"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#end SqlQuery#end}.

---

###### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.putRange.parameter.start"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#start SqlQuery#start}.

---

##### `reset_range` <a name="reset_range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetRange"></a>

```python
def reset_range() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference">SqlQueryParameterDatetimesecRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.rangeInput">range_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.range"></a>

```python
range: SqlQueryParameterDatetimesecRangeRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference">SqlQueryParameterDatetimesecRangeRangeOutputReference</a>

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.rangeInput"></a>

```python
range_input: SqlQueryParameterDatetimesecRangeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.internalValue"></a>

```python
internal_value: SqlQueryParameterDatetimesecRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a>

---


### SqlQueryParameterDatetimesecRangeRangeOutputReference <a name="SqlQueryParameterDatetimesecRangeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.endInput">end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.endInput"></a>

```python
end_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.internalValue"></a>

```python
internal_value: SqlQueryParameterDatetimesecRangeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

---


### SqlQueryParameterEnumMultipleOutputReference <a name="SqlQueryParameterEnumMultipleOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterEnumMultipleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resetSuffix">reset_suffix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_suffix` <a name="reset_suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resetSuffix"></a>

```python
def reset_suffix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separatorInput">separator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffixInput">suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separator">separator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `separator_input`<sup>Optional</sup> <a name="separator_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separatorInput"></a>

```python
separator_input: str
```

- *Type:* str

---

##### `suffix_input`<sup>Optional</sup> <a name="suffix_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffixInput"></a>

```python
suffix_input: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separator"></a>

```python
separator: str
```

- *Type:* str

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.internalValue"></a>

```python
internal_value: SqlQueryParameterEnumMultiple
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

---


### SqlQueryParameterEnumOutputReference <a name="SqlQueryParameterEnumOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterEnumOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.putMultiple">put_multiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetMultiple">reset_multiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_multiple` <a name="put_multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.putMultiple"></a>

```python
def put_multiple(
  separator: str,
  prefix: str = None,
  suffix: str = None
) -> None
```

###### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.putMultiple.parameter.separator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#separator SqlQuery#separator}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.putMultiple.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#prefix SqlQuery#prefix}.

---

###### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.putMultiple.parameter.suffix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#suffix SqlQuery#suffix}.

---

##### `reset_multiple` <a name="reset_multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetMultiple"></a>

```python
def reset_multiple() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multiple">multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference">SqlQueryParameterEnumMultipleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multipleInput">multiple_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.optionsInput">options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.options">options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `multiple`<sup>Required</sup> <a name="multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multiple"></a>

```python
multiple: SqlQueryParameterEnumMultipleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference">SqlQueryParameterEnumMultipleOutputReference</a>

---

##### `multiple_input`<sup>Optional</sup> <a name="multiple_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multipleInput"></a>

```python
multiple_input: SqlQueryParameterEnumMultiple
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.optionsInput"></a>

```python
options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.internalValue"></a>

```python
internal_value: SqlQueryParameterEnum
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a>

---


### SqlQueryParameterList <a name="SqlQueryParameterList" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SqlQueryParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SqlQueryParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>]]

---


### SqlQueryParameterNumberOutputReference <a name="SqlQueryParameterNumberOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterNumberOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.internalValue"></a>

```python
internal_value: SqlQueryParameterNumber
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a>

---


### SqlQueryParameterOutputReference <a name="SqlQueryParameterOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDate">put_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDateRange">put_date_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetime">put_datetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimeRange">put_datetime_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesec">put_datetimesec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesecRange">put_datetimesec_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putEnum">put_enum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putNumber">put_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putQuery">put_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putText">put_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDate">reset_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDateRange">reset_date_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetime">reset_datetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimeRange">reset_datetime_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesec">reset_datetimesec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesecRange">reset_datetimesec_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetEnum">reset_enum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetNumber">reset_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetText">reset_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_date` <a name="put_date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDate"></a>

```python
def put_date(
  value: str
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDate.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

##### `put_date_range` <a name="put_date_range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDateRange"></a>

```python
def put_date_range(
  range: SqlQueryParameterDateRangeRange = None,
  value: str = None
) -> None
```

###### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDateRange.parameter.range"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#range SqlQuery#range}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDateRange.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

##### `put_datetime` <a name="put_datetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetime"></a>

```python
def put_datetime(
  value: str
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetime.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

##### `put_datetime_range` <a name="put_datetime_range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimeRange"></a>

```python
def put_datetime_range(
  range: SqlQueryParameterDatetimeRangeRange = None,
  value: str = None
) -> None
```

###### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimeRange.parameter.range"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#range SqlQuery#range}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimeRange.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

##### `put_datetimesec` <a name="put_datetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesec"></a>

```python
def put_datetimesec(
  value: str
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesec.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

##### `put_datetimesec_range` <a name="put_datetimesec_range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesecRange"></a>

```python
def put_datetimesec_range(
  range: SqlQueryParameterDatetimesecRangeRange = None,
  value: str = None
) -> None
```

###### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesecRange.parameter.range"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#range SqlQuery#range}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesecRange.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

##### `put_enum` <a name="put_enum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putEnum"></a>

```python
def put_enum(
  options: typing.List[str],
  multiple: SqlQueryParameterEnumMultiple = None,
  value: str = None,
  values: typing.List[str] = None
) -> None
```

###### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putEnum.parameter.options"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#options SqlQuery#options}.

---

###### `multiple`<sup>Optional</sup> <a name="multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putEnum.parameter.multiple"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

multiple block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#multiple SqlQuery#multiple}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putEnum.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putEnum.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#values SqlQuery#values}.

---

##### `put_number` <a name="put_number" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putNumber"></a>

```python
def put_number(
  value: typing.Union[int, float]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putNumber.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

##### `put_query` <a name="put_query" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putQuery"></a>

```python
def put_query(
  query_id: str,
  multiple: SqlQueryParameterQueryMultiple = None,
  value: str = None,
  values: typing.List[str] = None
) -> None
```

###### `query_id`<sup>Required</sup> <a name="query_id" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putQuery.parameter.queryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#query_id SqlQuery#query_id}.

---

###### `multiple`<sup>Optional</sup> <a name="multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putQuery.parameter.multiple"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

multiple block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#multiple SqlQuery#multiple}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putQuery.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putQuery.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#values SqlQuery#values}.

---

##### `put_text` <a name="put_text" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putText"></a>

```python
def put_text(
  value: str
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putText.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#value SqlQuery#value}.

---

##### `reset_date` <a name="reset_date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDate"></a>

```python
def reset_date() -> None
```

##### `reset_date_range` <a name="reset_date_range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDateRange"></a>

```python
def reset_date_range() -> None
```

##### `reset_datetime` <a name="reset_datetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetime"></a>

```python
def reset_datetime() -> None
```

##### `reset_datetime_range` <a name="reset_datetime_range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimeRange"></a>

```python
def reset_datetime_range() -> None
```

##### `reset_datetimesec` <a name="reset_datetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesec"></a>

```python
def reset_datetimesec() -> None
```

##### `reset_datetimesec_range` <a name="reset_datetimesec_range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesecRange"></a>

```python
def reset_datetimesec_range() -> None
```

##### `reset_enum` <a name="reset_enum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetEnum"></a>

```python
def reset_enum() -> None
```

##### `reset_number` <a name="reset_number" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetNumber"></a>

```python
def reset_number() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetText"></a>

```python
def reset_text() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.date">date</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference">SqlQueryParameterDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRange">date_range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference">SqlQueryParameterDateRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetime">datetime</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference">SqlQueryParameterDatetimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRange">datetime_range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference">SqlQueryParameterDatetimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesec">datetimesec</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference">SqlQueryParameterDatetimesecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRange">datetimesec_range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference">SqlQueryParameterDatetimesecRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enum">enum</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference">SqlQueryParameterEnumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.number">number</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference">SqlQueryParameterNumberOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.query">query</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference">SqlQueryParameterQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference">SqlQueryParameterTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateInput">date_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRangeInput">date_range_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeInput">datetime_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRangeInput">datetime_range_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecInput">datetimesec_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRangeInput">datetimesec_range_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enumInput">enum_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.numberInput">number_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.queryInput">query_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.textInput">text_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.date"></a>

```python
date: SqlQueryParameterDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference">SqlQueryParameterDateOutputReference</a>

---

##### `date_range`<sup>Required</sup> <a name="date_range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRange"></a>

```python
date_range: SqlQueryParameterDateRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference">SqlQueryParameterDateRangeOutputReference</a>

---

##### `datetime`<sup>Required</sup> <a name="datetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetime"></a>

```python
datetime: SqlQueryParameterDatetimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference">SqlQueryParameterDatetimeOutputReference</a>

---

##### `datetime_range`<sup>Required</sup> <a name="datetime_range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRange"></a>

```python
datetime_range: SqlQueryParameterDatetimeRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference">SqlQueryParameterDatetimeRangeOutputReference</a>

---

##### `datetimesec`<sup>Required</sup> <a name="datetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesec"></a>

```python
datetimesec: SqlQueryParameterDatetimesecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference">SqlQueryParameterDatetimesecOutputReference</a>

---

##### `datetimesec_range`<sup>Required</sup> <a name="datetimesec_range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRange"></a>

```python
datetimesec_range: SqlQueryParameterDatetimesecRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference">SqlQueryParameterDatetimesecRangeOutputReference</a>

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enum"></a>

```python
enum: SqlQueryParameterEnumOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference">SqlQueryParameterEnumOutputReference</a>

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.number"></a>

```python
number: SqlQueryParameterNumberOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference">SqlQueryParameterNumberOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.query"></a>

```python
query: SqlQueryParameterQueryOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference">SqlQueryParameterQueryOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.text"></a>

```python
text: SqlQueryParameterTextOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference">SqlQueryParameterTextOutputReference</a>

---

##### `date_input`<sup>Optional</sup> <a name="date_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateInput"></a>

```python
date_input: SqlQueryParameterDate
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a>

---

##### `date_range_input`<sup>Optional</sup> <a name="date_range_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRangeInput"></a>

```python
date_range_input: SqlQueryParameterDateRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a>

---

##### `datetime_input`<sup>Optional</sup> <a name="datetime_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeInput"></a>

```python
datetime_input: SqlQueryParameterDatetime
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a>

---

##### `datetime_range_input`<sup>Optional</sup> <a name="datetime_range_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRangeInput"></a>

```python
datetime_range_input: SqlQueryParameterDatetimeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a>

---

##### `datetimesec_input`<sup>Optional</sup> <a name="datetimesec_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecInput"></a>

```python
datetimesec_input: SqlQueryParameterDatetimesec
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a>

---

##### `datetimesec_range_input`<sup>Optional</sup> <a name="datetimesec_range_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRangeInput"></a>

```python
datetimesec_range_input: SqlQueryParameterDatetimesecRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a>

---

##### `enum_input`<sup>Optional</sup> <a name="enum_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enumInput"></a>

```python
enum_input: SqlQueryParameterEnum
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `number_input`<sup>Optional</sup> <a name="number_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.numberInput"></a>

```python
number_input: SqlQueryParameterNumber
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a>

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.queryInput"></a>

```python
query_input: SqlQueryParameterQuery
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a>

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.textInput"></a>

```python
text_input: SqlQueryParameterText
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a>

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SqlQueryParameter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>]

---


### SqlQueryParameterQueryMultipleOutputReference <a name="SqlQueryParameterQueryMultipleOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterQueryMultipleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resetSuffix">reset_suffix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_suffix` <a name="reset_suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resetSuffix"></a>

```python
def reset_suffix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separatorInput">separator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffixInput">suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separator">separator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `separator_input`<sup>Optional</sup> <a name="separator_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separatorInput"></a>

```python
separator_input: str
```

- *Type:* str

---

##### `suffix_input`<sup>Optional</sup> <a name="suffix_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffixInput"></a>

```python
suffix_input: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separator"></a>

```python
separator: str
```

- *Type:* str

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.internalValue"></a>

```python
internal_value: SqlQueryParameterQueryMultiple
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

---


### SqlQueryParameterQueryOutputReference <a name="SqlQueryParameterQueryOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.putMultiple">put_multiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetMultiple">reset_multiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_multiple` <a name="put_multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.putMultiple"></a>

```python
def put_multiple(
  separator: str,
  prefix: str = None,
  suffix: str = None
) -> None
```

###### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.putMultiple.parameter.separator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#separator SqlQuery#separator}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.putMultiple.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#prefix SqlQuery#prefix}.

---

###### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.putMultiple.parameter.suffix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#suffix SqlQuery#suffix}.

---

##### `reset_multiple` <a name="reset_multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetMultiple"></a>

```python
def reset_multiple() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multiple">multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference">SqlQueryParameterQueryMultipleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multipleInput">multiple_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryIdInput">query_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryId">query_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `multiple`<sup>Required</sup> <a name="multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multiple"></a>

```python
multiple: SqlQueryParameterQueryMultipleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference">SqlQueryParameterQueryMultipleOutputReference</a>

---

##### `multiple_input`<sup>Optional</sup> <a name="multiple_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multipleInput"></a>

```python
multiple_input: SqlQueryParameterQueryMultiple
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

---

##### `query_id_input`<sup>Optional</sup> <a name="query_id_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryIdInput"></a>

```python
query_id_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_id`<sup>Required</sup> <a name="query_id" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryId"></a>

```python
query_id: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.internalValue"></a>

```python
internal_value: SqlQueryParameterQuery
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a>

---


### SqlQueryParameterTextOutputReference <a name="SqlQueryParameterTextOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryParameterTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.internalValue"></a>

```python
internal_value: SqlQueryParameterText
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a>

---


### SqlQueryScheduleContinuousOutputReference <a name="SqlQueryScheduleContinuousOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryScheduleContinuousOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resetUntilDate">reset_until_date</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_until_date` <a name="reset_until_date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resetUntilDate"></a>

```python
def reset_until_date() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDateInput">until_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDate">until_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `until_date_input`<sup>Optional</sup> <a name="until_date_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDateInput"></a>

```python
until_date_input: str
```

- *Type:* str

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `until_date`<sup>Required</sup> <a name="until_date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDate"></a>

```python
until_date: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.internalValue"></a>

```python
internal_value: SqlQueryScheduleContinuous
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

---


### SqlQueryScheduleDailyOutputReference <a name="SqlQueryScheduleDailyOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryScheduleDailyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resetUntilDate">reset_until_date</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_until_date` <a name="reset_until_date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resetUntilDate"></a>

```python
def reset_until_date() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDaysInput">interval_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDayInput">time_of_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDateInput">until_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDays">interval_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDay">time_of_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDate">until_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_days_input`<sup>Optional</sup> <a name="interval_days_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDaysInput"></a>

```python
interval_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_of_day_input`<sup>Optional</sup> <a name="time_of_day_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDayInput"></a>

```python
time_of_day_input: str
```

- *Type:* str

---

##### `until_date_input`<sup>Optional</sup> <a name="until_date_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDateInput"></a>

```python
until_date_input: str
```

- *Type:* str

---

##### `interval_days`<sup>Required</sup> <a name="interval_days" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDays"></a>

```python
interval_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_of_day`<sup>Required</sup> <a name="time_of_day" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDay"></a>

```python
time_of_day: str
```

- *Type:* str

---

##### `until_date`<sup>Required</sup> <a name="until_date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDate"></a>

```python
until_date: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.internalValue"></a>

```python
internal_value: SqlQueryScheduleDaily
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

---


### SqlQueryScheduleOutputReference <a name="SqlQueryScheduleOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putContinuous">put_continuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putDaily">put_daily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putWeekly">put_weekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetContinuous">reset_continuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetDaily">reset_daily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetWeekly">reset_weekly</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_continuous` <a name="put_continuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putContinuous"></a>

```python
def put_continuous(
  interval_seconds: typing.Union[int, float],
  until_date: str = None
) -> None
```

###### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putContinuous.parameter.intervalSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#interval_seconds SqlQuery#interval_seconds}.

---

###### `until_date`<sup>Optional</sup> <a name="until_date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putContinuous.parameter.untilDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#until_date SqlQuery#until_date}.

---

##### `put_daily` <a name="put_daily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putDaily"></a>

```python
def put_daily(
  interval_days: typing.Union[int, float],
  time_of_day: str,
  until_date: str = None
) -> None
```

###### `interval_days`<sup>Required</sup> <a name="interval_days" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putDaily.parameter.intervalDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#interval_days SqlQuery#interval_days}.

---

###### `time_of_day`<sup>Required</sup> <a name="time_of_day" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putDaily.parameter.timeOfDay"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}.

---

###### `until_date`<sup>Optional</sup> <a name="until_date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putDaily.parameter.untilDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#until_date SqlQuery#until_date}.

---

##### `put_weekly` <a name="put_weekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putWeekly"></a>

```python
def put_weekly(
  day_of_week: str,
  interval_weeks: typing.Union[int, float],
  time_of_day: str,
  until_date: str = None
) -> None
```

###### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putWeekly.parameter.dayOfWeek"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#day_of_week SqlQuery#day_of_week}.

---

###### `interval_weeks`<sup>Required</sup> <a name="interval_weeks" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putWeekly.parameter.intervalWeeks"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#interval_weeks SqlQuery#interval_weeks}.

---

###### `time_of_day`<sup>Required</sup> <a name="time_of_day" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putWeekly.parameter.timeOfDay"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}.

---

###### `until_date`<sup>Optional</sup> <a name="until_date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putWeekly.parameter.untilDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.31.0/docs/resources/sql_query#until_date SqlQuery#until_date}.

---

##### `reset_continuous` <a name="reset_continuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetContinuous"></a>

```python
def reset_continuous() -> None
```

##### `reset_daily` <a name="reset_daily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetDaily"></a>

```python
def reset_daily() -> None
```

##### `reset_weekly` <a name="reset_weekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetWeekly"></a>

```python
def reset_weekly() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuous">continuous</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference">SqlQueryScheduleContinuousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.daily">daily</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference">SqlQueryScheduleDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weekly">weekly</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference">SqlQueryScheduleWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuousInput">continuous_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.dailyInput">daily_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weeklyInput">weekly_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuous"></a>

```python
continuous: SqlQueryScheduleContinuousOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference">SqlQueryScheduleContinuousOutputReference</a>

---

##### `daily`<sup>Required</sup> <a name="daily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.daily"></a>

```python
daily: SqlQueryScheduleDailyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference">SqlQueryScheduleDailyOutputReference</a>

---

##### `weekly`<sup>Required</sup> <a name="weekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weekly"></a>

```python
weekly: SqlQueryScheduleWeeklyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference">SqlQueryScheduleWeeklyOutputReference</a>

---

##### `continuous_input`<sup>Optional</sup> <a name="continuous_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuousInput"></a>

```python
continuous_input: SqlQueryScheduleContinuous
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

---

##### `daily_input`<sup>Optional</sup> <a name="daily_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.dailyInput"></a>

```python
daily_input: SqlQueryScheduleDaily
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

---

##### `weekly_input`<sup>Optional</sup> <a name="weekly_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weeklyInput"></a>

```python
weekly_input: SqlQueryScheduleWeekly
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.internalValue"></a>

```python
internal_value: SqlQuerySchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

---


### SqlQueryScheduleWeeklyOutputReference <a name="SqlQueryScheduleWeeklyOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_query

sqlQuery.SqlQueryScheduleWeeklyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resetUntilDate">reset_until_date</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_until_date` <a name="reset_until_date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resetUntilDate"></a>

```python
def reset_until_date() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeksInput">interval_weeks_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDayInput">time_of_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDateInput">until_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeks">interval_weeks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDay">time_of_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDate">until_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `interval_weeks_input`<sup>Optional</sup> <a name="interval_weeks_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeksInput"></a>

```python
interval_weeks_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_of_day_input`<sup>Optional</sup> <a name="time_of_day_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDayInput"></a>

```python
time_of_day_input: str
```

- *Type:* str

---

##### `until_date_input`<sup>Optional</sup> <a name="until_date_input" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDateInput"></a>

```python
until_date_input: str
```

- *Type:* str

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `interval_weeks`<sup>Required</sup> <a name="interval_weeks" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeks"></a>

```python
interval_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_of_day`<sup>Required</sup> <a name="time_of_day" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDay"></a>

```python
time_of_day: str
```

- *Type:* str

---

##### `until_date`<sup>Required</sup> <a name="until_date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDate"></a>

```python
until_date: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.internalValue"></a>

```python
internal_value: SqlQueryScheduleWeekly
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

---



