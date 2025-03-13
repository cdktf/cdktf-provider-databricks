# `sharePluginframework` Submodule <a name="`sharePluginframework` Submodule" id="@cdktf/provider-databricks.sharePluginframework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SharePluginframework <a name="SharePluginframework" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework databricks_share_pluginframework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import share_pluginframework

sharePluginframework.SharePluginframework(
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
  comment: str = None,
  object: typing.Union[IResolvable, typing.List[SharePluginframeworkObject]] = None,
  owner: str = None,
  storage_root: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#name SharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#comment SharePluginframework#comment}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.object">object</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a>]]</code> | object block. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#owner SharePluginframework#owner}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.storageRoot">storage_root</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#storage_root SharePluginframework#storage_root}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#name SharePluginframework#name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#comment SharePluginframework#comment}.

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.object"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a>]]

object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#object SharePluginframework#object}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#owner SharePluginframework#owner}.

---

##### `storage_root`<sup>Optional</sup> <a name="storage_root" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.Initializer.parameter.storageRoot"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#storage_root SharePluginframework#storage_root}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.putObject">put_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetObject">reset_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetStorageRoot">reset_storage_root</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_object` <a name="put_object" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.putObject"></a>

```python
def put_object(
  value: typing.Union[IResolvable, typing.List[SharePluginframeworkObject]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.putObject.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a>]]

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_object` <a name="reset_object" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetObject"></a>

```python
def reset_object() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_storage_root` <a name="reset_storage_root" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.resetStorageRoot"></a>

```python
def reset_storage_root() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SharePluginframework resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import share_pluginframework

sharePluginframework.SharePluginframework.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import share_pluginframework

sharePluginframework.SharePluginframework.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import share_pluginframework

sharePluginframework.SharePluginframework.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import share_pluginframework

sharePluginframework.SharePluginframework.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SharePluginframework resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SharePluginframework to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SharePluginframework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SharePluginframework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.effectiveOwner">effective_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.object">object</a></code> | <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList">SharePluginframeworkObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.storageLocation">storage_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.objectInput">object_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.storageRootInput">storage_root_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.storageRoot">storage_root</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `effective_owner`<sup>Required</sup> <a name="effective_owner" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.effectiveOwner"></a>

```python
effective_owner: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.object"></a>

```python
object: SharePluginframeworkObjectList
```

- *Type:* <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList">SharePluginframeworkObjectList</a>

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.storageLocation"></a>

```python
storage_location: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.objectInput"></a>

```python
object_input: typing.Union[IResolvable, typing.List[SharePluginframeworkObject]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a>]]

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `storage_root_input`<sup>Optional</sup> <a name="storage_root_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.storageRootInput"></a>

```python
storage_root_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `storage_root`<sup>Required</sup> <a name="storage_root" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.storageRoot"></a>

```python
storage_root: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframework.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SharePluginframeworkConfig <a name="SharePluginframeworkConfig" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import share_pluginframework

sharePluginframework.SharePluginframeworkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  comment: str = None,
  object: typing.Union[IResolvable, typing.List[SharePluginframeworkObject]] = None,
  owner: str = None,
  storage_root: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#name SharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#comment SharePluginframework#comment}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.object">object</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a>]]</code> | object block. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#owner SharePluginframework#owner}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.storageRoot">storage_root</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#storage_root SharePluginframework#storage_root}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#name SharePluginframework#name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#comment SharePluginframework#comment}.

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.object"></a>

```python
object: typing.Union[IResolvable, typing.List[SharePluginframeworkObject]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a>]]

object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#object SharePluginframework#object}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#owner SharePluginframework#owner}.

---

##### `storage_root`<sup>Optional</sup> <a name="storage_root" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkConfig.property.storageRoot"></a>

```python
storage_root: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#storage_root SharePluginframework#storage_root}.

---

### SharePluginframeworkObject <a name="SharePluginframeworkObject" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import share_pluginframework

sharePluginframework.SharePluginframeworkObject(
  data_object_type: str,
  name: str,
  cdf_enabled: typing.Union[bool, IResolvable] = None,
  comment: str = None,
  content: str = None,
  history_data_sharing_status: str = None,
  partition: typing.Union[IResolvable, typing.List[SharePluginframeworkObjectPartition]] = None,
  shared_as: str = None,
  start_version: typing.Union[int, float] = None,
  string_shared_as: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.dataObjectType">data_object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#data_object_type SharePluginframework#data_object_type}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#name SharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.cdfEnabled">cdf_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#cdf_enabled SharePluginframework#cdf_enabled}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#comment SharePluginframework#comment}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#content SharePluginframework#content}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.historyDataSharingStatus">history_data_sharing_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#history_data_sharing_status SharePluginframework#history_data_sharing_status}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.partition">partition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition">SharePluginframeworkObjectPartition</a>]]</code> | partition block. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.sharedAs">shared_as</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#shared_as SharePluginframework#shared_as}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.startVersion">start_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#start_version SharePluginframework#start_version}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.stringSharedAs">string_shared_as</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#string_shared_as SharePluginframework#string_shared_as}. |

---

##### `data_object_type`<sup>Required</sup> <a name="data_object_type" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.dataObjectType"></a>

```python
data_object_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#data_object_type SharePluginframework#data_object_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#name SharePluginframework#name}.

---

##### `cdf_enabled`<sup>Optional</sup> <a name="cdf_enabled" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.cdfEnabled"></a>

```python
cdf_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#cdf_enabled SharePluginframework#cdf_enabled}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#comment SharePluginframework#comment}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#content SharePluginframework#content}.

---

##### `history_data_sharing_status`<sup>Optional</sup> <a name="history_data_sharing_status" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.historyDataSharingStatus"></a>

```python
history_data_sharing_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#history_data_sharing_status SharePluginframework#history_data_sharing_status}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.partition"></a>

```python
partition: typing.Union[IResolvable, typing.List[SharePluginframeworkObjectPartition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition">SharePluginframeworkObjectPartition</a>]]

partition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#partition SharePluginframework#partition}

---

##### `shared_as`<sup>Optional</sup> <a name="shared_as" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.sharedAs"></a>

```python
shared_as: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#shared_as SharePluginframework#shared_as}.

---

##### `start_version`<sup>Optional</sup> <a name="start_version" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.startVersion"></a>

```python
start_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#start_version SharePluginframework#start_version}.

---

##### `string_shared_as`<sup>Optional</sup> <a name="string_shared_as" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject.property.stringSharedAs"></a>

```python
string_shared_as: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#string_shared_as SharePluginframework#string_shared_as}.

---

### SharePluginframeworkObjectPartition <a name="SharePluginframeworkObjectPartition" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import share_pluginframework

sharePluginframework.SharePluginframeworkObjectPartition(
  value: typing.Union[IResolvable, typing.List[SharePluginframeworkObjectPartitionValue]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition.property.value">value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue">SharePluginframeworkObjectPartitionValue</a>]]</code> | value block. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition.property.value"></a>

```python
value: typing.Union[IResolvable, typing.List[SharePluginframeworkObjectPartitionValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue">SharePluginframeworkObjectPartitionValue</a>]]

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#value SharePluginframework#value}

---

### SharePluginframeworkObjectPartitionValue <a name="SharePluginframeworkObjectPartitionValue" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import share_pluginframework

sharePluginframework.SharePluginframeworkObjectPartitionValue(
  name: str,
  op: str,
  recipient_property_key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#name SharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue.property.op">op</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#op SharePluginframework#op}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue.property.recipientPropertyKey">recipient_property_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#recipient_property_key SharePluginframework#recipient_property_key}. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#value SharePluginframework#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#name SharePluginframework#name}.

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue.property.op"></a>

```python
op: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#op SharePluginframework#op}.

---

##### `recipient_property_key`<sup>Optional</sup> <a name="recipient_property_key" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue.property.recipientPropertyKey"></a>

```python
recipient_property_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#recipient_property_key SharePluginframework#recipient_property_key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/resources/share_pluginframework#value SharePluginframework#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SharePluginframeworkObjectList <a name="SharePluginframeworkObjectList" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import share_pluginframework

sharePluginframework.SharePluginframeworkObjectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SharePluginframeworkObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SharePluginframeworkObject]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a>]]

---


### SharePluginframeworkObjectOutputReference <a name="SharePluginframeworkObjectOutputReference" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import share_pluginframework

sharePluginframework.SharePluginframeworkObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.putPartition">put_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetCdfEnabled">reset_cdf_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetHistoryDataSharingStatus">reset_history_data_sharing_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetSharedAs">reset_shared_as</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetStartVersion">reset_start_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetStringSharedAs">reset_string_shared_as</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_partition` <a name="put_partition" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.putPartition"></a>

```python
def put_partition(
  value: typing.Union[IResolvable, typing.List[SharePluginframeworkObjectPartition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.putPartition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition">SharePluginframeworkObjectPartition</a>]]

---

##### `reset_cdf_enabled` <a name="reset_cdf_enabled" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetCdfEnabled"></a>

```python
def reset_cdf_enabled() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_content` <a name="reset_content" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_history_data_sharing_status` <a name="reset_history_data_sharing_status" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetHistoryDataSharingStatus"></a>

```python
def reset_history_data_sharing_status() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_shared_as` <a name="reset_shared_as" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetSharedAs"></a>

```python
def reset_shared_as() -> None
```

##### `reset_start_version` <a name="reset_start_version" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetStartVersion"></a>

```python
def reset_start_version() -> None
```

##### `reset_string_shared_as` <a name="reset_string_shared_as" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.resetStringSharedAs"></a>

```python
def reset_string_shared_as() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.addedAt">added_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.addedBy">added_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.effectiveCdfEnabled">effective_cdf_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.effectiveHistoryDataSharingStatus">effective_history_data_sharing_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.effectiveSharedAs">effective_shared_as</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.effectiveStartVersion">effective_start_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.partition">partition</a></code> | <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList">SharePluginframeworkObjectPartitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.cdfEnabledInput">cdf_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.dataObjectTypeInput">data_object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.historyDataSharingStatusInput">history_data_sharing_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.partitionInput">partition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition">SharePluginframeworkObjectPartition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.sharedAsInput">shared_as_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.startVersionInput">start_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.stringSharedAsInput">string_shared_as_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.cdfEnabled">cdf_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.dataObjectType">data_object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.historyDataSharingStatus">history_data_sharing_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.sharedAs">shared_as</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.startVersion">start_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.stringSharedAs">string_shared_as</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `added_at`<sup>Required</sup> <a name="added_at" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.addedAt"></a>

```python
added_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `added_by`<sup>Required</sup> <a name="added_by" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.addedBy"></a>

```python
added_by: str
```

- *Type:* str

---

##### `effective_cdf_enabled`<sup>Required</sup> <a name="effective_cdf_enabled" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.effectiveCdfEnabled"></a>

```python
effective_cdf_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `effective_history_data_sharing_status`<sup>Required</sup> <a name="effective_history_data_sharing_status" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.effectiveHistoryDataSharingStatus"></a>

```python
effective_history_data_sharing_status: str
```

- *Type:* str

---

##### `effective_shared_as`<sup>Required</sup> <a name="effective_shared_as" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.effectiveSharedAs"></a>

```python
effective_shared_as: str
```

- *Type:* str

---

##### `effective_start_version`<sup>Required</sup> <a name="effective_start_version" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.effectiveStartVersion"></a>

```python
effective_start_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.partition"></a>

```python
partition: SharePluginframeworkObjectPartitionList
```

- *Type:* <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList">SharePluginframeworkObjectPartitionList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `cdf_enabled_input`<sup>Optional</sup> <a name="cdf_enabled_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.cdfEnabledInput"></a>

```python
cdf_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `data_object_type_input`<sup>Optional</sup> <a name="data_object_type_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.dataObjectTypeInput"></a>

```python
data_object_type_input: str
```

- *Type:* str

---

##### `history_data_sharing_status_input`<sup>Optional</sup> <a name="history_data_sharing_status_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.historyDataSharingStatusInput"></a>

```python
history_data_sharing_status_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.partitionInput"></a>

```python
partition_input: typing.Union[IResolvable, typing.List[SharePluginframeworkObjectPartition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition">SharePluginframeworkObjectPartition</a>]]

---

##### `shared_as_input`<sup>Optional</sup> <a name="shared_as_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.sharedAsInput"></a>

```python
shared_as_input: str
```

- *Type:* str

---

##### `start_version_input`<sup>Optional</sup> <a name="start_version_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.startVersionInput"></a>

```python
start_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_shared_as_input`<sup>Optional</sup> <a name="string_shared_as_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.stringSharedAsInput"></a>

```python
string_shared_as_input: str
```

- *Type:* str

---

##### `cdf_enabled`<sup>Required</sup> <a name="cdf_enabled" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.cdfEnabled"></a>

```python
cdf_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `data_object_type`<sup>Required</sup> <a name="data_object_type" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.dataObjectType"></a>

```python
data_object_type: str
```

- *Type:* str

---

##### `history_data_sharing_status`<sup>Required</sup> <a name="history_data_sharing_status" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.historyDataSharingStatus"></a>

```python
history_data_sharing_status: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `shared_as`<sup>Required</sup> <a name="shared_as" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.sharedAs"></a>

```python
shared_as: str
```

- *Type:* str

---

##### `start_version`<sup>Required</sup> <a name="start_version" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.startVersion"></a>

```python
start_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_shared_as`<sup>Required</sup> <a name="string_shared_as" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.stringSharedAs"></a>

```python
string_shared_as: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SharePluginframeworkObject]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObject">SharePluginframeworkObject</a>]

---


### SharePluginframeworkObjectPartitionList <a name="SharePluginframeworkObjectPartitionList" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import share_pluginframework

sharePluginframework.SharePluginframeworkObjectPartitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SharePluginframeworkObjectPartitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition">SharePluginframeworkObjectPartition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SharePluginframeworkObjectPartition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition">SharePluginframeworkObjectPartition</a>]]

---


### SharePluginframeworkObjectPartitionOutputReference <a name="SharePluginframeworkObjectPartitionOutputReference" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import share_pluginframework

sharePluginframework.SharePluginframeworkObjectPartitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value` <a name="put_value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.putValue"></a>

```python
def put_value(
  value: typing.Union[IResolvable, typing.List[SharePluginframeworkObjectPartitionValue]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.putValue.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue">SharePluginframeworkObjectPartitionValue</a>]]

---

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList">SharePluginframeworkObjectPartitionValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue">SharePluginframeworkObjectPartitionValue</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition">SharePluginframeworkObjectPartition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.value"></a>

```python
value: SharePluginframeworkObjectPartitionValueList
```

- *Type:* <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList">SharePluginframeworkObjectPartitionValueList</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[IResolvable, typing.List[SharePluginframeworkObjectPartitionValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue">SharePluginframeworkObjectPartitionValue</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SharePluginframeworkObjectPartition]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartition">SharePluginframeworkObjectPartition</a>]

---


### SharePluginframeworkObjectPartitionValueList <a name="SharePluginframeworkObjectPartitionValueList" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import share_pluginframework

sharePluginframework.SharePluginframeworkObjectPartitionValueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SharePluginframeworkObjectPartitionValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue">SharePluginframeworkObjectPartitionValue</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SharePluginframeworkObjectPartitionValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue">SharePluginframeworkObjectPartitionValue</a>]]

---


### SharePluginframeworkObjectPartitionValueOutputReference <a name="SharePluginframeworkObjectPartitionValueOutputReference" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import share_pluginframework

sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.resetRecipientPropertyKey">reset_recipient_property_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_recipient_property_key` <a name="reset_recipient_property_key" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.resetRecipientPropertyKey"></a>

```python
def reset_recipient_property_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.opInput">op_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKeyInput">recipient_property_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.op">op</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKey">recipient_property_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue">SharePluginframeworkObjectPartitionValue</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `op_input`<sup>Optional</sup> <a name="op_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.opInput"></a>

```python
op_input: str
```

- *Type:* str

---

##### `recipient_property_key_input`<sup>Optional</sup> <a name="recipient_property_key_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKeyInput"></a>

```python
recipient_property_key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.op"></a>

```python
op: str
```

- *Type:* str

---

##### `recipient_property_key`<sup>Required</sup> <a name="recipient_property_key" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKey"></a>

```python
recipient_property_key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValueOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SharePluginframeworkObjectPartitionValue]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.sharePluginframework.SharePluginframeworkObjectPartitionValue">SharePluginframeworkObjectPartitionValue</a>]

---



