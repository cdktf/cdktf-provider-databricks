# `onlineTable` Submodule <a name="`onlineTable` Submodule" id="@cdktf/provider-databricks.onlineTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnlineTable <a name="OnlineTable" id="@cdktf/provider-databricks.onlineTable.OnlineTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table databricks_online_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTable(
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
  id: str = None,
  spec: OnlineTableSpec = None,
  timeouts: OnlineTableTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#name OnlineTable#name}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#id OnlineTable#id}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#name OnlineTable#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#id OnlineTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#spec OnlineTable#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#timeouts OnlineTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.resetSpec">reset_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.onlineTable.OnlineTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.onlineTable.OnlineTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.onlineTable.OnlineTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.onlineTable.OnlineTable.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.onlineTable.OnlineTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.onlineTable.OnlineTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putSpec"></a>

```python
def put_spec(
  perform_full_copy: typing.Union[bool, IResolvable] = None,
  primary_key_columns: typing.List[str] = None,
  run_continuously: OnlineTableSpecRunContinuously = None,
  run_triggered: OnlineTableSpecRunTriggered = None,
  source_table_full_name: str = None,
  timeseries_key: str = None
) -> None
```

###### `perform_full_copy`<sup>Optional</sup> <a name="perform_full_copy" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putSpec.parameter.performFullCopy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#perform_full_copy OnlineTable#perform_full_copy}.

---

###### `primary_key_columns`<sup>Optional</sup> <a name="primary_key_columns" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putSpec.parameter.primaryKeyColumns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#primary_key_columns OnlineTable#primary_key_columns}.

---

###### `run_continuously`<sup>Optional</sup> <a name="run_continuously" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putSpec.parameter.runContinuously"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a>

run_continuously block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#run_continuously OnlineTable#run_continuously}

---

###### `run_triggered`<sup>Optional</sup> <a name="run_triggered" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putSpec.parameter.runTriggered"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a>

run_triggered block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#run_triggered OnlineTable#run_triggered}

---

###### `source_table_full_name`<sup>Optional</sup> <a name="source_table_full_name" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putSpec.parameter.sourceTableFullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#source_table_full_name OnlineTable#source_table_full_name}.

---

###### `timeseries_key`<sup>Optional</sup> <a name="timeseries_key" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putSpec.parameter.timeseriesKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#timeseries_key OnlineTable#timeseries_key}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#create OnlineTable#create}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktf/provider-databricks.onlineTable.OnlineTable.resetSpec"></a>

```python
def reset_spec() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OnlineTable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OnlineTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OnlineTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OnlineTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OnlineTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference">OnlineTableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.status">status</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList">OnlineTableStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.tableServingUrl">table_serving_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference">OnlineTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.unityCatalogProvisioningState">unity_catalog_provisioning_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.spec"></a>

```python
spec: OnlineTableSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference">OnlineTableSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.status"></a>

```python
status: OnlineTableStatusList
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList">OnlineTableStatusList</a>

---

##### `table_serving_url`<sup>Required</sup> <a name="table_serving_url" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.tableServingUrl"></a>

```python
table_serving_url: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.timeouts"></a>

```python
timeouts: OnlineTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference">OnlineTableTimeoutsOutputReference</a>

---

##### `unity_catalog_provisioning_state`<sup>Required</sup> <a name="unity_catalog_provisioning_state" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.unityCatalogProvisioningState"></a>

```python
unity_catalog_provisioning_state: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.specInput"></a>

```python
spec_input: OnlineTableSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OnlineTableTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OnlineTableConfig <a name="OnlineTableConfig" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  spec: OnlineTableSpec = None,
  timeouts: OnlineTableTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#name OnlineTable#name}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#id OnlineTable#id}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#name OnlineTable#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#id OnlineTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.spec"></a>

```python
spec: OnlineTableSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#spec OnlineTable#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.timeouts"></a>

```python
timeouts: OnlineTableTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#timeouts OnlineTable#timeouts}

---

### OnlineTableSpec <a name="OnlineTableSpec" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableSpec(
  perform_full_copy: typing.Union[bool, IResolvable] = None,
  primary_key_columns: typing.List[str] = None,
  run_continuously: OnlineTableSpecRunContinuously = None,
  run_triggered: OnlineTableSpecRunTriggered = None,
  source_table_full_name: str = None,
  timeseries_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.performFullCopy">perform_full_copy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#perform_full_copy OnlineTable#perform_full_copy}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.primaryKeyColumns">primary_key_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#primary_key_columns OnlineTable#primary_key_columns}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.runContinuously">run_continuously</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a></code> | run_continuously block. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.runTriggered">run_triggered</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a></code> | run_triggered block. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.sourceTableFullName">source_table_full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#source_table_full_name OnlineTable#source_table_full_name}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.timeseriesKey">timeseries_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#timeseries_key OnlineTable#timeseries_key}. |

---

##### `perform_full_copy`<sup>Optional</sup> <a name="perform_full_copy" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.performFullCopy"></a>

```python
perform_full_copy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#perform_full_copy OnlineTable#perform_full_copy}.

---

##### `primary_key_columns`<sup>Optional</sup> <a name="primary_key_columns" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.primaryKeyColumns"></a>

```python
primary_key_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#primary_key_columns OnlineTable#primary_key_columns}.

---

##### `run_continuously`<sup>Optional</sup> <a name="run_continuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.runContinuously"></a>

```python
run_continuously: OnlineTableSpecRunContinuously
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a>

run_continuously block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#run_continuously OnlineTable#run_continuously}

---

##### `run_triggered`<sup>Optional</sup> <a name="run_triggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.runTriggered"></a>

```python
run_triggered: OnlineTableSpecRunTriggered
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a>

run_triggered block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#run_triggered OnlineTable#run_triggered}

---

##### `source_table_full_name`<sup>Optional</sup> <a name="source_table_full_name" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.sourceTableFullName"></a>

```python
source_table_full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#source_table_full_name OnlineTable#source_table_full_name}.

---

##### `timeseries_key`<sup>Optional</sup> <a name="timeseries_key" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.timeseriesKey"></a>

```python
timeseries_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#timeseries_key OnlineTable#timeseries_key}.

---

### OnlineTableSpecRunContinuously <a name="OnlineTableSpecRunContinuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableSpecRunContinuously()
```


### OnlineTableSpecRunTriggered <a name="OnlineTableSpecRunTriggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableSpecRunTriggered()
```


### OnlineTableStatus <a name="OnlineTableStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatus()
```


### OnlineTableStatusContinuousUpdateStatus <a name="OnlineTableStatusContinuousUpdateStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusContinuousUpdateStatus()
```


### OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress <a name="OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress()
```


### OnlineTableStatusFailedStatus <a name="OnlineTableStatusFailedStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusFailedStatus()
```


### OnlineTableStatusProvisioningStatus <a name="OnlineTableStatusProvisioningStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusProvisioningStatus()
```


### OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress <a name="OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress()
```


### OnlineTableStatusTriggeredUpdateStatus <a name="OnlineTableStatusTriggeredUpdateStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusTriggeredUpdateStatus()
```


### OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress <a name="OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress()
```


### OnlineTableTimeouts <a name="OnlineTableTimeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#create OnlineTable#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/resources/online_table#create OnlineTable#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### OnlineTableSpecOutputReference <a name="OnlineTableSpecOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunContinuously">put_run_continuously</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunTriggered">put_run_triggered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetPerformFullCopy">reset_perform_full_copy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetPrimaryKeyColumns">reset_primary_key_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetRunContinuously">reset_run_continuously</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetRunTriggered">reset_run_triggered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetSourceTableFullName">reset_source_table_full_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetTimeseriesKey">reset_timeseries_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_run_continuously` <a name="put_run_continuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunContinuously"></a>

```python
def put_run_continuously() -> None
```

##### `put_run_triggered` <a name="put_run_triggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunTriggered"></a>

```python
def put_run_triggered() -> None
```

##### `reset_perform_full_copy` <a name="reset_perform_full_copy" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetPerformFullCopy"></a>

```python
def reset_perform_full_copy() -> None
```

##### `reset_primary_key_columns` <a name="reset_primary_key_columns" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetPrimaryKeyColumns"></a>

```python
def reset_primary_key_columns() -> None
```

##### `reset_run_continuously` <a name="reset_run_continuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetRunContinuously"></a>

```python
def reset_run_continuously() -> None
```

##### `reset_run_triggered` <a name="reset_run_triggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetRunTriggered"></a>

```python
def reset_run_triggered() -> None
```

##### `reset_source_table_full_name` <a name="reset_source_table_full_name" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetSourceTableFullName"></a>

```python
def reset_source_table_full_name() -> None
```

##### `reset_timeseries_key` <a name="reset_timeseries_key" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetTimeseriesKey"></a>

```python
def reset_timeseries_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runContinuously">run_continuously</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference">OnlineTableSpecRunContinuouslyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runTriggered">run_triggered</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference">OnlineTableSpecRunTriggeredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.performFullCopyInput">perform_full_copy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.primaryKeyColumnsInput">primary_key_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runContinuouslyInput">run_continuously_input</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runTriggeredInput">run_triggered_input</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.sourceTableFullNameInput">source_table_full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.timeseriesKeyInput">timeseries_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.performFullCopy">perform_full_copy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.primaryKeyColumns">primary_key_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.sourceTableFullName">source_table_full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.timeseriesKey">timeseries_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `run_continuously`<sup>Required</sup> <a name="run_continuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runContinuously"></a>

```python
run_continuously: OnlineTableSpecRunContinuouslyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference">OnlineTableSpecRunContinuouslyOutputReference</a>

---

##### `run_triggered`<sup>Required</sup> <a name="run_triggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runTriggered"></a>

```python
run_triggered: OnlineTableSpecRunTriggeredOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference">OnlineTableSpecRunTriggeredOutputReference</a>

---

##### `perform_full_copy_input`<sup>Optional</sup> <a name="perform_full_copy_input" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.performFullCopyInput"></a>

```python
perform_full_copy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `primary_key_columns_input`<sup>Optional</sup> <a name="primary_key_columns_input" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.primaryKeyColumnsInput"></a>

```python
primary_key_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `run_continuously_input`<sup>Optional</sup> <a name="run_continuously_input" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runContinuouslyInput"></a>

```python
run_continuously_input: OnlineTableSpecRunContinuously
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a>

---

##### `run_triggered_input`<sup>Optional</sup> <a name="run_triggered_input" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runTriggeredInput"></a>

```python
run_triggered_input: OnlineTableSpecRunTriggered
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a>

---

##### `source_table_full_name_input`<sup>Optional</sup> <a name="source_table_full_name_input" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.sourceTableFullNameInput"></a>

```python
source_table_full_name_input: str
```

- *Type:* str

---

##### `timeseries_key_input`<sup>Optional</sup> <a name="timeseries_key_input" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.timeseriesKeyInput"></a>

```python
timeseries_key_input: str
```

- *Type:* str

---

##### `perform_full_copy`<sup>Required</sup> <a name="perform_full_copy" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.performFullCopy"></a>

```python
perform_full_copy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `primary_key_columns`<sup>Required</sup> <a name="primary_key_columns" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.primaryKeyColumns"></a>

```python
primary_key_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_table_full_name`<sup>Required</sup> <a name="source_table_full_name" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.sourceTableFullName"></a>

```python
source_table_full_name: str
```

- *Type:* str

---

##### `timeseries_key`<sup>Required</sup> <a name="timeseries_key" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.timeseriesKey"></a>

```python
timeseries_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.internalValue"></a>

```python
internal_value: OnlineTableSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a>

---


### OnlineTableSpecRunContinuouslyOutputReference <a name="OnlineTableSpecRunContinuouslyOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableSpecRunContinuouslyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.internalValue"></a>

```python
internal_value: OnlineTableSpecRunContinuously
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a>

---


### OnlineTableSpecRunTriggeredOutputReference <a name="OnlineTableSpecRunTriggeredOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableSpecRunTriggeredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.internalValue"></a>

```python
internal_value: OnlineTableSpecRunTriggered
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a>

---


### OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList <a name="OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference <a name="OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">estimated_completion_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">latest_version_currently_processing</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">synced_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">sync_progress_completion</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">total_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress">OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimated_completion_time_seconds`<sup>Required</sup> <a name="estimated_completion_time_seconds" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```python
estimated_completion_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `latest_version_currently_processing`<sup>Required</sup> <a name="latest_version_currently_processing" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```python
latest_version_currently_processing: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `synced_row_count`<sup>Required</sup> <a name="synced_row_count" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```python
synced_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sync_progress_completion`<sup>Required</sup> <a name="sync_progress_completion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```python
sync_progress_completion: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_row_count`<sup>Required</sup> <a name="total_row_count" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```python
total_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```python
internal_value: OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress">OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress</a>

---


### OnlineTableStatusContinuousUpdateStatusList <a name="OnlineTableStatusContinuousUpdateStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusContinuousUpdateStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OnlineTableStatusContinuousUpdateStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OnlineTableStatusContinuousUpdateStatusOutputReference <a name="OnlineTableStatusContinuousUpdateStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress">initial_pipeline_sync_progress</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList">OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion">last_processed_commit_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatus">OnlineTableStatusContinuousUpdateStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `initial_pipeline_sync_progress`<sup>Required</sup> <a name="initial_pipeline_sync_progress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress"></a>

```python
initial_pipeline_sync_progress: OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList">OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList</a>

---

##### `last_processed_commit_version`<sup>Required</sup> <a name="last_processed_commit_version" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```python
last_processed_commit_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.internalValue"></a>

```python
internal_value: OnlineTableStatusContinuousUpdateStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatus">OnlineTableStatusContinuousUpdateStatus</a>

---


### OnlineTableStatusFailedStatusList <a name="OnlineTableStatusFailedStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusFailedStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OnlineTableStatusFailedStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OnlineTableStatusFailedStatusOutputReference <a name="OnlineTableStatusFailedStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusFailedStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.lastProcessedCommitVersion">last_processed_commit_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatus">OnlineTableStatusFailedStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_processed_commit_version`<sup>Required</sup> <a name="last_processed_commit_version" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.lastProcessedCommitVersion"></a>

```python
last_processed_commit_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.internalValue"></a>

```python
internal_value: OnlineTableStatusFailedStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatus">OnlineTableStatusFailedStatus</a>

---


### OnlineTableStatusList <a name="OnlineTableStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OnlineTableStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OnlineTableStatusOutputReference <a name="OnlineTableStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.continuousUpdateStatus">continuous_update_status</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList">OnlineTableStatusContinuousUpdateStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.detailedState">detailed_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.failedStatus">failed_status</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList">OnlineTableStatusFailedStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.provisioningStatus">provisioning_status</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList">OnlineTableStatusProvisioningStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.triggeredUpdateStatus">triggered_update_status</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList">OnlineTableStatusTriggeredUpdateStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatus">OnlineTableStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `continuous_update_status`<sup>Required</sup> <a name="continuous_update_status" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.continuousUpdateStatus"></a>

```python
continuous_update_status: OnlineTableStatusContinuousUpdateStatusList
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList">OnlineTableStatusContinuousUpdateStatusList</a>

---

##### `detailed_state`<sup>Required</sup> <a name="detailed_state" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.detailedState"></a>

```python
detailed_state: str
```

- *Type:* str

---

##### `failed_status`<sup>Required</sup> <a name="failed_status" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.failedStatus"></a>

```python
failed_status: OnlineTableStatusFailedStatusList
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList">OnlineTableStatusFailedStatusList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `provisioning_status`<sup>Required</sup> <a name="provisioning_status" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.provisioningStatus"></a>

```python
provisioning_status: OnlineTableStatusProvisioningStatusList
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList">OnlineTableStatusProvisioningStatusList</a>

---

##### `triggered_update_status`<sup>Required</sup> <a name="triggered_update_status" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.triggeredUpdateStatus"></a>

```python
triggered_update_status: OnlineTableStatusTriggeredUpdateStatusList
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList">OnlineTableStatusTriggeredUpdateStatusList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.internalValue"></a>

```python
internal_value: OnlineTableStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatus">OnlineTableStatus</a>

---


### OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList <a name="OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference <a name="OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">estimated_completion_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">latest_version_currently_processing</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">synced_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">sync_progress_completion</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">total_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress">OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimated_completion_time_seconds`<sup>Required</sup> <a name="estimated_completion_time_seconds" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```python
estimated_completion_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `latest_version_currently_processing`<sup>Required</sup> <a name="latest_version_currently_processing" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```python
latest_version_currently_processing: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `synced_row_count`<sup>Required</sup> <a name="synced_row_count" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```python
synced_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sync_progress_completion`<sup>Required</sup> <a name="sync_progress_completion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```python
sync_progress_completion: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_row_count`<sup>Required</sup> <a name="total_row_count" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```python
total_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```python
internal_value: OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress">OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress</a>

---


### OnlineTableStatusProvisioningStatusList <a name="OnlineTableStatusProvisioningStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusProvisioningStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OnlineTableStatusProvisioningStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OnlineTableStatusProvisioningStatusOutputReference <a name="OnlineTableStatusProvisioningStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusProvisioningStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress">initial_pipeline_sync_progress</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList">OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatus">OnlineTableStatusProvisioningStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `initial_pipeline_sync_progress`<sup>Required</sup> <a name="initial_pipeline_sync_progress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress"></a>

```python
initial_pipeline_sync_progress: OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList">OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.internalValue"></a>

```python
internal_value: OnlineTableStatusProvisioningStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatus">OnlineTableStatusProvisioningStatus</a>

---


### OnlineTableStatusTriggeredUpdateStatusList <a name="OnlineTableStatusTriggeredUpdateStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusTriggeredUpdateStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OnlineTableStatusTriggeredUpdateStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OnlineTableStatusTriggeredUpdateStatusOutputReference <a name="OnlineTableStatusTriggeredUpdateStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion">last_processed_commit_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress">triggered_update_progress</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList">OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatus">OnlineTableStatusTriggeredUpdateStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_processed_commit_version`<sup>Required</sup> <a name="last_processed_commit_version" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```python
last_processed_commit_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `triggered_update_progress`<sup>Required</sup> <a name="triggered_update_progress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress"></a>

```python
triggered_update_progress: OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList">OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.internalValue"></a>

```python
internal_value: OnlineTableStatusTriggeredUpdateStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatus">OnlineTableStatusTriggeredUpdateStatus</a>

---


### OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList <a name="OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference <a name="OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds">estimated_completion_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing">latest_version_currently_processing</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount">synced_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion">sync_progress_completion</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount">total_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress">OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimated_completion_time_seconds`<sup>Required</sup> <a name="estimated_completion_time_seconds" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```python
estimated_completion_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `latest_version_currently_processing`<sup>Required</sup> <a name="latest_version_currently_processing" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```python
latest_version_currently_processing: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `synced_row_count`<sup>Required</sup> <a name="synced_row_count" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount"></a>

```python
synced_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sync_progress_completion`<sup>Required</sup> <a name="sync_progress_completion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion"></a>

```python
sync_progress_completion: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_row_count`<sup>Required</sup> <a name="total_row_count" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount"></a>

```python
total_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue"></a>

```python
internal_value: OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress">OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress</a>

---


### OnlineTableTimeoutsOutputReference <a name="OnlineTableTimeoutsOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import online_table

onlineTable.OnlineTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OnlineTableTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a>]

---



