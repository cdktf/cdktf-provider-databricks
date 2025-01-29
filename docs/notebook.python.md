# `notebook` Submodule <a name="`notebook` Submodule" id="@cdktf/provider-databricks.notebook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Notebook <a name="Notebook" id="@cdktf/provider-databricks.notebook.Notebook"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook databricks_notebook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.notebook.Notebook.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import notebook

notebook.Notebook(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  path: str,
  content_base64: str = None,
  format: str = None,
  id: str = None,
  language: str = None,
  md5: str = None,
  object_id: typing.Union[int, float] = None,
  object_type: str = None,
  source: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#path Notebook#path}. |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.contentBase64">content_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#content_base64 Notebook#content_base64}. |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#format Notebook#format}. |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#id Notebook#id}. |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.language">language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#language Notebook#language}. |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.md5">md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#md5 Notebook#md5}. |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.objectId">object_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#object_id Notebook#object_id}. |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#object_type Notebook#object_type}. |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#source Notebook#source}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#path Notebook#path}.

---

##### `content_base64`<sup>Optional</sup> <a name="content_base64" id="@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.contentBase64"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#content_base64 Notebook#content_base64}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.format"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#format Notebook#format}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#id Notebook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.language"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#language Notebook#language}.

---

##### `md5`<sup>Optional</sup> <a name="md5" id="@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.md5"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#md5 Notebook#md5}.

---

##### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.objectId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#object_id Notebook#object_id}.

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.objectType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#object_type Notebook#object_type}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-databricks.notebook.Notebook.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#source Notebook#source}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.resetContentBase64">reset_content_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.resetLanguage">reset_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.resetMd5">reset_md5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.resetObjectId">reset_object_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.resetObjectType">reset_object_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.resetSource">reset_source</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.notebook.Notebook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.notebook.Notebook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.notebook.Notebook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.notebook.Notebook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.notebook.Notebook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.notebook.Notebook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.notebook.Notebook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.notebook.Notebook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.notebook.Notebook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.notebook.Notebook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.notebook.Notebook.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.notebook.Notebook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.notebook.Notebook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notebook.Notebook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.notebook.Notebook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notebook.Notebook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.notebook.Notebook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notebook.Notebook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.notebook.Notebook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notebook.Notebook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.notebook.Notebook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notebook.Notebook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.notebook.Notebook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notebook.Notebook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.notebook.Notebook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notebook.Notebook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.notebook.Notebook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notebook.Notebook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.notebook.Notebook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notebook.Notebook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.notebook.Notebook.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.notebook.Notebook.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.notebook.Notebook.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.notebook.Notebook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.notebook.Notebook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notebook.Notebook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.notebook.Notebook.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.notebook.Notebook.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.notebook.Notebook.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.notebook.Notebook.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.notebook.Notebook.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.notebook.Notebook.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.notebook.Notebook.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_content_base64` <a name="reset_content_base64" id="@cdktf/provider-databricks.notebook.Notebook.resetContentBase64"></a>

```python
def reset_content_base64() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktf/provider-databricks.notebook.Notebook.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.notebook.Notebook.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_language` <a name="reset_language" id="@cdktf/provider-databricks.notebook.Notebook.resetLanguage"></a>

```python
def reset_language() -> None
```

##### `reset_md5` <a name="reset_md5" id="@cdktf/provider-databricks.notebook.Notebook.resetMd5"></a>

```python
def reset_md5() -> None
```

##### `reset_object_id` <a name="reset_object_id" id="@cdktf/provider-databricks.notebook.Notebook.resetObjectId"></a>

```python
def reset_object_id() -> None
```

##### `reset_object_type` <a name="reset_object_type" id="@cdktf/provider-databricks.notebook.Notebook.resetObjectType"></a>

```python
def reset_object_type() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-databricks.notebook.Notebook.resetSource"></a>

```python
def reset_source() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Notebook resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.notebook.Notebook.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import notebook

notebook.Notebook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.notebook.Notebook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.notebook.Notebook.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import notebook

notebook.Notebook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.notebook.Notebook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.notebook.Notebook.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import notebook

notebook.Notebook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.notebook.Notebook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.notebook.Notebook.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import notebook

notebook.Notebook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Notebook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.notebook.Notebook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.notebook.Notebook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Notebook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.notebook.Notebook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Notebook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.notebook.Notebook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Notebook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.workspacePath">workspace_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.contentBase64Input">content_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.md5Input">md5_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.objectIdInput">object_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.contentBase64">content_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.md5">md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.objectId">object_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.source">source</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.notebook.Notebook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.notebook.Notebook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.notebook.Notebook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.notebook.Notebook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.notebook.Notebook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.notebook.Notebook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.notebook.Notebook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.notebook.Notebook.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.notebook.Notebook.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.notebook.Notebook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.notebook.Notebook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.notebook.Notebook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.notebook.Notebook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.notebook.Notebook.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.notebook.Notebook.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `workspace_path`<sup>Required</sup> <a name="workspace_path" id="@cdktf/provider-databricks.notebook.Notebook.property.workspacePath"></a>

```python
workspace_path: str
```

- *Type:* str

---

##### `content_base64_input`<sup>Optional</sup> <a name="content_base64_input" id="@cdktf/provider-databricks.notebook.Notebook.property.contentBase64Input"></a>

```python
content_base64_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-databricks.notebook.Notebook.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.notebook.Notebook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="@cdktf/provider-databricks.notebook.Notebook.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `md5_input`<sup>Optional</sup> <a name="md5_input" id="@cdktf/provider-databricks.notebook.Notebook.property.md5Input"></a>

```python
md5_input: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-databricks.notebook.Notebook.property.objectIdInput"></a>

```python
object_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktf/provider-databricks.notebook.Notebook.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-databricks.notebook.Notebook.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-databricks.notebook.Notebook.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `content_base64`<sup>Required</sup> <a name="content_base64" id="@cdktf/provider-databricks.notebook.Notebook.property.contentBase64"></a>

```python
content_base64: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-databricks.notebook.Notebook.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.notebook.Notebook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-databricks.notebook.Notebook.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `md5`<sup>Required</sup> <a name="md5" id="@cdktf/provider-databricks.notebook.Notebook.property.md5"></a>

```python
md5: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-databricks.notebook.Notebook.property.objectId"></a>

```python
object_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-databricks.notebook.Notebook.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.notebook.Notebook.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.notebook.Notebook.property.source"></a>

```python
source: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notebook.Notebook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.notebook.Notebook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NotebookConfig <a name="NotebookConfig" id="@cdktf/provider-databricks.notebook.NotebookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.notebook.NotebookConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import notebook

notebook.NotebookConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  path: str,
  content_base64: str = None,
  format: str = None,
  id: str = None,
  language: str = None,
  md5: str = None,
  object_id: typing.Union[int, float] = None,
  object_type: str = None,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notebook.NotebookConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.NotebookConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.NotebookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.NotebookConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.NotebookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.NotebookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.NotebookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notebook.NotebookConfig.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#path Notebook#path}. |
| <code><a href="#@cdktf/provider-databricks.notebook.NotebookConfig.property.contentBase64">content_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#content_base64 Notebook#content_base64}. |
| <code><a href="#@cdktf/provider-databricks.notebook.NotebookConfig.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#format Notebook#format}. |
| <code><a href="#@cdktf/provider-databricks.notebook.NotebookConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#id Notebook#id}. |
| <code><a href="#@cdktf/provider-databricks.notebook.NotebookConfig.property.language">language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#language Notebook#language}. |
| <code><a href="#@cdktf/provider-databricks.notebook.NotebookConfig.property.md5">md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#md5 Notebook#md5}. |
| <code><a href="#@cdktf/provider-databricks.notebook.NotebookConfig.property.objectId">object_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#object_id Notebook#object_id}. |
| <code><a href="#@cdktf/provider-databricks.notebook.NotebookConfig.property.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#object_type Notebook#object_type}. |
| <code><a href="#@cdktf/provider-databricks.notebook.NotebookConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#source Notebook#source}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.notebook.NotebookConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.notebook.NotebookConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.notebook.NotebookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.notebook.NotebookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.notebook.NotebookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.notebook.NotebookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.notebook.NotebookConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.notebook.NotebookConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#path Notebook#path}.

---

##### `content_base64`<sup>Optional</sup> <a name="content_base64" id="@cdktf/provider-databricks.notebook.NotebookConfig.property.contentBase64"></a>

```python
content_base64: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#content_base64 Notebook#content_base64}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-databricks.notebook.NotebookConfig.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#format Notebook#format}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.notebook.NotebookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#id Notebook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-databricks.notebook.NotebookConfig.property.language"></a>

```python
language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#language Notebook#language}.

---

##### `md5`<sup>Optional</sup> <a name="md5" id="@cdktf/provider-databricks.notebook.NotebookConfig.property.md5"></a>

```python
md5: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#md5 Notebook#md5}.

---

##### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-databricks.notebook.NotebookConfig.property.objectId"></a>

```python
object_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#object_id Notebook#object_id}.

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="@cdktf/provider-databricks.notebook.NotebookConfig.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#object_type Notebook#object_type}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-databricks.notebook.NotebookConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notebook#source Notebook#source}.

---



