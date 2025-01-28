# `connection` Submodule <a name="`connection` Submodule" id="@cdktf/provider-databricks.connection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Connection <a name="Connection" id="@cdktf/provider-databricks.connection.Connection"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection databricks_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.connection.Connection.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import connection

connection.Connection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_type: str,
  name: str,
  options: typing.Mapping[str],
  comment: str = None,
  id: str = None,
  metastore_id: str = None,
  owner: str = None,
  properties: typing.Mapping[str] = None,
  read_only: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.Initializer.parameter.connectionType">connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#connection_type Connection#connection_type}. |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#name Connection#name}. |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.Initializer.parameter.options">options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#options Connection#options}. |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#comment Connection#comment}. |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#id Connection#id}. |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.Initializer.parameter.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#metastore_id Connection#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#owner Connection#owner}. |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.Initializer.parameter.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#properties Connection#properties}. |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.Initializer.parameter.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#read_only Connection#read_only}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.connection.Connection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.connection.Connection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.connection.Connection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.connection.Connection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.connection.Connection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.connection.Connection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.connection.Connection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.connection.Connection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.connection.Connection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktf/provider-databricks.connection.Connection.Initializer.parameter.connectionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#connection_type Connection#connection_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.connection.Connection.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#name Connection#name}.

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.connection.Connection.Initializer.parameter.options"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#options Connection#options}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.connection.Connection.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#comment Connection#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.connection.Connection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#id Connection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.connection.Connection.Initializer.parameter.metastoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#metastore_id Connection#metastore_id}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.connection.Connection.Initializer.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#owner Connection#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-databricks.connection.Connection.Initializer.parameter.properties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#properties Connection#properties}.

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-databricks.connection.Connection.Initializer.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#read_only Connection#read_only}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.resetMetastoreId">reset_metastore_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.resetReadOnly">reset_read_only</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.connection.Connection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.connection.Connection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.connection.Connection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.connection.Connection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.connection.Connection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.connection.Connection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.connection.Connection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.connection.Connection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.connection.Connection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.connection.Connection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.connection.Connection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.connection.Connection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.connection.Connection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.connection.Connection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.connection.Connection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.connection.Connection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.connection.Connection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.connection.Connection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.connection.Connection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.connection.Connection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.connection.Connection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.connection.Connection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.connection.Connection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.connection.Connection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.connection.Connection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.connection.Connection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.connection.Connection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.connection.Connection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.connection.Connection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.connection.Connection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.connection.Connection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.connection.Connection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.connection.Connection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.connection.Connection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.connection.Connection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.connection.Connection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.connection.Connection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.connection.Connection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.connection.Connection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.connection.Connection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.connection.Connection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.connection.Connection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.connection.Connection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.connection.Connection.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.connection.Connection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metastore_id` <a name="reset_metastore_id" id="@cdktf/provider-databricks.connection.Connection.resetMetastoreId"></a>

```python
def reset_metastore_id() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-databricks.connection.Connection.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-databricks.connection.Connection.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-databricks.connection.Connection.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Connection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.connection.Connection.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import connection

connection.Connection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.connection.Connection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.connection.Connection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import connection

connection.Connection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.connection.Connection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.connection.Connection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import connection

connection.Connection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.connection.Connection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.connection.Connection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import connection

connection.Connection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Connection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.connection.Connection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.connection.Connection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Connection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.connection.Connection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Connection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.connection.Connection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Connection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.connectionTypeInput">connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.connection.Connection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.connection.Connection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.connection.Connection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.connection.Connection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.connection.Connection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.connection.Connection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.connection.Connection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.connection.Connection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.connection.Connection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.connection.Connection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.connection.Connection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.connection.Connection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.connection.Connection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.connection.Connection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.connection.Connection.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `connection_type_input`<sup>Optional</sup> <a name="connection_type_input" id="@cdktf/provider-databricks.connection.Connection.property.connectionTypeInput"></a>

```python
connection_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.connection.Connection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="@cdktf/provider-databricks.connection.Connection.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.connection.Connection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-databricks.connection.Connection.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-databricks.connection.Connection.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-databricks.connection.Connection.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-databricks.connection.Connection.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.connection.Connection.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktf/provider-databricks.connection.Connection.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.connection.Connection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktf/provider-databricks.connection.Connection.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.connection.Connection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.connection.Connection.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.connection.Connection.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-databricks.connection.Connection.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-databricks.connection.Connection.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.connection.Connection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.connection.Connection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectionConfig <a name="ConnectionConfig" id="@cdktf/provider-databricks.connection.ConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.connection.ConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import connection

connection.ConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_type: str,
  name: str,
  options: typing.Mapping[str],
  comment: str = None,
  id: str = None,
  metastore_id: str = None,
  owner: str = None,
  properties: typing.Mapping[str] = None,
  read_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.connection.ConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.ConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.ConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.ConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.ConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.ConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.ConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.connection.ConnectionConfig.property.connectionType">connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#connection_type Connection#connection_type}. |
| <code><a href="#@cdktf/provider-databricks.connection.ConnectionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#name Connection#name}. |
| <code><a href="#@cdktf/provider-databricks.connection.ConnectionConfig.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#options Connection#options}. |
| <code><a href="#@cdktf/provider-databricks.connection.ConnectionConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#comment Connection#comment}. |
| <code><a href="#@cdktf/provider-databricks.connection.ConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#id Connection#id}. |
| <code><a href="#@cdktf/provider-databricks.connection.ConnectionConfig.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#metastore_id Connection#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.connection.ConnectionConfig.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#owner Connection#owner}. |
| <code><a href="#@cdktf/provider-databricks.connection.ConnectionConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#properties Connection#properties}. |
| <code><a href="#@cdktf/provider-databricks.connection.ConnectionConfig.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#read_only Connection#read_only}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.connection.ConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.connection.ConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.connection.ConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.connection.ConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.connection.ConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.connection.ConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.connection.ConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktf/provider-databricks.connection.ConnectionConfig.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#connection_type Connection#connection_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.connection.ConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#name Connection#name}.

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.connection.ConnectionConfig.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#options Connection#options}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.connection.ConnectionConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#comment Connection#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.connection.ConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#id Connection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.connection.ConnectionConfig.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#metastore_id Connection#metastore_id}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.connection.ConnectionConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#owner Connection#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-databricks.connection.ConnectionConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#properties Connection#properties}.

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-databricks.connection.ConnectionConfig.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/connection#read_only Connection#read_only}.

---



