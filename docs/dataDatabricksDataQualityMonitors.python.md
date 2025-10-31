# `dataDatabricksDataQualityMonitors` Submodule <a name="`dataDatabricksDataQualityMonitors` Submodule" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDataQualityMonitors <a name="DataDatabricksDataQualityMonitors" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors databricks_data_quality_monitors}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#page_size DataDatabricksDataQualityMonitors#page_size}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#page_size DataDatabricksDataQualityMonitors#page_size}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.resetPageSize">reset_page_size</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.resetPageSize"></a>

```python
def reset_page_size() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksDataQualityMonitors resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksDataQualityMonitors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksDataQualityMonitors to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksDataQualityMonitors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDataQualityMonitors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.monitors">monitors</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList">DataDatabricksDataQualityMonitorsMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `monitors`<sup>Required</sup> <a name="monitors" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.monitors"></a>

```python
monitors: DataDatabricksDataQualityMonitorsMonitorsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList">DataDatabricksDataQualityMonitorsMonitorsList</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDataQualityMonitorsConfig <a name="DataDatabricksDataQualityMonitorsConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#page_size DataDatabricksDataQualityMonitors#page_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#page_size DataDatabricksDataQualityMonitors#page_size}.

---

### DataDatabricksDataQualityMonitorsMonitors <a name="DataDatabricksDataQualityMonitorsMonitors" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors(
  object_id: str,
  object_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#object_id DataDatabricksDataQualityMonitors#object_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors.property.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#object_type DataDatabricksDataQualityMonitors#object_type}. |

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#object_id DataDatabricksDataQualityMonitors#object_id}.

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#object_type DataDatabricksDataQualityMonitors#object_type}.

---

### DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig <a name="DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig()
```


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig(
  output_schema_id: str,
  assets_dir: str = None,
  baseline_table_name: str = None,
  custom_metrics: IResolvable | typing.List[DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics] = None,
  inference_log: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog = None,
  notification_settings: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings = None,
  schedule: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule = None,
  skip_builtin_dashboard: bool | IResolvable = None,
  slicing_exprs: typing.List[str] = None,
  snapshot: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot = None,
  time_series: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries = None,
  warehouse_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.outputSchemaId">output_schema_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#output_schema_id DataDatabricksDataQualityMonitors#output_schema_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.assetsDir">assets_dir</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#assets_dir DataDatabricksDataQualityMonitors#assets_dir}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.baselineTableName">baseline_table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#baseline_table_name DataDatabricksDataQualityMonitors#baseline_table_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.customMetrics">custom_metrics</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#custom_metrics DataDatabricksDataQualityMonitors#custom_metrics}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.inferenceLog">inference_log</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#inference_log DataDatabricksDataQualityMonitors#inference_log}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.notificationSettings">notification_settings</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#notification_settings DataDatabricksDataQualityMonitors#notification_settings}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#schedule DataDatabricksDataQualityMonitors#schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.skipBuiltinDashboard">skip_builtin_dashboard</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#skip_builtin_dashboard DataDatabricksDataQualityMonitors#skip_builtin_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.slicingExprs">slicing_exprs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#slicing_exprs DataDatabricksDataQualityMonitors#slicing_exprs}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#snapshot DataDatabricksDataQualityMonitors#snapshot}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.timeSeries">time_series</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#time_series DataDatabricksDataQualityMonitors#time_series}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#warehouse_id DataDatabricksDataQualityMonitors#warehouse_id}. |

---

##### `output_schema_id`<sup>Required</sup> <a name="output_schema_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.outputSchemaId"></a>

```python
output_schema_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#output_schema_id DataDatabricksDataQualityMonitors#output_schema_id}.

---

##### `assets_dir`<sup>Optional</sup> <a name="assets_dir" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.assetsDir"></a>

```python
assets_dir: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#assets_dir DataDatabricksDataQualityMonitors#assets_dir}.

---

##### `baseline_table_name`<sup>Optional</sup> <a name="baseline_table_name" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.baselineTableName"></a>

```python
baseline_table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#baseline_table_name DataDatabricksDataQualityMonitors#baseline_table_name}.

---

##### `custom_metrics`<sup>Optional</sup> <a name="custom_metrics" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.customMetrics"></a>

```python
custom_metrics: IResolvable | typing.List[DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#custom_metrics DataDatabricksDataQualityMonitors#custom_metrics}.

---

##### `inference_log`<sup>Optional</sup> <a name="inference_log" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.inferenceLog"></a>

```python
inference_log: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#inference_log DataDatabricksDataQualityMonitors#inference_log}.

---

##### `notification_settings`<sup>Optional</sup> <a name="notification_settings" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.notificationSettings"></a>

```python
notification_settings: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#notification_settings DataDatabricksDataQualityMonitors#notification_settings}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.schedule"></a>

```python
schedule: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#schedule DataDatabricksDataQualityMonitors#schedule}.

---

##### `skip_builtin_dashboard`<sup>Optional</sup> <a name="skip_builtin_dashboard" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.skipBuiltinDashboard"></a>

```python
skip_builtin_dashboard: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#skip_builtin_dashboard DataDatabricksDataQualityMonitors#skip_builtin_dashboard}.

---

##### `slicing_exprs`<sup>Optional</sup> <a name="slicing_exprs" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.slicingExprs"></a>

```python
slicing_exprs: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#slicing_exprs DataDatabricksDataQualityMonitors#slicing_exprs}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.snapshot"></a>

```python
snapshot: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#snapshot DataDatabricksDataQualityMonitors#snapshot}.

---

##### `time_series`<sup>Optional</sup> <a name="time_series" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.timeSeries"></a>

```python
time_series: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#time_series DataDatabricksDataQualityMonitors#time_series}.

---

##### `warehouse_id`<sup>Optional</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#warehouse_id DataDatabricksDataQualityMonitors#warehouse_id}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics(
  definition: str,
  input_columns: typing.List[str],
  name: str,
  output_data_type: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.definition">definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#definition DataDatabricksDataQualityMonitors#definition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.inputColumns">input_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#input_columns DataDatabricksDataQualityMonitors#input_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#name DataDatabricksDataQualityMonitors#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.outputDataType">output_data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#output_data_type DataDatabricksDataQualityMonitors#output_data_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#type DataDatabricksDataQualityMonitors#type}. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.definition"></a>

```python
definition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#definition DataDatabricksDataQualityMonitors#definition}.

---

##### `input_columns`<sup>Required</sup> <a name="input_columns" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.inputColumns"></a>

```python
input_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#input_columns DataDatabricksDataQualityMonitors#input_columns}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#name DataDatabricksDataQualityMonitors#name}.

---

##### `output_data_type`<sup>Required</sup> <a name="output_data_type" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.outputDataType"></a>

```python
output_data_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#output_data_type DataDatabricksDataQualityMonitors#output_data_type}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#type DataDatabricksDataQualityMonitors#type}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog(
  granularities: typing.List[str],
  model_id_column: str,
  prediction_column: str,
  problem_type: str,
  timestamp_column: str,
  label_column: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.granularities">granularities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#granularities DataDatabricksDataQualityMonitors#granularities}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.modelIdColumn">model_id_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#model_id_column DataDatabricksDataQualityMonitors#model_id_column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.predictionColumn">prediction_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#prediction_column DataDatabricksDataQualityMonitors#prediction_column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.problemType">problem_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#problem_type DataDatabricksDataQualityMonitors#problem_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.timestampColumn">timestamp_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#timestamp_column DataDatabricksDataQualityMonitors#timestamp_column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.labelColumn">label_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#label_column DataDatabricksDataQualityMonitors#label_column}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.granularities"></a>

```python
granularities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#granularities DataDatabricksDataQualityMonitors#granularities}.

---

##### `model_id_column`<sup>Required</sup> <a name="model_id_column" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.modelIdColumn"></a>

```python
model_id_column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#model_id_column DataDatabricksDataQualityMonitors#model_id_column}.

---

##### `prediction_column`<sup>Required</sup> <a name="prediction_column" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.predictionColumn"></a>

```python
prediction_column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#prediction_column DataDatabricksDataQualityMonitors#prediction_column}.

---

##### `problem_type`<sup>Required</sup> <a name="problem_type" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.problemType"></a>

```python
problem_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#problem_type DataDatabricksDataQualityMonitors#problem_type}.

---

##### `timestamp_column`<sup>Required</sup> <a name="timestamp_column" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.timestampColumn"></a>

```python
timestamp_column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#timestamp_column DataDatabricksDataQualityMonitors#timestamp_column}.

---

##### `label_column`<sup>Optional</sup> <a name="label_column" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.labelColumn"></a>

```python
label_column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#label_column DataDatabricksDataQualityMonitors#label_column}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings(
  on_failure: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings.property.onFailure">on_failure</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#on_failure DataDatabricksDataQualityMonitors#on_failure}. |

---

##### `on_failure`<sup>Optional</sup> <a name="on_failure" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings.property.onFailure"></a>

```python
on_failure: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#on_failure DataDatabricksDataQualityMonitors#on_failure}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure(
  email_addresses: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#email_addresses DataDatabricksDataQualityMonitors#email_addresses}. |

---

##### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#email_addresses DataDatabricksDataQualityMonitors#email_addresses}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule(
  quartz_cron_expression: str,
  timezone_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule.property.quartzCronExpression">quartz_cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#quartz_cron_expression DataDatabricksDataQualityMonitors#quartz_cron_expression}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule.property.timezoneId">timezone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#timezone_id DataDatabricksDataQualityMonitors#timezone_id}. |

---

##### `quartz_cron_expression`<sup>Required</sup> <a name="quartz_cron_expression" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule.property.quartzCronExpression"></a>

```python
quartz_cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#quartz_cron_expression DataDatabricksDataQualityMonitors#quartz_cron_expression}.

---

##### `timezone_id`<sup>Required</sup> <a name="timezone_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule.property.timezoneId"></a>

```python
timezone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#timezone_id DataDatabricksDataQualityMonitors#timezone_id}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot()
```


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries(
  granularities: typing.List[str],
  timestamp_column: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries.property.granularities">granularities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#granularities DataDatabricksDataQualityMonitors#granularities}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries.property.timestampColumn">timestamp_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#timestamp_column DataDatabricksDataQualityMonitors#timestamp_column}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries.property.granularities"></a>

```python
granularities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#granularities DataDatabricksDataQualityMonitors#granularities}.

---

##### `timestamp_column`<sup>Required</sup> <a name="timestamp_column" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries.property.timestampColumn"></a>

```python
timestamp_column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#timestamp_column DataDatabricksDataQualityMonitors#timestamp_column}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig</a>

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics</a>]

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.definitionInput">definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.inputColumnsInput">input_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.outputDataTypeInput">output_data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.definition">definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.inputColumns">input_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.outputDataType">output_data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `definition_input`<sup>Optional</sup> <a name="definition_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.definitionInput"></a>

```python
definition_input: str
```

- *Type:* str

---

##### `input_columns_input`<sup>Optional</sup> <a name="input_columns_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.inputColumnsInput"></a>

```python
input_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `output_data_type_input`<sup>Optional</sup> <a name="output_data_type_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.outputDataTypeInput"></a>

```python
output_data_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.definition"></a>

```python
definition: str
```

- *Type:* str

---

##### `input_columns`<sup>Required</sup> <a name="input_columns" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.inputColumns"></a>

```python
input_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_data_type`<sup>Required</sup> <a name="output_data_type" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.outputDataType"></a>

```python
output_data_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics</a>

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.resetLabelColumn">reset_label_column</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_label_column` <a name="reset_label_column" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.resetLabelColumn"></a>

```python
def reset_label_column() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.granularitiesInput">granularities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.labelColumnInput">label_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.modelIdColumnInput">model_id_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.predictionColumnInput">prediction_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.problemTypeInput">problem_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.timestampColumnInput">timestamp_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.granularities">granularities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.labelColumn">label_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.modelIdColumn">model_id_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.predictionColumn">prediction_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.problemType">problem_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.timestampColumn">timestamp_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `granularities_input`<sup>Optional</sup> <a name="granularities_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.granularitiesInput"></a>

```python
granularities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `label_column_input`<sup>Optional</sup> <a name="label_column_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.labelColumnInput"></a>

```python
label_column_input: str
```

- *Type:* str

---

##### `model_id_column_input`<sup>Optional</sup> <a name="model_id_column_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.modelIdColumnInput"></a>

```python
model_id_column_input: str
```

- *Type:* str

---

##### `prediction_column_input`<sup>Optional</sup> <a name="prediction_column_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.predictionColumnInput"></a>

```python
prediction_column_input: str
```

- *Type:* str

---

##### `problem_type_input`<sup>Optional</sup> <a name="problem_type_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.problemTypeInput"></a>

```python
problem_type_input: str
```

- *Type:* str

---

##### `timestamp_column_input`<sup>Optional</sup> <a name="timestamp_column_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.timestampColumnInput"></a>

```python
timestamp_column_input: str
```

- *Type:* str

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.granularities"></a>

```python
granularities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `label_column`<sup>Required</sup> <a name="label_column" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.labelColumn"></a>

```python
label_column: str
```

- *Type:* str

---

##### `model_id_column`<sup>Required</sup> <a name="model_id_column" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.modelIdColumn"></a>

```python
model_id_column: str
```

- *Type:* str

---

##### `prediction_column`<sup>Required</sup> <a name="prediction_column" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.predictionColumn"></a>

```python
prediction_column: str
```

- *Type:* str

---

##### `problem_type`<sup>Required</sup> <a name="problem_type" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.problemType"></a>

```python
problem_type: str
```

- *Type:* str

---

##### `timestamp_column`<sup>Required</sup> <a name="timestamp_column" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.timestampColumn"></a>

```python
timestamp_column: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog</a>

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetEmailAddresses">reset_email_addresses</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email_addresses` <a name="reset_email_addresses" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetEmailAddresses"></a>

```python
def reset_email_addresses() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddressesInput">email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_addresses_input`<sup>Optional</sup> <a name="email_addresses_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddressesInput"></a>

```python
email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_addresses`<sup>Required</sup> <a name="email_addresses" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure</a>

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.putOnFailure">put_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.resetOnFailure">reset_on_failure</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_on_failure` <a name="put_on_failure" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.putOnFailure"></a>

```python
def put_on_failure(
  email_addresses: typing.List[str] = None
) -> None
```

###### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.putOnFailure.parameter.emailAddresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#email_addresses DataDatabricksDataQualityMonitors#email_addresses}.

---

##### `reset_on_failure` <a name="reset_on_failure" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.resetOnFailure"></a>

```python
def reset_on_failure() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.onFailure">on_failure</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.onFailureInput">on_failure_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_failure`<sup>Required</sup> <a name="on_failure" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.onFailure"></a>

```python
on_failure: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference</a>

---

##### `on_failure_input`<sup>Optional</sup> <a name="on_failure_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.onFailureInput"></a>

```python
on_failure_input: IResolvable | DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings</a>

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putCustomMetrics">put_custom_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putInferenceLog">put_inference_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putNotificationSettings">put_notification_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putSnapshot">put_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putTimeSeries">put_time_series</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetAssetsDir">reset_assets_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetBaselineTableName">reset_baseline_table_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetCustomMetrics">reset_custom_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetInferenceLog">reset_inference_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetNotificationSettings">reset_notification_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSkipBuiltinDashboard">reset_skip_builtin_dashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSlicingExprs">reset_slicing_exprs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSnapshot">reset_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetTimeSeries">reset_time_series</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetWarehouseId">reset_warehouse_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_metrics` <a name="put_custom_metrics" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putCustomMetrics"></a>

```python
def put_custom_metrics(
  value: IResolvable | typing.List[DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putCustomMetrics.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics</a>]

---

##### `put_inference_log` <a name="put_inference_log" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putInferenceLog"></a>

```python
def put_inference_log(
  granularities: typing.List[str],
  model_id_column: str,
  prediction_column: str,
  problem_type: str,
  timestamp_column: str,
  label_column: str = None
) -> None
```

###### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putInferenceLog.parameter.granularities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#granularities DataDatabricksDataQualityMonitors#granularities}.

---

###### `model_id_column`<sup>Required</sup> <a name="model_id_column" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putInferenceLog.parameter.modelIdColumn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#model_id_column DataDatabricksDataQualityMonitors#model_id_column}.

---

###### `prediction_column`<sup>Required</sup> <a name="prediction_column" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putInferenceLog.parameter.predictionColumn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#prediction_column DataDatabricksDataQualityMonitors#prediction_column}.

---

###### `problem_type`<sup>Required</sup> <a name="problem_type" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putInferenceLog.parameter.problemType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#problem_type DataDatabricksDataQualityMonitors#problem_type}.

---

###### `timestamp_column`<sup>Required</sup> <a name="timestamp_column" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putInferenceLog.parameter.timestampColumn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#timestamp_column DataDatabricksDataQualityMonitors#timestamp_column}.

---

###### `label_column`<sup>Optional</sup> <a name="label_column" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putInferenceLog.parameter.labelColumn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#label_column DataDatabricksDataQualityMonitors#label_column}.

---

##### `put_notification_settings` <a name="put_notification_settings" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putNotificationSettings"></a>

```python
def put_notification_settings(
  on_failure: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure = None
) -> None
```

###### `on_failure`<sup>Optional</sup> <a name="on_failure" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putNotificationSettings.parameter.onFailure"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#on_failure DataDatabricksDataQualityMonitors#on_failure}.

---

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putSchedule"></a>

```python
def put_schedule(
  quartz_cron_expression: str,
  timezone_id: str
) -> None
```

###### `quartz_cron_expression`<sup>Required</sup> <a name="quartz_cron_expression" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putSchedule.parameter.quartzCronExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#quartz_cron_expression DataDatabricksDataQualityMonitors#quartz_cron_expression}.

---

###### `timezone_id`<sup>Required</sup> <a name="timezone_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putSchedule.parameter.timezoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#timezone_id DataDatabricksDataQualityMonitors#timezone_id}.

---

##### `put_snapshot` <a name="put_snapshot" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putSnapshot"></a>

```python
def put_snapshot() -> None
```

##### `put_time_series` <a name="put_time_series" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putTimeSeries"></a>

```python
def put_time_series(
  granularities: typing.List[str],
  timestamp_column: str
) -> None
```

###### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putTimeSeries.parameter.granularities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#granularities DataDatabricksDataQualityMonitors#granularities}.

---

###### `timestamp_column`<sup>Required</sup> <a name="timestamp_column" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putTimeSeries.parameter.timestampColumn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/data_quality_monitors#timestamp_column DataDatabricksDataQualityMonitors#timestamp_column}.

---

##### `reset_assets_dir` <a name="reset_assets_dir" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetAssetsDir"></a>

```python
def reset_assets_dir() -> None
```

##### `reset_baseline_table_name` <a name="reset_baseline_table_name" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetBaselineTableName"></a>

```python
def reset_baseline_table_name() -> None
```

##### `reset_custom_metrics` <a name="reset_custom_metrics" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetCustomMetrics"></a>

```python
def reset_custom_metrics() -> None
```

##### `reset_inference_log` <a name="reset_inference_log" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetInferenceLog"></a>

```python
def reset_inference_log() -> None
```

##### `reset_notification_settings` <a name="reset_notification_settings" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetNotificationSettings"></a>

```python
def reset_notification_settings() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_skip_builtin_dashboard` <a name="reset_skip_builtin_dashboard" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSkipBuiltinDashboard"></a>

```python
def reset_skip_builtin_dashboard() -> None
```

##### `reset_slicing_exprs` <a name="reset_slicing_exprs" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSlicingExprs"></a>

```python
def reset_slicing_exprs() -> None
```

##### `reset_snapshot` <a name="reset_snapshot" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSnapshot"></a>

```python
def reset_snapshot() -> None
```

##### `reset_time_series` <a name="reset_time_series" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetTimeSeries"></a>

```python
def reset_time_series() -> None
```

##### `reset_warehouse_id` <a name="reset_warehouse_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetWarehouseId"></a>

```python
def reset_warehouse_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.customMetrics">custom_metrics</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.dashboardId">dashboard_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.driftMetricsTableName">drift_metrics_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.effectiveWarehouseId">effective_warehouse_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.inferenceLog">inference_log</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.latestMonitorFailureMessage">latest_monitor_failure_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.monitoredTableName">monitored_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.monitorVersion">monitor_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.notificationSettings">notification_settings</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.profileMetricsTableName">profile_metrics_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.timeSeries">time_series</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.assetsDirInput">assets_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.baselineTableNameInput">baseline_table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.customMetricsInput">custom_metrics_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.inferenceLogInput">inference_log_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.notificationSettingsInput">notification_settings_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.outputSchemaIdInput">output_schema_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.scheduleInput">schedule_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.skipBuiltinDashboardInput">skip_builtin_dashboard_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.slicingExprsInput">slicing_exprs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.snapshotInput">snapshot_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.timeSeriesInput">time_series_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.warehouseIdInput">warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.assetsDir">assets_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.baselineTableName">baseline_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.outputSchemaId">output_schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.skipBuiltinDashboard">skip_builtin_dashboard</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.slicingExprs">slicing_exprs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_metrics`<sup>Required</sup> <a name="custom_metrics" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.customMetrics"></a>

```python
custom_metrics: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList</a>

---

##### `dashboard_id`<sup>Required</sup> <a name="dashboard_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.dashboardId"></a>

```python
dashboard_id: str
```

- *Type:* str

---

##### `drift_metrics_table_name`<sup>Required</sup> <a name="drift_metrics_table_name" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.driftMetricsTableName"></a>

```python
drift_metrics_table_name: str
```

- *Type:* str

---

##### `effective_warehouse_id`<sup>Required</sup> <a name="effective_warehouse_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.effectiveWarehouseId"></a>

```python
effective_warehouse_id: str
```

- *Type:* str

---

##### `inference_log`<sup>Required</sup> <a name="inference_log" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.inferenceLog"></a>

```python
inference_log: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference</a>

---

##### `latest_monitor_failure_message`<sup>Required</sup> <a name="latest_monitor_failure_message" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.latestMonitorFailureMessage"></a>

```python
latest_monitor_failure_message: str
```

- *Type:* str

---

##### `monitored_table_name`<sup>Required</sup> <a name="monitored_table_name" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.monitoredTableName"></a>

```python
monitored_table_name: str
```

- *Type:* str

---

##### `monitor_version`<sup>Required</sup> <a name="monitor_version" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.monitorVersion"></a>

```python
monitor_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notification_settings`<sup>Required</sup> <a name="notification_settings" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.notificationSettings"></a>

```python
notification_settings: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference</a>

---

##### `profile_metrics_table_name`<sup>Required</sup> <a name="profile_metrics_table_name" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.profileMetricsTableName"></a>

```python
profile_metrics_table_name: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.schedule"></a>

```python
schedule: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference</a>

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.snapshot"></a>

```python
snapshot: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_series`<sup>Required</sup> <a name="time_series" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.timeSeries"></a>

```python
time_series: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference</a>

---

##### `assets_dir_input`<sup>Optional</sup> <a name="assets_dir_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.assetsDirInput"></a>

```python
assets_dir_input: str
```

- *Type:* str

---

##### `baseline_table_name_input`<sup>Optional</sup> <a name="baseline_table_name_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.baselineTableNameInput"></a>

```python
baseline_table_name_input: str
```

- *Type:* str

---

##### `custom_metrics_input`<sup>Optional</sup> <a name="custom_metrics_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.customMetricsInput"></a>

```python
custom_metrics_input: IResolvable | typing.List[DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics</a>]

---

##### `inference_log_input`<sup>Optional</sup> <a name="inference_log_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.inferenceLogInput"></a>

```python
inference_log_input: IResolvable | DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog</a>

---

##### `notification_settings_input`<sup>Optional</sup> <a name="notification_settings_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.notificationSettingsInput"></a>

```python
notification_settings_input: IResolvable | DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings</a>

---

##### `output_schema_id_input`<sup>Optional</sup> <a name="output_schema_id_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.outputSchemaIdInput"></a>

```python
output_schema_id_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.scheduleInput"></a>

```python
schedule_input: IResolvable | DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule</a>

---

##### `skip_builtin_dashboard_input`<sup>Optional</sup> <a name="skip_builtin_dashboard_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.skipBuiltinDashboardInput"></a>

```python
skip_builtin_dashboard_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `slicing_exprs_input`<sup>Optional</sup> <a name="slicing_exprs_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.slicingExprsInput"></a>

```python
slicing_exprs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_input`<sup>Optional</sup> <a name="snapshot_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.snapshotInput"></a>

```python
snapshot_input: IResolvable | DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot</a>

---

##### `time_series_input`<sup>Optional</sup> <a name="time_series_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.timeSeriesInput"></a>

```python
time_series_input: IResolvable | DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries</a>

---

##### `warehouse_id_input`<sup>Optional</sup> <a name="warehouse_id_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.warehouseIdInput"></a>

```python
warehouse_id_input: str
```

- *Type:* str

---

##### `assets_dir`<sup>Required</sup> <a name="assets_dir" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.assetsDir"></a>

```python
assets_dir: str
```

- *Type:* str

---

##### `baseline_table_name`<sup>Required</sup> <a name="baseline_table_name" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.baselineTableName"></a>

```python
baseline_table_name: str
```

- *Type:* str

---

##### `output_schema_id`<sup>Required</sup> <a name="output_schema_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.outputSchemaId"></a>

```python
output_schema_id: str
```

- *Type:* str

---

##### `skip_builtin_dashboard`<sup>Required</sup> <a name="skip_builtin_dashboard" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.skipBuiltinDashboard"></a>

```python
skip_builtin_dashboard: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `slicing_exprs`<sup>Required</sup> <a name="slicing_exprs" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.slicingExprs"></a>

```python
slicing_exprs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig</a>

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.pauseStatus">pause_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.quartzCronExpressionInput">quartz_cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.timezoneIdInput">timezone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.quartzCronExpression">quartz_cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.timezoneId">timezone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pause_status`<sup>Required</sup> <a name="pause_status" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.pauseStatus"></a>

```python
pause_status: str
```

- *Type:* str

---

##### `quartz_cron_expression_input`<sup>Optional</sup> <a name="quartz_cron_expression_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.quartzCronExpressionInput"></a>

```python
quartz_cron_expression_input: str
```

- *Type:* str

---

##### `timezone_id_input`<sup>Optional</sup> <a name="timezone_id_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.timezoneIdInput"></a>

```python
timezone_id_input: str
```

- *Type:* str

---

##### `quartz_cron_expression`<sup>Required</sup> <a name="quartz_cron_expression" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.quartzCronExpression"></a>

```python
quartz_cron_expression: str
```

- *Type:* str

---

##### `timezone_id`<sup>Required</sup> <a name="timezone_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.timezoneId"></a>

```python
timezone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule</a>

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot</a>

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.granularitiesInput">granularities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.timestampColumnInput">timestamp_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.granularities">granularities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.timestampColumn">timestamp_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `granularities_input`<sup>Optional</sup> <a name="granularities_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.granularitiesInput"></a>

```python
granularities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timestamp_column_input`<sup>Optional</sup> <a name="timestamp_column_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.timestampColumnInput"></a>

```python
timestamp_column_input: str
```

- *Type:* str

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.granularities"></a>

```python
granularities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timestamp_column`<sup>Required</sup> <a name="timestamp_column" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.timestampColumn"></a>

```python
timestamp_column: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries</a>

---


### DataDatabricksDataQualityMonitorsMonitorsList <a name="DataDatabricksDataQualityMonitorsMonitorsList" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDataQualityMonitorsMonitorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors">DataDatabricksDataQualityMonitorsMonitors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksDataQualityMonitorsMonitors]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors">DataDatabricksDataQualityMonitorsMonitors</a>]

---


### DataDatabricksDataQualityMonitorsMonitorsOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_monitors

dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.anomalyDetectionConfig">anomaly_detection_config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.dataProfilingConfig">data_profiling_config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors">DataDatabricksDataQualityMonitorsMonitors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `anomaly_detection_config`<sup>Required</sup> <a name="anomaly_detection_config" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.anomalyDetectionConfig"></a>

```python
anomaly_detection_config: DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference</a>

---

##### `data_profiling_config`<sup>Required</sup> <a name="data_profiling_config" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.dataProfilingConfig"></a>

```python
data_profiling_config: DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference</a>

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDataQualityMonitorsMonitors
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors">DataDatabricksDataQualityMonitorsMonitors</a>

---



