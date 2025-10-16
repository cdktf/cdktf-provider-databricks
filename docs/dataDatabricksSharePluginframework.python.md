# `dataDatabricksSharePluginframework` Submodule <a name="`dataDatabricksSharePluginframework` Submodule" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSharePluginframework <a name="DataDatabricksSharePluginframework" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework databricks_share_pluginframework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_share_pluginframework

dataDatabricksSharePluginframework.DataDatabricksSharePluginframework(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  comment: str = None,
  name: str = None,
  object: IResolvable | typing.List[DataDatabricksSharePluginframeworkObject] = None,
  owner: str = None,
  storage_root: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.object">object</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#object DataDatabricksSharePluginframework#object}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#owner DataDatabricksSharePluginframework#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.storageRoot">storage_root</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#storage_root DataDatabricksSharePluginframework#storage_root}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}.

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.object"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#object DataDatabricksSharePluginframework#object}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#owner DataDatabricksSharePluginframework#owner}.

---

##### `storage_root`<sup>Optional</sup> <a name="storage_root" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.storageRoot"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#storage_root DataDatabricksSharePluginframework#storage_root}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.putObject">put_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetObject">reset_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetStorageRoot">reset_storage_root</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_object` <a name="put_object" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.putObject"></a>

```python
def put_object(
  value: IResolvable | typing.List[DataDatabricksSharePluginframeworkObject]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.putObject.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a>]

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_object` <a name="reset_object" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetObject"></a>

```python
def reset_object() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_storage_root` <a name="reset_storage_root" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetStorageRoot"></a>

```python
def reset_storage_root() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksSharePluginframework resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_share_pluginframework

dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_share_pluginframework

dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_share_pluginframework

dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_share_pluginframework

dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksSharePluginframework resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksSharePluginframework to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksSharePluginframework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksSharePluginframework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.effectiveOwner">effective_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.object">object</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList">DataDatabricksSharePluginframeworkObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageLocation">storage_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.objectInput">object_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageRootInput">storage_root_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageRoot">storage_root</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `effective_owner`<sup>Required</sup> <a name="effective_owner" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.effectiveOwner"></a>

```python
effective_owner: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.object"></a>

```python
object: DataDatabricksSharePluginframeworkObjectList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList">DataDatabricksSharePluginframeworkObjectList</a>

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageLocation"></a>

```python
storage_location: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.objectInput"></a>

```python
object_input: IResolvable | typing.List[DataDatabricksSharePluginframeworkObject]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a>]

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `storage_root_input`<sup>Optional</sup> <a name="storage_root_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageRootInput"></a>

```python
storage_root_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `storage_root`<sup>Required</sup> <a name="storage_root" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageRoot"></a>

```python
storage_root: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSharePluginframeworkConfig <a name="DataDatabricksSharePluginframeworkConfig" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_share_pluginframework

dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  comment: str = None,
  name: str = None,
  object: IResolvable | typing.List[DataDatabricksSharePluginframeworkObject] = None,
  owner: str = None,
  storage_root: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.object">object</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#object DataDatabricksSharePluginframework#object}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#owner DataDatabricksSharePluginframework#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.storageRoot">storage_root</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#storage_root DataDatabricksSharePluginframework#storage_root}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}.

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.object"></a>

```python
object: IResolvable | typing.List[DataDatabricksSharePluginframeworkObject]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#object DataDatabricksSharePluginframework#object}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#owner DataDatabricksSharePluginframework#owner}.

---

##### `storage_root`<sup>Optional</sup> <a name="storage_root" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.storageRoot"></a>

```python
storage_root: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#storage_root DataDatabricksSharePluginframework#storage_root}.

---

### DataDatabricksSharePluginframeworkObject <a name="DataDatabricksSharePluginframeworkObject" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_share_pluginframework

dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject(
  name: str,
  cdf_enabled: bool | IResolvable = None,
  comment: str = None,
  content: str = None,
  data_object_type: str = None,
  history_data_sharing_status: str = None,
  partition: IResolvable | typing.List[DataDatabricksSharePluginframeworkObjectPartition] = None,
  shared_as: str = None,
  start_version: typing.Union[int, float] = None,
  string_shared_as: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.cdfEnabled">cdf_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#cdf_enabled DataDatabricksSharePluginframework#cdf_enabled}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#content DataDatabricksSharePluginframework#content}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.dataObjectType">data_object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#data_object_type DataDatabricksSharePluginframework#data_object_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.historyDataSharingStatus">history_data_sharing_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#history_data_sharing_status DataDatabricksSharePluginframework#history_data_sharing_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.partition">partition</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition">DataDatabricksSharePluginframeworkObjectPartition</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#partition DataDatabricksSharePluginframework#partition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.sharedAs">shared_as</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#shared_as DataDatabricksSharePluginframework#shared_as}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.startVersion">start_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#start_version DataDatabricksSharePluginframework#start_version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.stringSharedAs">string_shared_as</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#string_shared_as DataDatabricksSharePluginframework#string_shared_as}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}.

---

##### `cdf_enabled`<sup>Optional</sup> <a name="cdf_enabled" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.cdfEnabled"></a>

```python
cdf_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#cdf_enabled DataDatabricksSharePluginframework#cdf_enabled}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#content DataDatabricksSharePluginframework#content}.

---

##### `data_object_type`<sup>Optional</sup> <a name="data_object_type" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.dataObjectType"></a>

```python
data_object_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#data_object_type DataDatabricksSharePluginframework#data_object_type}.

---

##### `history_data_sharing_status`<sup>Optional</sup> <a name="history_data_sharing_status" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.historyDataSharingStatus"></a>

```python
history_data_sharing_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#history_data_sharing_status DataDatabricksSharePluginframework#history_data_sharing_status}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.partition"></a>

```python
partition: IResolvable | typing.List[DataDatabricksSharePluginframeworkObjectPartition]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition">DataDatabricksSharePluginframeworkObjectPartition</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#partition DataDatabricksSharePluginframework#partition}.

---

##### `shared_as`<sup>Optional</sup> <a name="shared_as" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.sharedAs"></a>

```python
shared_as: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#shared_as DataDatabricksSharePluginframework#shared_as}.

---

##### `start_version`<sup>Optional</sup> <a name="start_version" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.startVersion"></a>

```python
start_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#start_version DataDatabricksSharePluginframework#start_version}.

---

##### `string_shared_as`<sup>Optional</sup> <a name="string_shared_as" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.stringSharedAs"></a>

```python
string_shared_as: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#string_shared_as DataDatabricksSharePluginframework#string_shared_as}.

---

### DataDatabricksSharePluginframeworkObjectPartition <a name="DataDatabricksSharePluginframeworkObjectPartition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_share_pluginframework

dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition(
  value: IResolvable | typing.List[DataDatabricksSharePluginframeworkObjectPartitionValue] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition.property.value">value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue">DataDatabricksSharePluginframeworkObjectPartitionValue</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#value DataDatabricksSharePluginframework#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition.property.value"></a>

```python
value: IResolvable | typing.List[DataDatabricksSharePluginframeworkObjectPartitionValue]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue">DataDatabricksSharePluginframeworkObjectPartitionValue</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#value DataDatabricksSharePluginframework#value}.

---

### DataDatabricksSharePluginframeworkObjectPartitionValue <a name="DataDatabricksSharePluginframeworkObjectPartitionValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_share_pluginframework

dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue(
  name: str = None,
  op: str = None,
  recipient_property_key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.op">op</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#op DataDatabricksSharePluginframework#op}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.recipientPropertyKey">recipient_property_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#recipient_property_key DataDatabricksSharePluginframework#recipient_property_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#value DataDatabricksSharePluginframework#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}.

---

##### `op`<sup>Optional</sup> <a name="op" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.op"></a>

```python
op: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#op DataDatabricksSharePluginframework#op}.

---

##### `recipient_property_key`<sup>Optional</sup> <a name="recipient_property_key" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.recipientPropertyKey"></a>

```python
recipient_property_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#recipient_property_key DataDatabricksSharePluginframework#recipient_property_key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/share_pluginframework#value DataDatabricksSharePluginframework#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSharePluginframeworkObjectList <a name="DataDatabricksSharePluginframeworkObjectList" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_share_pluginframework

dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksSharePluginframeworkObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksSharePluginframeworkObject]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a>]

---


### DataDatabricksSharePluginframeworkObjectOutputReference <a name="DataDatabricksSharePluginframeworkObjectOutputReference" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_share_pluginframework

dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.putPartition">put_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetCdfEnabled">reset_cdf_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetDataObjectType">reset_data_object_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetHistoryDataSharingStatus">reset_history_data_sharing_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetSharedAs">reset_shared_as</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetStartVersion">reset_start_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetStringSharedAs">reset_string_shared_as</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_partition` <a name="put_partition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.putPartition"></a>

```python
def put_partition(
  value: IResolvable | typing.List[DataDatabricksSharePluginframeworkObjectPartition]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.putPartition.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition">DataDatabricksSharePluginframeworkObjectPartition</a>]

---

##### `reset_cdf_enabled` <a name="reset_cdf_enabled" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetCdfEnabled"></a>

```python
def reset_cdf_enabled() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_content` <a name="reset_content" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_data_object_type` <a name="reset_data_object_type" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetDataObjectType"></a>

```python
def reset_data_object_type() -> None
```

##### `reset_history_data_sharing_status` <a name="reset_history_data_sharing_status" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetHistoryDataSharingStatus"></a>

```python
def reset_history_data_sharing_status() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_shared_as` <a name="reset_shared_as" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetSharedAs"></a>

```python
def reset_shared_as() -> None
```

##### `reset_start_version` <a name="reset_start_version" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetStartVersion"></a>

```python
def reset_start_version() -> None
```

##### `reset_string_shared_as` <a name="reset_string_shared_as" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetStringSharedAs"></a>

```python
def reset_string_shared_as() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.addedAt">added_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.addedBy">added_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveCdfEnabled">effective_cdf_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveHistoryDataSharingStatus">effective_history_data_sharing_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveSharedAs">effective_shared_as</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveStartVersion">effective_start_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveStringSharedAs">effective_string_shared_as</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.partition">partition</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList">DataDatabricksSharePluginframeworkObjectPartitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.cdfEnabledInput">cdf_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.dataObjectTypeInput">data_object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.historyDataSharingStatusInput">history_data_sharing_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.partitionInput">partition_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition">DataDatabricksSharePluginframeworkObjectPartition</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.sharedAsInput">shared_as_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.startVersionInput">start_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.stringSharedAsInput">string_shared_as_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.cdfEnabled">cdf_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.dataObjectType">data_object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.historyDataSharingStatus">history_data_sharing_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.sharedAs">shared_as</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.startVersion">start_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.stringSharedAs">string_shared_as</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `added_at`<sup>Required</sup> <a name="added_at" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.addedAt"></a>

```python
added_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `added_by`<sup>Required</sup> <a name="added_by" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.addedBy"></a>

```python
added_by: str
```

- *Type:* str

---

##### `effective_cdf_enabled`<sup>Required</sup> <a name="effective_cdf_enabled" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveCdfEnabled"></a>

```python
effective_cdf_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `effective_history_data_sharing_status`<sup>Required</sup> <a name="effective_history_data_sharing_status" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveHistoryDataSharingStatus"></a>

```python
effective_history_data_sharing_status: str
```

- *Type:* str

---

##### `effective_shared_as`<sup>Required</sup> <a name="effective_shared_as" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveSharedAs"></a>

```python
effective_shared_as: str
```

- *Type:* str

---

##### `effective_start_version`<sup>Required</sup> <a name="effective_start_version" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveStartVersion"></a>

```python
effective_start_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `effective_string_shared_as`<sup>Required</sup> <a name="effective_string_shared_as" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveStringSharedAs"></a>

```python
effective_string_shared_as: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.partition"></a>

```python
partition: DataDatabricksSharePluginframeworkObjectPartitionList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList">DataDatabricksSharePluginframeworkObjectPartitionList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `cdf_enabled_input`<sup>Optional</sup> <a name="cdf_enabled_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.cdfEnabledInput"></a>

```python
cdf_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `data_object_type_input`<sup>Optional</sup> <a name="data_object_type_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.dataObjectTypeInput"></a>

```python
data_object_type_input: str
```

- *Type:* str

---

##### `history_data_sharing_status_input`<sup>Optional</sup> <a name="history_data_sharing_status_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.historyDataSharingStatusInput"></a>

```python
history_data_sharing_status_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.partitionInput"></a>

```python
partition_input: IResolvable | typing.List[DataDatabricksSharePluginframeworkObjectPartition]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition">DataDatabricksSharePluginframeworkObjectPartition</a>]

---

##### `shared_as_input`<sup>Optional</sup> <a name="shared_as_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.sharedAsInput"></a>

```python
shared_as_input: str
```

- *Type:* str

---

##### `start_version_input`<sup>Optional</sup> <a name="start_version_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.startVersionInput"></a>

```python
start_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_shared_as_input`<sup>Optional</sup> <a name="string_shared_as_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.stringSharedAsInput"></a>

```python
string_shared_as_input: str
```

- *Type:* str

---

##### `cdf_enabled`<sup>Required</sup> <a name="cdf_enabled" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.cdfEnabled"></a>

```python
cdf_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `data_object_type`<sup>Required</sup> <a name="data_object_type" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.dataObjectType"></a>

```python
data_object_type: str
```

- *Type:* str

---

##### `history_data_sharing_status`<sup>Required</sup> <a name="history_data_sharing_status" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.historyDataSharingStatus"></a>

```python
history_data_sharing_status: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `shared_as`<sup>Required</sup> <a name="shared_as" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.sharedAs"></a>

```python
shared_as: str
```

- *Type:* str

---

##### `start_version`<sup>Required</sup> <a name="start_version" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.startVersion"></a>

```python
start_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_shared_as`<sup>Required</sup> <a name="string_shared_as" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.stringSharedAs"></a>

```python
string_shared_as: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksSharePluginframeworkObject
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a>

---


### DataDatabricksSharePluginframeworkObjectPartitionList <a name="DataDatabricksSharePluginframeworkObjectPartitionList" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_share_pluginframework

dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksSharePluginframeworkObjectPartitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition">DataDatabricksSharePluginframeworkObjectPartition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksSharePluginframeworkObjectPartition]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition">DataDatabricksSharePluginframeworkObjectPartition</a>]

---


### DataDatabricksSharePluginframeworkObjectPartitionOutputReference <a name="DataDatabricksSharePluginframeworkObjectPartitionOutputReference" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_share_pluginframework

dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value` <a name="put_value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.putValue"></a>

```python
def put_value(
  value: IResolvable | typing.List[DataDatabricksSharePluginframeworkObjectPartitionValue]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.putValue.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue">DataDatabricksSharePluginframeworkObjectPartitionValue</a>]

---

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList">DataDatabricksSharePluginframeworkObjectPartitionValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.valueInput">value_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue">DataDatabricksSharePluginframeworkObjectPartitionValue</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition">DataDatabricksSharePluginframeworkObjectPartition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.value"></a>

```python
value: DataDatabricksSharePluginframeworkObjectPartitionValueList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList">DataDatabricksSharePluginframeworkObjectPartitionValueList</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.valueInput"></a>

```python
value_input: IResolvable | typing.List[DataDatabricksSharePluginframeworkObjectPartitionValue]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue">DataDatabricksSharePluginframeworkObjectPartitionValue</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksSharePluginframeworkObjectPartition
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition">DataDatabricksSharePluginframeworkObjectPartition</a>

---


### DataDatabricksSharePluginframeworkObjectPartitionValueList <a name="DataDatabricksSharePluginframeworkObjectPartitionValueList" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_share_pluginframework

dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue">DataDatabricksSharePluginframeworkObjectPartitionValue</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksSharePluginframeworkObjectPartitionValue]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue">DataDatabricksSharePluginframeworkObjectPartitionValue</a>]

---


### DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference <a name="DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_share_pluginframework

dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetOp">reset_op</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetRecipientPropertyKey">reset_recipient_property_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_op` <a name="reset_op" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetOp"></a>

```python
def reset_op() -> None
```

##### `reset_recipient_property_key` <a name="reset_recipient_property_key" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetRecipientPropertyKey"></a>

```python
def reset_recipient_property_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.opInput">op_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKeyInput">recipient_property_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.op">op</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKey">recipient_property_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue">DataDatabricksSharePluginframeworkObjectPartitionValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `op_input`<sup>Optional</sup> <a name="op_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.opInput"></a>

```python
op_input: str
```

- *Type:* str

---

##### `recipient_property_key_input`<sup>Optional</sup> <a name="recipient_property_key_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKeyInput"></a>

```python
recipient_property_key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.op"></a>

```python
op: str
```

- *Type:* str

---

##### `recipient_property_key`<sup>Required</sup> <a name="recipient_property_key" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKey"></a>

```python
recipient_property_key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksSharePluginframeworkObjectPartitionValue
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue">DataDatabricksSharePluginframeworkObjectPartitionValue</a>

---



