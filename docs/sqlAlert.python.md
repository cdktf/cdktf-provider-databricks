# `sqlAlert` Submodule <a name="`sqlAlert` Submodule" id="@cdktf/provider-databricks.sqlAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlAlert <a name="SqlAlert" id="@cdktf/provider-databricks.sqlAlert.SqlAlert"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert databricks_sql_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_alert

sqlAlert.SqlAlert(
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
  options: SqlAlertOptions,
  query_id: str,
  created_at: str = None,
  id: str = None,
  parent: str = None,
  rearm: typing.Union[int, float] = None,
  updated_at: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#name SqlAlert#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.queryId">query_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#query_id SqlAlert#query_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.createdAt">created_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#created_at SqlAlert#created_at}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#id SqlAlert#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#parent SqlAlert#parent}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.rearm">rearm</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#rearm SqlAlert#rearm}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.updatedAt">updated_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#updated_at SqlAlert#updated_at}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#name SqlAlert#name}.

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#options SqlAlert#options}

---

##### `query_id`<sup>Required</sup> <a name="query_id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.queryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#query_id SqlAlert#query_id}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.createdAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#created_at SqlAlert#created_at}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#id SqlAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#parent SqlAlert#parent}.

---

##### `rearm`<sup>Optional</sup> <a name="rearm" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.rearm"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#rearm SqlAlert#rearm}.

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.updatedAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#updated_at SqlAlert#updated_at}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.resetCreatedAt">reset_created_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.resetRearm">reset_rearm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.resetUpdatedAt">reset_updated_at</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_options` <a name="put_options" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.putOptions"></a>

```python
def put_options(
  column: str,
  op: str,
  value: str,
  custom_body: str = None,
  custom_subject: str = None,
  empty_result_state: str = None,
  muted: typing.Union[bool, IResolvable] = None
) -> None
```

###### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.putOptions.parameter.column"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#column SqlAlert#column}.

---

###### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.putOptions.parameter.op"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#op SqlAlert#op}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.putOptions.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#value SqlAlert#value}.

---

###### `custom_body`<sup>Optional</sup> <a name="custom_body" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.putOptions.parameter.customBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#custom_body SqlAlert#custom_body}.

---

###### `custom_subject`<sup>Optional</sup> <a name="custom_subject" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.putOptions.parameter.customSubject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#custom_subject SqlAlert#custom_subject}.

---

###### `empty_result_state`<sup>Optional</sup> <a name="empty_result_state" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.putOptions.parameter.emptyResultState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#empty_result_state SqlAlert#empty_result_state}.

---

###### `muted`<sup>Optional</sup> <a name="muted" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.putOptions.parameter.muted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#muted SqlAlert#muted}.

---

##### `reset_created_at` <a name="reset_created_at" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.resetCreatedAt"></a>

```python
def reset_created_at() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_rearm` <a name="reset_rearm" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.resetRearm"></a>

```python
def reset_rearm() -> None
```

##### `reset_updated_at` <a name="reset_updated_at" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.resetUpdatedAt"></a>

```python
def reset_updated_at() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SqlAlert resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import sql_alert

sqlAlert.SqlAlert.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import sql_alert

sqlAlert.SqlAlert.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import sql_alert

sqlAlert.SqlAlert.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import sql_alert

sqlAlert.SqlAlert.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SqlAlert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SqlAlert to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SqlAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SqlAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.options">options</a></code> | <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference">SqlAlertOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.createdAtInput">created_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.optionsInput">options_input</a></code> | <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.queryIdInput">query_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.rearmInput">rearm_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.updatedAtInput">updated_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.queryId">query_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.rearm">rearm</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.options"></a>

```python
options: SqlAlertOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference">SqlAlertOptionsOutputReference</a>

---

##### `created_at_input`<sup>Optional</sup> <a name="created_at_input" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.createdAtInput"></a>

```python
created_at_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.optionsInput"></a>

```python
options_input: SqlAlertOptions
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a>

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `query_id_input`<sup>Optional</sup> <a name="query_id_input" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.queryIdInput"></a>

```python
query_id_input: str
```

- *Type:* str

---

##### `rearm_input`<sup>Optional</sup> <a name="rearm_input" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.rearmInput"></a>

```python
rearm_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_at_input`<sup>Optional</sup> <a name="updated_at_input" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.updatedAtInput"></a>

```python
updated_at_input: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `query_id`<sup>Required</sup> <a name="query_id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.queryId"></a>

```python
query_id: str
```

- *Type:* str

---

##### `rearm`<sup>Required</sup> <a name="rearm" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.rearm"></a>

```python
rearm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SqlAlertConfig <a name="SqlAlertConfig" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_alert

sqlAlert.SqlAlertConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  options: SqlAlertOptions,
  query_id: str,
  created_at: str = None,
  id: str = None,
  parent: str = None,
  rearm: typing.Union[int, float] = None,
  updated_at: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#name SqlAlert#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.options">options</a></code> | <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.queryId">query_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#query_id SqlAlert#query_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.createdAt">created_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#created_at SqlAlert#created_at}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#id SqlAlert#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#parent SqlAlert#parent}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.rearm">rearm</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#rearm SqlAlert#rearm}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.updatedAt">updated_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#updated_at SqlAlert#updated_at}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#name SqlAlert#name}.

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.options"></a>

```python
options: SqlAlertOptions
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#options SqlAlert#options}

---

##### `query_id`<sup>Required</sup> <a name="query_id" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.queryId"></a>

```python
query_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#query_id SqlAlert#query_id}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#created_at SqlAlert#created_at}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#id SqlAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#parent SqlAlert#parent}.

---

##### `rearm`<sup>Optional</sup> <a name="rearm" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.rearm"></a>

```python
rearm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#rearm SqlAlert#rearm}.

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#updated_at SqlAlert#updated_at}.

---

### SqlAlertOptions <a name="SqlAlertOptions" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_alert

sqlAlert.SqlAlertOptions(
  column: str,
  op: str,
  value: str,
  custom_body: str = None,
  custom_subject: str = None,
  empty_result_state: str = None,
  muted: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.column">column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#column SqlAlert#column}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.op">op</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#op SqlAlert#op}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#value SqlAlert#value}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.customBody">custom_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#custom_body SqlAlert#custom_body}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.customSubject">custom_subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#custom_subject SqlAlert#custom_subject}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.emptyResultState">empty_result_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#empty_result_state SqlAlert#empty_result_state}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.muted">muted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#muted SqlAlert#muted}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.column"></a>

```python
column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#column SqlAlert#column}.

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.op"></a>

```python
op: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#op SqlAlert#op}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#value SqlAlert#value}.

---

##### `custom_body`<sup>Optional</sup> <a name="custom_body" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.customBody"></a>

```python
custom_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#custom_body SqlAlert#custom_body}.

---

##### `custom_subject`<sup>Optional</sup> <a name="custom_subject" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.customSubject"></a>

```python
custom_subject: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#custom_subject SqlAlert#custom_subject}.

---

##### `empty_result_state`<sup>Optional</sup> <a name="empty_result_state" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.emptyResultState"></a>

```python
empty_result_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#empty_result_state SqlAlert#empty_result_state}.

---

##### `muted`<sup>Optional</sup> <a name="muted" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.muted"></a>

```python
muted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_alert#muted SqlAlert#muted}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlAlertOptionsOutputReference <a name="SqlAlertOptionsOutputReference" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import sql_alert

sqlAlert.SqlAlertOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetCustomBody">reset_custom_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetCustomSubject">reset_custom_subject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetEmptyResultState">reset_empty_result_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetMuted">reset_muted</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_body` <a name="reset_custom_body" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetCustomBody"></a>

```python
def reset_custom_body() -> None
```

##### `reset_custom_subject` <a name="reset_custom_subject" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetCustomSubject"></a>

```python
def reset_custom_subject() -> None
```

##### `reset_empty_result_state` <a name="reset_empty_result_state" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetEmptyResultState"></a>

```python
def reset_empty_result_state() -> None
```

##### `reset_muted` <a name="reset_muted" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetMuted"></a>

```python
def reset_muted() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.columnInput">column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customBodyInput">custom_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customSubjectInput">custom_subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.emptyResultStateInput">empty_result_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.mutedInput">muted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.opInput">op_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.column">column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customBody">custom_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customSubject">custom_subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.emptyResultState">empty_result_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.muted">muted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.op">op</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.columnInput"></a>

```python
column_input: str
```

- *Type:* str

---

##### `custom_body_input`<sup>Optional</sup> <a name="custom_body_input" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customBodyInput"></a>

```python
custom_body_input: str
```

- *Type:* str

---

##### `custom_subject_input`<sup>Optional</sup> <a name="custom_subject_input" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customSubjectInput"></a>

```python
custom_subject_input: str
```

- *Type:* str

---

##### `empty_result_state_input`<sup>Optional</sup> <a name="empty_result_state_input" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.emptyResultStateInput"></a>

```python
empty_result_state_input: str
```

- *Type:* str

---

##### `muted_input`<sup>Optional</sup> <a name="muted_input" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.mutedInput"></a>

```python
muted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `op_input`<sup>Optional</sup> <a name="op_input" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.opInput"></a>

```python
op_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.column"></a>

```python
column: str
```

- *Type:* str

---

##### `custom_body`<sup>Required</sup> <a name="custom_body" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customBody"></a>

```python
custom_body: str
```

- *Type:* str

---

##### `custom_subject`<sup>Required</sup> <a name="custom_subject" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customSubject"></a>

```python
custom_subject: str
```

- *Type:* str

---

##### `empty_result_state`<sup>Required</sup> <a name="empty_result_state" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.emptyResultState"></a>

```python
empty_result_state: str
```

- *Type:* str

---

##### `muted`<sup>Required</sup> <a name="muted" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.muted"></a>

```python
muted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.op"></a>

```python
op: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.internalValue"></a>

```python
internal_value: SqlAlertOptions
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a>

---



