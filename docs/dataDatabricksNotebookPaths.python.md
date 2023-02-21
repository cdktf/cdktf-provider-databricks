# `dataDatabricksNotebookPaths` Submodule <a name="`dataDatabricksNotebookPaths` Submodule" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksNotebookPaths <a name="DataDatabricksNotebookPaths" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths"></a>

Represents a {@link https://www.terraform.io/docs/providers/databricks/d/notebook_paths databricks_notebook_paths}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_notebook_paths

dataDatabricksNotebookPaths.DataDatabricksNotebookPaths(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  path: str,
  recursive: typing.Union[bool, IResolvable],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook_paths#path DataDatabricksNotebookPaths#path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.recursive">recursive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook_paths#recursive DataDatabricksNotebookPaths#recursive}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook_paths#id DataDatabricksNotebookPaths#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook_paths#path DataDatabricksNotebookPaths#path}.

---

##### `recursive`<sup>Required</sup> <a name="recursive" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.recursive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook_paths#recursive DataDatabricksNotebookPaths#recursive}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook_paths#id DataDatabricksNotebookPaths#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_notebook_paths

dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_notebook_paths

dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_notebook_paths

dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.notebookPathList">notebook_path_list</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList">DataDatabricksNotebookPathsNotebookPathListList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.recursiveInput">recursive_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.recursive">recursive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `notebook_path_list`<sup>Required</sup> <a name="notebook_path_list" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.notebookPathList"></a>

```python
notebook_path_list: DataDatabricksNotebookPathsNotebookPathListList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList">DataDatabricksNotebookPathsNotebookPathListList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `recursive_input`<sup>Optional</sup> <a name="recursive_input" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.recursiveInput"></a>

```python
recursive_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `recursive`<sup>Required</sup> <a name="recursive" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.recursive"></a>

```python
recursive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksNotebookPathsConfig <a name="DataDatabricksNotebookPathsConfig" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_notebook_paths

dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  path: str,
  recursive: typing.Union[bool, IResolvable],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook_paths#path DataDatabricksNotebookPaths#path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.recursive">recursive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook_paths#recursive DataDatabricksNotebookPaths#recursive}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook_paths#id DataDatabricksNotebookPaths#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook_paths#path DataDatabricksNotebookPaths#path}.

---

##### `recursive`<sup>Required</sup> <a name="recursive" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.recursive"></a>

```python
recursive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook_paths#recursive DataDatabricksNotebookPaths#recursive}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook_paths#id DataDatabricksNotebookPaths#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksNotebookPathsNotebookPathList <a name="DataDatabricksNotebookPathsNotebookPathList" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_notebook_paths

dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathList()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksNotebookPathsNotebookPathListList <a name="DataDatabricksNotebookPathsNotebookPathListList" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_notebook_paths

dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksNotebookPathsNotebookPathListOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatabricksNotebookPathsNotebookPathListOutputReference <a name="DataDatabricksNotebookPathsNotebookPathListOutputReference" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_notebook_paths

dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathList">DataDatabricksNotebookPathsNotebookPathList</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksNotebookPathsNotebookPathList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathList">DataDatabricksNotebookPathsNotebookPathList</a>

---


