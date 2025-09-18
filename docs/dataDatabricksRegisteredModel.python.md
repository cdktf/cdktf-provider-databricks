# `dataDatabricksRegisteredModel` Submodule <a name="`dataDatabricksRegisteredModel` Submodule" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksRegisteredModel <a name="DataDatabricksRegisteredModel" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model databricks_registered_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model

dataDatabricksRegisteredModel.DataDatabricksRegisteredModel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  full_name: str,
  include_aliases: typing.Union[bool, IResolvable] = None,
  include_browse: typing.Union[bool, IResolvable] = None,
  model_info: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelModelInfo]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#full_name DataDatabricksRegisteredModel#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.includeAliases">include_aliases</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#include_aliases DataDatabricksRegisteredModel#include_aliases}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.includeBrowse">include_browse</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#include_browse DataDatabricksRegisteredModel#include_browse}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.modelInfo">model_info</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#model_info DataDatabricksRegisteredModel#model_info}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.fullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#full_name DataDatabricksRegisteredModel#full_name}.

---

##### `include_aliases`<sup>Optional</sup> <a name="include_aliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.includeAliases"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#include_aliases DataDatabricksRegisteredModel#include_aliases}.

---

##### `include_browse`<sup>Optional</sup> <a name="include_browse" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.includeBrowse"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#include_browse DataDatabricksRegisteredModel#include_browse}.

---

##### `model_info`<sup>Optional</sup> <a name="model_info" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.Initializer.parameter.modelInfo"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#model_info DataDatabricksRegisteredModel#model_info}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.putModelInfo">put_model_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.resetIncludeAliases">reset_include_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.resetIncludeBrowse">reset_include_browse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.resetModelInfo">reset_model_info</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_model_info` <a name="put_model_info" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.putModelInfo"></a>

```python
def put_model_info(
  value: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelModelInfo]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.putModelInfo.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>]]

---

##### `reset_include_aliases` <a name="reset_include_aliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.resetIncludeAliases"></a>

```python
def reset_include_aliases() -> None
```

##### `reset_include_browse` <a name="reset_include_browse" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.resetIncludeBrowse"></a>

```python
def reset_include_browse() -> None
```

##### `reset_model_info` <a name="reset_model_info" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.resetModelInfo"></a>

```python
def reset_model_info() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksRegisteredModel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model

dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model

dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model

dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model

dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksRegisteredModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksRegisteredModel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksRegisteredModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksRegisteredModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.modelInfo">model_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList">DataDatabricksRegisteredModelModelInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.includeAliasesInput">include_aliases_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.includeBrowseInput">include_browse_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.modelInfoInput">model_info_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.includeAliases">include_aliases</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.includeBrowse">include_browse</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `model_info`<sup>Required</sup> <a name="model_info" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.modelInfo"></a>

```python
model_info: DataDatabricksRegisteredModelModelInfoList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList">DataDatabricksRegisteredModelModelInfoList</a>

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `include_aliases_input`<sup>Optional</sup> <a name="include_aliases_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.includeAliasesInput"></a>

```python
include_aliases_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_browse_input`<sup>Optional</sup> <a name="include_browse_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.includeBrowseInput"></a>

```python
include_browse_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `model_info_input`<sup>Optional</sup> <a name="model_info_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.modelInfoInput"></a>

```python
model_info_input: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelModelInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>]]

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `include_aliases`<sup>Required</sup> <a name="include_aliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.includeAliases"></a>

```python
include_aliases: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_browse`<sup>Required</sup> <a name="include_browse" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.includeBrowse"></a>

```python
include_browse: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksRegisteredModelConfig <a name="DataDatabricksRegisteredModelConfig" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model

dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  full_name: str,
  include_aliases: typing.Union[bool, IResolvable] = None,
  include_browse: typing.Union[bool, IResolvable] = None,
  model_info: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelModelInfo]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#full_name DataDatabricksRegisteredModel#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.includeAliases">include_aliases</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#include_aliases DataDatabricksRegisteredModel#include_aliases}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.includeBrowse">include_browse</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#include_browse DataDatabricksRegisteredModel#include_browse}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.modelInfo">model_info</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#model_info DataDatabricksRegisteredModel#model_info}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#full_name DataDatabricksRegisteredModel#full_name}.

---

##### `include_aliases`<sup>Optional</sup> <a name="include_aliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.includeAliases"></a>

```python
include_aliases: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#include_aliases DataDatabricksRegisteredModel#include_aliases}.

---

##### `include_browse`<sup>Optional</sup> <a name="include_browse" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.includeBrowse"></a>

```python
include_browse: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#include_browse DataDatabricksRegisteredModel#include_browse}.

---

##### `model_info`<sup>Optional</sup> <a name="model_info" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelConfig.property.modelInfo"></a>

```python
model_info: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelModelInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#model_info DataDatabricksRegisteredModel#model_info}.

---

### DataDatabricksRegisteredModelModelInfo <a name="DataDatabricksRegisteredModelModelInfo" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model

dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo(
  aliases: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelModelInfoAliases]] = None,
  browse_only: typing.Union[bool, IResolvable] = None,
  catalog_name: str = None,
  comment: str = None,
  created_at: typing.Union[int, float] = None,
  created_by: str = None,
  full_name: str = None,
  metastore_id: str = None,
  name: str = None,
  owner: str = None,
  schema_name: str = None,
  storage_location: str = None,
  updated_at: typing.Union[int, float] = None,
  updated_by: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.aliases">aliases</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases">DataDatabricksRegisteredModelModelInfoAliases</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#aliases DataDatabricksRegisteredModel#aliases}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.browseOnly">browse_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#browse_only DataDatabricksRegisteredModel#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#catalog_name DataDatabricksRegisteredModel#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#comment DataDatabricksRegisteredModel#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#created_at DataDatabricksRegisteredModel#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#created_by DataDatabricksRegisteredModel#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#full_name DataDatabricksRegisteredModel#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#metastore_id DataDatabricksRegisteredModel#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#name DataDatabricksRegisteredModel#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#owner DataDatabricksRegisteredModel#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#schema_name DataDatabricksRegisteredModel#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.storageLocation">storage_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#storage_location DataDatabricksRegisteredModel#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#updated_at DataDatabricksRegisteredModel#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.updatedBy">updated_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#updated_by DataDatabricksRegisteredModel#updated_by}. |

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.aliases"></a>

```python
aliases: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelModelInfoAliases]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases">DataDatabricksRegisteredModelModelInfoAliases</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#aliases DataDatabricksRegisteredModel#aliases}.

---

##### `browse_only`<sup>Optional</sup> <a name="browse_only" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.browseOnly"></a>

```python
browse_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#browse_only DataDatabricksRegisteredModel#browse_only}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#catalog_name DataDatabricksRegisteredModel#catalog_name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#comment DataDatabricksRegisteredModel#comment}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#created_at DataDatabricksRegisteredModel#created_at}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#created_by DataDatabricksRegisteredModel#created_by}.

---

##### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#full_name DataDatabricksRegisteredModel#full_name}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#metastore_id DataDatabricksRegisteredModel#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#name DataDatabricksRegisteredModel#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#owner DataDatabricksRegisteredModel#owner}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#schema_name DataDatabricksRegisteredModel#schema_name}.

---

##### `storage_location`<sup>Optional</sup> <a name="storage_location" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.storageLocation"></a>

```python
storage_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#storage_location DataDatabricksRegisteredModel#storage_location}.

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#updated_at DataDatabricksRegisteredModel#updated_at}.

---

##### `updated_by`<sup>Optional</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#updated_by DataDatabricksRegisteredModel#updated_by}.

---

### DataDatabricksRegisteredModelModelInfoAliases <a name="DataDatabricksRegisteredModelModelInfoAliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model

dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases(
  alias_name: str = None,
  version_num: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases.property.aliasName">alias_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#alias_name DataDatabricksRegisteredModel#alias_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases.property.versionNum">version_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#version_num DataDatabricksRegisteredModel#version_num}. |

---

##### `alias_name`<sup>Optional</sup> <a name="alias_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases.property.aliasName"></a>

```python
alias_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#alias_name DataDatabricksRegisteredModel#alias_name}.

---

##### `version_num`<sup>Optional</sup> <a name="version_num" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases.property.versionNum"></a>

```python
version_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/registered_model#version_num DataDatabricksRegisteredModel#version_num}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksRegisteredModelModelInfoAliasesList <a name="DataDatabricksRegisteredModelModelInfoAliasesList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model

dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksRegisteredModelModelInfoAliasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases">DataDatabricksRegisteredModelModelInfoAliases</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelModelInfoAliases]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases">DataDatabricksRegisteredModelModelInfoAliases</a>]]

---


### DataDatabricksRegisteredModelModelInfoAliasesOutputReference <a name="DataDatabricksRegisteredModelModelInfoAliasesOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model

dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.resetAliasName">reset_alias_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.resetVersionNum">reset_version_num</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alias_name` <a name="reset_alias_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.resetAliasName"></a>

```python
def reset_alias_name() -> None
```

##### `reset_version_num` <a name="reset_version_num" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.resetVersionNum"></a>

```python
def reset_version_num() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.aliasNameInput">alias_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.versionNumInput">version_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.aliasName">alias_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.versionNum">version_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases">DataDatabricksRegisteredModelModelInfoAliases</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_name_input`<sup>Optional</sup> <a name="alias_name_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.aliasNameInput"></a>

```python
alias_name_input: str
```

- *Type:* str

---

##### `version_num_input`<sup>Optional</sup> <a name="version_num_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.versionNumInput"></a>

```python
version_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alias_name`<sup>Required</sup> <a name="alias_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.aliasName"></a>

```python
alias_name: str
```

- *Type:* str

---

##### `version_num`<sup>Required</sup> <a name="version_num" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.versionNum"></a>

```python
version_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksRegisteredModelModelInfoAliases]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases">DataDatabricksRegisteredModelModelInfoAliases</a>]

---


### DataDatabricksRegisteredModelModelInfoList <a name="DataDatabricksRegisteredModelModelInfoList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model

dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksRegisteredModelModelInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelModelInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>]]

---


### DataDatabricksRegisteredModelModelInfoOutputReference <a name="DataDatabricksRegisteredModelModelInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model

dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.putAliases">put_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetAliases">reset_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetBrowseOnly">reset_browse_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetCreatedAt">reset_created_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetCreatedBy">reset_created_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetFullName">reset_full_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetMetastoreId">reset_metastore_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetStorageLocation">reset_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetUpdatedAt">reset_updated_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetUpdatedBy">reset_updated_by</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aliases` <a name="put_aliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.putAliases"></a>

```python
def put_aliases(
  value: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelModelInfoAliases]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.putAliases.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases">DataDatabricksRegisteredModelModelInfoAliases</a>]]

---

##### `reset_aliases` <a name="reset_aliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetAliases"></a>

```python
def reset_aliases() -> None
```

##### `reset_browse_only` <a name="reset_browse_only" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetBrowseOnly"></a>

```python
def reset_browse_only() -> None
```

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_created_at` <a name="reset_created_at" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetCreatedAt"></a>

```python
def reset_created_at() -> None
```

##### `reset_created_by` <a name="reset_created_by" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetCreatedBy"></a>

```python
def reset_created_by() -> None
```

##### `reset_full_name` <a name="reset_full_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetFullName"></a>

```python
def reset_full_name() -> None
```

##### `reset_metastore_id` <a name="reset_metastore_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetMetastoreId"></a>

```python
def reset_metastore_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

##### `reset_storage_location` <a name="reset_storage_location" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetStorageLocation"></a>

```python
def reset_storage_location() -> None
```

##### `reset_updated_at` <a name="reset_updated_at" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetUpdatedAt"></a>

```python
def reset_updated_at() -> None
```

##### `reset_updated_by` <a name="reset_updated_by" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.resetUpdatedBy"></a>

```python
def reset_updated_by() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.aliases">aliases</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList">DataDatabricksRegisteredModelModelInfoAliasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.aliasesInput">aliases_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases">DataDatabricksRegisteredModelModelInfoAliases</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.browseOnlyInput">browse_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.createdAtInput">created_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.createdByInput">created_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.storageLocationInput">storage_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.updatedAtInput">updated_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.updatedByInput">updated_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.browseOnly">browse_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.storageLocation">storage_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.aliases"></a>

```python
aliases: DataDatabricksRegisteredModelModelInfoAliasesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliasesList">DataDatabricksRegisteredModelModelInfoAliasesList</a>

---

##### `aliases_input`<sup>Optional</sup> <a name="aliases_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.aliasesInput"></a>

```python
aliases_input: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelModelInfoAliases]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoAliases">DataDatabricksRegisteredModelModelInfoAliases</a>]]

---

##### `browse_only_input`<sup>Optional</sup> <a name="browse_only_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.browseOnlyInput"></a>

```python
browse_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `created_at_input`<sup>Optional</sup> <a name="created_at_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.createdAtInput"></a>

```python
created_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by_input`<sup>Optional</sup> <a name="created_by_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.createdByInput"></a>

```python
created_by_input: str
```

- *Type:* str

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `storage_location_input`<sup>Optional</sup> <a name="storage_location_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.storageLocationInput"></a>

```python
storage_location_input: str
```

- *Type:* str

---

##### `updated_at_input`<sup>Optional</sup> <a name="updated_at_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.updatedAtInput"></a>

```python
updated_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by_input`<sup>Optional</sup> <a name="updated_by_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.updatedByInput"></a>

```python
updated_by_input: str
```

- *Type:* str

---

##### `browse_only`<sup>Required</sup> <a name="browse_only" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.browseOnly"></a>

```python
browse_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.storageLocation"></a>

```python
storage_location: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfoOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksRegisteredModelModelInfo]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModel.DataDatabricksRegisteredModelModelInfo">DataDatabricksRegisteredModelModelInfo</a>]

---



