# `dataDatabricksRegisteredModelVersions` Submodule <a name="`dataDatabricksRegisteredModelVersions` Submodule" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksRegisteredModelVersions <a name="DataDatabricksRegisteredModelVersions" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions databricks_registered_model_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions(
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
  model_versions: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersions]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#full_name DataDatabricksRegisteredModelVersions#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.modelVersions">model_versions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#model_versions DataDatabricksRegisteredModelVersions#model_versions}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.fullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#full_name DataDatabricksRegisteredModelVersions#full_name}.

---

##### `model_versions`<sup>Optional</sup> <a name="model_versions" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.modelVersions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#model_versions DataDatabricksRegisteredModelVersions#model_versions}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.putModelVersions">put_model_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.resetModelVersions">reset_model_versions</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_model_versions` <a name="put_model_versions" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.putModelVersions"></a>

```python
def put_model_versions(
  value: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.putModelVersions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>]]

---

##### `reset_model_versions` <a name="reset_model_versions" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.resetModelVersions"></a>

```python
def reset_model_versions() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksRegisteredModelVersions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksRegisteredModelVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksRegisteredModelVersions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksRegisteredModelVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksRegisteredModelVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.modelVersions">model_versions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList">DataDatabricksRegisteredModelVersionsModelVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.modelVersionsInput">model_versions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `model_versions`<sup>Required</sup> <a name="model_versions" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.modelVersions"></a>

```python
model_versions: DataDatabricksRegisteredModelVersionsModelVersionsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList">DataDatabricksRegisteredModelVersionsModelVersionsList</a>

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `model_versions_input`<sup>Optional</sup> <a name="model_versions_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.modelVersionsInput"></a>

```python
model_versions_input: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>]]

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksRegisteredModelVersionsConfig <a name="DataDatabricksRegisteredModelVersionsConfig" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  full_name: str,
  model_versions: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#full_name DataDatabricksRegisteredModelVersions#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.modelVersions">model_versions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#model_versions DataDatabricksRegisteredModelVersions#model_versions}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#full_name DataDatabricksRegisteredModelVersions#full_name}.

---

##### `model_versions`<sup>Optional</sup> <a name="model_versions" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.modelVersions"></a>

```python
model_versions: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#model_versions DataDatabricksRegisteredModelVersions#model_versions}.

---

### DataDatabricksRegisteredModelVersionsModelVersions <a name="DataDatabricksRegisteredModelVersionsModelVersions" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions(
  aliases: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsAliases]] = None,
  browse_only: typing.Union[bool, IResolvable] = None,
  catalog_name: str = None,
  comment: str = None,
  created_at: typing.Union[int, float] = None,
  created_by: str = None,
  id: str = None,
  metastore_id: str = None,
  model_name: str = None,
  model_version_dependencies: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies]] = None,
  run_id: str = None,
  run_workspace_id: typing.Union[int, float] = None,
  schema_name: str = None,
  source: str = None,
  status: str = None,
  storage_location: str = None,
  updated_at: typing.Union[int, float] = None,
  updated_by: str = None,
  version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.aliases">aliases</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#aliases DataDatabricksRegisteredModelVersions#aliases}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.browseOnly">browse_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#browse_only DataDatabricksRegisteredModelVersions#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#catalog_name DataDatabricksRegisteredModelVersions#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#comment DataDatabricksRegisteredModelVersions#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#created_at DataDatabricksRegisteredModelVersions#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#created_by DataDatabricksRegisteredModelVersions#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#id DataDatabricksRegisteredModelVersions#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#metastore_id DataDatabricksRegisteredModelVersions#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.modelName">model_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#model_name DataDatabricksRegisteredModelVersions#model_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.modelVersionDependencies">model_version_dependencies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#model_version_dependencies DataDatabricksRegisteredModelVersions#model_version_dependencies}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.runId">run_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#run_id DataDatabricksRegisteredModelVersions#run_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.runWorkspaceId">run_workspace_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#run_workspace_id DataDatabricksRegisteredModelVersions#run_workspace_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#schema_name DataDatabricksRegisteredModelVersions#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#source DataDatabricksRegisteredModelVersions#source}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#status DataDatabricksRegisteredModelVersions#status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.storageLocation">storage_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#storage_location DataDatabricksRegisteredModelVersions#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#updated_at DataDatabricksRegisteredModelVersions#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.updatedBy">updated_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#updated_by DataDatabricksRegisteredModelVersions#updated_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#version DataDatabricksRegisteredModelVersions#version}. |

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.aliases"></a>

```python
aliases: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsAliases]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#aliases DataDatabricksRegisteredModelVersions#aliases}.

---

##### `browse_only`<sup>Optional</sup> <a name="browse_only" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.browseOnly"></a>

```python
browse_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#browse_only DataDatabricksRegisteredModelVersions#browse_only}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#catalog_name DataDatabricksRegisteredModelVersions#catalog_name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#comment DataDatabricksRegisteredModelVersions#comment}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#created_at DataDatabricksRegisteredModelVersions#created_at}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#created_by DataDatabricksRegisteredModelVersions#created_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#id DataDatabricksRegisteredModelVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#metastore_id DataDatabricksRegisteredModelVersions#metastore_id}.

---

##### `model_name`<sup>Optional</sup> <a name="model_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#model_name DataDatabricksRegisteredModelVersions#model_name}.

---

##### `model_version_dependencies`<sup>Optional</sup> <a name="model_version_dependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.modelVersionDependencies"></a>

```python
model_version_dependencies: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#model_version_dependencies DataDatabricksRegisteredModelVersions#model_version_dependencies}.

---

##### `run_id`<sup>Optional</sup> <a name="run_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.runId"></a>

```python
run_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#run_id DataDatabricksRegisteredModelVersions#run_id}.

---

##### `run_workspace_id`<sup>Optional</sup> <a name="run_workspace_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.runWorkspaceId"></a>

```python
run_workspace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#run_workspace_id DataDatabricksRegisteredModelVersions#run_workspace_id}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#schema_name DataDatabricksRegisteredModelVersions#schema_name}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#source DataDatabricksRegisteredModelVersions#source}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#status DataDatabricksRegisteredModelVersions#status}.

---

##### `storage_location`<sup>Optional</sup> <a name="storage_location" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.storageLocation"></a>

```python
storage_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#storage_location DataDatabricksRegisteredModelVersions#storage_location}.

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#updated_at DataDatabricksRegisteredModelVersions#updated_at}.

---

##### `updated_by`<sup>Optional</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#updated_by DataDatabricksRegisteredModelVersions#updated_by}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#version DataDatabricksRegisteredModelVersions#version}.

---

### DataDatabricksRegisteredModelVersionsModelVersionsAliases <a name="DataDatabricksRegisteredModelVersionsModelVersionsAliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases(
  alias_name: str = None,
  version_num: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.aliasName">alias_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#alias_name DataDatabricksRegisteredModelVersions#alias_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.versionNum">version_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#version_num DataDatabricksRegisteredModelVersions#version_num}. |

---

##### `alias_name`<sup>Optional</sup> <a name="alias_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.aliasName"></a>

```python
alias_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#alias_name DataDatabricksRegisteredModelVersions#alias_name}.

---

##### `version_num`<sup>Optional</sup> <a name="version_num" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.versionNum"></a>

```python
version_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#version_num DataDatabricksRegisteredModelVersions#version_num}.

---

### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies(
  dependencies: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies.property.dependencies">dependencies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#dependencies DataDatabricksRegisteredModelVersions#dependencies}. |

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies.property.dependencies"></a>

```python
dependencies: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#dependencies DataDatabricksRegisteredModelVersions#dependencies}.

---

### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies(
  function: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction]] = None,
  table: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.function">function</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#function DataDatabricksRegisteredModelVersions#function}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.table">table</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#table DataDatabricksRegisteredModelVersions#table}. |

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.function"></a>

```python
function: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#function DataDatabricksRegisteredModelVersions#function}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.table"></a>

```python
table: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#table DataDatabricksRegisteredModelVersions#table}.

---

### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction(
  function_full_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction.property.functionFullName">function_full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#function_full_name DataDatabricksRegisteredModelVersions#function_full_name}. |

---

##### `function_full_name`<sup>Required</sup> <a name="function_full_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction.property.functionFullName"></a>

```python
function_full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#function_full_name DataDatabricksRegisteredModelVersions#function_full_name}.

---

### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable(
  table_full_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable.property.tableFullName">table_full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#table_full_name DataDatabricksRegisteredModelVersions#table_full_name}. |

---

##### `table_full_name`<sup>Required</sup> <a name="table_full_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable.property.tableFullName"></a>

```python
table_full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/registered_model_versions#table_full_name DataDatabricksRegisteredModelVersions#table_full_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksRegisteredModelVersionsModelVersionsAliasesList <a name="DataDatabricksRegisteredModelVersionsModelVersionsAliasesList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsAliases]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>]]

---


### DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetAliasName">reset_alias_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetVersionNum">reset_version_num</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alias_name` <a name="reset_alias_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetAliasName"></a>

```python
def reset_alias_name() -> None
```

##### `reset_version_num` <a name="reset_version_num" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetVersionNum"></a>

```python
def reset_version_num() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.aliasNameInput">alias_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.versionNumInput">version_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.aliasName">alias_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.versionNum">version_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_name_input`<sup>Optional</sup> <a name="alias_name_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.aliasNameInput"></a>

```python
alias_name_input: str
```

- *Type:* str

---

##### `version_num_input`<sup>Optional</sup> <a name="version_num_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.versionNumInput"></a>

```python
version_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alias_name`<sup>Required</sup> <a name="alias_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.aliasName"></a>

```python
alias_name: str
```

- *Type:* str

---

##### `version_num`<sup>Required</sup> <a name="version_num" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.versionNum"></a>

```python
version_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksRegisteredModelVersionsModelVersionsAliases]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>]

---


### DataDatabricksRegisteredModelVersionsModelVersionsList <a name="DataDatabricksRegisteredModelVersionsModelVersionsList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksRegisteredModelVersionsModelVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>]]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>]]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput">function_full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.functionFullName">function_full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_full_name_input`<sup>Optional</sup> <a name="function_full_name_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput"></a>

```python
function_full_name_input: str
```

- *Type:* str

---

##### `function_full_name`<sup>Required</sup> <a name="function_full_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.functionFullName"></a>

```python
function_full_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>]]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putFunction">put_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putTable">put_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetFunction">reset_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetTable">reset_table</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_function` <a name="put_function" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putFunction"></a>

```python
def put_function(
  value: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putFunction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>]]

---

##### `put_table` <a name="put_table" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putTable"></a>

```python
def put_table(
  value: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putTable.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>]]

---

##### `reset_function` <a name="reset_function" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetFunction"></a>

```python
def reset_function() -> None
```

##### `reset_table` <a name="reset_table" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetTable"></a>

```python
def reset_table() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.function">function</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.functionInput">function_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.tableInput">table_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.function"></a>

```python
function: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.table"></a>

```python
table: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList</a>

---

##### `function_input`<sup>Optional</sup> <a name="function_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.functionInput"></a>

```python
function_input: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>]]

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.tableInput"></a>

```python
table_input: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>]]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.tableFullNameInput">table_full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.tableFullName">table_full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `table_full_name_input`<sup>Optional</sup> <a name="table_full_name_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.tableFullNameInput"></a>

```python
table_full_name_input: str
```

- *Type:* str

---

##### `table_full_name`<sup>Required</sup> <a name="table_full_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.tableFullName"></a>

```python
table_full_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>]]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.putDependencies">put_dependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.resetDependencies">reset_dependencies</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dependencies` <a name="put_dependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.putDependencies"></a>

```python
def put_dependencies(
  value: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.putDependencies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>]]

---

##### `reset_dependencies` <a name="reset_dependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.resetDependencies"></a>

```python
def reset_dependencies() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.dependencies">dependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.dependenciesInput">dependencies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.dependencies"></a>

```python
dependencies: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList</a>

---

##### `dependencies_input`<sup>Optional</sup> <a name="dependencies_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.dependenciesInput"></a>

```python
dependencies_input: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>]

---


### DataDatabricksRegisteredModelVersionsModelVersionsOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_registered_model_versions

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.putAliases">put_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.putModelVersionDependencies">put_model_version_dependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetAliases">reset_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetBrowseOnly">reset_browse_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetCreatedAt">reset_created_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetCreatedBy">reset_created_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetMetastoreId">reset_metastore_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetModelName">reset_model_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetModelVersionDependencies">reset_model_version_dependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetRunId">reset_run_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetRunWorkspaceId">reset_run_workspace_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetStorageLocation">reset_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetUpdatedAt">reset_updated_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetUpdatedBy">reset_updated_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aliases` <a name="put_aliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.putAliases"></a>

```python
def put_aliases(
  value: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsAliases]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.putAliases.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>]]

---

##### `put_model_version_dependencies` <a name="put_model_version_dependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.putModelVersionDependencies"></a>

```python
def put_model_version_dependencies(
  value: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.putModelVersionDependencies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>]]

---

##### `reset_aliases` <a name="reset_aliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetAliases"></a>

```python
def reset_aliases() -> None
```

##### `reset_browse_only` <a name="reset_browse_only" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetBrowseOnly"></a>

```python
def reset_browse_only() -> None
```

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_created_at` <a name="reset_created_at" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetCreatedAt"></a>

```python
def reset_created_at() -> None
```

##### `reset_created_by` <a name="reset_created_by" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetCreatedBy"></a>

```python
def reset_created_by() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metastore_id` <a name="reset_metastore_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetMetastoreId"></a>

```python
def reset_metastore_id() -> None
```

##### `reset_model_name` <a name="reset_model_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetModelName"></a>

```python
def reset_model_name() -> None
```

##### `reset_model_version_dependencies` <a name="reset_model_version_dependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetModelVersionDependencies"></a>

```python
def reset_model_version_dependencies() -> None
```

##### `reset_run_id` <a name="reset_run_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetRunId"></a>

```python
def reset_run_id() -> None
```

##### `reset_run_workspace_id` <a name="reset_run_workspace_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetRunWorkspaceId"></a>

```python
def reset_run_workspace_id() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_storage_location` <a name="reset_storage_location" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetStorageLocation"></a>

```python
def reset_storage_location() -> None
```

##### `reset_updated_at` <a name="reset_updated_at" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetUpdatedAt"></a>

```python
def reset_updated_at() -> None
```

##### `reset_updated_by` <a name="reset_updated_by" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetUpdatedBy"></a>

```python
def reset_updated_by() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.aliases">aliases</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList">DataDatabricksRegisteredModelVersionsModelVersionsAliasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelVersionDependencies">model_version_dependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.aliasesInput">aliases_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.browseOnlyInput">browse_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdAtInput">created_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdByInput">created_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelNameInput">model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelVersionDependenciesInput">model_version_dependencies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runIdInput">run_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runWorkspaceIdInput">run_workspace_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.storageLocationInput">storage_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedAtInput">updated_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedByInput">updated_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.browseOnly">browse_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelName">model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runId">run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runWorkspaceId">run_workspace_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.storageLocation">storage_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.aliases"></a>

```python
aliases: DataDatabricksRegisteredModelVersionsModelVersionsAliasesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList">DataDatabricksRegisteredModelVersionsModelVersionsAliasesList</a>

---

##### `model_version_dependencies`<sup>Required</sup> <a name="model_version_dependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelVersionDependencies"></a>

```python
model_version_dependencies: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList</a>

---

##### `aliases_input`<sup>Optional</sup> <a name="aliases_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.aliasesInput"></a>

```python
aliases_input: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsAliases]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>]]

---

##### `browse_only_input`<sup>Optional</sup> <a name="browse_only_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.browseOnlyInput"></a>

```python
browse_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `created_at_input`<sup>Optional</sup> <a name="created_at_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdAtInput"></a>

```python
created_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by_input`<sup>Optional</sup> <a name="created_by_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdByInput"></a>

```python
created_by_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `model_name_input`<sup>Optional</sup> <a name="model_name_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelNameInput"></a>

```python
model_name_input: str
```

- *Type:* str

---

##### `model_version_dependencies_input`<sup>Optional</sup> <a name="model_version_dependencies_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelVersionDependenciesInput"></a>

```python
model_version_dependencies_input: typing.Union[IResolvable, typing.List[DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>]]

---

##### `run_id_input`<sup>Optional</sup> <a name="run_id_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runIdInput"></a>

```python
run_id_input: str
```

- *Type:* str

---

##### `run_workspace_id_input`<sup>Optional</sup> <a name="run_workspace_id_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runWorkspaceIdInput"></a>

```python
run_workspace_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `storage_location_input`<sup>Optional</sup> <a name="storage_location_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.storageLocationInput"></a>

```python
storage_location_input: str
```

- *Type:* str

---

##### `updated_at_input`<sup>Optional</sup> <a name="updated_at_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedAtInput"></a>

```python
updated_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by_input`<sup>Optional</sup> <a name="updated_by_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedByInput"></a>

```python
updated_by_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `browse_only`<sup>Required</sup> <a name="browse_only" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.browseOnly"></a>

```python
browse_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

---

##### `run_id`<sup>Required</sup> <a name="run_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runId"></a>

```python
run_id: str
```

- *Type:* str

---

##### `run_workspace_id`<sup>Required</sup> <a name="run_workspace_id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runWorkspaceId"></a>

```python
run_workspace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.storageLocation"></a>

```python
storage_location: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksRegisteredModelVersionsModelVersions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>]

---



